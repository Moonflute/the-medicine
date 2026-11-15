---
type: qbank
schema_version: 1
id: medqa-us-train-003966
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:56a426e459d9eac7be13d0cfdf3634e6c2fda0efff90fbea9a103554eb49a4e5
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "폐 종괴"
  - "폐암"
  - "폐문 림프절병증"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvUGFjbGl0YXhlbC5tZA
---

# MedQA US 임상문제

## 문제

55세 남성의 CT에서 3.5 cm 폐 종괴와 커진 종격동 림프절이 보인다. PET/CT에서 원격 전이는 없다. 커진 림프절에 기관지내시경으로 접근할 수 있다. 조직 진단과 종격동 병기 평가를 함께 할 첫 검사는?

## 선택지

A. CT 유도 폐 종괴 바늘생검
B. 기관지내시경 초음파 유도 림프절 세침흡인(EBUS-TBNA)
C. 객담 세포검사
D. 수술적 종격동경검사

## 해설


EBUS-TBNA는 접근 가능한 종격동 림프절에서 조직을 얻어 폐암 진단과 림프절 병기 확인을 함께 할 수 있다. 음성이어도 전이 의심이 높고 치료 결정에 영향이 있으면 수술적 병기 평가를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003966 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 흡연자의 불규칙3.5cm 폐종괴와 림프절비대에서는 조직 확보 A로 진단·병기·분자검사를 진행하는 것이 적절하다. 원문·선지·해설 일치; 확진 없이 paclitaxel이나 추적 CT만 시행하지 않는다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pubs.rsna.org/doi/10.1148/radiol.2017161659

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003966
- https://www.nice.org.uk/guidance/ng122/chapter/recommendations
