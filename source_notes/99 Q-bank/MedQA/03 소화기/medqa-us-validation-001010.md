---
type: qbank
schema_version: 1
id: medqa-us-validation-001010
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f9671bcd9ddd9faf4ce21439ca8edf88900d1d44dc21a226a774b9e2b6fc7d74
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "대량 하부위장관 출혈"
  - "혈관조영술"
  - "혈역학적 불안정"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tlZjrtoAg7JyE7J6l6rSAIOy2nO2YiCAoTG93ZXIgR2FzdHJvaW50ZXN0aW5hbCBUcmFjdCkubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

63세 남성이 갑자기 발생한 다량의 혈변으로 응급실에 왔다. 수액과 수혈을 시작했지만 선홍색 혈변이 계속된다. 토혈이나 흑색변은 없고, 혈압을 유지해 즉시 CT실로 이동할 수 있다. 출혈 위치를 신속히 찾기 위해 먼저 시행할 검사는?

## 선택지

A. 복부·골반 CT 혈관조영술
B. 장 정결 뒤 예정된 외래 대장내시경
C. 소장 캡슐내시경
D. 복부 단순 X선

## 해설


혈역학에 영향을 주는 혈변이 계속되면 CT 혈관조영술로 활동성 출혈 위치를 빠르게 찾을 수 있다. 소생을 병행하고 출혈이 확인되면 혈관조영 및 색전술 또는 내시경 지혈로 연결한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001010 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소생에도 지속되는 대량 출혈의 혈관조영/색전 A 유지; 현행 CTA 역할과 위관 음성의 한계 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.radiologyinfo.org/en/info/acs-rm-lower-gastro-tract-bleeding

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001010
- https://pubmed.ncbi.nlm.nih.gov/36735555/
