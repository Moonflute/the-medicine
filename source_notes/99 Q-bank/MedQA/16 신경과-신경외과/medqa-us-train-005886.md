---
type: qbank
schema_version: 1
id: medqa-us-train-005886
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4775650c33ebb08954180c768de5e33081448c968a7c7ac738a28729b393f168
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "외상성 뇌손상"
  - "두개내압 상승"
  - "뇌실내압 모니터링"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsp4Ttg5UgKENvbmN1c3Npb24pLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 남성이 단일 차량 전복사고 후 반응이 없는 상태로 응급실에 입원했다. 구급대원 초기 평가에서 반응이 없었고, 입원 후 통증 자극에 눈을 뜨지만 말로 지시하면 반응하지 않으며 양팔은 굽혀지고 다리는 펴진 채 통증에 반응하지 않는다. 기관삽관 후 검사했다. 혈압은 150/90 mmHg, 심박수는 분당 56회, 호흡수는 분당 14회, 체온은 37.5°C(99.5°F), 실내 공기 산소포화도는 94%이다. 좌측 측두골 함몰골절과 복부 및 사지의 멍과 찰과상이 있다. 동공은 둥글고 크기가 같으나 빛 반응이 약하다. 눈의 불일치 편위는 없다. 폐와 심장검사는 정상이고 복부 장음도 정상이며 복수파는 없다. 수막징후는 없고 외상 초음파에서 복강 내 혈액은 보이지 않는다. 두부 CT가 제시되어 있다. 추가 관리를 위해 필요한 처치는 무엇인가?

## 선택지

A. 요추천자
B. 뇌실내 카테터 삽입
C. 진단적 복강세척
D. 뇌 MRI

## 해설

통증에만 개안하고 비정상 굴곡을 보이는 혼수와 함몰골절은 중증 외상성 뇌손상을 시사한다. 제시된 선택지 중 뇌실내 카테터(B)는 두개내압을 직접 측정하고 필요하면 뇌척수액을 배액할 수 있어 추가 관리에 도움이 된다. 누락된 CT에서 수두증이나 특정 출혈을 확인했다고 해석해서는 안 된다. ICP 감시는 기도·순환 안정화 및 신경외과의 수술 필요성 평가를 대신하지 않는다. 요추천자는 두개내 종괴효과가 의심되는 상황에서 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 중증 외상성 뇌손상의 ICP 감시 적응증으로 B를 유지하되, 누락된 CT의 뇌실압 상승을 관찰했다고 단정한 해설을 교정.
- 공식/학회 근거: https://ww2.facs.org/media/vgfgjpfk/best-practices-guidelines-traumatic-brain-injury.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005886
