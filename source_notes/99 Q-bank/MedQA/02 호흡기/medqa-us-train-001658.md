---
type: qbank
schema_version: 1
id: medqa-us-train-001658
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:75fc8d969c291a6c9fa3f696ae256d792a1f83e37e00d2e99c854203701fa659
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "obstructive sleep apnea"
  - "secondary hypertension"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: mechanism
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 남성이 1년 동안 간헐적으로 욱신거리는 두통으로 내원했다. 아침에 심하고 다른 증상은 없다. 업무 집중에도 어려움이 있다. 아내는 수면 중 코를 곤다고 하며 환자는 만성 부비동염 탓이라고 한다. 고혈압과 집먼지진드기 알레르기가 있고 14년 동안 하루 한 갑을 피웠다. 맥박은 72회/분, 혈압은 150/95 mm Hg, 키 178 cm, 체중 120 kg, BMI 37.9 kg/m2이다. 신경학적·피부검사는 정상이다. 다음 중 고혈압의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 순환 유리 티록신 저하
B. 야간 상기도 폐색
C. 뇌하수체 종양
D. 시냅스 세로토닌 저하

## 해설

비만과 코골이, 아침에 심한 두통·집중력 저하 및 고혈압은 폐쇄성 수면무호흡을 의심하게 한다. 야간 상기도 폐색(B)이 반복되는 저산소증과 각성을 통해 교감신경 활성화를 높이고 고혈압에 기여할 수 있다. 증상만으로 확진하지 않으며 실제 평가에서는 수면 관련 검사를 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 본문에 없는 주간졸림을 사실로 추가하지 않고 코골이·아침두통·집중저하의 OSA 및 교감신경 기전 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001658
