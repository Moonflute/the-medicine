---
type: qbank
schema_version: 1
id: medqa-us-train-004832
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95bd6eb52236dfccbd9fe3935f2956468fe2e03bc78ea156e074131eb44c4b4c
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "수막종"
  - "뇌종양"
  - "발작"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsooXslpEgKEJyYWluIHR1bW9yKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 그날 아침 샤워 중 넘어져 응급실에 왔다. 아내가 넘어지는 소리를 듣고 욕실에 들어가 보니 네 사지가 모두 떨리고 있었다. 약 30초 지속되었고 깨어난 뒤 무슨 일이 있었는지 모르며 간단한 질문에 대답하지 못했다. 이후 지남력은 회복되었다. 고혈압과 고지혈증이 있고 메토프롤롤과 아토르바스타틴을 복용한다. 체온은 37.1°C (98.8°F), 맥박 분당 72회, 호흡수 분당 19회, 혈압 130/80 mm Hg, 실내 공기 산소포화도 98%이다. 뇌신경검사는 정상이고 사지 근력은 5/5이다. 핀 찌르기, 가벼운 촉각과 진동감각도 정상이며 대칭적이다. 비조영 두부 CT에서 약간 고음영인 종괴가 보이고 추적 MRI에서 인접 백질을 압박하는 균질하고 경계가 좋은 4cm 종괴와 T2 영상에서 종괴 주변 고신호 테두리가 보인다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 다형성 교모세포종
B. 신경초종
C. 혈관모세포종
D. 수막종

## 해설

고령에서 새 발작과 함께 약간 고음영인 CT 종괴, 경계가 좋고 균질하며 인접 백질을 미는 MRI 종괴 및 T2 주변 테두리는 수막종(D)을 가장 시사한다. 실제 영상이 아니라 문자 기술만 있으므로 경막꼬리나 구체 부착 부위를 새로 추가하지 않는다. 신경초종·혈관모세포종도 경계가 좋은 종괴가 될 수 있지만 제시된 위치 관계·영상양상과 연령의 조합에서 수막종이 가장 합당하며, 교모세포종은 대개 더 불균질하고 침윤성이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 문자 영상만으로 가장 가능성 높은 수막종 D를 유지하되 본문에 없는 경막 부착을 추가하거나 모든 다른 종양은 침습적이라고 배제하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004832
