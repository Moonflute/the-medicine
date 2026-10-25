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
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
question_type: 임상증례 객관식
difficulty: complex
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


폐문/폐내 림프절 침범이 있는 제한기 SCLC에서 수행상태가 좋으면 platinum(cisplatin 또는 적절한 경우 carboplatin)+etoposide와 동시 흉부 방사선치료(C)가 적절한 초기 근치 치료이다. Topotecan은 이 상황의 표준 초기 약제가 아니다. 일부 매우 초기 N0 SCLC는 수술 대상이 될 수 있으나 이 환자는 림프절 양성이다. 동시 항암방사선 후 진행이 없다면 현행 FDA 승인에 따른 durvalumab 공고요법도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004332 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Platinum 약물명 오류와 SCLC에는 수술이 불가능하다는 단정을 고치고 현행 후속 durvalumab을 구분했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/lung/hp/small-cell-lung-treatment-pdq
- https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-durvalumab-limited-stage-small-cell-lung-cancer

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004332
