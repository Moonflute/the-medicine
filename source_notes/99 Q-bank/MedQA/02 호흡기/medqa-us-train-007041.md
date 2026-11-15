---
type: qbank
schema_version: 1
id: medqa-us-train-007041
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:831eb26b2e636a962e87b0cef5c5163a015ef3084e0d0ede5dd5c7b6a8081382
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성 기관지염"
  - "폐쇄성 폐질환"
  - "폐기능검사"
  - "DLCO"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 여성이 수년째 가래가 끓고 걷기만 해도 숨이 찬다. 기관지확장제 후 FEV₁/FVC는 0.58이고, DLCO는 정상이다. CT에서 기도벽 비후는 있으나 뚜렷한 폐기종은 없다. 이 폐기능과 영상의 조합을 가장 잘 설명하는 것은?

## 선택지

A. 폐포벽 파괴가 주된 폐기종
B. 만성 기관지염 양상이 주된 COPD
C. 간질성 섬유화에 의한 제한성 장애
D. 호흡근 약화에 의한 제한성 장애

## 해설


지속적 호기 기류제한이 있어 COPD에 부합한다. 가래가 많고 기도벽이 두꺼우며 확산능이 보존된 경우에는 폐포벽 파괴가 주된 폐기종보다는 기도 질환이 우세한 양상이다. 정상 DLCO만으로 COPD 아형을 확정하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 만성기관지염 우세의 폐쇄성생리에는 FEV1/비율감소·과팽창과 보존DLCO B가 가장 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007041
- https://new.lungkorea.org/board/guide/view/13792
