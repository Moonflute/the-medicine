---
type: qbank
schema_version: 1
id: medqa-us-validation-001069
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8333b1e1838ff3905f56915018bb651082c81db37b7f03971cf263b5b83e517c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "저성선자극호르몬성 성선기능저하증"
  - "미소음경"
  - "뇌하수체 기능저하"
related_disease_slugs:
  - MDQg64K067aE67mEL-uHjO2VmOyImOyytCDquLDriqXsoIDtlZjspp0gKEh5cG9waXR1aXRhcmlzbSkubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9UZXN0b3N0ZXJvbmUubWQ
---

# MedQA US 임상문제

## 문제

16세 남학생이 운동선수 신체검사를 받으러 왔다. 비만하고 얼굴 털이 없으며 고환 용적이 20 mL 미만이고 음경 길이가 8 cm 미만이다. 테스토스테론은 95 ng/dL로 낮고 난포자극호르몬/황체형성호르몬 비율도 낮다. 가장 적절한 다음 진단 단계는?

## 선택지

A. 부신피질자극호르몬 자극검사
B. 정액검사
C. 스펙트럼 핵형검사
D. 갑상선자극호르몬 및 프로락틴 측정

## 해설


정답 D. 사춘기 발달이 불충분해 보이고 testosterone이 낮은 경우 반복 아침 testosterone과 LH·FSH 절대값 등으로 평가하며 TSH/prolactin 측정은 가역적/중추성 원인 감별에 도움이 된다. FSH/LH 비율이 낮다는 것만으로 gonadotropin 자체가 낮다고 단정하면 안 된다. 고환<20mL라는 범위만으로 모두 병적 작은 고환이라고 하거나 비만에서 외관상 짧은 음경을 확진 소견으로 보지도 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001069 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: FSH/LH 비율만으로 저성선자극호르몬성 확정할 수 없음. 작은고환 판단도 <20mL만으로 단정하지 않고 D의 내분비 평가 취지 설명.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001069
