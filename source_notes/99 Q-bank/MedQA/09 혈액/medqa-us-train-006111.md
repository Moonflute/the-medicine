---
type: qbank
schema_version: 1
id: medqa-us-train-006111
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:63cb63718e430491f95a1065d3cdaf9adb5503fdd9182317487ec7b8d0ff4667
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철결핍성 빈혈"
  - "소구성 저색소성 빈혈"
  - "적혈구 크기와 모양 다양성"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
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

33세 G2P2 여성이 피로와 운동 시 호흡곤란으로 내원했다. 오심과 변비 때문에 산전비타민을 복용하지 못했다. 체온은 37.0°C(98.6°F), 혈압은 112/64 mmHg, 맥박은 분당 98회이며 결막 창백과 숟가락 모양 손발톱이 있다. 검사에서 혈색소 9.1 g/dL, 헤마토크릿 27.3%, MCV 73 μm³, MCH 21 pg/cell, RDW 17.5%(정상 11.5~14.5%), 혈청 페리틴 9 ng/mL이다. 다음 중 말초혈액도말에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 눈물방울 세포
B. 깨물린적혈구(bite cells)
C. 적혈구 크기와 모양의 다양성
D. 가시적혈구

## 해설


낮은 ferritin·MCV와 숟가락손발톱은 철결핍성 빈혈에 부합한다. 소구성·저색소성 적혈구에 크기/모양의 불균일인 anisopoikilocytosis C가 나타난다. 미세소관성이라는 용어는 적절하지 않다. Degmacytes는 bite cells(깨물린적혈구)로 산화성 용혈 등에서 보이는 별도 형태다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006111 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Anisopoikilocytosis와 소구성/저색소성 용어 교정; degmacytes를 깨물린적혈구로 복원.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006111
