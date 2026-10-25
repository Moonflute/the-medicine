---
type: qbank
schema_version: 1
id: medqa-us-train-002788
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c1206a630501036955c4026dbc3b9b978d43ff4d9f8641d105cc5955ee422462
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "simple ovarian cyst"
  - "functional ovarian cyst"
  - "premenopausal adnexal mass"
  - "follow-up ultrasound"
question_type: management
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 연례 정기검진을 위해 내원했다. 월경은 28일 간격으로 규칙적이고 4일간 정상량으로 지속되며 마지막 월경은 3주 전이었다. 한 남성과 성생활을 하고 콘돔을 일관되게 사용한다. 키 160 cm, 체중 72 kg, BMI 28.1 kg/m²이다. 특별한 증상은 없다. 골반검사에서 매끄럽고 움직이는 오른쪽 부속기 종괴가 만져졌다. 이후 골반 초음파에서 오른쪽 난소에 얇고 매끄러운 벽을 가진 2 cm 크기의 둥글고 저에코인 종괴 하나가 보였다. 후벽 증강이 있고 종괴 내부에 혈류나 격막은 없다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 진단적 복강경검사
B. CA-125 수치 측정
C. 경구피임약
D. 추적검사

## 해설

얇고 매끄러운 벽·무격막·내부 혈류가 없는 2 cm 병변은 생리적 난포·단순낭종에 합당하다. D의 보존적 진료가 적절하며 즉시 수술·CA-125·피임약이 필요하지 않다. 고품질 영상에서 확실한 생식연령 ≤3 cm 단순낭종은 정기 초음파 추적도 대개 필요 없다. 불확실하거나 증상·성장이 있으면 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 생식연령2cm단순낭종에6–12주초음파를일률강제한설명수정.
- https://pubs.rsna.org/doi/10.1148/radiol.2019191354

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002788
