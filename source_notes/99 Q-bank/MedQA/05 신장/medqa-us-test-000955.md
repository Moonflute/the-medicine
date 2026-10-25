---
type: qbank
schema_version: 1
id: medqa-us-test-000955
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:a660087ba18872699607891faeb957b42462baa81436325e8315633f8de4a3e9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급성 간질성 신염"
  - "NSAID 유발 신염"
  - "약물 발진"
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yVveusvCDrsJzsp4QgKERydWcgRXJ1cHRpb24pLm1k
  - MDUg7Iug7J6lL-yVjOugiOultOq4sOyEsSDshLjqtIDsgqzsnbTsp4gg7L2p7Yyl7Je8IChBbGxlcmdpYyBJbnRlcnN0aXRpYWwgTmVwaHJpdGlzKS5tZA
  - MDUg7Iug7J6lL-yEuOq0gOyCrOydtOyniCDsvantjKXsl7wgKFR1YnVsb2ludGVyc3RpdGlhbCBOZXBocml0aXMpLm1k
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 백인 여성이 4일간 발열, 권태감, 구토, 오심으로 응급실에 왔다. 이부프로펜과 디클로페낙을 복용한 뒤 소변량도 감소했다. 체온 38.2°C(100.7°F), 혈압 118/76 mmHg, 맥박 74회/분, 호흡 15회/분이었다. 점막은 촉촉하고 복부 압통은 없었다. 입원 4시간 후 소변량이 0.3 mL/kg/h 미만으로 감소했고 크레아티닌 1.9 mg/dL, BUN 25 mg/dL, Na 135, K 5.4 mEq/L였다. 요검사에서 비중 1.010, pH 6.2, 고배율당 적혈구 2개, 백혈구 원주가 보였다. 이 환자에게 예상되는 피부 소견은?

## 선택지

A. Janeway 병변
B. 미만성 반구진성 발진
C. 나비형 발진
D. 결절홍반

## 해설

정답은 B이다. NSAID 노출 뒤 AKI·백혈구 원주와 전신 증상은 약물성 급성 간질성 신염을 시사하며 반구진성 발진이 동반될 수 있다. 대표 기전은 약물 관련 세포매개 과민반응이지 전형적인 면역복합체 사구체 손상이 아니다. NSAID 관련 AIN에서는 발진·발열·호산구증가가 없을 수도 있다. Janeway 병변은 심내막염, 나비형 발진은 SLE와 관련되고 결절홍반은 여러 염증/감염 원인에 동반될 수 있어 RA에만 연결하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 약물성 AIN을 면역복합체 반응이라고 한 오류와 결절홍반=RA라는 부정확한 연결 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000955
