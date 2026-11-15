---
type: qbank
schema_version: 1
id: medqa-us-test-000733
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b3647aa3ae31f32b52413a3db70e2ccb5d2c39cb755909beee2994aaf98530a9
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "척추 골수염"
  - "경추 골수염"
  - "정맥주사 약물 사용"
  - "Vertebral osteomyelitis"
question_type: investigation
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzqOyImOyXvCAoT3N0ZW9teWVsaXRpcykubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 환자의 MRI에 척추디스크염과 인접 척추체 골수염이 의심된다. 혈액배양에서 균이 자라지 않았다. 활력과 신경학적 상태는 안정적이고 경막외 농양은 없다. 원인균 확인을 위한 다음 단계는?

## 선택지

A. 영상 유도하 디스크 또는 척추체 검체를 채취한다
B. 요추천자로 뇌척수액 배양을 시행한다
C. 영상만으로 원인균을 정하고 곧바로 표적 치료한다
D. 항균제를 먼저 오래 투여한 뒤 검체를 채취한다

## 해설


안정적인 척추 골수염 환자에서 혈액배양으로 균을 확인하지 못했다면 영상 유도 생검을 고려한다. 패혈증이나 신경 결손이 있으면 항균제를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 발열·정맥약물·경추 통증/염증·생검 확진의 척추골수염. vancomycin+ciprofloxacin B는 IDSA에 논의된 경험적 조합. 배양 결과에 따른 표적화와 신경학적 평가 필요, 다른 선택지보다 적절.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/vertebral-osteomyelitis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000733
