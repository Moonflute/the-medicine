---
type: qbank
schema_version: 1
id: medqa-us-train-004332
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a15bcdb37ccbbeb17ad6c7886cb633256e4d89d7ecce4da088bfe77423a66be9
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "제한기 소세포폐암"
  - "동시 항암방사선요법"
  - "에토포시드"
question_type: 임상증례 객관식
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

72세 남자가 3일간 객혈로 내원했다. 3개월간 기침이 있었지만 겨울 때문이라고 생각했고 최근 피로도 자주 느꼈다. 체온 37.0°C, 호흡수 15회/분, 맥박 67회/분, 혈압 122/98 mmHg이며 오른쪽 견갑골 아래에 국소적인 건성수포음이 들린다. 검사에서 직경 2.5cm의 우하엽 제한기 소세포폐암이 확인되었고 같은 쪽 폐문 및 폐내 림프절을 침범하지만 종격동, 기관분기하, 사각근, 쇄골상 림프절과 원격 전이는 없다. 동반질환이 없고 수행능력도 좋으며 항암제와 방사선치료 금기는 없다. 가장 좋은 치료는 무엇인가?

## 선택지

A. 폐엽절제술과 토포테칸 기반 보조항암화학요법
B. 폐전절제술과 백금 기반 보조항암화학요법 및 흉부 방사선치료
C. 백금 기반 화학요법+에토포시드 및 흉부 방사선치료
D. 토포테칸 기반 화학요법과 흉부 방사선치료

## 해설


제한기 소세포폐암 2기에서는 동시 방사선과 화학요법(플루오라보신+에토포시드)으로 국소 조절률과 생존을 향상시킨다. 수술은 비소세포암에 적용된다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004332
