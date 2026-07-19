---
type: qbank
schema_version: 1
id: medqa-us-train-009608
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:462dfa3872fbf1d3d5c1bf838f833181da24766c825ab2ae9eb0ca96f085622c
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "severe COPD"
  - "중증 COPD"
  - "long-term oxygen therapy"
question_type: prognosis
difficulty: standard
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

65세 남자가 COPD 악화로 퇴원한 후 추적 진료를 받으러 왔다. 기침과 오한은 호전되었지만 호흡곤란과 피로로 이동성이 심하게 제한된다. 30년간 하루 담배 두 갑을 피웠으나 5년 전 금연했다. 흡입 부데소니드, 포르모테롤, 티오트로피움과 필요 시 이프라트로피움/알부테롤을 사용한다. FEV1은 예측치의 27%이고 안정 시 산소포화도는 84~88%이다. 생존 가능성을 높일 처치는 무엇인가?

## 선택지

A. 경구 로플루밀라스트
B. 경구 테오필린
C. 항생제 치료
D. 산소 치료

## 해설


환자는 FEV1 27%와 안정 시 산소포화도 84~88%로 중증 COPD이며, 장기 저산소증이 생존에 가장 큰 위험 요인이다. 장기 저산소 치료는 24시간 저산소증을 교정해 호흡근 부담을 감소시키고, 심혈관 사망률을 낮춘다. 따라서 산소 치료가 생존 가능성을 높이는 가장 적절한 처치이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009608
