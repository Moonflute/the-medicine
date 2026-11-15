---
type: qbank
schema_version: 1
id: medqa-us-train-002542
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:48ffcc06efc7ec38a4fb633aa7a08ab705b66fb54d798910f9b743f74287c4cb
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Zika virus disease"
  - "mosquito-borne infection"
  - "conjunctivitis"
  - "arthralgia"
related_disease_slugs:
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
  - MDgg6rCQ7Je8L-yngOy5tOuwlOydtOufrOyKpCDqsJDsl7wgKFppa2EgVmlydXMgSW5mZWN0aW9uKS5tZA
question_type: prevention
difficulty: complex
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
---

# MedQA US 임상문제

## 문제

지카바이러스 감염 위험 지역에서 돌아온 남성이 임신한 배우자와 산다. 본인은 증상이 없고 배우자는 여행하지 않았다. 임신 기간 배우자의 노출을 줄이는 방법은?

## 선택지

A. 남성에게 발열이 생기는 경우에만 예방 조치를 한다
B. 여행을 다녀오지 않은 배우자는 별도 예방이 필요 없다
C. 임신 기간 성관계를 피하거나 매번 콘돔을 사용한다
D. 혈청검사 한 번이 음성이면 바로 예방을 중단한다

## 해설


증상이 없는 여행자도 성접촉으로 감염을 전달할 수 있다. 배우자가 임신 중이면 노출을 줄이기 위해 임신 기간 내내 성관계를 피하거나 장벽 보호를 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002542 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 몸통·근위부 발진을 비대칭 말단 발진이라고 바꾼 해설 오류 교정; 여행·발열·관절통·결막충혈의 Zika D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/zika/hcp/clinical-signs/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002542
- https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/zika.html
