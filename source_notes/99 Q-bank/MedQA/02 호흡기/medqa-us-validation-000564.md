---
type: qbank
schema_version: 1
id: medqa-us-validation-000564
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:923b7e3c3406b918c4f02edb9695b4a506238747aa3878c631cae6f8548f5767
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "COPD 급성 악화"
  - "녹농균"
  - "기관지확장증 위험"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uFueuGjeq3oCAoUHNldWRvbW9uYXMgQWVydWdpbm9zYSkubWQ
  - MDIg7Zi47Z2h6riwL-q4sOq0gOyngCDtmZXsnqXspp0gKEJyb25jaGllY3Rhc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: investigation
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 남성이 일주일간 점점 심해지는 기침, 걸쭉한 노란 가래, 호흡곤란으로 진료를 받으러 왔다. COPD가 있고 지난 1년간 급성 악화를 4회 겪었으며 FEV1은 정상 예측값의 48%이다. 인플루엔자와 폐렴구균 예방접종을 받았고 현재 당뇨병 치료 중이다. 2개월 전 마지막 악화 때 단기간 항생제 치료를 받았다. 이번 악화 치료 전에 고려할 병원체는?

## 선택지

A. 폐렴사슬알균
B. 인플루엔자균
C. 녹농균
D. 호흡기세포융합바이러스

## 해설

잦은 악화, 심한 기류제한과 최근 항생제 사용은 내성 그람음성균과 녹농균(C)을 고려할 근거가 된다. 객담 배양과 과거 균 분리력, 최근 치료 및 지역 내성률을 반영해 항생제를 선택한다. 모든 COPD 악화의 최빈 병원체가 녹농균이거나, 당뇨병만으로 항녹농균 치료를 일률적으로 해야 한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복 악화의 녹농균 고려 C를 지지하는 누락된 최근 항생제 이력을 복원하고 경험치료의 일률화를 제한.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000564
