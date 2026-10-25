---
type: qbank
schema_version: 1
id: medqa-us-train-004751
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:33f59e2b565d1cb50492e2087b42e699c3dd7a2142fee193abb0725649ac52f9
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "폐색전증"
  - "급성 신손상"
  - "환기-관류 스캔"
question_type: investigation
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

71세 남성이 호흡곤란으로 응급실에 왔다. 중국 출장에서 돌아오던 중 공항에서 택시를 타고 집으로 가다가 갑자기 숨이 찼다. 조절이 잘 되지 않는 당뇨병과 50갑년 흡연력이 있다. 약을 잘 복용하지 않고 현재 이부프로펜만 복용한다. 초기 심전도에서 동성빈맥이 보이고 흉부 방사선사진은 정상이다. 크레아티닌 2.4 mg/dL, BUN 32 mg/dL로 기저 크레아티닌 0.9 mg/dL보다 상승했다. 체온은 98.8°F (37.1°C), 맥박은 분당 122회, 혈압은 145/90 mmHg, 호흡수는 분당 19회, 실내 공기 산소포화도는 93%이다. 진찰에서 고통스러워 보이고 심장 진찰은 빈맥 외에 특이사항이 없으며 폐에서 호기성 천명음이 들린다. 확진을 위한 가장 적절한 검사는 무엇인가?

## 선택지

A. 동맥혈가스검사
B. CT 혈관조영술
C. D-dimer
D. 환기-관류 스캔

## 해설

장거리 이동 후 급성 호흡곤란·빈맥과 저산소증은 PE를 의심하게 한다. AKI로 조영제 위험을 검토해야 하고 흉부 X선이 정상인 점에서 V/Q scan(D)이 적절한 대안이다. 항상 CTPA보다 빠르거나 민감하다는 뜻은 아니다. 신기능·임상 사전확률·검사 가용성과 결과의 진단 가능성을 종합하며 비진단적 결과는 추가 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 신장기능 악화에서 V/Q D 선택 근거를 보완하고 항상 가장 민감/신속하다는 과장 제거.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng158/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004751
