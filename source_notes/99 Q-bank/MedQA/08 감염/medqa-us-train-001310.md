---
type: qbank
schema_version: 1
id: medqa-us-train-001310
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:09e70e1f3019d3b02144e36738aed27b1e739d3f2c4a8367abe7b18d33ec63fe
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Pneumocystis jirovecii pneumonia"
  - "immunocompromised host"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

신장이식 후 3개월째인 환자가 이식 진료에서 폐포자충 폐렴 예방을 상담한다. 신기능은 안정적이고 트리메토프림/설파메톡사졸에 금기가 없다. 이식 초기 예방에 우선 사용할 약은?

## 선택지

A. 발간시클로버
B. 트리메토프림/설파메톡사졸
C. 플루코나졸
D. 아지트로마이신

## 해설


고형장기 이식 뒤 초기에는 폐포자충 폐렴 위험이 높아 트리메토프림/설파메톡사졸을 우선 예방약으로 사용한다. 기간과 용량은 이식 장기, 면역억제 강도와 신기능을 바탕으로 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001310 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Pneumocystis는 진균이며 pentamidine은 PCP 대체요법이지 아메바증 약이라는 오설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001310
- https://pubmed.ncbi.nlm.nih.gov/31077616/
