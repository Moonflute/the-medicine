---
type: qbank
schema_version: 1
id: medqa-us-train-006084
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6660cbebc86089f7489170d646697ce745bb58bce74bdee43c46e520cfa78a87
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "다발골수종"
  - "병적 압박골절"
  - "파미드로네이트"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
  - MjIg7KCV7ZiV7Jm46rO8L-qzqOuLpOqzteymneyEsSDsspnstpQg6rOo7KCIIChPc3Rlb3Bvcm90aWMgU3BpbmFsIEZyYWN0dXJlKS5tZA
question_type: management
difficulty: complex
answer: A
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9UZXN0b3N0ZXJvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

다발골수종이 있는 환자가 갑자기 심해진 등 통증과 다리 위약으로 왔다. 가슴 아래 감각이 떨어지고 소변을 못 본다. 척수압박이 의심된다. 전문팀에 즉시 연락하면서 할 일은?

## 선택지

A. 응급 척추 MRI를 요청하고 신경증상이 있으므로 덱사메타손을 시작한다
B. 골절 예방용 비스포스포네이트만 처방하고 외래에서 본다
C. 단순 X선으로 압박이 확인될 때까지 치료를 보류한다
D. 진통제를 올린 뒤 한 달 뒤에 영상을 예약한다

## 해설


암 환자의 새 위약·감각 저하·배뇨 장애는 척수압박 응급상황이다. MRI로 압박 위치를 확인하고 덱사메타손을 시작하며 신속히 수술·방사선 치료 필요성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006084 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Bisphosphonate를 비질산염이라 한 오역 교정; 골 사건 예방 pamidronate C 및 급성 척수압박 별도 응급처치 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/myeloma/hp/myeloma-treatment-pdq
- https://www.nice.org.uk/guidance/ng234/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006084
