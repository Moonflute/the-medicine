---
type: qbank
schema_version: 1
id: medqa-us-test-000778
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:3ffb9889db8d27d7eac5df4addb17ff99f6b1e9bdf9ac2ddfc36f2ffa4b4cc3f
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "섬유근육통"
  - "만성 전신 통증"
  - "수면장애"
  - "Fibromyalgia"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: C
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
---

# MedQA US 임상문제

## 문제

38세 여성이 수개월간 몸 여러 곳의 통증과 피로, 개운하지 않은 수면을 겪는다. 관절 부종이나 실제 근력저하는 없고 염증수치와 갑상선기능은 정상이다. 섬유근육통으로 진단한 뒤 먼저 권할 장기 관리 계획은?

## 선택지

A. 전신 스테로이드를 지속 복용한다
B. 통증이 완전히 사라질 때까지 신체 활동을 피한다
C. 교육과 함께 개인 상태에 맞춰 저강도 운동을 시작해 서서히 늘린다
D. 오피오이드를 일차 진통제로 장기 처방한다

## 해설


섬유근육통은 환자 교육과 점진적 운동을 기반으로 관리한다. 수면과 기능을 함께 평가하며 필요한 경우 비약물·약물 치료를 환자별로 더한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-000778` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 섬유근육통의 선지 중 파록세틴 C 유지. 모든 지침의 보편적 1차 SSRI라는 해설을 비약물 중심 및 지침 차이를 반영해 제한.
- 범위: evidence-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng193/chapter/recommendations
- https://ard.bmj.com/content/76/2/318.long

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000778
- https://doi.org/10.1136/annrheumdis-2015-208690
