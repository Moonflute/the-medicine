"use client";

import { useState } from "react";

function parseNumber(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const parsed = Number(trimmed);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatNumber(value: number, digits = 2) {
  return Number(value.toFixed(digits)).toString();
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-sm">
      <div className="text-xs uppercase tracking-[0.18em] text-stone-500">{subtitle}</div>
      <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-stone-950">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function InputRow({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-stone-700">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        inputMode="decimal"
        placeholder={placeholder}
        className="rounded-2xl border border-stone-200 bg-stone-50/70 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white"
      />
    </label>
  );
}

function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50/70 px-4 py-3">
      <span className="text-sm font-medium text-stone-700">{label}</span>
      <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="h-4 w-4 accent-stone-900" />
    </label>
  );
}

function SelectRow({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ label: string; value: string }>;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-stone-700">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-2xl border border-stone-200 bg-stone-50/70 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function ResultBox({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50/70 px-4 py-4">
      <div className="text-xs uppercase tracking-[0.18em] text-stone-500">{label}</div>
      <div className="mt-2 text-lg font-semibold text-stone-950">{value}</div>
      {note ? <div className="mt-2 text-sm leading-6 text-stone-600">{note}</div> : null}
    </div>
  );
}

function CorrectedCalciumCard() {
  const [calcium, setCalcium] = useState("");
  const [albumin, setAlbumin] = useState("");
  const calciumValue = parseNumber(calcium);
  const albuminValue = parseNumber(albumin);
  const corrected = calciumValue !== null && albuminValue !== null ? calciumValue + 0.8 * (4 - albuminValue) : null;

  return (
    <Card title="Corrected Calcium" subtitle="Electrolytes">
      <div className="grid gap-3 md:grid-cols-2">
        <InputRow label="Measured Ca (mg/dL)" value={calcium} onChange={setCalcium} placeholder="8.4" />
        <InputRow label="Albumin (g/dL)" value={albumin} onChange={setAlbumin} placeholder="2.8" />
      </div>
      <ResultBox label="Result" value={corrected === null ? "-" : `${formatNumber(corrected)} mg/dL`} note="Corrected Ca = measured Ca + 0.8 x (4 - albumin)" />
    </Card>
  );
}

function AnionGapCard() {
  const [sodium, setSodium] = useState("");
  const [chloride, setChloride] = useState("");
  const [bicarb, setBicarb] = useState("");
  const [albumin, setAlbumin] = useState("");
  const na = parseNumber(sodium);
  const cl = parseNumber(chloride);
  const hco3 = parseNumber(bicarb);
  const alb = parseNumber(albumin);
  const ag = na !== null && cl !== null && hco3 !== null ? na - (cl + hco3) : null;
  const correctedAg = ag !== null && alb !== null ? ag + 2.5 * (4 - alb) : null;

  return (
    <Card title="Anion Gap" subtitle="Acid-Base">
      <div className="grid gap-3 md:grid-cols-2">
        <InputRow label="Na (mmol/L)" value={sodium} onChange={setSodium} placeholder="140" />
        <InputRow label="Cl (mmol/L)" value={chloride} onChange={setChloride} placeholder="104" />
        <InputRow label="HCO3 (mmol/L)" value={bicarb} onChange={setBicarb} placeholder="24" />
        <InputRow label="Albumin (g/dL, optional)" value={albumin} onChange={setAlbumin} placeholder="4.0" />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <ResultBox label="AG" value={ag === null ? "-" : `${formatNumber(ag)} mEq/L`} note="AG = Na - (Cl + HCO3)" />
        <ResultBox label="Albumin-corrected AG" value={correctedAg === null ? "-" : `${formatNumber(correctedAg)} mEq/L`} note="Corrected AG = AG + 2.5 x (4 - albumin)" />
      </div>
    </Card>
  );
}

function SodiumCorrectionCard() {
  const [sodium, setSodium] = useState("");
  const [glucose, setGlucose] = useState("");
  const na = parseNumber(sodium);
  const glucoseValue = parseNumber(glucose);
  const katz = na !== null && glucoseValue !== null ? na + 1.6 * ((glucoseValue - 100) / 100) : null;
  const hillier = na !== null && glucoseValue !== null ? na + 2.4 * ((glucoseValue - 100) / 100) : null;

  return (
    <Card title="Corrected Sodium in Hyperglycemia" subtitle="Electrolytes">
      <div className="grid gap-3 md:grid-cols-2">
        <InputRow label="Measured Na (mmol/L)" value={sodium} onChange={setSodium} placeholder="128" />
        <InputRow label="Glucose (mg/dL)" value={glucose} onChange={setGlucose} placeholder="500" />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <ResultBox label="Katz 1.6" value={katz === null ? "-" : `${formatNumber(katz)} mmol/L`} />
        <ResultBox label="Hillier 2.4" value={hillier === null ? "-" : `${formatNumber(hillier)} mmol/L`} />
      </div>
    </Card>
  );
}

function OsmolalityCard() {
  const [sodium, setSodium] = useState("");
  const [glucose, setGlucose] = useState("");
  const [bun, setBun] = useState("");
  const [measured, setMeasured] = useState("");
  const na = parseNumber(sodium);
  const glucoseValue = parseNumber(glucose);
  const bunValue = parseNumber(bun);
  const measuredValue = parseNumber(measured);
  const calculated = na !== null && glucoseValue !== null && bunValue !== null ? 2 * na + glucoseValue / 18 + bunValue / 2.8 : null;
  const gap = measuredValue !== null && calculated !== null ? measuredValue - calculated : null;

  return (
    <Card title="Serum Osmolality / Osmolar Gap" subtitle="Electrolytes">
      <div className="grid gap-3 md:grid-cols-2">
        <InputRow label="Na (mmol/L)" value={sodium} onChange={setSodium} placeholder="140" />
        <InputRow label="Glucose (mg/dL)" value={glucose} onChange={setGlucose} placeholder="90" />
        <InputRow label="BUN (mg/dL)" value={bun} onChange={setBun} placeholder="14" />
        <InputRow label="Measured Osm (optional)" value={measured} onChange={setMeasured} placeholder="290" />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <ResultBox label="Calculated Osm" value={calculated === null ? "-" : `${formatNumber(calculated)} mOsm/kg`} />
        <ResultBox label="Osmolar Gap" value={gap === null ? "-" : `${formatNumber(gap)} mOsm/kg`} />
      </div>
    </Card>
  );
}

function FenaCard() {
  const [urineNa, setUrineNa] = useState("");
  const [serumNa, setSerumNa] = useState("");
  const [urineCr, setUrineCr] = useState("");
  const [serumCr, setSerumCr] = useState("");
  const uNa = parseNumber(urineNa);
  const sNa = parseNumber(serumNa);
  const uCr = parseNumber(urineCr);
  const sCr = parseNumber(serumCr);
  const fena = uNa !== null && sNa !== null && uCr !== null && sCr !== null && sNa !== 0 && uCr !== 0 ? (uNa * sCr * 100) / (sNa * uCr) : null;

  return (
    <Card title="FENa" subtitle="Renal">
      <div className="grid gap-3 md:grid-cols-2">
        <InputRow label="Urine Na" value={urineNa} onChange={setUrineNa} placeholder="12" />
        <InputRow label="Serum Na" value={serumNa} onChange={setSerumNa} placeholder="138" />
        <InputRow label="Urine Cr" value={urineCr} onChange={setUrineCr} placeholder="96" />
        <InputRow label="Serum Cr" value={serumCr} onChange={setSerumCr} placeholder="2.1" />
      </div>
      <ResultBox label="Result" value={fena === null ? "-" : `${formatNumber(fena)} %`} note="FENa = (Urine Na x Serum Cr) / (Serum Na x Urine Cr) x 100" />
    </Card>
  );
}

function FeUreaCard() {
  const [urineUrea, setUrineUrea] = useState("");
  const [serumUrea, setSerumUrea] = useState("");
  const [urineCr, setUrineCr] = useState("");
  const [serumCr, setSerumCr] = useState("");
  const uUrea = parseNumber(urineUrea);
  const sUrea = parseNumber(serumUrea);
  const uCr = parseNumber(urineCr);
  const sCr = parseNumber(serumCr);
  const feUrea = uUrea !== null && sUrea !== null && uCr !== null && sCr !== null && sUrea !== 0 && uCr !== 0 ? (uUrea * sCr * 100) / (sUrea * uCr) : null;

  return (
    <Card title="FEUrea" subtitle="Renal">
      <div className="grid gap-3 md:grid-cols-2">
        <InputRow label="Urine urea" value={urineUrea} onChange={setUrineUrea} placeholder="320" />
        <InputRow label="Serum urea or BUN-equivalent" value={serumUrea} onChange={setSerumUrea} placeholder="28" />
        <InputRow label="Urine Cr" value={urineCr} onChange={setUrineCr} placeholder="96" />
        <InputRow label="Serum Cr" value={serumCr} onChange={setSerumCr} placeholder="2.1" />
      </div>
      <ResultBox label="Result" value={feUrea === null ? "-" : `${formatNumber(feUrea)} %`} note="FEUrea = (Urine urea x Serum Cr) / (Serum urea x Urine Cr) x 100" />
    </Card>
  );
}

function CockcroftGaultCard() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [creatinine, setCreatinine] = useState("");
  const [female, setFemale] = useState(false);
  const ageValue = parseNumber(age);
  const weightValue = parseNumber(weight);
  const scr = parseNumber(creatinine);
  const result = ageValue !== null && weightValue !== null && scr !== null && scr !== 0
    ? ((140 - ageValue) * weightValue * (female ? 0.85 : 1)) / (72 * scr)
    : null;

  return (
    <Card title="Cockcroft-Gault CrCl" subtitle="Renal">
      <div className="grid gap-3 md:grid-cols-2">
        <InputRow label="Age (years)" value={age} onChange={setAge} placeholder="68" />
        <InputRow label="Weight (kg)" value={weight} onChange={setWeight} placeholder="62" />
        <InputRow label="Serum Cr (mg/dL)" value={creatinine} onChange={setCreatinine} placeholder="1.4" />
        <ToggleRow label="Female" checked={female} onChange={setFemale} />
      </div>
      <ResultBox label="Result" value={result === null ? "-" : `${formatNumber(result)} mL/min`} note="CrCl = (140 - age) x weight / (72 x Scr), then x 0.85 if female" />
    </Card>
  );
}

function AaGradientCard() {
  const [fio2, setFio2] = useState("");
  const [pao2, setPao2] = useState("");
  const [paco2, setPaco2] = useState("");
  const fio2Value = parseNumber(fio2);
  const pao2Value = parseNumber(pao2);
  const paco2Value = parseNumber(paco2);
  const gradient = fio2Value !== null && pao2Value !== null && paco2Value !== null ? fio2Value * (760 - 47) - paco2Value / 0.8 - pao2Value : null;

  return (
    <Card title="A-a Gradient" subtitle="Respiratory">
      <div className="grid gap-3 md:grid-cols-3">
        <InputRow label="FiO2 (0.21-1.00)" value={fio2} onChange={setFio2} placeholder="0.21" />
        <InputRow label="PaO2 (mmHg)" value={pao2} onChange={setPao2} placeholder="82" />
        <InputRow label="PaCO2 (mmHg)" value={paco2} onChange={setPaco2} placeholder="40" />
      </div>
      <ResultBox label="Result" value={gradient === null ? "-" : `${formatNumber(gradient)} mmHg`} note="Sea-level alveolar gas equation using R = 0.8" />
    </Card>
  );
}

function QsofaCard() {
  const [sbpLow, setSbpLow] = useState(false);
  const [rrHigh, setRrHigh] = useState(false);
  const [mentalAltered, setMentalAltered] = useState(false);
  const score = Number(sbpLow) + Number(rrHigh) + Number(mentalAltered);
  const interpretation = score >= 2 ? "High-risk signal" : "Below usual qSOFA trigger";

  return (
    <Card title="qSOFA" subtitle="Clinical Score">
      <div className="space-y-3">
        <ToggleRow label="SBP <= 100 mmHg" checked={sbpLow} onChange={setSbpLow} />
        <ToggleRow label="RR >= 22 /min" checked={rrHigh} onChange={setRrHigh} />
        <ToggleRow label="Altered mentation" checked={mentalAltered} onChange={setMentalAltered} />
      </div>
      <ResultBox label="Score" value={`${score} / 3`} note={interpretation} />
    </Card>
  );
}

function Curb65Card() {
  const [confusion, setConfusion] = useState(false);
  const [bunHigh, setBunHigh] = useState(false);
  const [rrHigh, setRrHigh] = useState(false);
  const [bpLow, setBpLow] = useState(false);
  const [ageHigh, setAgeHigh] = useState(false);
  const score = Number(confusion) + Number(bunHigh) + Number(rrHigh) + Number(bpLow) + Number(ageHigh);
  let note = "Low severity";
  if (score === 2) note = "Consider short admission or close observation";
  if (score >= 3) note = "Higher severity";

  return (
    <Card title="CURB-65" subtitle="Clinical Score">
      <div className="space-y-3">
        <ToggleRow label="Confusion" checked={confusion} onChange={setConfusion} />
        <ToggleRow label="BUN > 19 mg/dL" checked={bunHigh} onChange={setBunHigh} />
        <ToggleRow label="RR >= 30 /min" checked={rrHigh} onChange={setRrHigh} />
        <ToggleRow label="SBP < 90 or DBP <= 60 mmHg" checked={bpLow} onChange={setBpLow} />
        <ToggleRow label="Age >= 65" checked={ageHigh} onChange={setAgeHigh} />
      </div>
      <ResultBox label="Score" value={`${score} / 5`} note={note} />
    </Card>
  );
}

function ChildPughCard() {
  const [bilirubin, setBilirubin] = useState("1");
  const [albumin, setAlbumin] = useState("1");
  const [inr, setInr] = useState("1");
  const [ascites, setAscites] = useState("1");
  const [encephalopathy, setEncephalopathy] = useState("1");
  const score = [bilirubin, albumin, inr, ascites, encephalopathy].reduce((sum, item) => sum + Number(item), 0);
  const grade = score <= 6 ? "Class A" : score <= 9 ? "Class B" : "Class C";

  return (
    <Card title="Child-Pugh" subtitle="Liver">
      <div className="grid gap-3 md:grid-cols-2">
        <SelectRow label="Bilirubin" value={bilirubin} onChange={setBilirubin} options={[{ label: "< 2 mg/dL", value: "1" }, { label: "2-3 mg/dL", value: "2" }, { label: "> 3 mg/dL", value: "3" }]} />
        <SelectRow label="Albumin" value={albumin} onChange={setAlbumin} options={[{ label: "> 3.5 g/dL", value: "1" }, { label: "2.8-3.5 g/dL", value: "2" }, { label: "< 2.8 g/dL", value: "3" }]} />
        <SelectRow label="INR" value={inr} onChange={setInr} options={[{ label: "< 1.7", value: "1" }, { label: "1.7-2.3", value: "2" }, { label: "> 2.3", value: "3" }]} />
        <SelectRow label="Ascites" value={ascites} onChange={setAscites} options={[{ label: "None", value: "1" }, { label: "Mild", value: "2" }, { label: "Moderate-severe", value: "3" }]} />
        <SelectRow label="Encephalopathy" value={encephalopathy} onChange={setEncephalopathy} options={[{ label: "None", value: "1" }, { label: "Grade I-II", value: "2" }, { label: "Grade III-IV", value: "3" }]} />
      </div>
      <ResultBox label="Score" value={`${score} / 15`} note={grade} />
    </Card>
  );
}

function MeldNaCard() {
  const [bilirubin, setBilirubin] = useState("");
  const [inr, setInr] = useState("");
  const [creatinine, setCreatinine] = useState("");
  const [sodium, setSodium] = useState("");
  const [dialysis, setDialysis] = useState(false);
  const bili = parseNumber(bilirubin);
  const inrValue = parseNumber(inr);
  const creatinineValue = parseNumber(creatinine);
  const sodiumValue = parseNumber(sodium);

  let result: number | null = null;
  if (bili !== null && inrValue !== null && creatinineValue !== null && sodiumValue !== null) {
    const biliAdj = Math.max(bili, 1);
    const inrAdj = Math.max(inrValue, 1);
    const crBase = dialysis ? 4 : creatinineValue;
    const crAdj = Math.min(Math.max(crBase, 1), 4);
    const naAdj = Math.min(Math.max(sodiumValue, 125), 137);
    const meld = 3.78 * Math.log(biliAdj) + 11.2 * Math.log(inrAdj) + 9.57 * Math.log(crAdj) + 6.43;
    result = meld + 1.32 * (137 - naAdj) - 0.033 * meld * (137 - naAdj);
  }

  return (
    <Card title="MELD-Na" subtitle="Liver">
      <div className="grid gap-3 md:grid-cols-2">
        <InputRow label="Bilirubin (mg/dL)" value={bilirubin} onChange={setBilirubin} placeholder="3.2" />
        <InputRow label="INR" value={inr} onChange={setInr} placeholder="1.8" />
        <InputRow label="Creatinine (mg/dL)" value={creatinine} onChange={setCreatinine} placeholder="1.9" />
        <InputRow label="Na (mmol/L)" value={sodium} onChange={setSodium} placeholder="128" />
        <ToggleRow label="Dialysis at least twice in last week" checked={dialysis} onChange={setDialysis} />
      </div>
      <ResultBox label="Result" value={result === null ? "-" : formatNumber(result, 1)} note="Uses standard MELD-Na caps: bilirubin/INR/creatinine floored at 1, creatinine capped at 4, sodium capped 125-137" />
    </Card>
  );
}

function Cha2ds2VascCard() {
  const [heartFailure, setHeartFailure] = useState(false);
  const [hypertension, setHypertension] = useState(false);
  const [age75, setAge75] = useState(false);
  const [diabetes, setDiabetes] = useState(false);
  const [stroke, setStroke] = useState(false);
  const [vascular, setVascular] = useState(false);
  const [age65to74, setAge65to74] = useState(false);
  const [female, setFemale] = useState(false);
  const score =
    Number(heartFailure) +
    Number(hypertension) +
    Number(diabetes) +
    Number(vascular) +
    Number(age65to74) +
    Number(female) +
    Number(age75) * 2 +
    Number(stroke) * 2;

  const note = score >= 2 ? "Higher thromboembolic risk" : score === 1 ? "Intermediate risk context" : "Low score";

  return (
    <Card title="CHA2DS2-VASc" subtitle="Cardiology">
      <div className="space-y-3">
        <ToggleRow label="Congestive heart failure / LV dysfunction" checked={heartFailure} onChange={setHeartFailure} />
        <ToggleRow label="Hypertension" checked={hypertension} onChange={setHypertension} />
        <ToggleRow label="Age >= 75 years" checked={age75} onChange={setAge75} />
        <ToggleRow label="Diabetes mellitus" checked={diabetes} onChange={setDiabetes} />
        <ToggleRow label="Prior stroke / TIA / thromboembolism" checked={stroke} onChange={setStroke} />
        <ToggleRow label="Vascular disease" checked={vascular} onChange={setVascular} />
        <ToggleRow label="Age 65-74 years" checked={age65to74} onChange={setAge65to74} />
        <ToggleRow label="Female sex" checked={female} onChange={setFemale} />
      </div>
      <ResultBox label="Score" value={`${score} / 9`} note={note} />
    </Card>
  );
}

function WellsPeCard() {
  const [dvtSigns, setDvtSigns] = useState(false);
  const [peLikely, setPeLikely] = useState(false);
  const [tachycardia, setTachycardia] = useState(false);
  const [immobilization, setImmobilization] = useState(false);
  const [previous, setPrevious] = useState(false);
  const [hemoptysis, setHemoptysis] = useState(false);
  const [malignancy, setMalignancy] = useState(false);
  const score =
    Number(dvtSigns) * 3 +
    Number(peLikely) * 3 +
    Number(tachycardia) * 1.5 +
    Number(immobilization) * 1.5 +
    Number(previous) * 1.5 +
    Number(hemoptysis) +
    Number(malignancy);
  const note = score > 4 ? "PE likely (two-tier)" : "PE unlikely (two-tier)";

  return (
    <Card title="Wells Score for PE" subtitle="VTE">
      <div className="space-y-3">
        <ToggleRow label="Clinical signs of DVT" checked={dvtSigns} onChange={setDvtSigns} />
        <ToggleRow label="PE more likely than alternative diagnosis" checked={peLikely} onChange={setPeLikely} />
        <ToggleRow label="Heart rate > 100" checked={tachycardia} onChange={setTachycardia} />
        <ToggleRow label="Immobilization >= 3 days or surgery within 4 weeks" checked={immobilization} onChange={setImmobilization} />
        <ToggleRow label="Previous DVT or PE" checked={previous} onChange={setPrevious} />
        <ToggleRow label="Hemoptysis" checked={hemoptysis} onChange={setHemoptysis} />
        <ToggleRow label="Malignancy" checked={malignancy} onChange={setMalignancy} />
      </div>
      <ResultBox label="Score" value={score.toString()} note={note} />
    </Card>
  );
}

function WellsDvtCard() {
  const [activeCancer, setActiveCancer] = useState(false);
  const [paralysis, setParalysis] = useState(false);
  const [bedridden, setBedridden] = useState(false);
  const [tenderness, setTenderness] = useState(false);
  const [entireLeg, setEntireLeg] = useState(false);
  const [calfSwelling, setCalfSwelling] = useState(false);
  const [pittingEdema, setPittingEdema] = useState(false);
  const [collateralVeins, setCollateralVeins] = useState(false);
  const [previousDvt, setPreviousDvt] = useState(false);
  const [alternativeDiagnosis, setAlternativeDiagnosis] = useState(false);
  const score =
    Number(activeCancer) +
    Number(paralysis) +
    Number(bedridden) +
    Number(tenderness) +
    Number(entireLeg) +
    Number(calfSwelling) +
    Number(pittingEdema) +
    Number(collateralVeins) +
    Number(previousDvt) -
    Number(alternativeDiagnosis) * 2;
  const note = score >= 2 ? "DVT likely (two-tier)" : "DVT unlikely (two-tier)";

  return (
    <Card title="Wells Score for DVT" subtitle="VTE">
      <div className="space-y-3">
        <ToggleRow label="Active cancer" checked={activeCancer} onChange={setActiveCancer} />
        <ToggleRow label="Paralysis, paresis, or recent plaster immobilization" checked={paralysis} onChange={setParalysis} />
        <ToggleRow label="Recently bedridden > 3 days or major surgery within 12 weeks" checked={bedridden} onChange={setBedridden} />
        <ToggleRow label="Localized tenderness along deep venous system" checked={tenderness} onChange={setTenderness} />
        <ToggleRow label="Entire leg swollen" checked={entireLeg} onChange={setEntireLeg} />
        <ToggleRow label="Calf swelling > 3 cm" checked={calfSwelling} onChange={setCalfSwelling} />
        <ToggleRow label="Pitting edema confined to symptomatic leg" checked={pittingEdema} onChange={setPittingEdema} />
        <ToggleRow label="Collateral superficial veins" checked={collateralVeins} onChange={setCollateralVeins} />
        <ToggleRow label="Previously documented DVT" checked={previousDvt} onChange={setPreviousDvt} />
        <ToggleRow label="Alternative diagnosis at least as likely as DVT" checked={alternativeDiagnosis} onChange={setAlternativeDiagnosis} />
      </div>
      <ResultBox label="Score" value={score.toString()} note={note} />
    </Card>
  );
}

export function MedCalcPageClient() {
  return (
    <div className="space-y-6">
      <header className="rounded-[32px] border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
        <div className="text-xs uppercase tracking-[0.24em] text-stone-500">MedCalc</div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Quick Medical Calculators</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600">
          Expanded with bedside scores and formula calculators commonly used in wards, ER, ICU, nephrology, hepatology, and cardiology.
        </p>
      </header>

      <section className="space-y-4">
        <div className="text-xs uppercase tracking-[0.22em] text-stone-500">Lab / Acid-Base / Renal</div>
        <div className="grid gap-6 xl:grid-cols-2">
          <CorrectedCalciumCard />
          <AnionGapCard />
          <SodiumCorrectionCard />
          <OsmolalityCard />
          <FenaCard />
          <FeUreaCard />
          <CockcroftGaultCard />
          <AaGradientCard />
        </div>
      </section>

      <section className="space-y-4">
        <div className="text-xs uppercase tracking-[0.22em] text-stone-500">Liver / Cardiology</div>
        <div className="grid gap-6 xl:grid-cols-2">
          <ChildPughCard />
          <MeldNaCard />
          <Cha2ds2VascCard />
        </div>
      </section>

      <section className="space-y-4">
        <div className="text-xs uppercase tracking-[0.22em] text-stone-500">Infection / VTE</div>
        <div className="grid gap-6 xl:grid-cols-2">
          <QsofaCard />
          <Curb65Card />
          <WellsPeCard />
          <WellsDvtCard />
        </div>
      </section>
    </div>
  );
}
