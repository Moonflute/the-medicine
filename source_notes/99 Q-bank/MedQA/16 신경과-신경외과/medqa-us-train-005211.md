---
type: qbank
schema_version: 1
id: medqa-us-train-005211
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d6748008d642c2edeb86e9ef886c49d3ab50fe5c2e969e5a031fb3b310e5eb2e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "급성 허혈성 뇌졸중"
  - "고혈압"
  - "뇌졸중 위험인자"
question_type: prognosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남자가 2시간 전 갑자기 시작된 오른팔 근력저하와 감각저하로 응급실에 왔다. 오른쪽 안면마비와 구음장애도 있으며 고혈압, 고지혈증, 제2형 당뇨병, 말초동맥질환이 있다. 변호사로 일하며 최근 평소보다 스트레스가 많았고, 40년 동안 하루 한 갑씩 흡연했으며 매주 위스키 두 파인트(원문 표기 약 750 mL)를 마신다. 아버지는 70세에 뇌졸중으로 사망했다. 아스피린, 아토르바스타틴, 리시노프릴, 메트포르민을 복용한다. BMI는 37 kg/m²이며 혈압은 143/92 mmHg이다. 의식과 지남력은 명료하다. 다음 중 이 상태의 가장 강한 소인 요인은?

## 선택지

A. 고혈압
B. 과도한 음주
C. 스트레스 증가
D. 고지혈증

## 해설

정답은 A, 고혈압이다. 갑자기 발생한 편측 안면·팔의 신경학적 결손과 구음장애는 급성 뇌졸중을 의심하게 한다. 제시된 위험인자 중 고혈압은 허혈성·출혈성 뇌졸중 모두의 중요한 조절 가능한 위험인자이다. 흡연·당뇨·고지혈증·과음도 위험을 높이지만 이 선택지에서는 고혈압이 가장 적절하다. 임상 소견만으로 출혈성 뇌졸중을 배제하거나 허혈성으로 확진할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정답 A와 위험인자 해설은 일관되나 한국어 요약에서 선택지 B/C를 판단할 음주량/스트레스 노출이 누락됨. 영어 원문 정보 복원, 영상 전 허혈성 확진 단정 완화.
- 공식/학회 근거: https://www.ninds.nih.gov/health-information/stroke/prevention

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005211
