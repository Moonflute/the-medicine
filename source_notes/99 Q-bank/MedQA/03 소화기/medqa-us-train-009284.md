---
type: qbank
schema_version: 1
id: medqa-us-train-009284
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:52b968ff39a9cffda67c096361170e400b1d0f19bbfca7cbe7428c1a29e5b9cf
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "achalasia"
  - "식도이완불능증"
  - "esophageal malignancy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_si53rj4Qg7J207JmE67aI64ql7KadIChBY2hhbGFzaWEpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
---

# MedQA US 임상문제

## 문제

69세 여성이 석 달 사이 9 kg이 빠지고 고형식과 물을 삼키기 어려워졌다. 내압검사는 식도이완불능증 양상이지만 내시경이 위식도 접합부를 통과할 때 뚜렷한 저항이 있었다. 점막 생검은 음성이고 조영 CT에서는 접합부 벽이 비대칭으로 두꺼워 보인다. 근절개술 전에 이 부위를 더 평가할 검사는?

## 선택지

A. 내시경초음파와 필요시 심부 조직검사
B. 24시간 식도 pH 검사
C. 위배출 신티그래피
D. 단순 흉부 X선

## 해설


고령에서 빠르게 진행하는 연하곤란과 체중 감소, 접합부 통과 저항은 암 등에 의한 가성이완불능증을 의심하게 한다. 점막 생검이 음성이어도 벽 안쪽의 병변은 놓칠 수 있어 내시경초음파로 확인하고 필요시 조직을 얻는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009284 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 연하곤란·체중감소와 LES 이완장애가 텍스트로 제시되어 누락 바륨 영상 없이도 achalasia/가성 achalasia 감별 EGD(A) 판단 가능.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gi.org/guideline/diagnosis-and-management-of-achalasia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009284
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9896940/
