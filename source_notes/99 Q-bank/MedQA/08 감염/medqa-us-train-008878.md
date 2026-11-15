---
type: qbank
schema_version: 1
id: medqa-us-train-008878
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:de596ecc81ccfe279777667dcba3ac60a129d4f65e96669318fbdecb55367e66
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "esophageal candidiasis"
  - "HIV/AIDS"
  - "odynophagia"
related_disease_slugs:
  - MDgg6rCQ7Je8L-y5uOuUlOuLpOymnSAoQ2FuZGlkaWFzaXMpLm1k
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: investigation
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
---

# MedQA US 임상문제

## 문제

HIV 환자의 삼킴통증에 식도 칸디다증을 의심해 적절한 용량의 전신 플루코나졸을 시작했다. 복약을 확인했지만 7일째 전혀 호전되지 않는다. 다음 조치는?

## 선택지

A. 같은 약을 반복 처방하며 검사는 계속 미룬다
B. 니스타틴 가글만 추가한다
C. 혈액 CMV 항체만으로 식도염 원인을 확정한다
D. 상부위장관 내시경과 병변 조직검사를 시행한다

## 해설


전신 항진균제 시작 뒤 7일 이내 반응하지 않으면 내시경으로 칸디다 내성이나 CMV·HSV 같은 다른 식도염 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008878 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CD4 90에서 연하통은 식도 칸디다증 경험적 fluconazole B가 적절. 본문에 없는 구강통/아구창을 만들지 않고 반응 없을 때 내시경 필요를 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/candidiasis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008878
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/candidiasis
