---
type: qbank
schema_version: 1
id: medqa-us-train-006932
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f2a85018ad033505c9b52f694a96a80c25161863b239724dad1b2677df45f128
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "AL 아밀로이드증"
  - "신증후군"
  - "제한성 심근병증"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
  - MDEg7Iic7ZmY6riwL-ygnO2VnOyEsSDsi6zqt7zrs5Hspp0gKFJlc3RyaWN0aXZlIENhcmRpb215b3BhdGh5KS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

심실벽이 두꺼워지고 신증후군이 생긴 환자에서 조직의 콩고레드 염색으로 아밀로이드가 확인됐다. 혈청에서 단클론 경쇄도 검출됐지만 조직 아밀로이드의 종류는 아직 모른다. 경쇄 아밀로이드증을 확진할 다음 검사는?

## 선택지

A. 알부민 수치만 반복
B. 혈청 단클론 단백만으로 아밀로이드 유형 확정
C. 뼈스캔 결과만으로 경쇄 아밀로이드증 확진
D. 조직 침착물의 아밀로이드 유형 분석

## 해설


단클론 단백은 다른 유형의 아밀로이드증에도 우연히 동반될 수 있다. 질량분석 등 검증된 조직 검사로 침착 단백의 종류를 확인한 뒤 치료를 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006932 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: AL amyloid A 가능성 유지; 활동성 요침사·단백형 확인 및 조직 typing 필요성 보강.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006932
- https://ashpublications.org/bloodadvances/article/doi/10.1182/bloodadvances.2025017073/566264
