---
type: qbank
schema_version: 1
id: medqa-us-train-004105
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:393fe3906e64935f5ac870bb31ff9b4732ecdbd5d3eee164ead9dad177a4e019
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환 악화"
  - "급성 저산소혈증"
  - "만성 기관지염"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: 임상증례 객관식
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남자가 점점 심해지는 호흡곤란으로 응급실에 왔다. 당뇨병, 고혈압, 만성 기관지염 병력이 있고 처방약을 정해진 대로 복용한다. 최근 집안의 간단한 일도 하기 어려워졌고 며칠 동안 한 블록 이상 걷지 못했다. 지속적인 기침은 가래가 더 많이 생기며 악화되었다. 약 1년 전 기관지염 진단 당시 40갑년 흡연력이 있었다. 뚜렷한 호흡곤란으로 보조근을 사용해 숨을 쉰다. 체온 38.6°C, 혈압 120/85 mmHg, 맥박 100회/분, 호흡수 26회/분, 산소포화도 87%이다. 청진에서 호흡음이 감소하고 호기성 천명음이 들린다. 동맥혈가스는 PCO2 60 mmHg, PO2 45 mmHg, pH 7.3, HCO3− 25 mEq/L이다. 가장 적절한 다음 치료 단계는 무엇인가?

## 선택지

A. 알부테롤
B. 레보플록사신
C. 산소 보충
D. 아미노필린

## 해설

산소포화도 87%, PaO₂ 45 mmHg의 뚜렷한 저산소혈증이 있으므로 보기 중 C, 산소 보충이 즉시 필요하다. COPD 악화에서는 고탄산혈증 악화를 피하도록 조절산소를 투여하며 일반적인 목표 산소포화도는 88~92%이다. 산소를 보류하거나 무조건 고농도 산소로 정상 이상까지 올리는 접근은 모두 적절하지 않다.

PaCO₂ 60 mmHg와 pH 7.30은 고탄산성 호흡부전과 산증을 나타낸다. 산소와 기관지확장제 등 초기 치료를 시행하면서 동맥혈가스와 호흡노력을 재평가하고 비침습적 환기 적응증도 신속히 판단해야 한다. 산소만으로 전체 악화 치료가 끝나는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. COPD 저산소혈증의 산소 투여를 88~92% 목표의 조절산소로 구체화하고 고탄산성 산증에서 NIV 평가 필요성 보완.
- https://www.safetyandquality.gov.au/standards/clinical-care-standards/chronic-obstructive-pulmonary-disease-clinical-care-standard

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004105
