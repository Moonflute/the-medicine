---
type: qbank
schema_version: 1
id: medqa-us-test-000520
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f8659a8e21df6ae931a58eb50a48ff610a703ad33951e21b757483da2b59c8db
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "관통성 복부 외상"
  - "총상"
  - "출혈성 쇼크"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

36세 남성이 총격 사건 40분 후 응급실에 왔다. 술집 밖에서 다툼 중 총상을 입었다. 사람에 대해서는 지남력이 있었으나 장소와 시간은 몰랐다. 체온 37.3°C(99.1°F), 맥박 116회/분, 호흡 18회/분, 혈압 79/42 mmHg, 실내 공기 산소포화도 97%였다. 팔과 흉부에 찰과상이 여러 개 있었고 오른쪽 제6늑간 중간 쇄골선에 출혈이 거의 없는 1 cm(0.4인치) 총알 입구가 있었다. 심폐 진찰은 정상이었고 복부는 전반적으로 경미한 압통이 있으나 방어성 긴장이나 반발통은 없었다. FAST에서 심낭 내 뚜렷한 자유액은 없었으나 복부 평가는 불확실했다. 흉부 X선에서 오른쪽 하엽에 경미한 음영 증가가 보였다. 큰 정맥로 2개를 삽입해 수액 소생을 시작하고 기관삽관 및 기계환기를 시행했다. 다음 중 가장 적절한 처치는?

## 선택지

A. 흉부·복부·골반 CT
B. 국소 창상 탐색
C. 탐색적 개복술
D. 비디오 보조 흉강경 수술

## 해설


혈압 79/42 mmHg의 쇼크와 관통 흉복부 손상 가능성이 있어 출혈을 신속하게 조절해야 한다. 불확실한 FAST나 뚜렷한 복막자극징후 부재가 이를 배제하지 않는다. 선지 중 탐색적 개복술(C)이 적절하며 CT를 위해 수술을 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000520`와 직접 대조했다.
- 판정: 원정답 C와 정반대로 CT A를 권하던 해설을 교정. 쇼크를 동반한 관통 흉복부외상에서는 CT로 수술 지연 금지.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.east.org/mobile/practice-management-guideline/78

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000520
