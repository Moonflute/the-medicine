---
type: qbank
schema_version: 1
id: medqa-us-validation-000574
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2442da277aadec85629ca1b1239d8c1e8a3f47cdd88adb0f4a459cca7c200abe
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "부신 위기"
  - "일차성 부신기능부전"
  - "저혈당 및 고칼륨혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-ybkOuwnOyEsSDrtoDsi6Ag6riw64ql7KCA7ZWY7KadKFByaW1hcnkgQWRyZW5hbCBJbnN1ZmZpY2llbmN5KS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
---

# MedQA US 임상문제

## 문제

36세 여성이 구토와 어지러움 후 의식을 잃어 응급실에 왔다. 혈압 90/60 mmHg, 체온 35.9°C, 피부긴장도 저하, 구강건조와 양쪽 볼 안쪽의 과다색소침착이 있다. 혈당 40 mg/dL, 나트륨 130, 칼륨 6 mEq/L이고 포도당 투여 후에도 혈압이 변하지 않는다. 가장 적절한 다음 처치는?

## 선택지

A. 정맥 칼슘 글루콘산
B. ACTH 자극검사
C. 경구 DHEA
D. 생리식염수와 정맥 덱사메타손

## 해설


정답 D. 과다색소침착·저혈압·저혈당·저Na/고K는 원발성 부신기능저하의 위기를 강하게 시사한다. 필요한 검체를 지연 없이 채취할 수 있다면 채취하되 검사 때문에 치료를 미루지 말고 등장성 수액과 정맥 glucocorticoid를 투여한다. 현행 일차약은 hydrocortisone이며 dexamethasone은 다른 약을 사용할 수 없을 때의 덜 선호되는 대안이다. 제시 선택지 중 D가 즉각적인 수액·steroid 치료를 제공한다. 저혈당·고K도 추적/치료한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000574 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수액+steroid D는 선택지상 적절하지만 hydrocortisone이 현행 우선약이며 dexamethasone이 일반 1차라는 오해 방지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.endocrine.org/clinical-practice-guidelines/primary-adrenal-insufficiency

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000574
