---
type: qbank
schema_version: 1
id: medqa-us-train-006627
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:341aa8d6e39ad3ee427fe5aa19194d7415e53eaaeaafb45b3175d1563fc92287
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "비후성 폐쇄성 심근병증"
  - "승모판 수축기 전방운동"
  - "돌연 심장사 위험"
  - "Hypertrophic cardiomyopathy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-u5hO2bhOyEsSDsi6zqt7zrs5Hspp0gKEh5cGVydHJvcGhpYyBDYXJkaW9teW9wYXRoeSkubWQ
question_type: diagnosis
difficulty: standard
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

특별한 병력 없이 건강했던 14세 남아가 농구 연습 중 쉽게 숨이 차고 어지러워져 내원했다. 이런 증상은 처음이며 올해 대표팀에 선발될 실력이어서 좌절감을 느낀다. 흡연, 음주 또는 약물 사용은 부인한다. 어머니는 큰아들과 남동생이 모두 건강했음에도 운동 중 갑자기 사망해 매우 걱정한다. 경흉부 심초음파에서 좌심실 박출률은 보존되어 있고 승모판의 수축기 전방운동이 보여 의심한 진단을 확인했다. 탈수를 피하고 운동 참여는 전문의의 개별 위험평가와 공동의사결정으로 정하며 가족력 등을 고려해 삽입형 제세동기 필요성을 평가한다고 설명했다. 다음 중 가장 가능성 높은 진단에 부합하는 신체진찰 소견은?

## 선택지

A. 경동맥으로 방사되는 수축기 박출 잡음
B. 삼첨판 역류
C. 승모판 역류
D. 발살바법으로 호전되는 수축기 박출 잡음

## 해설

SAM은 LV유출로폐쇄와 승모판 접합장애를 일으켜 MR C를 동반할 수 있다. MR잡음은 보통 수축기 잡음이지 지속성잡음이 아니다. Valsalva로 HOCM잡음이 줄어든다는 D는 반대다. 운동참여와 ICD는 소아HCM 전문팀이 개별 위험·가족력·검사를 종합해 공동의사결정하며 모든 강도운동을 일률 금지하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HCM의 SAM이 MR C를 유발함에도 다르다고 한 역설명 및 지속성잡음 오역 교정. 일률 운동금지도 현행공동결정으로 한정.
- https://www.jacc.org/doi/10.1016/j.jacc.2024.02.014

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006627
