---
type: qbank
schema_version: 1
id: medqa-us-train-007136
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cb0115cb2209fd5d6a2856a1a2f283eac92f8c316264c0ab21676bc0adfcdfa1
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "길랭-바레 증후군"
  - "급성 염증성 탈수초 다발신경병증"
  - "신경전도검사"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6ri4656RLeuwlOugiCDspp3tm4TqtbAgKEd1aWxsYWluLUJhcnJlIFN5bmRyb21lKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_quLjrnpEt67CU66CIIOymne2bhOq1sCAoR3VpbGxhaW4tQmFycsOpIHN5bmRyb21lKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

며칠 사이 양쪽 발에서 시작한 위약이 팔로 퍼지고 무릎·발목 반사가 사라졌다. 의식과 감각 수준은 정상이고, 발병 둘째 날 뇌척수액 단백도 정상이다. 길랭–바레 증후군이 의심될 때 적절한 판단은?

## 선택지

A. 초기 정상 단백으로 배제하지 않고 신경전도검사와 호흡 감시를 진행한다
B. 초기 단백이 정상이라면 길랭–바레 증후군을 배제한다
C. 신경전도검사가 정상일 수 없으므로 반복 평가가 필요 없다
D. 척수 병변으로 확정하고 정맥 스테로이드만 시작한다

## 해설

발병 초기에 뇌척수액 단백이나 신경전도검사가 정상일 수 있다. 임상 경과를 중심으로 판단하며 필요하면 검사를 반복하고 호흡과 자율신경 기능을 감시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. GBS에서 신경전도검사 D는 지지 검사. 탈분극/탈수초 용어 오류 및 초기에 반드시 확진한다는 단정 교정.
- 공식/학회 근거: https://onlinelibrary.wiley.com/doi/10.1111/ene.16073

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007136
- https://pubmed.ncbi.nlm.nih.gov/37814552/
