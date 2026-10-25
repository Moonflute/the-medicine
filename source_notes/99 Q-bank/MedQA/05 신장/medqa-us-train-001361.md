---
type: qbank
schema_version: 1
id: medqa-us-train-001361
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2340693f9f80d94a1a232b24aad9d1c7bfafaa3faf3c6bce20d8fe19af83a015
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "poststreptococcal glomerulonephritis"
  - "immune complex deposition"
related_disease_slugs:
  - MDUg7Iug7J6lL-yXsOyHhOyDgeq1rOq3oCDqsJDsl7wg7ZuEIOyCrOq1rOyytOyLoOyXvCAoUFNHTikgKFBvc3QtU3RyZXB0b2NvY2NhbCBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 남아가 눈이 부어 응급실에 내원했다. 부모는 오늘 아침 눈이 매우 부은 것을 보고 데려왔다. 아들은 항상 건강했고, 레슬링으로 생긴 발진을 국소 항생제로 치료한 것 외에는 건강했다. 체온은 98.3°F (36.8°C), 혈압은 125/85 mmHg, 맥박은 89회/분, 호흡수는 18회/분, 실내 공기 산소포화도는 99%이다. 신체검사에서 눈 주위 부종 외에는 정상이다. 소변검사에서 적혈구가 보이고 소변 색은 호박색이다. 다음 중 이 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 자가면역성 IV형 콜라겐 파괴
B. 순환 면역복합체 침착
C. IgA 매개 혈관염
D. IgE 매개 탈과립

## 해설


눈 부종과 혈뇨가 동반된 급성 신염은 면역복합체가 혈관에 침착해 발생하는 사후연쇄구균 사구체신염을 시사한다. 이는 면역복합체 매개 기전이다. 따라서 가장 가능성 높은 원인은 순환 면역복합체 침착이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 B/해설 읽음. 최근 피부 감염 후 부종·혈뇨·고혈압의 감염후 사구체신염에서 면역복합체 매개 기전이 보기 중 합당. IgE 반응/자가 anti-GBM/IgA혈관염과 구별, 치료 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001361
