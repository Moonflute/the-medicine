---
type: qbank
schema_version: 1
id: medqa-us-train-006937
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:34f36e566bbe7ca2848337be64d89ab5b5638069b4a8be551d3e89a0c9e5d0fb
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "혼합 한랭글로불린혈증"
  - "C형간염 감염"
  - "저보체혈증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

53세 남성이 3개월 동안 지속된 가렵지 않은 발진으로 내원했다. 평소보다 피곤하고 손목과 발목에 간헐적인 통증이 있다. 흡연과 음주는 하지 않는다. 체온은 37.6°C(99.7°F), 맥박은 분당 98회, 호흡수는 분당 18회, 혈압은 130/75 mm Hg이다. 몸통과 사지에 눌러도 창백해지지 않는 홍반성 자반성 구진이 여러 개 보인다. 혈색소 14 g/dL, 백혈구 9,500/mm³, 혈소판 228,000/mm³이고 소변검사와 간기능은 정상이다. 류마티스인자는 양성, ANA는 음성, 보체는 감소되어 있다. 혈청 단백 전기영동과 면역고정에서 다클론 IgM과 IgG 감마글로불린이 증가되어 있고, 한랭글로불린 검사에서 24시간 후 침전물이 없다. 흉부 X선과 심전도는 정상이다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 신속혈장레진검사
B. C형간염 혈청검사
C. pANCA 검사
D. Bence Jones 단백검사

## 해설


자반·관절통·피로와 RF 양성/저보체는 혼합형 cryoglobulinemic vasculitis를 의심하게 하므로 HCV 평가 B가 적절하다. 초기24시간 무침전 하나로 배제할 수 없으며 검체 취급·충분한 관찰기간과 임상을 고려해 검사실과 재평가한다. HCV 항체 양성이면 RNA로 현재 감염을 확인하고 정상 transaminase만으로 HCV를 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006937 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HCV 혈청검사 B 유지;24시간 cryoglobulin 음성으로 혼합형을 배제하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-c/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006937
