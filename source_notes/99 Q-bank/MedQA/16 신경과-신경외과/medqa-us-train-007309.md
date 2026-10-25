---
type: qbank
schema_version: 1
id: medqa-us-train-007309
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8b4833b687d7b48fa82b566a8aef79b6e55999af7dcf5b8f32b7a171f97b2ed7
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "구음장애-서투른 손 증후군"
  - "열공성 뇌졸중"
  - "교뇌 병변"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 여자가 한 시간 동안 갑자기 시작된 말 어눌함으로 남편과 함께 응급실에 내원했다. 오른손으로 물건을 잡기도 어렵다. 발열, 두부 외상, 복시, 현훈, 보행곤란, 오심, 구토는 없다. 제2형 당뇨병, 고혈압, 고콜레스테롤혈증이 있어 저용량 아스피린, 메트포르민, 라미프릴, 심바스타틴을 복용한다. 23갑년의 흡연력이 있다. 혈압은 148/96 mmHg, 심박수 84회/분, 체온 37.1°C(98.8°F)이다. 안구운동은 정상이고 구음장애가 있지만 고위 정신기능은 정상이다. 오른쪽 안면 약화가 있으나 이마 주름은 보존되어 있고 구역반사가 약하다. 오른손 근력이 약간 감소되어 있으며, 특히 글쓰기 등 숙련된 동작과 검지로 먼 물체를 가리키는 동작이 어렵다. 보행은 정상이고 핀 감각과 위치감각은 보존되어 있다. 머리 CT는 정상이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 구음장애-서투른 손 증후군
B. 외측 연수 증후군
C. 파리노 증후군
D. 순수 운동 증후군

## 해설

구음장애와 경미한 안면·손 약화에 비해 손의 정교한 동작장애가 두드러지고 피질성 고위기능·감각은 보존되어 구음장애-서투른 손 증후군(A)에 맞는다. 전형적으로 교뇌 기저부 또는 내포 등의 작은 피질하 경색에서 발생하는 열공성 증후군이다. 초기 비조영 CT가 정상이어도 급성 허혈성 뇌졸중을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 구음장애-서투른 손 증후군을 대뇌피질 병변으로만 국소화한 오류를 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007309
