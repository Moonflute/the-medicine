import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..", "..", "source_notes", "02 Diseases", "02 호흡기");

function replaceBody(fileName, body) {
  const target = path.join(root, fileName);
  const source = fs.readFileSync(target, "utf8");
  const marker = "분과 : [[호흡기]]";
  const markerAt = source.indexOf(marker);
  if (markerAt === -1) throw new Error(`Missing respiratory marker: ${fileName}`);
  fs.writeFileSync(target, `${source.slice(0, markerAt + marker.length)}\n\n${body.trim()}\n`, "utf8");
}

replaceBody("폐결핵 (Pulmonary Tuberculosis).md", `
## 1. 개요
- **정의**: 폐결핵은 *Mycobacterium tuberculosis* complex에 의한 활동성 폐 감염이다. 잠복결핵감염(LTBI)과 활동성 결핵은 진단·치료·감염관리 목적이 다르다.
- **전파**: 전염성 폐·후두 결핵 환자의 비말핵을 흡입해 전파된다. 공동성 병변, 도말 양성, 기침이 지속되는 환자는 전파 위험이 높을 수 있다.
- **핵심**: IGRA/TST 양성은 결핵 감염을 시사하지만 활동성 결핵을 확진하거나 배제하지 못한다. 활동성 의심 시 미생물학적 검체와 감염관리를 우선한다.

## 2. 임상 정보
- 아급성 기침, 객담·객혈, 발열, 야간 발한, 체중 감소가 전형적이지만 비특이적이다.
- 흉부 영상에서 상엽 침윤·공동, tree-in-bud, miliary pattern 등이 보일 수 있으나 영상만으로 확진하지 않는다.
- HIV, 면역억제, 당뇨병, 규폐증, 만성신질환, 영양저하, 결핵 노출력은 발병 위험과 중증도 평가에 포함한다.

## 3. 진단
- 전염성 폐결핵이 의심되면 airborne infection isolation을 적용하고, 객담 AFB smear·mycobacterial culture·NAAT를 확보한다. 객담이 어려우면 유도객담 또는 기관지경 검체를 임상 상황에 맞춰 고려한다.
- NAAT/Xpert MTB/RIF 계열 검사는 빠른 확인과 일부 내성 정보에 도움이 되지만, 음성 결과만으로 활동성 결핵을 배제하지 않으며 배양·약제감수성검사를 대체하지 않는다.
- 배양 분리주 기반 약제감수성검사는 치료 조정의 기준이다. 조직 검사는 필요한 경우 보조적 역할을 하며, caseating granuloma는 특이적이지 않다.
- 활동성 질환을 배제하기 전 LTBI 치료를 시작하지 않는다.

## 4. 치료 원칙
- 치료는 약제감수성, 질환 부위·중증도, 이전 치료력, HIV/임신/간질환, 약물상호작용을 확인해 결핵 전문팀 또는 국내 결핵 지침에 따라 병합요법으로 설계한다.
- 약제감수성 결핵에서는 4개월 또는 6개월 등 적격 환자군별 권고 요법이 있으며, 모든 환자에게 하나의 고정 요법을 적용하지 않는다. 2025 ATS/CDC/ERS/IDSA 업데이트의 4개월 요법 적격 기준을 확인한다.
- 내성 결핵, 중증 약물 이상반응, 치료 실패, HIV 동반, 소아·임신은 전문가 자문이 필요하다. 약제 내성 치료는 감수성 결과를 바탕으로 구성한다.
- 적어도 매월 임상 반응, 복약 순응도, 간기능과 약제별 독성(시력, 말초신경병증, 약물상호작용 등)을 평가한다. DOT/vDOT는 치료 완결을 지원하는 중요한 도구다.

## 5. 감염관리 및 공중보건
- 전염성 가능성이 있는 환자는 음압 환경과 호흡기 보호구를 포함한 airborne precautions를 적용한다.
- 확진 또는 강력히 의심되는 사례는 국내 신고·접촉자 조사 체계와 연계하고, 격리 해제는 임상 경과·치료 반응·미생물학적 자료 및 현지 지침을 함께 고려한다.

## 6. 추적 포인트
- 치료 중 증상·객담·배양·내성 결과를 함께 추적하고, 호전 지연 시 비순응, 약물 흡수, 내성, NTM, 다른 진단을 재평가한다.
- 치료 종료 뒤에도 재발 증상과 잔존 폐질환, 약물 독성 후유증을 평가한다.

## 출처
- CDC. Clinical Treatment of Tuberculosis (2025).
- ATS/CDC/ERS/IDSA. Updates on Treatment of Drug-Susceptible and Drug-Resistant Tuberculosis (2025).
- 대한결핵 및 호흡기학회. 결핵진료지침 5판 (2024).
`);

replaceBody("마이코플라스마 폐렴 (Mycoplasma Pneumonia).md", `
## 1. 개요
- **정의**: *Mycoplasma pneumoniae*에 의한 호흡기 감염으로, 기관지염부터 폐렴까지 다양한 스펙트럼을 보인다.
- **핵심 병태생리**: 세포벽이 없는 세균이므로 beta-lactam 항생제는 표적이 없어 효과가 없다.
- 대부분의 감염은 경미하고 자가 제한적일 수 있으나, 폐렴과 중증 폐외 합병증에서는 치료와 재평가가 필요하다.

## 2. 임상 정보
- 점진적인 기침, 인후통, 발열, 두통, 권태감이 흔하다. 소아·청소년과 밀집 환경에서 집단 발생할 수 있다.
- 영상과 증상만으로 다른 비정형 또는 바이러스성 폐렴과 확실히 구분할 수 없다.
- 호흡곤란 악화, 저산소혈증, 신경학적 증상, 용혈·피부점막 병변 등은 중증 또는 폐외 합병증 평가가 필요하다.

## 3. 진단
- 필요 시 비인두/인후 또는 하기도 검체의 NAAT를 사용한다. 배양은 전문 검사실에서 가능하지만 느려서 즉각적인 치료 판단에는 적합하지 않다.
- 혈청검사와 냉응집소는 단독 확진 검사로 사용하지 않으며, 검사 결과는 임상 양상과 지역 유행을 함께 해석한다.
- 흉부 영상은 폐렴의 범위와 합병증 평가에 사용하되 원인균 특이 소견으로 해석하지 않는다.

## 4. 치료 원칙
- 경미한 감염은 보존적 치료만으로 회복할 수 있다. 폐렴이 의심되거나 확진되면 항생제 치료를 고려한다.
- macrolide가 소아·성인에서 흔히 사용되며, 고연령 소아·성인에서는 tetracycline, 성인에서는 fluoroquinolone도 대안이 될 수 있다.
- macrolide 치료 반응이 불충분하면 내성, 다른 진단, 합병증을 재평가하고 연령·임신·이상반응을 고려해 doxycycline 등 2차 선택지를 검토한다.
- beta-lactam 단독은 *M. pneumoniae*를 치료하지 못한다.

## 5. 감염관리 및 추적
- 기침 예절, 손 위생, 호흡기 증상 시 적절한 마스크 사용과 밀집 환경 노출 감소를 안내한다.
- 호흡부전, 지속 고열, 흉수, 신경학적·피부점막·혈액학적 합병증이 있으면 입원 또는 전문과 평가를 고려한다.

## 출처
- CDC. Clinical Care of *Mycoplasma pneumoniae* Infection (2026).
- CDC. Laboratory Testing for *Mycoplasma pneumoniae* (2026).
`);
