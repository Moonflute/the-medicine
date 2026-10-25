---
type: qbank
schema_version: 1
id: medqa-us-train-005937
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9b0ee80a496f040a2780550541326fa1428e1b3c7a38bc5b4bc887146b1a57fb
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "뇌간출혈"
  - "뇌탈출"
  - "뇌사 평가"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4ztg4jstpwgKEJyYWluIGhlcm5pYXRpb24pLm1k
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 남성이 2일 전 의식이 없는 상태로 응급실에 왔다. 함께 있던 친구들은 거리에서 쓰러졌다고 한다. 응급실 도착 당시 전신 강직성 경련을 했고 기관삽관 후 디아제팜과 페니토인으로 치료 중이다. 조영제를 사용하지 않은 두부 CT에서 교뇌와 소뇌 내 출혈, 종괴효과 및 편도 탈출이 보였다. 현재 혈압은 110/65 mmHg, 심박수는 분당 65회, 호흡수는 분당 12회(기관삽관, TV 600mL, PEEP 5cmH₂O, FiO₂ 40%), 체온은 37.0°C(98.6°F)이다. 혼수상태이고 양측 동공은 4mm로 빛에 반응하지 않으며 각막반사, 구역반사 및 기침반사도 없다. 다음 중 관리의 다음 최선 단계는 무엇인가?

## 선택지

A. 환기 보조를 중단하고 사망 시각을 기록
B. 뇌파검사
C. 몇 시간 후 재검사
D. 신경과 전문의의 2차 의견

## 해설

현재 소견만으로 뇌사를 선언하거나 환기를 중단할 수 없다. 디아제팜 등 중추신경 억제 약물의 영향을 배제하고 생리적 전제조건을 충족한 뒤 정식 신경학적 검사와 무호흡검사를 시행해야 한다. 따라서 보기 중에는 지지치료를 유지하며 재평가하는 C가 적절하다. '몇 시간 후'가 약물 소실을 보장하는 고정된 판정 간격은 아니다. 약물 반감기와 투여량, 장기기능 등에 따라 더 긴 관찰이 필요하다. 현행 지침에서 EEG는 뇌사 보조검사로 인정되지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 디아제팜 교란이 남은 환자에서 고정된 6시간 관찰만으로 뇌사를 판정한다는 오류를 교정. C는 재평가이며 사망선언이 아님.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC10791061/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005937
