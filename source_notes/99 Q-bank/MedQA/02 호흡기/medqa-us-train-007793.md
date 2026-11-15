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

70세 남성이 COPD로 치료 중이며 최근 두 달간 급성 악화는 없다. 최적 흡입 치료 중에도 실내 공기에서 안정 시 산소포화도가 86–87%이고, 안정기에 반복 측정한 PaO₂가 53 mmHg 전후다. 생존을 개선하는 추가 치료는?

## 선택지

A. 폐 재활만 시행하고 저산소혈증은 치료하지 않는다
B. 경구 테오필린 용량을 늘린다
C. 예방적 항생제를 시작한다
D. 하루 15시간 이상 장기 산소요법을 시행한다

## 해설

안정기 COPD에서 심한 안정 시 저산소혈증이 지속되면 장기 산소요법이 생존에 도움이 된다. 예측 FEV₁만으로 적응증을 정하거나 악화 중 단 한 번의 수치만으로 장기 처방을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ‘장기 저산소 치료’를 장기 산소요법으로 바로잡고 안정기 지속 저산소혈증 확인 조건을 명시.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7667898/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007793
- https://new.lungkorea.org/board/guide/view/13792
