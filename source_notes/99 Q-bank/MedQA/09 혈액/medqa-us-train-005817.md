---
type: qbank
schema_version: 1
id: medqa-us-train-005817
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:09b3f0a817ccd8a9cded6fa951ec9a6797c5951f38ef3333c5306f017fa80d07
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "지중해빈혈"
  - "소구성 빈혈"
  - "정상 철 저장량"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

25세 아프리카계 미국인 여성이 수개월 동안 지속된 피로로 내원했다. 하루가 끝나면 완전히 지치고 걷거나 조깅할 때 숨이 차서 헐떡일 때가 있다고 한다. 과거력은 겨울에 가끔 감기에 걸리는 것 외에는 특이하지 않다. 신체검사에서 중등도 결막 창백 외에는 정상이다. 혈액검사에서 혈색소 9 g/dL, 헤마토크릿 28.5%, 적혈구 5.85×10⁶/mm³, 백혈구 5,500/mm³, 혈소판 212,000/mm³, MCV 56.1 fL, MCH 20.9 pg/cell, MCHC 25.6 g/dL, RDW 11.7%, 혈청 철 170 mcg/dL, TIBC 458 mcg/dL, 트랜스페린 포화도 60%이다. 말초혈액도말이 제시되어 있다. 아버지가 빈혈 때문에 헌혈을 하지 못했다는 것 외에 가족력은 잘 모른다. 다음 중 세포 수와 혈액도말 소견을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 지중해빈혈
B. 비타민 B12 결핍
C. 용혈
D. 엽산 결핍

## 해설


매우 낮은 MCV에 비해 RBC5.85×10⁶/µL가 상대적으로 높고 RDW가 증가하지 않으며 가족성 빈혈은 thalassemia A를 지지한다. B12/엽산 결핍은 보통 거대적혈구성이다. 다만 원문의 iron170/TIBC458로 계산한 TSAT는 약37%로 제시60%와 불일치하고 일부 RBC 지수도 서로 일치하지 않아 원수치 확인이 필요하다. 누락된 도말에서 표적세포를 직접 관찰했다거나 철과다 및 beta형을 확진했다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005817 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 상대적으로 높은 RBC를 정상형이라 하고 없는 도말을 관찰한 오류 및 철패널 산술 불일치 명시; thalassemia A 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005817
