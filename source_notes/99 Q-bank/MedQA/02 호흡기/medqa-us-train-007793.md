---
type: qbank
schema_version: 1
id: medqa-us-train-007793
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3bdbcd41f6b5cd3aae5219f6d6ae50d518b22666c16c0477a4785f2f97e121af
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "severe COPD"
  - "chronic hypoxemia"
  - "long-term oxygen therapy"
  - "Chronic obstructive pulmonary disease"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: prevention
difficulty: complex
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvUm9mbHVtaWxhc3QubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGhlb3BoeWxsaW5lLm1k
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGlvdHJvcGl1bS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 남자가 7년 동안 지속된 기침과 호흡곤란으로 내원했다. 10대부터 흡연했으며 티오트로피움, 포르모테롤, 부데소니드를 정기적으로 흡입하고 경구 테오필린을 복용한다. 지난 6개월 동안 악화 횟수가 증가했다. 체온 37.2°C(99°F), 심박수 92회/분, 혈압 134/88 mm Hg, 호흡수 26회/분이다. 흉부 청진에서 호흡음이 전반적으로 감소하고 양측에 수포음이 들린다. 맥박산소측정에서 안정 시 산소포화도는 88%이다. 흉부 방사선에서 횡격막 편평화, 폐 과투과성, 길고 좁은 심장 음영이 보인다. 의사는 상태를 설명하고 금연의 중요성을 강조했다. 이 질환으로 인한 사망 위험을 줄일 가능성이 가장 높은 추가 처치는?

## 선택지

A. 예방적 아지스로마이신
B. 로플루밀라스트
C. 폐 재활
D. 보충 산소

## 해설

안정 시 산소포화도 88%는 중증 저산소혈증을 시사하여 D의 보충 산소를 고려할 근거가 된다. 안정기에 지속되는 저산소혈증을 확인한 COPD 환자에서는 하루 15시간 이상의 장기 산소요법이 생존을 개선한다. 일회 측정만으로 평생 처방을 확정하지 않고 혈액가스와 반복 평가로 적응증을 확인하며, 산소 사용 중 흡연은 금지한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ‘장기 저산소 치료’를 장기 산소요법으로 바로잡고 안정기 지속 저산소혈증 확인 조건을 명시.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7667898/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007793
