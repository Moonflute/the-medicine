---
type: qbank
schema_version: 1
id: medqa-us-train-006056
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ab591eba9fab8ef791192d4755618492f299c637b97e75c04a55436de035c7ef
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "식도 이물"
  - "생선뼈 식도폐색"
  - "응급 내시경"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66y86rG0IOyCvO2CtCAoRm9yZWlnbiBCb2R5IEluZ2VzdGlvbikubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvR2x1Y2Fnb24ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남성이 생선을 먹다 날카로운 것이 걸린 뒤 침도 삼키지 못하고 흉골 뒤에 통증을 느낀다. 입안에서 뼈는 보이지 않고 기도와 순환은 안정적이다. 날카로운 식도 이물이 의심될 때 다음 조치는?

## 선택지

A. 글루카곤을 반복 투여하며 기다린다
B. 음식을 더 삼켜 뼈를 밀어 넣는다
C. 응급 상부내시경으로 확인하고 제거한다
D. 보이지 않는 이물을 입안에서 맹목적으로 잡아 뺀다

## 해설

식도에 걸린 날카로운 이물은 손상과 천공 위험이 있고, 분비물도 넘기지 못하면 폐색이 심하다. 기도를 평가하면서 응급 내시경으로 제거한다. 천공이 의심되면 CT와 전문 평가를 함께 진행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 날카로운 식도이물 C의 응급내시경 적응증을 호흡곤란 발생 단정 없이 설명.
- https://doi.org/10.1055/s-0042-100456

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006056
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/
