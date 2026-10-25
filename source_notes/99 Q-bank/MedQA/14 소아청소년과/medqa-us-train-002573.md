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
question_type: diagnosis
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

3세 남아가 지속되는 발열과 기침으로 응급실에 왔다. 3일 전 폐렴과 급성 중이염을 진단받아 암피실린-설박탐과 클래리트로마이신을 시작했지만 호전되지 않았다. 생후 10개월부터 폐렴으로 세 차례 입원했고 양측 중이염과 반복적인 호흡기 감염이 있다. 예방접종은 최신이며 편도와 아데노이드가 저형성이다. 다음 중 이 환자 상태의 가장 가능성 높은 원인은?

## 선택지

A. NADPH 산화효소 결함
B. IL-2 수용체 감마 사슬 결함
C. WAS 유전자 돌연변이
D. 티로신 키나아제 유전자 돌연변이

## 해설

생후 수개월 이후 반복되는 세균성 호흡기 감염과 편도·아데노이드 저형성은 B세포 발달 장애를 시사한다. BTK 티로신키나아제 변이에 의한 X연관 무감마글로불린혈증(D)이 가장 적절하다. 예방접종을 제때 받았다는 사실이 보호 항체를 정상적으로 만들었다는 뜻은 아니다. 본문의 항생제 선택이나 반응 시간의 현행 치료지침까지 검수한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 예방접종 이력이 정상이라는 사실이 면역반응 정상의 근거인 것처럼 쓴 해설을 편도/아데노이드 저형성과 B세포 결핍 기전으로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002573
