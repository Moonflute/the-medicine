---
type: qbank
schema_version: 1
id: medqa-us-train-004627
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:040bdcfff9376683f5758aa52aef4b837e157df801631f4f6fee7621020c1782
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 장간막 허혈"
  - "심방세동"
  - "장 허혈"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_quInshLEg7J6l6rCE66eJIO2XiO2YiCAoQWN1dGUgTWVzZW50ZXJpYyBJc2NoZW1pYSkubWQ
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
question_type: investigation
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 갑자기 시작된 매우 심한 배꼽 주변 통증과 혈변으로 왔다. 심방세동이 있으나 항응고제를 복용하지 않는다. 통증에 비해 복부 압통은 가볍고 혈압은 안정적이다. 급성 장간막 허혈이 의심될 때 지체 없이 시행할 검사는?

## 선택지

A. 복부 단순 X선
B. 대장내시경
C. 복부 CT 혈관조영술
D. 외래 복부 초음파

## 해설


심방세동은 장간막동맥 색전의 위험인자다. 진찰에 비해 심한 복통과 급성 발병이 있으면 CT 혈관조영술로 혈관 폐색과 장 허혈을 신속히 평가한다. 초기 혈중 젖산이 정상이어도 의심이 높다면 검사를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AF양상불규칙맥·진찰대비심한복통·혈변은 embolic급성장간막허혈 C.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004627
- https://doi.org/10.1186/s13017-022-00443-x
