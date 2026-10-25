---
type: qbank
schema_version: 1
id: medqa-us-test-000804
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:a171787b9c65df89a6280057253640636724e95e137c0ce01ed19c55dc866e0e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "일과성 허혈발작"
  - "심방세동"
  - "뇌혈관 평가"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

75세 여성이 30분 동안 지속된 구음장애와 팔 위약으로 응급실에 왔다. 병원으로 오는 동안 증상이 완전히 사라졌다. 고혈압, 심방세동, 당뇨병, 중증 비만, 통풍, 혈관성 파행 병력이 있다. 체온 99.0°F(37.2°C), 혈압 184/111 mmHg, 맥박 88회/분, 호흡 15회/분, 산소포화도 98%였다. 신경학적 진찰은 정상이고 기억과 언어, 보행도 정상이었다. 두부 CT에서 이전 CT와 같은 미만성 위축만 보였다. 다음 중 가장 적절한 처치는?

## 선택지

A. CT 혈관조영술
B. 심초음파
C. 헤파린
D. MRI

## 해설

일과성 편측 위약·구음장애는 TIA를 의심하게 하며, 호전되었다고 평가를 종료해서는 안 된다. 초기 비조영 CT가 시행된 뒤 두경부 동맥의 협착·폐색을 신속히 확인하기 위한 CTA(A)가 제시된 다음 단계 중 적절하다. MRI 확산영상이나 심장 평가도 상황에 따라 필요하며 CTA가 모든 목적에서 MRI보다 정확하다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. TIA 후 신속 CTA A는 적절하지만 항상 가장 빠르고 정확하다는 과장 제거.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/acute-stroke-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000804
