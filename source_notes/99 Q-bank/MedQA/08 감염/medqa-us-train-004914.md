---
type: qbank
schema_version: 1
id: medqa-us-train-004914
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:74354e1e2452df7b86a306cb364e3f8c62f8eb31176001c6f99faf7093549abb
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "백일해"
  - "Tdap 예방접종"
  - "밀접 접촉자 예방적 항생제"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cx7J287ZW0IChQZXJ0dXNzaXMpLm1k
question_type: prevention
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
---

# MedQA US 임상문제

## 문제

8세 남아가 발작적인 기침 뒤 구토와 큰 들숨 소리를 보여 백일해 PCR에서 양성으로 확인됐다. 생후 2주 된 동생과 부모가 같은 집에서 지내며 모두 현재 무증상이다. 동생과 부모에 대한 노출 후 예방으로 적절한 것은?

## 선택지

A. 접종력이 없는 사람에게만 예방적 항생제를 투여한다
B. 접종력과 무관하게 노출 후 예방적 항생제를 투여한다
C. 기침이 생길 때까지 항생제 투여를 미룬다
D. 예방적 항생제 대신 가족 모두에게 즉시 Tdap를 접종한다

## 해설


생후 12개월 미만 영아는 중증 백일해 고위험군이다. 국내 지침은 고위험군과 고위험군에게 전파할 수 있는 동거인에게 접종력·증상 유무와 무관하게 접촉 후 3주 이내 예방적 항생제를 권고한다. 아지스로마이신 등 연령에 맞는 약제를 사용하고 접종력 보완과 증상 관찰은 별도로 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004914 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 어머니 Tdap11년 전/아버지 기록 불명을 복원. 가족 PEP와 정기 booster B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/pertussis/php/postexposure-prophylaxis/index.html
- https://www.cdc.gov/pertussis/hcp/vaccine-recommendations/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004914
- 질병관리청 예방접종 대상 감염병 관리지침, 백일해 접촉자 관리: https://www.kdca.go.kr/bbs/kdca/55/260134/download.do
