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
question_type: diagnosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
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


디곡신은 고칼륨혈증, 저칼륨혈증, 신부전, 아미오다론 등과 상호작용해 구토·시각 이상·색각 변화(황시증)를 일으킬 수 있다. 환자는 다수의 약물을 복용하고 신부전 위험이 있어 디곡신 독성이 가장 가능성 높은 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006916
