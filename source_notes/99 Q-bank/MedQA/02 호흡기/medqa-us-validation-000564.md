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

67세 남성이 COPD 악화로 입원했다. 가래가 많아지고 농성이 됐으며 지난 1년 동안 여러 차례 입원과 항생제 치료를 받았다. 최근 악화 당시 기도 배양에서 녹농균이 분리된 기록이 있다. 이번 항생제 선택에 도움이 되는 검사는?

## 선택지

A. 정맥혈가스만 확인한다
B. 가래 색을 보고 이전과 같은 균이라고 판단한다
C. 항생제를 지연하지 않는 범위에서 객담을 채취해 배양과 감수성검사를 한다
D. 항생제를 모두 마친 뒤에만 처음 객담 배양을 한다

## 해설

잦은 악화와 입원·항생제 이력, 이전 녹농균 분리력은 내성균 위험을 판단하는 근거다. 가래를 배양하고 과거 및 이번 감수성을 비교해 경험적 항생제를 조정한다. 객담 색으로 균을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복 악화의 녹농균 고려 C를 지지하는 누락된 최근 항생제 이력을 복원하고 경험치료의 일률화를 제한.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000564
- https://new.lungkorea.org/board/guide/view/13792
