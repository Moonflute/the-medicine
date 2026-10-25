---
type: qbank
schema_version: 1
id: medqa-us-train-006608
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b620e57d25de45761801eeb28292d16433694501c4a0a691de07cfd3359fb2c8
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "연성하감"
  - "Haemophilus ducreyi"
  - "통증성 생식기 궤양"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yXsOyEse2VmOqwkCAoQ2hhbmNyb2lkKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
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
---

# MedQA US 임상문제

## 문제

21세 여성이 2일 전 외음부에서 발견한 여러 개의 통증성 화농성 궤양으로 내원했다. 발열이나 배뇨 시 작열감은 없다. 유사한 병변 병력은 없으며 17세 때 클라미디아 감염을 항생제로 치료받았다. 예방접종은 최신 상태이다. 2개월째 남자친구와 성관계를 하며 경구피임약을 복용하고 콘돔은 일관되게 사용하지 않는다. 체온은 37.2°C(99.0°F), 맥박은 분당 94회, 혈압은 120/76 mm Hg이다. 압통성 서혜부 림프절병증과 대음순에 괴사성 바닥을 가진 1.5cm 크기의 통증성 화농성 궤양 4개가 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 연성하감
B. 생식기 헤르페스
C. 경성하감
D. 림프육아종성 성병

## 해설


통증성 화농성 괴사바닥 궤양과 압통성 서혜부 림프절은 선택지 중 H.ducreyi 연성하감 A에 가장 부합한다. 과거17세 chlamydia 치료력이 실제로 있으므로 성병 전력 없음으로 바꾸지 않는다. HSV 등 다른 원인과 임상 중첩이 가능하여 실제 검사/역학으로 평가하며 이 모양이 현재 모든 지역에서 가장 흔한 성기궤양이라는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006608 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 실제 과거 chlamydia가 있는데 성병 전력 없다고 한 해설 오류 교정; purulent painful chancroid A 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006608
