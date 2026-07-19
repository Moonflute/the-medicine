---
type: qbank
schema_version: 1
id: medqa-us-train-003495
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2cce2f63f6f79d01691400001e35c65f0e89fa165aaaa6cc86fc909de324a773
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "status asthmaticus"
  - "respiratory failure"
  - "rising PaCO2"
  - "mechanical ventilation"
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

8세 여아가 1시간 동안 지속된 심한 호흡곤란으로 응급실에 왔다. 천식 병력이 있고 흡입기를 여러 번 사용했지만 호전되지 않았다. 앞으로 몸을 기울인 채 앉아 있고 늑간근이 심하게 함몰되며 눕지 못했다. 양쪽 폐의 공기 유입이 감소했고 최대 호기 유량은 50%였다. 의사와 대화하기도 어려웠다. 동맥혈가스는 PaO2 50 mmHg, pH 7.38, PaCO2 47 mmHg, HCO3- 27 mEq/L였다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 메타콜린 유발검사
B. 흡입 코르티코스테로이드
C. 정맥 코르티코스테로이드
D. 기계환기

## 해설


중증 천식 악화에서 호흡곤란, 흉부 근육 사용, PaCO2 상승은 급성 호흡부전(임계성 저산소증)으로, 기계환기가 필요하다. 흡입제와 정맥 스테로이드는 보조적이지만, 환자는 이미 호흡 근육 피로와 저산소증을 보이고 있다. 따라서 가장 적절한 처치는 기계환기이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003495
