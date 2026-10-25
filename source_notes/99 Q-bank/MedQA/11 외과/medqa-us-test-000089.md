---
type: qbank
schema_version: 1
id: medqa-us-test-000089
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:22d142a37242c48d758416d1efc4d87878b5c637b9ac2403f0e51287234ae26c
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "흉부 대동맥 파열"
  - "고속 외상"
  - "종격동 확장"
  - "Traumatic aortic injury"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

26세 여성이 안전벨트를 매고 고속 자동차 충돌 사고를 당한 지 20분 후 응급실에 왔다. 기면 상태이고 일관성 없이 말하며 얼굴에 심한 열상이 있고 호흡곤란이 있다. 맥박 분당 130회, 호흡수 분당 29회, 혈압 90/58 mmHg, 실내 공기 산소포화도 70%이다. 왼쪽 폐기저부 타진에서 둔탁음과 호흡음 감소가 있고 복부는 전반적으로 압통이 있으나 경직이나 반발통은 없다. 혈색소 12.1 g/dL이다. 흉부 X선에서 왼쪽 제2늑골 골절, 왼쪽 주기관지 함몰, 비위관의 오른쪽 편위, 종격동 확장이 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 횡격막 파열
B. 외상성 기관지 파열
C. 흉부 대동맥 파열
D. 긴장성 기흉

## 해설


고속 충돌 뒤 종격동 확장, 왼쪽 주기관지의 하방 편위와 비위관의 오른쪽 편위는 외상성 흉부 대동맥 손상과 종격동 혈종을 강하게 시사한다. 왼쪽 폐기저부 둔탁음은 동반 혈흉 가능성을 뒷받침한다. 선택지에서는 C가 가장 적절하다. 단순 흉부 X선만으로 파열의 범위나 형태를 확정할 수 없으며, 생존하여 내원하는 봉쇄성 손상도 있어 모든 대동맥 파열이 즉시 사망한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000089 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고에너지 감속손상과 종격동 소견의 진단 추론을 유지하고 최빈 원인·즉시 치명적이라는 과도한 단정을 수정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000089
