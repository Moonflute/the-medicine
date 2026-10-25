---
type: qbank
schema_version: 1
id: medqa-us-test-000685
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9e2684e609ae26ed4ea27d72ef3dcac43b184822fc64b98755c56f4e4c7af210
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "유전성 혈관부종"
  - "C1 에스터레이스 억제인자 결핍"
  - "브래디키닌"
  - "Hereditary angioedema"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOu2gOyihSAo7Jyg7KCE7ISxKSAoSGVyZWRpdGFyeSBBbmdpb2VkZW1hKS5tZA
question_type: mechanism
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

12세 여아가 3시간 전 갑자기 시작된 쥐어짜는 복통과 구토로 응급실에 왔다. 가렵지 않은 얼굴과 입술의 발적 및 부종도 보였다. 아침에 치아를 뽑은 뒤 증상이 시작되었고 1년 전 자전거 사고 후에도 얼굴이 부었으나 치료 없이 48시간 내 호전되었다. 활력징후는 정상이었다. 통증 없는 얼굴 부종, 구강점막 홍반, 혀 비대가 있었고 복부는 부드러우나 하복부 압통이 있었다. 복부 초음파에서 장벽의 분절성 비후가 보였다. 이 상태의 가장 가능성 높은 원인은?

## 선택지

A. 자가항체 매개 조직 손상
B. 보체 억제인자 결핍
C. 약물 유발 브래디키닌 과다
D. 비만세포 활성화

## 해설


반복되는 비소양성 안면 부종, 치과시술·외상에 의한 유발, 복통과 장벽 부종은 C1 억제인자 결핍에 의한 혈관부종을 시사한다. C1 억제인자는 접촉계의 칼리크레인 등을 조절하며, 그 결핍은 브래디키닌 과다를 일으킨다. 따라서 B이다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000685`와 직접 대조했다.
- 판정: 외상·치과시술 유발 비소양성 반복 부종과 장벽 부종은 C1 억제인자 결핍 지지. 보체 활성화가 직접 브래디키닌을 만든다는 부정확한 연결을 접촉계 조절 장애로 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9023902/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000685
