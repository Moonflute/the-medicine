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

38세 여성이 5개월 동안 지속된 만성 전신 통증으로 일차 진료를 받으러 왔다. 수면 문제도 동반되었고 요가를 해보았지만 호전되지 않았다. 증상이 일상 기능을 방해하고 예전에 즐기던 일을 하지 못하게 한다. 범불안장애 병력이 있으나 현재 약물은 복용하지 않으며 과거 5년 동안 파록세틴을 복용했다. 후두부, 팔꿈치, 양쪽 무릎 안쪽에 압통점이 여러 개 있었고 검사실 결과는 정상이었다. 가장 가능성 높은 진단에 대한 최선의 치료는?

## 선택지

A. 저용량 프레드니솔론
B. 고용량 프레드니솔론
C. 파록세틴
D. 알로푸리놀

## 해설


광범위 통증·수면장애·정상 검사와 압통은 섬유근육통을 지지한다. 선택지 중 파록세틴(C)은 NICE 만성 일차성 통증 권고에 따라 이득·위험을 상의해 고려할 수 있고 불안 병력도 있다. 다만 EULAR는 SSRI의 통증 효과 근거를 충분하다고 보지 않아 보편적 1차 치료라 할 수 없다. 교육·운동·심리적 접근이 관리의 중심이며 스테로이드나 알로퓨리놀을 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-000778` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 섬유근육통의 선지 중 파록세틴 C 유지. 모든 지침의 보편적 1차 SSRI라는 해설을 비약물 중심 및 지침 차이를 반영해 제한.
- 범위: evidence-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng193/chapter/recommendations
- https://ard.bmj.com/content/76/2/318.long

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000778
