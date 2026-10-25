---
type: qbank
schema_version: 1
id: medqa-us-train-004483
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dc1b1a5cb79bdca3d410714b0965f56f40d685b70e0a5f4a763b383879c3e7c7
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "삼차신경통"
  - "안면 전기통증"
  - "제5뇌신경 신경통"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sgrzssKjsi6Dqsr3thrUgKFRyaWdlbWluYWwgbmV1cmFsZ2lhKS5tZA
difficulty: complex
answer: C
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

43세 여성이 심한 통증으로 신경과에 내원했다. 오른쪽 얼굴에 날카롭고 찌르는 듯한 전기 같은 통증이 있다고 한다. 통증은 2주 전 갑자기 시작되었다. 웃거나 말하거나 식사하는 행동이 통증 발작을 유발하여 더 이상 이런 활동을 할 수 없을 정도로 극심하다. 그 결과 지난주에는 일을 쉬어야 했다. 발작은 약 3분 지속되고 잠들면 사라진다. 현재 하루 2~3회 발작한다. 활력징후는 혈압 132/84 mm Hg, 심박수 분당 79회, 호흡수 분당 14회이다. 신경학적 검사에서 왼쪽 얼굴의 가벼운 촉각, 촉각과 통각 감각 소실은 없다. 동공 빛반사와 조절반사는 정상이다. 입꼬리 처짐, 안검하수 또는 무한증도 없다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 벨마비
B. 군발두통
C. 삼차신경통
D. 기저 편두통

## 해설

웃기·말하기·식사로 유발되는 일측 전기충격성·찌르는 안면통은 삼차신경통(C)을 강하게 시사한다. 보통 발작은 수초에서2분 이내지만 일부는 더 길 수 있어 본문의3분을 임의로 줄이지 않는다. 일반 신경검사에서 감각이 정상인 경우가 많으며 무감각이 필수 특징은 아니다. 원문은 통증이 오른쪽인데 감각검사는 왼쪽 정상이라고만 적었으므로 아픈 쪽의 감각이 정상이라고 확인된 것으로 확대하지 않는다. 지속 감각결손이나 비전형 소견은 이차 원인 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 삼차신경통이 무감각을 동반하는 것이 전형이라는 해설 오류를 교정했다. 자극유발 전기충격성 통증과 C를 유지하며 원문 검사 측성 한계를 숨기지 않는다.
- 공식/학회 근거: https://ichd-3.org/13-painful-cranial-neuropathies-and-other-facial-pains/13-1-trigeminal-neuralgia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004483
