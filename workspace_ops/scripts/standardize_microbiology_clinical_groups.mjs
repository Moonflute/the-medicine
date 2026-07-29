import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "../..");
const microbiologyRoot = path.join(repoRoot, "source_notes", "09 Microbiology");
const registry = JSON.parse(fs.readFileSync(path.join(microbiologyRoot, "_data", "microorganism-registry.json"), "utf8"));

const additions = {
  "viridans-group-streptococci": {
    members: ["`S. mitis` group", "`S. sanguinis` group", "`S. mutans` group", "`S. anginosus` group"],
    exception: "Viridans group은 단일 taxonomy가 아니며 species, 검출 횟수와 감염 부위에 따라 contaminant부터 infective endocarditis까지 임상 의미가 달라진다.",
  },
  "nontuberculous-mycobacteria": {
    members: ["`Mycobacterium avium` complex", "`M. kansasii`", "`M. abscessus` complex와 기타 rapid-growing mycobacteria"],
    exception: "호흡기 검체 분리만으로 NTM pulmonary disease를 확진하지 않으며 임상·영상·미생물 기준을 충족해도 치료 필요성은 별도로 판단한다.",
  },
  mucorales: {
    members: ["`Rhizopus`", "`Mucor`", "`Lichtheimia`와 기타 Mucorales"],
    exception: "조직의 broad pauciseptate hyphae는 Mucorales를 시사하지만 배양·molecular identification과 감수성, 침범 부위를 함께 확인해야 한다.",
  },
  "coagulase-negative-staphylococci": {
    members: ["`Staphylococcus epidermidis`", "`S. lugdunensis`", "`S. saprophyticus`와 기타 CoNS"],
    exception: "`S. lugdunensis`는 다른 CoNS보다 공격적인 감염을 일으킬 수 있고, 반복 양성·device·채혈 세트 수에 따라 오염과 진성 균혈증을 구분한다.",
  },
  "borrelia-clinical-group": {
    members: ["Lyme borreliosis group (`B. burgdorferi` sensu lato)", "relapsing-fever Borrelia"],
    exception: "Lyme borreliosis와 relapsing fever는 vector, 임상상, 검사 전략과 치료가 달라 group 수준 설명을 서로 대체해 적용하지 않는다.",
  },
  "leptospira-species": {
    members: ["pathogenic `Leptospira` species", "임상적으로 다양한 serovar"],
    exception: "Routine 진료에서 serovar까지 확정하기 어렵고 검사 민감도는 발병 시기에 따라 달라 exposure와 장기 침범을 함께 판단한다.",
  },
  enterovirus: {
    members: ["Enterovirus A-D", "coxsackievirus와 echovirus", "poliovirus, EV-D68, EV-A71"],
    exception: "Enterovirus group은 호흡기·위장관·수막염·심근염·마비 등 임상 범위가 넓어 검체 부위와 serotype에 따라 검출 의미가 달라진다.",
  },
  dermatophytes: {
    members: ["`Trichophyton`", "`Microsporum`", "`Epidermophyton`"],
    exception: "피부사상균은 단일 species가 아니며 감염 부위, 모발·손발톱 침범과 species에 따라 검체 및 topical·systemic 치료 선택이 달라진다.",
  },
  "coccidioides-species": {
    members: ["`Coccidioides immitis`", "`Coccidioides posadasii`"],
    exception: "두 species는 임상적으로 유사하며 routine 진료에서 species 구분보다 노출 지역, 숙주 위험과 파종 여부가 더 중요하다.",
  },
  "cryptosporidium-species": {
    members: ["`Cryptosporidium hominis`", "`Cryptosporidium parvum`과 기타 사람 감염 species"],
    exception: "Species별 역학은 다를 수 있으나 치료 판단은 설사 중증도, 면역상태와 탈수 여부를 우선 반영한다.",
  },
  "intestinal-helminths": {
    members: ["`Ascaris lumbricoides`", "`Trichuris trichiura`", "hookworms", "`Enterobius vermicularis`"],
    exception: "장내 연충은 생활사, 진단 검체, 약제와 반복 투여 필요성이 서로 달라 group 수준 치료를 일괄 적용하지 않는다.",
  },
  "tissue-helminths": {
    members: ["`Schistosoma`", "filariae", "`Echinococcus`", "`Trichinella`와 기타 조직 침범 helminth"],
    exception: "조직 연충은 침범 장기와 생활사가 크게 달라 serology·영상·조직검사 및 약물·수술 전략을 개별적으로 선택한다.",
  },
};

let changed = 0;
for (const [id, addition] of Object.entries(additions)) {
  const entity = registry.entities.find((item) => item.id === id);
  if (!entity) throw new Error(`Missing clinical group: ${id}`);
  const notePath = path.join(microbiologyRoot, entity.noteSourceFile);
  let text = fs.readFileSync(notePath, "utf8");
  text = text.replace("## 동정 및 분류", "## 정의와 범위");
  if (!text.includes("## 주요 구성 병원체")) {
    const memberBlock = addition.members.map((item) => `- ${item}`).join("\n");
    const classification = (entity.classification ?? []).map((item) => `\`${item}\``).join(", ");
    text = text.replace(
      "## 저장소와 전파",
      `## 주요 구성 병원체\n\n${memberBlock}\n\n## 공통 동정 특징\n\n- 이 임상군의 공통 분류 단서는 ${classification || "임상 증후군과 동정 결과"}이며, 최종 해석은 가능한 species 수준 동정을 우선한다.\n\n## 저장소와 전파`,
    );
  }
  text = text.replace("## 비고", `## 주요 예외\n\n- ${addition.exception}`);
  fs.writeFileSync(notePath, text, "utf8");
  changed += 1;
}

console.log(`Standardized ${changed} clinical-group notes.`);
