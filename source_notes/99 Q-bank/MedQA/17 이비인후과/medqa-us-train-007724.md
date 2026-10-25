---
type: qbank
schema_version: 1
id: medqa-us-train-007724
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4bf8068b4918d1fc4e91eede1e9679d1504f939b56a6916071a7247d070b23d1
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "acute viral rhinosinusitis"
  - "acute bacterial sinusitis"
  - "supportive care"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-q4ieyEsSDrtoDruYTrj5nsl7wgKEFjdXRlIHNpbnVzaXRpcykubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남자가 하루 전 시작된 피로와 뺨 통증으로 일차 진료를 받으러 왔다. 노란색 또는 녹색의 콧물도 난다. 그 밖에는 건강하고 전반적인 상태도 양호하다. 제1형 당뇨병 병력이 있고 가끔 정맥주사 약물을 사용한다. 체온 99.0°F(37.2°C), 혈압 120/84 mmHg, 맥박 70회/분, 호흡수 16회/분, 실내 공기 산소포화도 98%이다. 양측 상악동을 누르면 통증이 있고 몸을 앞으로 숙이면 악화된다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. 아목시실린-클라불라네이트
B. 암포테리신과 괴사조직 제거
C. 두부 CT
D. 슈도에페드린 투여 후 1주일 뒤 추적

## 해설

증상은 하루 전 시작했고 발열이나 전신 독성이 없어 아직 세균성 부비동염의 지속/악화 기준을 충족하지 않는다. 콧물 색만으로 항생제나 CT, 항진균제·수술을 선택하지 않으며, 제시된 선택지 중 D의 증상관리와 추적이 가장 가깝다. 다만 경구 pseudoephedrine은 급성 부비동염에서 효과 근거가 제한적이며 모든 환자에게 필수인 표준 약은 아니다. 당뇨 등 기저질환과 부작용 위험을 고려하고 급격한 악화나 합병증 소견이 있으면 예정 추적을 기다리지 않고 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 하루 된 경증 증례를 10일 이상 세균성 부비동염처럼 설명한 오류를 교정; D의 핵심을 항생제 없는 증상관리·추적으로 한정.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng79/chapter/recommendations
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng79/chapter/Summary-of-the-evidence

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007724
