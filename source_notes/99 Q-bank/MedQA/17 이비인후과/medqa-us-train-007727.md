---
type: qbank
schema_version: 1
id: medqa-us-train-007727
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4fc92ea5e16214d5185d78dd7ae5e87568258eb67469a3cde3adafe7fdb681b0
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "streptococcal pharyngitis"
  - "Centor criteria"
  - "rapid strep test"
question_type: investigation
related_disease_slugs:
  - MDgg6rCQ7Je8L-yCrOyKrOyVjOq3oCDsnbjrkZDsl7wgKFN0cmVwdG9jb2NjYWwgUGhhcnluZ2l0aXMpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 환자가 인후통과 39.2°C 발열로 내원했다. 기침과 콧물은 없고 앞목 림프절을 누르면 아프다. 편도 삼출은 없으며 합병증의 단서도 없다. 신속 항원검사가 가능할 때 다음은?

## 선택지

A. 인두 소견과 관계없이 항생제를 즉시 시작한다
B. 경부 CT를 일률적으로 시행한다
C. 인두 도말로 A군 사슬알균 신속 항원검사를 시행한다
D. 기침이 없으므로 바이러스 감염으로 확정한다

## 해설


국내 성인 지침에서는 변형 센터 점수가 3점 이상이면 신속 항원검사를 시행해 양성일 때 항생제를 쓴다. 발열·전경부 압통·기침 없음이 이 사례에서 각각 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고열·기침/콧물 없음·전경부 림프절 종대에서 GAS 검사 선택 B는 적절. 영어 원문·선지·해설 일치. 바이러스 증상이 없는 경우 임상 소견만으로 감별 불가하므로 검사로 확인하며 편도삼출 부재가 GAS를 배제하지 않음. 플래그는 오연결 아님.
- 공식/학회 근거: https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/streptococcal-pharyngitis2/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007727
- https://kdca.go.kr/bbs/kdca/55/306853/download.do
