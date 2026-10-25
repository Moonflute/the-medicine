---
type: qbank
schema_version: 1
id: medqa-us-train-009002
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c1180323d4e7d87a3a8a6b7e30dd5d4ee41f6dae2fabd7599c7999143ceaa04f
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "hereditary angioedema"
  - "C1 esterase inhibitor deficiency"
  - "bradykinin-mediated edema"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOu2gOyihSAo7Jyg7KCE7ISxKSAoSGVyZWRpdGFyeSBBbmdpb2VkZW1hKS5tZA
question_type: mechanism
difficulty: standard
answer: B
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
---

# MedQA US 임상문제

## 문제

12세 여아가 3시간 전 갑자기 시작된 산통과 구토로 응급실에 내원했다. 가려움 없이 얼굴과 입술이 붉고 부어 있다. 오늘 아침 치아를 뽑은 뒤 증상이 시작되었고 1년 전 자전거 사고 후에도 얼굴이 부었으나 치료 없이 48시간 내 호전되었다. 활력징후는 정상이다. 압통 없는 얼굴 부종, 구강 점막 홍반, 혀 비대가 있고 복부는 부드럽지만 하복부에 압통이 있다. 복부 초음파에서 장벽의 분절성 비후가 보인다. 다음 중 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 약물 유발 브래디키닌 과다
B. 보체 억제인자 결핍
C. 면역복합체 침착
D. T세포 매개 면역반응

## 해설


재발성 안면 부종과 구강 점막 홍반은 C1 억제제 결핍에 의한 브래디키닌 매개 혈관부종을 나타낸다. 보체 억제인자 결핍이 원인이다. 따라서 보체 억제인자 결핍이 가장 가능성 높은 원인이다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-009002`와 직접 대조했다.
- 판정: 외상·치과시술 후 반복 비소양성 부종과 복통은 C1 억제인자 결핍 지지. B 유지; 진단 기전 검토.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9023902/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009002
