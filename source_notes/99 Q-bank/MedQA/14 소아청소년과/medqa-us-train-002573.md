---
type: qbank
schema_version: 1
id: medqa-us-train-002573
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a354730efce5fa777a82c6b1197449ba7db68fc2cf18c0b42817e18a25e81f79
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "X-linked agammaglobulinemia"
  - "Bruton tyrosine kinase"
  - "recurrent bacterial infections"
question_type: investigation
related_disease_slugs:
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 남아가 생후 8개월 이후 중이염과 폐렴으로 여러 차례 치료받았다. 편도가 매우 작고 혈청 IgG·IgA·IgM이 모두 낮다. X연관 무감마글로불린혈증을 의심한다면 이 진단을 가장 잘 뒷받침하는 면역검사 소견은?

## 선택지

A. CD19 양성 B세포가 정상이고 IgM만 높다
B. CD3 양성 T세포만 현저히 낮다
C. 호중구 산화폭발검사에서 반응이 없다
D. CD19 양성 B세포는 거의 없고 T세포는 보존돼 있다

## 해설

BTK 결핍에서는 B세포의 성숙이 막혀 말초 성숙 B세포와 여러 면역글로불린이 모두 감소한다. 반면 T세포 수는 대개 보존된다. BTK 유전자 검사로 확인할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 예방접종 이력이 정상이라는 사실이 면역반응 정상의 근거인 것처럼 쓴 해설을 편도/아데노이드 저형성과 B세포 결핍 기전으로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002573
- https://pubmed.ncbi.nlm.nih.gov/20301626/
