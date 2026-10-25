---
type: qbank
schema_version: 1
id: medqa-us-test-001194
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8df38e1070ea44241b5f7563b9d0f6a45202ff55b6743bdba7b725abe44c4560
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV/AIDS"
  - "CD4 감소"
  - "기회감염 예방"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: prevention
difficulty: simple
answer: C
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1waG90ZXJpY2luQi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

HIV를 15년 전에 진단받은 45세 남성이 정기검진을 받으러 왔다. 삼제 항레트로바이러스 치료를 중단했고 CD4 림프구 수가 47/mm³였다. 현재 항레트로바이러스 치료 재개를 거부한다. 가장 적절한 예방적 약물요법은?

## 선택지

A. 아지트로마이신과 이트라코나졸
B. 아지트로마이신과 암포테리신 B
C. 트리메토프림, 설파메톡사졸, 아지트로마이신
D. 답손, 피리메타민, 이트라코나졸, 아지트로마이신

## 해설


ART를 중단했고 재개를 거부하며 CD4가 47/mm³이므로 TMP-SMX로 PCP 예방, 아지트로마이신으로 MAC 예방을 고려하는 C가 적절하다. 아지트로마이신은 항바이러스제가 아니라 마크롤라이드 항균제이다. MAC 예방 전 활동성 감염을 배제하고 ART 재시작을 권고한다. 효과적인 ART를 곧 시작하는 모든 CD4<50 환자에게 일률적 MAC 예방을 한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001194 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ART 거부·CD4<50의 PCP/MAC 예방 C 유지. azithromycin을 항바이러스제라 부른 오류와 CD4만으로 일률 MAC예방하는 표현 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/disseminated

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001194
