---
type: qbank
schema_version: 1
id: medqa-us-validation-000484
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:90f88cc5e18affe20d219749580a061aad5ebdebbe2123ac3796d051b78d6463
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "다발혈관염을 동반한 육아종증"
  - "면역억제"
  - "폐포자충 폐렴 예방"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
question_type: prevention
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvR2FuY2ljbG92aXIubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

51세 남성이 만성 부비동염과 콧물로 진료를 받으러 왔다. 양쪽 폐에 미세한 수포음, 코뼈 함몰, 간헐적 객혈과 혈뇨가 있고 비강 점막 생검에서 다발혈관염을 동반한 육아종증이 확진되었다. 프레드니손과 사이클로포스파미드를 시작했다. 치료에 추가할 약물은?

## 선택지

A. 아지트로마이신
B. 간시클로버
C. 독시사이클린
D. 트리메토프림/설파메톡사졸

## 해설


다발혈관염을 동반한 육아종증 환자는 스테로이드와 사이클로포스파미드 치료 시 폐포자충(Pneumocystis jirovecii) 감염 위험이 높다. 따라서 예방을 위해 트리메토프림/설파메톡사졸을 추가한다. 다른 약물은 예방 효과가 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000484 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: GPA의 cyclophosphamide·glucocorticoid 치료 중 PJP 예방 TMP-SMX D가 적절함을 ACR/VF 공식근거로 확인.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12344527/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000484
