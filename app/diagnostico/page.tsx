"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, MessageSquare, TrendingDown, Clock, Zap, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { LanguageToggle } from "@/components/ui/language-toggle";
import type { Translations } from "@/app/i18n/translations";

/* ======================== DATA (structure/scoring only) ========================
   Question/option TEXT comes from the translation dictionary
   (t.diagnostico.steps[stepId].fields[fieldId]) — see buildSteps() below.
   This local table only holds the language-independent shape: ids, input
   type and the score weight ('s') used by calcResults(). */
const STEPS_META = [
  {
    id: "perfil",
    fields: [
      { id: "ingresos", type: "single" as const, options: [{ v: "a", s: 1 }, { v: "b", s: 2 }, { v: "c", s: 3 }, { v: "d", s: 4 }] },
      { id: "equipo", type: "single" as const, options: [{ v: "a", s: 1 }, { v: "b", s: 2 }, { v: "c", s: 3 }, { v: "d", s: 4 }] },
      { id: "bloqueo", type: "single" as const, options: [{ v: "a", s: 3 }, { v: "b", s: 4 }, { v: "c", s: 3 }, { v: "d", s: 3 }] },
    ],
  },
  {
    id: "operaciones",
    fields: [
      { id: "dependencia", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }] },
      { id: "horas_tareas", type: "single" as const, options: [{ v: "a", s: 1 }, { v: "b", s: 2 }, { v: "c", s: 3 }, { v: "d", s: 4 }] },
      { id: "colapso", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }] },
      { id: "manual", type: "multi" as const, options: [{ v: "a", s: 3 }, { v: "b", s: 3 }, { v: "c", s: 4 }, { v: "d", s: 3 }, { v: "e", s: 3 }] },
    ],
  },
  {
    id: "ventas",
    fields: [
      { id: "respuesta_leads", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 0 }] },
      { id: "sin_seguimiento", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }] },
      { id: "donde_pierde", type: "multi" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 3 }, { v: "d", s: 3 }, { v: "e", s: 2 }] },
      { id: "ventas_potenciales", type: "single" as const, options: [{ v: "a", s: 1 }, { v: "b", s: 2 }, { v: "c", s: 3 }, { v: "d", s: 4 }] },
    ],
  },
  {
    id: "marketing",
    fields: [
      { id: "horas_contenido", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }] },
      { id: "reusa_contenido", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }] },
      { id: "canales_rentables", type: "multi" as const, options: [{ v: "a", s: 3 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }, { v: "e", s: 4 }] },
    ],
  },
  {
    id: "soporte",
    fields: [
      { id: "preguntas_repetidas", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }] },
      { id: "tiempo_soporte", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }] },
      { id: "automatizable", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }] },
    ],
  },
  {
    id: "fundador",
    fields: [
      { id: "horas_operacion", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }] },
      { id: "sin_datos", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }] },
    ],
  },
  {
    id: "urgencia",
    fields: [
      { id: "urgencia", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }] },
      { id: "presupuesto", type: "single" as const, options: [{ v: "a", s: 1 }, { v: "b", s: 2 }, { v: "c", s: 3 }, { v: "d", s: 4 }] },
      { id: "implementar", type: "single" as const, options: [{ v: "a", s: 4 }, { v: "b", s: 3 }, { v: "c", s: 2 }, { v: "d", s: 1 }] },
    ],
  },
];

type StepId = keyof Translations["diagnostico"]["steps"];

/* Merge STEPS_META (structure + scores) with translated question/option text. */
function buildSteps(t: Translations) {
  return STEPS_META.map((step) => {
    const stepText = t.diagnostico.steps[step.id as StepId];
    return {
      id: step.id,
      title: stepText.title,
      subtitle: stepText.subtitle,
      fields: step.fields.map((field) => {
        const fieldText = stepText.fields[field.id as keyof typeof stepText.fields];
        return {
          id: field.id,
          type: field.type,
          q: fieldText.q,
          options: field.options.map((opt) => ({
            v: opt.v,
            l: fieldText.options[opt.v],
            s: opt.s,
          })),
        };
      }),
    };
  });
}

/* ======================== SCORING ======================== */
type Answers = Record<string, string | string[]>;

const ALL_META_FIELDS = STEPS_META.flatMap((s) => s.fields);

function getScore(answers: Answers, ids: string[]): number {
  let total = 0, count = 0;
  ids.forEach(id => {
    const ans = answers[id];
    if (!ans) return;
    const field = ALL_META_FIELDS.find(f => f.id === id);
    if (!field) return;
    const vals = Array.isArray(ans) ? ans : [ans];
    vals.forEach(v => {
      const opt = field.options.find(o => o.v === v);
      if (opt) { total += opt.s; count++; }
    });
  });
  return count === 0 ? 0 : Math.round((total / (count * 4)) * 100);
}

/* Structural rec data (icon/link/wa message) — title/desc come from
   t.diagnostico.recs at call time. */
const REC_META: Record<"chaos" | "ventas" | "mktg" | "soporte" | "fundador", { icon: string; link: string; wa: string }> = {
  chaos: {
    icon: "⚙️",
    link: "/servicios/sistema-mipymes",
    wa: "Estoy%20interesado%20en%20el%20Sistema%20para%20MIPYMES%20de%20EPICS%20AI",
  },
  ventas: {
    icon: "🎯",
    link: "/servicios/fb-publisher",
    wa: "Estoy%20interesado%20en%20FB%20Publisher%20AI%20de%20EPICS%20AI",
  },
  mktg: {
    icon: "📢",
    link: "/servicios/fb-publisher",
    wa: "Estoy%20interesado%20en%20FB%20Publisher%20AI%20de%20EPICS%20AI",
  },
  soporte: {
    icon: "💬",
    link: "/servicios/whatsapp-ia",
    wa: "Estoy%20interesado%20en%20WhatsApp%20con%20IA%20de%20EPICS%20AI",
  },
  fundador: {
    icon: "🏢",
    link: "/servicios/sistema-mipymes",
    wa: "Estoy%20interesado%20en%20el%20Sistema%20para%20MIPYMES%20de%20EPICS%20AI",
  },
};

function calcResults(answers: Answers, t: Translations) {
  const chaos = getScore(answers, ["dependencia", "horas_tareas", "colapso", "manual"]);
  const ventas = getScore(answers, ["respuesta_leads", "sin_seguimiento", "donde_pierde", "ventas_potenciales"]);
  const mktg = getScore(answers, ["horas_contenido", "reusa_contenido", "canales_rentables"]);
  const soporte = getScore(answers, ["preguntas_repetidas", "tiempo_soporte", "automatizable"]);
  const fundador = getScore(answers, ["horas_operacion", "sin_datos"]);

  // Time waste estimate
  const hoursMap: Record<string, number> = { a: 35, b: 22, c: 10, d: 3 };
  const horasTareas = hoursMap[(answers.horas_tareas as string) ?? "d"] ?? 10;
  const horasFundador = hoursMap[(answers.horas_operacion as string) ?? "d"] ?? 5;
  const horasSoporte = { a: 20, b: 10, c: 5, d: 2 }[(answers.preguntas_repetidas as string) ?? "d"] ?? 5;
  const timeWaste = Math.round(horasTareas + horasFundador + horasSoporte);

  // Monthly cost ($25/hr)
  const monthlyCost = timeWaste * 4 * 25;

  // Revenue recovery (% based on ventas score)
  const revenueMap: Record<string, number> = { a: 5, b: 25, c: 60, d: 150 };
  const recoveryPotential = (revenueMap[(answers.ventas_potenciales as string) ?? "a"] ?? 5) * 100;

  // Recommendation
  const scores = { chaos, ventas, mktg, soporte, fundador };
  const max = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0] as keyof typeof REC_META;
  const meta = REC_META[max];
  const text = t.diagnostico.recs[max];
  const rec = { title: text.title, desc: text.desc, icon: meta.icon, link: meta.link, wa: meta.wa };

  return { chaos, ventas, mktg, soporte, fundador, timeWaste, monthlyCost, recoveryPotential, rec };
}

/* ======================== COMPONENTS ======================== */
function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full h-1 bg-white/[0.07] rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-white/70 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${(current / total) * 100}%` }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

function OptionButton({
  label, selected, multi, onClick,
}: { label: string; selected: boolean; multi?: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
        selected
          ? "border-white/40 bg-white/10 text-foreground"
          : "border-white/[0.08] bg-white/[0.03] text-muted-foreground hover:border-white/20 hover:bg-white/[0.06] hover:text-foreground"
      }`}
    >
      <span className={`w-5 h-5 flex-shrink-0 rounded-${multi ? "md" : "full"} border-2 flex items-center justify-center transition-all ${
        selected ? "border-white bg-white" : "border-white/20"
      }`}>
        {selected && <Check className="w-3 h-3 text-black" strokeWidth={3} />}
      </span>
      {label}
    </button>
  );
}

function ScoreCard({ label, value, icon: Icon, color }: { label: string; value: number; icon: React.ElementType; color: string }) {
  return (
    <div className="glass rounded-2xl p-6 text-center">
      <Icon className={`w-6 h-6 mx-auto mb-3 ${color}`} strokeWidth={1.5} />
      <div className="text-3xl font-black tracking-tighter mb-1 glow-stat">{value}<span className="text-lg text-white/40">/100</span></div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-3 h-1 bg-white/[0.07] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white/50 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

/* ======================== MAIN PAGE ======================== */
export default function DiagnosticoPage() {
  const { t, language } = useLanguage();
  const STEPS = useMemo(() => buildSteps(t), [t]);

  const [step, setStep] = useState(-1); // -1 = intro
  const [fieldIdx, setFieldIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof calcResults> | null>(null);

  const totalFields = STEPS.reduce((acc, s) => acc + s.fields.length, 0);
  const completedFields = STEPS.slice(0, step).reduce((acc, s) => acc + s.fields.length, 0) + (step >= 0 ? fieldIdx : 0);

  const currentStep = step >= 0 && step < STEPS.length ? STEPS[step] : null;
  const currentField = currentStep ? currentStep.fields[fieldIdx] : null;

  const answer = currentField ? answers[currentField.id] : undefined;
  const isMulti = currentField?.type === "multi";

  const isAnswered = currentField
    ? isMulti
      ? Array.isArray(answer) && (answer as string[]).length > 0
      : !!answer
    : false;

  function selectOption(val: string) {
    if (!currentField) return;
    if (isMulti) {
      const current = (answers[currentField.id] as string[]) ?? [];
      const next = current.includes(val) ? current.filter(v => v !== val) : [...current, val];
      setAnswers(prev => ({ ...prev, [currentField.id]: next }));
    } else {
      setAnswers(prev => ({ ...prev, [currentField.id]: val }));
    }
  }

  function next() {
    if (!currentStep) return;
    if (fieldIdx < currentStep.fields.length - 1) {
      setFieldIdx(fieldIdx + 1);
    } else if (step < STEPS.length - 1) {
      setStep(step + 1);
      setFieldIdx(0);
    } else {
      const r = calcResults(answers, t);
      setResults(r);
      setShowResults(true);
    }
  }

  function back() {
    if (fieldIdx > 0) {
      setFieldIdx(fieldIdx - 1);
    } else if (step > 0) {
      setStep(step - 1);
      setFieldIdx(STEPS[step - 1].fields.length - 1);
    } else {
      setStep(-1);
    }
  }

  const isOptionSelected = (val: string) => {
    if (!answer) return false;
    return Array.isArray(answer) ? (answer as string[]).includes(val) : answer === val;
  };

  /* ---- INTRO ---- */
  if (step === -1 && !showResults) {
    const intro = t.diagnostico.intro;
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="max-w-2xl mx-auto px-6 w-full flex-1 flex flex-col justify-center py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-between mb-12">
              <Link href="/" className="text-xs text-muted-foreground/50 hover:text-muted-foreground inline-flex items-center gap-2 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> {intro.backLink}
              </Link>
              <LanguageToggle />
            </div>
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              {intro.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-5 glow-hero whitespace-pre-line">
              {intro.title}
            </h1>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {intro.desc1}
            </p>
            <p className="text-sm text-muted-foreground/50 mb-10">
              {intro.desc2}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {intro.statsRow.map(({ v, l }) => (
                <div key={v} className="glass-tile rounded-xl p-4 text-center">
                  <div className="font-bold text-foreground text-sm">{v}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{l}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => { setStep(0); setFieldIdx(0); }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold text-sm hover:bg-foreground/85 transition-all hover:-translate-y-0.5 shadow-lg w-full sm:w-auto"
            >
              {intro.ctaStart} <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  /* ---- RESULTS ---- */
  if (showResults && results) {
    const res = t.diagnostico.results;
    const waMsgPrefix =
      language === "en"
        ? `I just finished the EPICS AI diagnostic. My chaos score is ${results.chaos}/100. `
        : `Acabé el diagnóstico de EPICS AI. Mi puntuación de caos es ${results.chaos}/100. `;
    const wa = `https://wa.me/5356999599?text=${encodeURIComponent(waMsgPrefix)}${
      results.rec.wa ? encodeURIComponent(decodeURIComponent(results.rec.wa)) : encodeURIComponent(t.diagnostico.results.talkToSpecialist)
    }`;
    return (
      <div className="min-h-screen bg-background py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex justify-end mb-4">
              <LanguageToggle />
            </div>
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {res.badge}
              </span>
              <h1 className="text-3xl md:text-4xl font-black tracking-tighter glow-hero mb-3">
                {res.title}
              </h1>
              <p className="text-muted-foreground">{res.subtitle}</p>
            </div>

            {/* Scores */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <ScoreCard label={res.scoreLabels.chaos} value={results.chaos} icon={AlertTriangle} color="text-white/60" />
              <ScoreCard label={res.scoreLabels.ventas} value={results.ventas} icon={TrendingDown} color="text-white/60" />
              <ScoreCard label={res.scoreLabels.ai} value={Math.round((results.chaos + results.ventas + results.soporte) / 3)} icon={Zap} color="text-white/60" />
              <ScoreCard label={res.scoreLabels.soporte} value={results.soporte} icon={Clock} color="text-white/60" />
            </div>

            {/* Key metrics */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { label: res.metrics.timeWaste.label, value: `~${results.timeWaste}h`, sub: res.metrics.timeWaste.sub },
                { label: res.metrics.monthlyCost.label, value: `~$${results.monthlyCost.toLocaleString()}`, sub: res.metrics.monthlyCost.sub },
                { label: res.metrics.recovery.label, value: `+$${results.recoveryPotential.toLocaleString()}`, sub: res.metrics.recovery.sub },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="text-2xl font-black tracking-tighter text-foreground glow-stat mb-1">{m.value}</div>
                  <div className="text-xs font-semibold text-foreground/80 mb-0.5">{m.label}</div>
                  <div className="text-xs text-muted-foreground">{m.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Recommendation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass rounded-2xl p-7 mb-8"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{res.recPriorityLabel}</p>
              <div className="flex items-start gap-4">
                <span className="text-3xl">{results.rec.icon}</span>
                <div>
                  <h3 className="font-black text-lg tracking-tight mb-2">{results.rec.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{results.rec.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={results.rec.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-bold hover:bg-foreground/85 transition-all"
                    >
                      {res.viewSolution} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={`https://wa.me/5356999599?text=${results.rec.wa}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-foreground rounded-full text-sm font-semibold hover:bg-white/[0.06] transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> {res.talkToSpecialist}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-center">
              <p className="text-sm text-muted-foreground mb-5">
                {res.sessionQuestion}
              </p>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold text-sm hover:bg-foreground/85 transition-all hover:-translate-y-0.5 shadow-xl"
              >
                <MessageSquare className="w-4 h-4" /> {res.sendReportWa}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  /* ---- QUESTION SCREEN ---- */
  if (!currentField) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-nav px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground/60 font-medium">
              {currentStep?.title} — {fieldIdx + 1}/{currentStep?.fields.length}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground/40">
                {completedFields}/{totalFields} {t.diagnostico.progress.completedLabel}
              </span>
              <LanguageToggle />
            </div>
          </div>
          <ProgressBar current={completedFields} total={totalFields} />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center px-6 pt-24 pb-10">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${step}-${fieldIdx}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {isMulti && (
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
                  {t.diagnostico.multiSelectHint}
                </p>
              )}
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-8 leading-snug">
                {currentField.q}
              </h2>
              <div className="flex flex-col gap-3 mb-10">
                {currentField.options.map(opt => (
                  <OptionButton
                    key={opt.v}
                    label={opt.l}
                    selected={isOptionSelected(opt.v)}
                    multi={isMulti}
                    onClick={() => selectOption(opt.v)}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={back}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-white/[0.08] rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" /> {t.diagnostico.buttons.back}
                </button>
                <button
                  onClick={next}
                  disabled={!isAnswered}
                  className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold transition-all ${
                    isAnswered
                      ? "bg-foreground text-background hover:bg-foreground/85 hover:-translate-y-0.5 shadow-lg"
                      : "bg-white/[0.05] text-muted-foreground/40 cursor-not-allowed"
                  }`}
                >
                  {step === STEPS.length - 1 && fieldIdx === currentStep!.fields.length - 1
                    ? t.diagnostico.buttons.viewDiagnosis
                    : t.diagnostico.buttons.continue}{" "}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
