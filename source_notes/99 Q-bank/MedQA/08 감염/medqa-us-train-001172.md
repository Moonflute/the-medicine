---
type: qbank
schema_version: 1
id: medqa-us-train-001172
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4f9113e8bb2aaa9b35ec592b2aabb44ef9ab12a3269c3061d2d946914391b29
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Crohn disease"
  - "urethritis"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOuPhOyXvCAoVXJldGhyaXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRXJ5dGhyb215Y2luLm1k
---

# MedQA US 임상문제

## 문제

32세 남성이 지난 3일간 배뇨 시 심한 작열감으로 내원하였다. 이 기간 동안 아침 일찍 맑은 요도 분비물이 있었다. 20년 전 에리스로마이신(erythromycin) 치료 후 발진이 발생한 것 외에는 심각한 질병 과거력은 없다. 환자는 복용 중인 약물은 없다. 남성 파트너 1명, 여성 파트너 1명과 성생활을 하고 있으며, 콘돔을 일관되게 사용하지 않는다. 남동생은 24세에 크론병(Crohn disease)을 진단받았다. 환자는 흡연하지 않는다. 주말에 맥주 1~2잔을 마신다. 건강해 보인다. 체온은 36.8°C, 맥박은 75회/분, 혈압은 135/78 mmHg이다. 신체 검진상 이상 소견은 없다. 요도 도말 표본의 그람 염색에서 중성구는 보이나 균은 관찰되지 않는다. 가장 가능성이 높은 원인 병원체는 무엇인가?

## 선택지

A. Neisseria gonorrhoeae
B. Adenovirus
C. Trichomonas vaginalis
D. Chlamydia trachomatis

## 해설


성접촉 후 배뇨통과 맑은 요도 분비물이 있으며 Gram 염색에서 호중구만 보이고 세균이 관찰되지 않아 비임균성 요도염이 시사된다. Chlamydia trachomatis는 세포내 세균으로 일반 Gram 염색에서 잘 보이지 않으므로 D가 가장 부합한다. 이는 비감염성 질환이나 방광염을 뜻하지 않는다. 원인 확진은 적절한 검체의 NAAT로 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001172 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 비감염성 요도염/비세균성 방광염이라는 오류를 Chlamydia 비임균성 요도염으로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001172
