---
type: qbank
schema_version: 1
id: medqa-us-train-006916
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6dd2ee4374eec03772669aa41d23f8937bddad552bb8796f9e4e070bbf5c5317
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "디곡신 독성"
  - "황시증"
  - "부정맥 약물 상호작용"
  - "Digoxin toxicity"
related_disease_slugs: []
question_type: diagnosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQmlzb3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

뉴욕심장협회 III등급 심부전, 심방세동 및 양극성 장애가 있는 58세 여성이 오심, 구토, 복통, 복시 및 물체 주위에 녹색·노란색 윤곽이 보이는 증상으로 응급진료센터에 내원했다. 라미프릴, 비소프롤롤, 스피로놀락톤, 디곡신, 아미오다론 및 리튬을 복용한다. 다음 중 어떤 약물이 증상의 가장 가능성 높은 원인인가?

## 선택지

A. 디곡신
B. 아미오다론
C. 리튬
D. 비소프롤롤

## 해설

GI증상·복시·황록색 색각변화는 digoxin독성 A를 시사한다. Amiodarone은 digoxin 농도를 높일 수 있고 저K/신기능저하가 독성위험을 높인다. 고K는 특히 급성중증독성의 결과/표지일 수 있어 저K와 같은 유발인자로 묶지 않는다. 신부전이 실제 제시된 것도 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Digoxin독성 A는 유지하되 고K를 독성유발위험과 동일시한 기전 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006916
