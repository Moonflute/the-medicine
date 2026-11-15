---
type: qbank
schema_version: 1
id: medqa-us-validation-001195
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:03cf2a4128cda0a20909486502b8b821d5bcce6e75985c1bfda9fc6ebbbee1b6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "폐렴구균 수막염"
  - "비장절제술"
  - "무비증"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
question_type: prevention
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

외상으로 비장절제술을 받은 32세 환자의 폐렴구균 백신 접종력이 없다. 퇴원 후 침습성 폐렴구균 감염을 예방하기 위한 국내 권고 접종 방법 중 하나는?

## 선택지

A. 65세까지 접종을 미룬다
B. 13가 폐렴구균 결합백신 1회만 정기적으로 반복 접종
C. 수막구균 백신만 접종하고 폐렴구균 백신은 생략
D. 20가 폐렴구균 결합백신 1회

## 해설


해부학적 무비증 환자는 65세 미만이어도 폐렴구균 접종 대상이다. 20가 결합백신 1회는 권고 선택지 중 하나다. 다른 선택지로 21가 결합백신 1회 또는 15가 결합백신에 이은 23가 다당백신이 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001195 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 비장절제 후 피막균 폐렴구균 수막염 위험은 단일장기 면역기능 상실 B. 선천성 체액결핍으로 바꾸지 않고 원사례 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001195
- https://icjournal.org/DOIx.php?id=10.3947%2Fic.2026.0063
