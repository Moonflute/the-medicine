---
type: qbank
schema_version: 1
id: medqa-us-train-001528
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4778749247aaa087b16dec38222253abee72b38948d644aec54e31e814829bf8
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "anterior epistaxis"
  - "Kiesselbach plexus"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-u5hOy2nO2YiCAoRXBpc3RheGlzKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

14세 남아가 멈추지 않는 코피로 응급실에 내원했다. 코를 눌러도 출혈이 멎지 않는다. 그 외에는 건강하고 외상이나 유전성 출혈질환 병력은 없다. 체온은 98.9°F (37.2°C), 혈압은 120/64 mmHg, 맥박은 85회/분, 호흡수는 12회/분, 실내 공기 산소포화도는 98%이다. 콧구멍 안에 혈전이 여러 개 있고 제거하면 출혈이 따른다. 다음 중 증상의 가장 가능성 높은 출혈 부위는 어디인가?

## 선택지

A. 경동맥
B. 사골동맥
C. 키셀바흐 혈관얼기
D. 접형구개동맥

## 해설

소아·청소년의 자연 발생 비출혈은 대부분 전하방 비중격의 Little 영역에 있는 키셀바흐 혈관얼기에서 발생하므로 C가 가장 가능성이 높다. 접형구개동맥 관련 후방 출혈은 다른 연령·상황에서 더 고려한다. 압박으로 멎지 않았다는 사실만으로 특정 혈관을 확정할 수는 없지만, 이 문항의 연령과 다른 단서에서는 전방 출혈이 가장 흔하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 키셀바흐 혈관얼기의 해부학적 위치를 코전두부가 아니라 전하방 비중격으로 교정; 압박 실패만으로 출혈점을 확정한다는 설명을 완화.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001528
