---
type: qbank
schema_version: 1
id: medqa-us-train-006814
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3a34340540a0aa03b281f24515aead111fe47788ac7b63ab3837727980c92303
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "시가독소 생성 대장균"
  - "용혈성 요독 증후군"
  - "혈성 설사"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDsmpTrj4Ug7Kad7ZuE6rWwIChIZW1vbHl0aWMgVXJlbWljIFN5bmRyb21lLCBIVVMpLm1k
question_type: prognosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

32세 남성이 동네 바비큐에서 핫도그를 먹은 후 며칠 뒤 설사가 발생해 내원했다. 눈에 보이는 혈성 설사지만 발열은 없다. 동네의 다른 사람들도 같은 바비큐 음식을 먹고 유사한 증상을 보였으며 많은 사람이 입원했다. 체온은 37°C(98.6°F), 호흡수는 분당 16회, 맥박은 분당 77회, 혈압은 100/88 mm Hg이다. 신체진찰은 정상이다. 혈액검사에서 혈색소 12 g/dL, 백혈구 13,100/mm³(호중구 80%), ESR 10 mm/h, 포도당 90 mg/dL, BUN 21 mg/dL, 크레아티닌 1.96 mg/dL, 나트륨 138 mmol/L, 칼륨 5.2 mmol/L, 염소 103 mmol/L, 총 빌리루빈 2.5 mg/dL 등이었다. 소변검사는 적혈구 원주 외에는 정상이다. 가장 우려되는 합병증은?

## 선택지

A. 파종성 혈관내 응고
B. 용혈성 요독 증후군
C. 회전성 안진
D. 길랭-바레 증후군

## 해설


집단 식중독의 무열성 혈성 설사와 신기능 이상은 STEC 및 HUS B를 우려하게 한다. HUS는 미세혈관성 용혈·혈소판감소·신손상의 조합으로 평가하지만 여기에는 혈소판 결과가 없어 이미 모두 확인되었다고 쓸 수 없다. 대변 Shiga toxin/배양·용혈/혈소판·신기능을 추적하며 혈변만으로 원인균을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006814 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈성 설사가 곧 STEC 확진이라는 설명 교정; 급성 신손상 후 HUS B 위험 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006814
