---
type: qbank
schema_version: 1
id: medqa-us-train-006357
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e5d5a67db56d0980c9c8469c9032cc2e5e840eb459df7bb320decfe5a290751f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "지주막하출혈"
  - "벼락두통"
  - "수막자극징후"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고혈압과 46갑년의 흡연력이 있는 77세 남성이 6시간 전 시작되어 지속되는 갑작스러운 두통, 오심, 구토 및 목 통증으로 장기요양시설에서 응급실로 이송되었다. 의식은 명료하지만 요양원 직원에 따르면 평소보다 의식 수준이 약간 저하되어 있다. 체온은 99.0°F(37.2°C), 혈압은 164/94 mmHg, 맥박은 분당 90회, 호흡수는 분당 16회, 실내 공기에서 산소포화도는 98%이다. 신경학적 진찰에서 뇌신경 II~XII는 대체로 정상이고 보행기를 사용하면 보행도 안정적이다. 즉시 시행한 두부 CT는 정상이다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 이부프로펜, 아세트아미노펜, 메토클로프라미드 및 디펜히드라민
B. 요추천자
C. MRI
D. 초음파

## 해설

갑작스러운 심한 두통, 구토와 경부 증상은 지주막하출혈을 의심하게 한다. 증상 시작 약 6시간이 경과했고 정신 상태도 평소보다 저하되어 있으므로 음성 비조영 CT만으로 이를 안전하게 배제할 수 없다. 이런 상황에서 요추천자(B)로 추가 평가하는 것이 적절하다. 발병 6시간 이내의 고품질 CT가 정상이고 신경학적 진찰도 정상인 선택된 환자에게 적용하는 배제 전략을 이 사례에 그대로 적용해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 증상 6시간 경과 및 정상 신경 상태가 아닌 환자의 음성 CT 뒤 지주막하출혈 추가 검사 B는 유지하되 모든 음성 CT에 LP가 필요한 것으로 일반화하지 않는다.
- 공식/학회 근거: https://www.ahajournals.org/doi/pdf/10.1161/STR.0000000000000436

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006357
