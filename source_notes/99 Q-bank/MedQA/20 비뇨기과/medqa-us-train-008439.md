---
type: qbank
schema_version: 1
id: medqa-us-train-008439
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3d5971f7fbf14fa148977140d9f861a191720ba730d94fed4a986176fe759de9
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "embryonal carcinoma"
  - "nonseminomatous germ cell tumor"
  - "cryptorchidism"
question_type: diagnosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yeoOuzteqzoO2ZmOymnSAoQ3J5cHRvcmNoaWRpc20pLm1k
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmCDsooXslpEgKFRlc3RpY3VsYXIgY2FuY2VyKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 백인 남성이 3주 동안 지속된 오른쪽 고환의 부종과 불편감으로 내원했다. 외상, 발열, 야간 발한은 없다. 생후 6개월에 오른쪽 잠복고환 수술을 받았다. 간질환이나 성선기능저하증 병력은 없다. 두 아이의 아버지이다. 복용 약물은 없고 불법 약물 사용을 부인한다. 활력징후는 정상이다. 음낭을 촉진하면 오른쪽 고환과 분리되지 않는 단단하고 압통 없는 종괴가 만져진다. 왼쪽 고환에는 이상이 없다. 쇄골상부나 서혜부 림프절병증은 없다. 여성형 유방이 있다. 그 밖의 신체검사는 정상이다. 초음파에서 오른쪽 고환이 커져 있고 정상 구조의 큰 부분을 대체하는 저에코 종괴가 보인다. 왼쪽 고환은 정상이다. 검사 결과는 다음과 같다.
HCG 상승
AFP 상승
LDH 정상
다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 배아암
B. 라이디히세포 종양
C. 고환 전이암
D. 정세포종성 생식세포 종양

## 해설

고형 고환 종괴와 AFP·hCG 상승은 비정상피종성 생식세포종양을 지지하며 네 선지 중 A, 배아암이 가장 적절하다. 순수 정상피종은 AFP를 분비하지 않으므로 AFP 상승이 있으면 비정상피종 성분을 고려한다. Leydig 종양은 호르몬 증상을 일으킬 수 있지만 이 표지자 조합을 전형적으로 설명하지 않는다. 표지자만으로 혼합 성분까지 확정할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. AFP와 hCG 동시 상승의 비정상피종성 종양 근거를 설명하고 다른 종양의 표지자를 잘못 일반화한 부분 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008439
