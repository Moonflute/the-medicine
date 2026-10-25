---
type: qbank
schema_version: 1
id: medqa-us-test-001062
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c1af41fe9eb283da205fac4dcf52f198a750b1d0e2aca301493c64019e5344dc
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상선 폭풍"
  - "갑상선기능항진증"
  - "프로프라놀롤"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 여성이 혼돈, 불안, 발한, 구토로 응급실에 왔다. 메티마졸을 복용하다 약 일주일 전 중단했고 5일 전 상기도 감염이 있었다. 체온 105°F(40.6°C), 혈압 95/68 mmHg, 맥박 145회/분, 호흡 23회/분이며 초조하고 땀이 나며 갑상선종, 안구돌출, 따뜻한 피부, 손떨림이 있었다. 정맥 수액을 시작했다. 가장 적절한 치료는?

## 선택지

A. 항생제
B. 경동맥 마사지
C. 클로나제팜
D. 프로프라놀롤

## 해설

정답은 D이다. 항갑상샘약 중단과 감염 뒤 고열·심한 빈맥·의식변화가 나타나 갑상샘폭풍이 의심된다. 제시된 약 중 β차단제 propranolol이 교감신경 증상 완화에 해당한다. 그러나 이것만 투여하고 끝내는 응급질환이 아니며 항갑상샘약, 그 뒤 요오드, glucocorticoid와 지지요법·유발 원인 치료가 함께 필요하다. 저혈압이나 저심박출 심부전이 있으면 β차단으로 악화될 수 있어 혈역학적 평가와 집중 감시하에 신중히 선택한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 갑상샘폭풍에 propranolol 단독이면 충분하다는 인상을 없애고 저혈압 시 위험과 복합치료를 명시.
- https://doi.org/10.1089/thy.2016.0229

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001062
