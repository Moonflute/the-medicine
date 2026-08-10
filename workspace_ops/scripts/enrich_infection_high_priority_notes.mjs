import fs from "node:fs";
import path from "node:path";

const diseaseRoot = path.resolve(import.meta.dirname, "..", "..", "source_notes", "02 Diseases");

function findBySuffix(suffix) {
  const matches = [];
  const visit = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(target);
      if (entry.isFile() && entry.name.endsWith(suffix)) matches.push(target);
    }
  };
  visit(diseaseRoot);
  if (matches.length !== 1) throw new Error(`Expected one ${suffix} note, found ${matches.length}.`);
  return matches[0];
}

function replaceBody(filePath, body) {
  const source = fs.readFileSync(filePath, "utf8");
  const marker = "분과 : [[감염]]";
  const markerAt = source.indexOf(marker);
  if (markerAt === -1) throw new Error(`Missing infection marker: ${filePath}`);
  const prefix = source.slice(0, markerAt + marker.length);
  fs.writeFileSync(filePath, `${prefix}\n\n${body.trim()}\n`, "utf8");
}

replaceBody(findBySuffix("(Legionella).md"), `
## 1. 개요
- **정의**: *Legionella* 감염은 중증 폐렴인 Legionnaires' disease와 자가 제한성 독감 유사 질환인 Pontiac fever를 포함한다.
- **전파**: 냉각탑, 급수·온수 시스템, 샤워기, 분무 장치 등에서 발생한 오염 에어로졸을 흡입해 감염된다. 일반적인 사람 간 전파는 보고되지 않는다.
- **핵심**: 임상 양상이나 흉부 영상만으로 다른 원인 폐렴과 구분할 수 없으므로, 노출력과 적절한 검체 검사가 중요하다.

## 2. 임상 정보
- **Legionnaires' disease**: 발열, 기침, 호흡곤란, 흉통과 함께 두통, 근육통, 혼돈, 설사 등 전신·폐외 증상이 동반될 수 있다.
- **고위험군**: 고령, 흡연, 만성 폐질환, 면역저하, 최근 의료기관 입원 또는 여행·숙박력이 있는 환자에서 중증 위험이 높다.
- **Pontiac fever**: 폐렴 없이 발생하는 자가 제한성 발열성 질환이다. Legionnaires' disease와 치료 원칙이 다르므로 구분한다.

## 3. 진단
- **검사를 적극 고려할 상황**: 외래 항생제 치료 실패, 중증/ICU 폐렴, 면역저하, 최근 여행·숙박 또는 의료기관 노출, 알려진 환경 노출·집단발생 연관이 있는 폐렴.
- **권장 검체 조합**: 하기도 검체(객담 또는 BAL)의 배양 또는 molecular test와 소변 항원 검사를 함께 시행한다. 소변 항원은 주로 *L. pneumophila* serogroup 1을 검출하므로 단독 음성으로 모든 *Legionella* 감염을 배제하지 않는다.
- 가능하면 항생제 전 하기도 검체를 채취하되, 검체 채취 때문에 항생제 투여를 지연하지 않는다.
- 저나트륨혈증, 간수치 상승 등은 보조 소견일 뿐 진단 검사가 아니다.

## 4. 치료 원칙
- Legionnaires' disease는 폐렴의 중증도·지역 내성·입원 환경에 따라 CAP/HAP 지침에 맞춰 치료하며, Legionella-directed activity가 필요한 상황에서는 macrolide 또는 respiratory fluoroquinolone을 고려한다.
- 약제 선택, 투여 경로, 기간은 중증도, 면역 상태, 임상 반응, QT 연장·약물 상호작용·신기능을 함께 고려한다. 중증 또는 면역저하 환자는 감염내과/호흡기 전문의 협진을 고려한다.
- Pontiac fever에는 항생제를 처방하지 않는다.

## 5. 감염관리 및 공중보건
- 일반적인 사람 간 전파는 없어 표준주의가 기본이다. 다만 의료기관·여행 관련 사례는 노출원 조사와 추가 사례 예방을 위해 지역 공중보건 체계에 신속히 연계한다.
- 노출력은 증상 시작 전 약 14일을 중심으로 급수시설, 의료기관 체류, 여행·숙박을 확인한다.

## 6. 처방·추적 포인트
- 경험적 폐렴 치료가 Legionella coverage를 갖는지 확인하되, 진단 검체 확보와 치료 지연 방지를 동시에 수행한다.
- 임상 악화, 호흡부전, 다장기 이상 또는 면역저하가 있으면 입원·중환자 치료 필요성을 재평가한다.

## 출처
- CDC. Clinical Guidance for Legionella Infections (2025).
- CDC. Legionella: Legionnaires' Disease and Pontiac Fever (2025).
`);

replaceBody(findBySuffix("(Pseudomembranous Colitis).md"), `
## 1. 개요
- **정의**: *Clostridioides difficile* infection (CDI)은 독소 생성 균에 의해 발생하는 설사·대장염이며, 내시경에서 거짓막이 보일 수 있다.
- **위험 요인**: 최근 항생제 노출, 의료기관 노출, 고령, 위산분비억제제 사용, 면역저하, 이전 CDI 병력이 위험을 높인다.
- **핵심**: 보균과 감염을 구분해야 하며, 설사 없는 환자에서 NAAT 양성만으로 CDI를 진단하지 않는다.

## 2. 임상 정보
- 새로 발생한 수양성 설사, 복통, 발열, 백혈구 증가, 신기능 악화가 흔하다.
- 심한 복통, 복부팽만, 장폐색, 저혈압·쇼크, lactate 상승은 fulminant disease와 toxic megacolon을 시사할 수 있다.

## 3. 진단
- 다른 원인이 뚜렷하지 않은 새 설사 환자, 통상 24시간 내 3회 이상의 성형되지 않은 변을 우선 검사 대상으로 한다.
- 기관의 검사 알고리즘에 따라 GDH/toxin EIA와 NAAT를 조합한다. 임상 증상과 검사 결과가 맞지 않으면 보균 가능성을 재평가한다.
- 치료 반응 확인 목적의 test of cure와 증상 없는 환자의 반복 검사는 권장하지 않는다.
- 복잡성 CDI 또는 ileus/toxic megacolon이 의심되면 복부 영상과 조기 외과 협진을 고려한다.

## 4. 치료 원칙
- 가능하면 유발 가능성이 높은 불필요 항생제를 중단 또는 축소하고, 수액·전해질·복부 진찰·백혈구 및 신기능을 함께 관리한다.
- 성인 초기 CDI에서는 fidaxomicin을 우선 고려하고, 접근성·자원에 따라 경구 vancomycin을 대안으로 사용한다. 재발에서는 이전 치료, 재발 횟수, 고위험 인자를 바탕으로 fidaxomicin, vancomycin taper/pulse 또는 재발 예방 전략을 개별화한다.
- fulminant disease는 경구/비위관 vancomycin 기반 치료, ileus 시 직장 투여 고려, 정주 metronidazole 병용 및 조기 외과 평가가 필요할 수 있다. 세부 용량과 수술 적응증은 최신 지침과 현지 프로토콜을 따른다.
- bezlotoxumab은 최근 재발 또는 재발 고위험 환자에서 선택적으로 고려할 수 있으며, 심부전 병력에서는 위해-편익을 신중히 판단한다.

## 5. 감염관리
- 설사 환자는 즉시 contact precautions를 적용하고, 장갑·가운 사용과 손 위생을 강화한다. 포자 오염이 우려되는 환경은 sporicidal agent를 사용해 청소한다.
- 비누와 물을 이용한 손 위생을 우선 고려하며, 환자 이동과 공용 장비 사용을 최소화한다.

## 6. 추적 포인트
- 치료 중 설사량, 활력징후, 복부 소견, 백혈구와 creatinine을 추적해 중증도 변화를 확인한다.
- 재발은 흔하므로 퇴원 시 재발 증상, 불필요 항생제 회피, 조기 재진 기준을 안내한다.

## 출처
- SHEA/IDSA. 2021 Focused Update Guidelines on Management of *Clostridioides difficile* Infection in Adults.
- CDC. C. diff clinical resources.
`);
