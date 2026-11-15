---
type: qbank
schema_version: 1
id: medqa-us-train-004648
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e2f68c219adfbae8f19205f9df6833b8edc66da34b7dcfb6e39e98cd78cafe8d
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "후두암"
  - "상기도 폐쇄"
  - "흡기성 협착음"
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-2bhOuRkOyVlCAoTGFyeW5nZWFsIENhbmNlcikubWQ
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 후두암 치료를 기다리던 중 점차 심해지는 호흡곤란과 들숨 협착음으로 응급실에 왔다. 의식과 자발호흡은 유지되지만, 기도팀은 성문 종괴로 경구 기관삽관이 어렵고 종괴 아래 목으로 접근할 수 있다고 판단했다. 기도를 확보할 적절한 방법은?

## 선택지

A. 정맥 진정제를 단독 투여하고 증상이 줄어드는지 기다린다
B. 숙련된 팀이 자발호흡을 유지하며 종괴 아래로 각성 기관절개술을 시행한다
C. 근육주사 에피네프린만 투여하고 관찰한다
D. 폐렴에 준해 정맥 항생제부터 시작한다

## 해설

진행하는 상기도 폐쇄에서 기도 확보가 우선이다. 성문을 지나기 어렵지만 그 아래로 접근할 수 있고 환자가 자발호흡 중이면 기도팀이 각성 기관절개를 선택할 수 있다. 종양 위치와 산소화·환기 가능성에 따라 실제 방법은 달라진다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 후두암 진행성 폐쇄에서 기관절개 B를 지지하되 모든 기도응급의 획일적 처치로 확대하지 않도록 한정.
- https://doi.org/10.1097/ALN.0000000000004002

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004648
