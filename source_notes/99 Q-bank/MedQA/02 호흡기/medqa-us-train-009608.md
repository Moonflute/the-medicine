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
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: prognosis
difficulty: standard
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvQnVkZXNvbmlkZS5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvUm9mbHVtaWxhc3QubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGhlb3BoeWxsaW5lLm1k
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGlvdHJvcGl1bS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
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

안정 시 산소포화도 84–88%는 중증 저산소혈증을 시사하므로 D의 산소 치료가 생존 개선에 도움이 될 수 있다. 안정기에 지속되는 저산소혈증을 확인하면 하루 15시간 이상의 장기 산소요법을 처방한다. 최근 악화 후 퇴원한 상태이므로 회복 후에도 필요한지 재평가하고, FEV1 수치만으로 산소 적응증을 정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ‘장기 저산소 치료’ 오역과 무조건 24시간 투여라는 설명을 장기 산소요법의 실제 적응증으로 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7667898/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009608
