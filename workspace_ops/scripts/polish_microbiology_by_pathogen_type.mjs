import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "../..");
const microbiologyRoot = path.join(repoRoot, "source_notes", "09 Microbiology");
const registryPath = path.join(microbiologyRoot, "_data", "microorganism-registry.json");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

const replacements = {
  bacterium: {
    pathogenesis: "- 임상 표현은 침범 부위, inoculum, capsule·toxin·adhesin·biofilm 같은 virulence factor와 숙주 방어 상태의 상호작용으로 결정된다.",
    interpretation: "- 비무균 부위 검출은 colonization·오염·감염을 검체 품질, 균량, 염증 소견과 임상 증후군으로 구분한다.",
    risk: "- 연령, 면역저하, 해부학적 장벽 손상, invasive device, 최근 항생제와 의료노출을 위험도 평가에 반영한다.",
    complication: "- 중증 또는 비전형적 경과에서는 bacteremia, metastatic focus, abscess와 source control 필요성을 재평가한다.",
    diagnosis: "- 검체 종류와 품질, 채취 시점, Gram stain·배양·동정·감수성검사 결과를 임상 증후군과 함께 해석한다.",
    treatment: "- 약제·용량·기간은 감염 부위, 중증도, 감수성, source control, 장기기능과 최신 지침을 기준으로 결정한다.",
    failure: "- 반응이 불충분하면 진단 오류, 부적절한 검체, 내성, 약물 노출, deep focus와 source control 실패를 순서대로 재평가한다.",
    prevention: "- 격리, 접촉자 관리와 신고 여부는 전파 방식, 지역 공중보건 규정 및 기관 감염관리 지침에 따라 결정한다.",
  },
  virus: {
    pathogenesis: "- 조직 tropism, 바이러스 복제, 직접 cytopathic effect와 숙주 면역반응이 장기 손상과 임상 중증도를 결정한다.",
    interpretation: "- NAAT 양성은 nucleic acid 검출을 뜻하므로 증상, 검체 부위, 발병 시점과 prolonged shedding 가능성을 함께 해석한다.",
    risk: "- 연령, 임신, 면역저하, 기저 장기질환과 vaccination 상태를 중증도 및 합병증 위험 평가에 반영한다.",
    complication: "- 중증 또는 비전형적 경과에서는 하기도·중추신경계·간 등 장기 침범, coinfection과 면역상태를 재평가한다.",
    diagnosis: "- NAAT·antigen·serology의 적응증과 검출 창은 서로 다르므로 검체 종류, 발병 시점과 면역상태를 함께 해석한다.",
    treatment: "- antiviral 적응증, 약제·용량·기간은 발병 시점, 중증도, 숙주 면역, 장기기능과 최신 지침을 기준으로 결정한다.",
    failure: "- 반응이 불충분하면 진단 오류, 검체 시점, coinfection, 약물 노출, 내성과 면역저하 상태를 재평가한다.",
    prevention: "- vaccination, 노출 후 예방, 격리와 신고 여부는 전파 방식, 지역 공중보건 규정 및 기관 지침에 따라 결정한다.",
  },
  fungus: {
    pathogenesis: "- 포자 흡입·효모 증식·균사 침윤 등 병원체 형태와 숙주 면역반응이 질환 양상과 침습성을 결정한다.",
    interpretation: "- 호흡기·피부 등 비무균 부위 검출은 colonization·오염과 침습 감염을 숙주 위험인자, 영상 및 조직검사로 구분한다.",
    risk: "- neutropenia, transplant, corticosteroid·면역억제제, 구조적 폐질환과 장기간 invasive device 여부를 확인한다.",
    complication: "- 침습 감염이 의심되면 혈관·중추신경계 등 dissemination, 면역회복 가능성과 수술 필요성을 함께 평가한다.",
    diagnosis: "- 배양·현미경·histopathology·antigen·molecular test의 성능은 검체와 숙주군에 따라 달라 임상·영상 소견과 통합한다.",
    treatment: "- antifungal 선택·용량·기간은 병원체, 감염 부위, 면역상태, 장기기능, drug interaction과 최신 지침에 따른다.",
    failure: "- 반응이 불충분하면 colonization 오판, 약물 노출, 내성, 면역회복 지연, deep focus와 수술 필요성을 재평가한다.",
    prevention: "- 환경 노출 관리, 선택적 prophylaxis와 격리 여부는 숙주 위험도, 전파 방식 및 기관 감염관리 지침에 따른다.",
  },
  protozoan: {
    pathogenesis: "- 생활사 단계, 침범 세포·장기, parasite burden과 숙주 면역반응이 임상 양상과 중증도를 결정한다.",
    interpretation: "- 현미경·antigen·NAAT 결과는 검체 채취 시점, 유행지역 노출과 임상 증후군을 함께 해석한다.",
    risk: "- 여행·거주지, 음식과 물, vector 노출, 임신 및 면역저하 여부를 중증도와 재활성화 위험 평가에 반영한다.",
    complication: "- 중증 또는 비전형적 경과에서는 높은 parasite burden, 장기 침범, 재활성화와 면역저하 상태를 재평가한다.",
    diagnosis: "- 병원체의 생활사와 검출 창을 고려해 적절한 검체와 현미경·antigen·NAAT·serology를 선택하고 필요하면 반복한다.",
    treatment: "- antiparasitic regimen은 종, 감염 단계와 부위, 중증도, 임신, 면역상태 및 지역 내성 정보를 반영한다.",
    failure: "- 반응이 불충분하면 종 동정, parasite burden, 약물 흡수·노출, 재감염과 면역저하 상태를 재평가한다.",
    prevention: "- vector·식수·식품·성접촉 등 전파 경로에 맞춘 예방과 신고 여부를 지역 공중보건 지침에 따라 적용한다.",
  },
  helminth: {
    pathogenesis: "- 성충 또는 유충의 조직 이동, parasite burden과 숙주 염증반응이 증상 및 장기 손상을 결정한다.",
    interpretation: "- 충란·유충 검출, serology와 eosinophilia는 생활사와 감염 시기에 따라 달라 노출력 및 장기 침범과 함께 해석한다.",
    risk: "- 유행지역 거주·여행, 토양·담수·식품 노출, 면역억제 예정 여부와 중추신경계·안구 침범 가능성을 확인한다.",
    complication: "- 중증 또는 비전형적 경과에서는 hyperinfection, 조직 내 낭종, 담도·폐·중추신경계 침범과 parasite burden을 평가한다.",
    diagnosis: "- 생활사에 맞는 stool·blood·tissue 검체와 현미경·serology·영상검사를 선택하며 단회 음성으로 배제하지 않는다.",
    treatment: "- 구충제 선택과 반복 투여 여부는 종, 생활사 단계, 조직 침범, 임신과 면역상태 및 최신 지침에 따른다.",
    failure: "- 반응이 불충분하면 종 동정, 치료 단계, 재감염, 약물 흡수와 면역억제에 따른 hyperinfection 가능성을 재평가한다.",
    prevention: "- 위생, 식품 조리, 토양·담수 노출 회피와 고위험군 screening을 전파 경로와 지역 역학에 맞춰 적용한다.",
  },
  ectoparasite: {
    pathogenesis: "- 피부 내 기생과 분비물에 대한 지연형 과민반응이 소양감과 피부 병변을 유발한다.",
    interpretation: "- 임상 병변과 접촉력, dermoscopy 또는 피부 긁개 검사를 함께 보며 검사 음성만으로 배제하지 않는다.",
    risk: "- 밀접 생활환경, 집단시설, 돌봄 의존, 면역저하와 crusted infestation 가능성을 확인한다.",
    complication: "- 광범위 또는 비전형적 병변에서는 crusted disease, 이차 세균감염과 접촉자 동시 치료 누락을 평가한다.",
    diagnosis: "- 병변 분포와 접촉력을 우선 확인하고 가능한 경우 mite·egg·fecal pellet을 직접 확인한다.",
    treatment: "- 치료제 선택과 반복 시점은 병변 범위, 연령, 임신, 면역상태와 접촉자 관리 필요성을 반영한다.",
    failure: "- 지속 증상은 치료 후 소양감, 재노출, 접촉자 미치료, 도포 오류와 crusted disease를 구분한다.",
    prevention: "- 동거인·밀접 접촉자 동시 평가, 환경 세탁과 접촉주의를 기관 및 공중보건 지침에 따라 적용한다.",
  },
};

const generic = {
  pathogenesis: "- 감염 여부와 중증도는 병원체의 virulence뿐 아니라 감염 부위, inoculum, 숙주 면역과 해부학적 장벽에 좌우된다.",
  interpretation: "- 비무균 부위 검출은 집락화·오염·질환 가능성을 검체 품질과 임상상으로 구분한다.",
  risk: "- 면역저하, 장기·해부학적 장벽 손상, invasive device와 의료노출 여부를 확인한다.",
  complication: "- 중증 또는 비전형적 경과에서는 dissemination, 합병증과 source control 필요성을 재평가한다.",
  diagnosis: "- 검사 결과는 검체 종류, 채취 시점, 선행 항균치료와 임상 증후군을 함께 고려해 해석한다.",
  treatment: "- 정확한 약제·용량·기간은 감염 부위, 중증도, 숙주 상태, 장기기능과 최신 지침을 기준으로 결정한다.",
  failure: "- 예상보다 반응이 나쁘면 오진, 부적절한 검체, 약물노출, 내성, deep focus와 source control 실패를 순서대로 재평가한다.",
  prevention: "- 신고·접촉자 조사·격리 여부는 지역 공중보건 규정과 기관 감염관리 지침을 따른다.",
};

let changed = 0;
for (const entity of registry.entities) {
  const replacement = replacements[entity.pathogenType];
  if (!replacement) continue;
  const notePath = path.join(microbiologyRoot, entity.noteSourceFile);
  let text = fs.readFileSync(notePath, "utf8");
  const before = text;
  for (const [key, sentence] of Object.entries(generic)) {
    text = text.replaceAll(sentence, replacement[key]);
  }
  if (text !== before) {
    fs.writeFileSync(notePath, text, "utf8");
    changed += 1;
  }
}

console.log(`Polished ${changed} microbiology notes with pathogen-type-specific clinical context.`);
