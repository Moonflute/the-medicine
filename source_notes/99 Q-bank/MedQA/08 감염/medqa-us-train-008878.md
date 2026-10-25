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
question_type: management
difficulty: complex
answer: B
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

45세 남성이 음식 삼키기가 어려워 응급실에 내원했다. 약을 삼키거나 물을 마실 때 통증이 있다고 한다. 5년 전 HIV 감염을 진단받았고 엠트리시타빈, 릴피비린, 테노포비르를 포함한 항레트로바이러스 요법을 복용 중이라고 한다. 체온 98°F(37°C), 혈압 100/60mmHg, 맥박 90회/분, 호흡수 22회/분, 산소포화도 99%이다. 구인두는 깨끗하고 림프절병증이 없으며 심폐검사도 정상이고 피부 발진은 없다. CD4⁺ 수치는 90/mm³, HIV 바이러스량은 59,000 copies/mL이다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 식도 내시경 및 생검
B. 플루코나졸
C. 메틸프레드니솔론
D. 니스타틴

## 해설


CD4 90/mm³의 HIV 환자에서 연하통은 식도 칸디다증을 의심하게 하며, 구강 아구창이 없어도 배제되지 않는다. 내시경 전 전신 fluconazole(B) 치료를 시도할 수 있다. 국소 nystatin은 식도 감염 치료로 충분하지 않다. 적절한 치료 후에도 호전이 없으면 CMV·HSV 등 다른 원인을 위한 내시경·생검 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008878 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CD4 90에서 연하통은 식도 칸디다증 경험적 fluconazole B가 적절. 본문에 없는 구강통/아구창을 만들지 않고 반응 없을 때 내시경 필요를 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/candidiasis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008878
