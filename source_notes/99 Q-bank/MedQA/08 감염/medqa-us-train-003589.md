---
type: qbank
schema_version: 1
id: medqa-us-train-003589
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8408b78e56931ef9e73370c2e65c3bbff59278f8b9caded6f2f5b1d317c50eff
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Mycoplasma pneumoniae"
  - "cold agglutinin hemolysis"
  - "atypical pneumonia"
  - "low complement"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uvuOy9lO2UjOudvOyKpOuniCAoTXljb3BsYXNtYSkubWQ
  - MDIg7Zi47Z2h6riwL-u5hOygle2YlSDtj5DroLQgKEF0eXBpY2FsIFBuZXVtb25pYSkubWQ
question_type: association
difficulty: complex
answer: A
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

24세 여성이 2주간 호전되지 않는 마른기침, 인후통, 근육통으로 내원했다. 양쪽 폐야에 수포음이 있고 피부와 결막이 창백했다. 독감 백신은 맞았고 결핵 피부검사는 음성이었다. 흉부 X선이 제시되었다. 다음 중 이 환자에서 흔히 함께 나타나는 검사 소견은?

## 선택지

A. 혈청 보체 수치 감소
B. 혈청 페리틴과 철 감소
C. 말초혈액도말의 분열적혈구
D. 말초혈액도말의 하인츠 소체

## 해설


젊은 성인의 아급성 비정형 폐렴과 창백은 Mycoplasma와 관련된 한랭항체 용혈을 의심하게 한다. 한랭반응 IgM이 적혈구 항원에 결합하여 보체를 활성화하므로 보체 수치가 낮아지는 A가 가능하다. 이는 표적 세포에 대한 항체 매개 기전이지 단순 제III형 면역복합체 침착으로 설명할 현상이 아니다. 누락된 X선의 구체적 소견을 관찰했다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003589 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Mycoplasma 관련 한랭항체 용혈의 보체 소비를 면역복합체 반응으로 설명한 오류 교정; A 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003589
