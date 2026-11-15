---
type: qbank
schema_version: 1
id: medqa-us-train-006439
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f71adac4ac0343cb004b3585710f58307fd60a96d8f677e551b3eb439014cfd8
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "수혈 관련 아나필락시스"
  - "IgA 결핍"
  - "반복 부비동-폐 감염"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
question_type: management
difficulty: complex
answer: C
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
---

# MedQA US 임상문제

## 문제

농축적혈구 수혈 10분 뒤 전신 두드러기, 천명과 저혈압이 발생했다. 수혈은 즉시 중단했고 정맥로를 유지했다. 가장 먼저 투여할 약은?

## 선택지

A. 정맥 항히스타민제 단독
B. 흡입 기관지확장제 단독
C. 허벅지 근육 에피네프린
D. 고용량 정맥 스테로이드만 투여

## 해설


수혈 직후 피부·호흡·순환 증상이 함께 나타나면 아나필락시스로 판단한다. 근육 에피네프린이 1차이며, 소생과 혈액은행 평가를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006439 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 반복 부비동폐 감염은 주어진 사실이 아닌 선택지 가정임을 교정; 수혈 아나필락시스의 IgA 연관 C 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006439
- https://www.transfusion.or.kr/KOR/images/file/2022_5.pdf
- https://profedu.blood.ca/en/transfusion/clinical-guide/transfusion-reactions
