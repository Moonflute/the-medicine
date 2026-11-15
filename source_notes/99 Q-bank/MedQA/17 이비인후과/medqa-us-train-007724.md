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

23세 환자가 감기 시작 이틀째에 누런 콧물과 가벼운 양쪽 볼 압박감을 호소한다. 고열, 심한 통증, 호전 후 악화나 안와 이상은 없다. 초기 관리는?

## 선택지

A. 경구 아목시실린–클라불란산을 시작한다
B. 부비동 CT를 곧바로 시행한다
C. 진균성 비부비동염으로 보고 정맥 항진균제를 투여한다
D. 대증치료를 하고 지속되거나 악화하면 재평가한다

## 해설

짧은 급성 상기도 증상에서 분비물 색만으로 세균 감염을 구분할 수 없다. 초기에는 대증 치료하고 고열·심한 국소 통증이나 악화, 장기 지속 여부를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 하루 된 경증 증례를 10일 이상 세균성 부비동염처럼 설명한 오류를 교정; D의 핵심을 항생제 없는 증상관리·추적으로 한정.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng79/chapter/recommendations
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng79/chapter/Summary-of-the-evidence

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007724
- https://kdca.go.kr/bbs/kdca/55/306853/download.do
