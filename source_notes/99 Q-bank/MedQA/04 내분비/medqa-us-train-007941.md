---
type: qbank
schema_version: 1
id: medqa-us-train-007941
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a09a885ae6590c3b9fe697b33b9f2c14f8db4ed2609302c401f67f3829bd84c3
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic peripheral neuropathy"
  - "microvascular damage"
  - "type 2 diabetes mellitus"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: mechanism
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

53세 여성이 발목 통증으로 내원했다. 전날 울퉁불퉁한 지면을 걷다가 우측 발목을 안쪽으로 접질렀다. 통증 강도는 10점 만점에 6점이다. 발목에 체중을 실어 걸을 수 있다. 3주 전 이틀간 지속된 위장염이 있었지만 자연히 호전되었다. 제2형 당뇨병, 고혈압, 고지혈증이 있다. 엄마는 갑상선기능저하증, 아버지는 제2형 당뇨병과 만성신부전이 있다. 일주일에 맥주 8~10병을 마시고 흡연이나 불법 약물 사용은 하지 않는다. 엄격한 채식 식단을 따른다. 우측 발목 외측에 부종이 있고 외번 시 통증과 외측 복사뼈 압통이 있다. 발은 따뜻하고 피부는 건조하며 족부 맥박은 만져진다. 엄지발가락 발바닥과 등쪽의 가벼운 촉각 감각이 감소되어 있으나 운동 범위와 근력은 정상이다. HbA1c 8.1%이고 MCV 82 μm³이다. 다음 중 이 환자의 감각 저하 원인은?

## 선택지

A. 급성 염증성 탈수초성 다발신경근병증
B. 약물 부작용
C. 비타민 B12 결핍
D. 미세혈관 손상

## 해설


정답 D. 조절불량 당뇨병에서 말초 감각 저하는 대사성 신경손상과 미세혈관 손상에 의한 당뇨신경병증을 고려하게 한다. 미세혈관 허혈이 유일한 기전은 아니다. 원문에 metformin 복용과 엄격한 채식이 있어 B12 결핍도 감별해야 하며 정상 MCV만으로 신경학적 B12 결핍이 배제되지는 않는다. 운동 약화 없는 국소 원위 감각 소견은 급성 전신 탈수초성 마비와는 덜 부합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007941 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 당뇨신경병증의 미세혈관 손상 D는 기전 일부이며 B12 위험·정상MCV의 한계 언급; 원문 약제 누락만으로 정상판정하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://medlineplus.gov/diabeticnerveproblems.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007941
