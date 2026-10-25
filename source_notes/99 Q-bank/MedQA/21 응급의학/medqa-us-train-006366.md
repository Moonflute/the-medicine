---
type: qbank
schema_version: 1
id: medqa-us-train-006366
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9d206309a17f3471514bd001e80ccc8f5cedc55ddf191ed8ca32cfb191e3a078
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "삽관 실패"
  - "외상성 기도 폐쇄"
  - "윤상갑상막절개술"
  - "Airway obstruction"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 비만 남성이 고속 교통사고에 연루된 지 30분 후 응급실에 내원했다. 안전벨트를 매지 않은 운전자였다. 도착 당시 기면 상태이다. 맥박은 분당 112회, 호흡수는 분당 10회로 불규칙하고, 혈압은 94/60 mm Hg이다. 실내 공기에서 산소포화도는 91%이다. 동공은 크기가 같고 빛에 느리게 반응한다. 통증에 사지를 움츠린다. 얼굴, 흉부 및 복부에 여러 멍이 있다. 왼쪽 폐기저부의 호흡음이 감소되어 있다. 큰 구경의 말초 정맥로 두 개를 삽입하고 0.9% 생리식염수 주입을 시작했다. 신속 연속 기관삽관을 시행했으나 기관내 삽관에 실패했다. 백-마스크 환기를 계속하는 중 산소포화도가 84%로 떨어졌다. 사전의료지시서는 없고 가족은 아직 도착하지 않았다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 비디오 후두경검사
B. 편안함을 위한 처치만 시행
C. 기관절개술
D. 윤상갑상막절개술

## 해설

삽관에 실패한 뒤 마스크 환기로도 산소화를 유지하지 못하고 산소포화도가 계속 저하되는 상황은 삽관 불가·산소화 불가 상태에 해당할 수 있다. 이때 구조 전경부 기도 확보인 윤상갑상막 절개술(D)이 필요하다. 이는 비침습적 처치가 아니라 침습적 응급 기도 술기이다. 단 한 번의 삽관 실패만으로 항상 시행하는 것은 아니며, 산소화가 가능한지와 대체 기도 전략을 함께 판단해야 한다. 가족이 없다는 이유로 생명을 구할 응급 기도 처치를 미뤄서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 윤상갑상막 절개술을 비침습적 처치로 기술한 오류를 교정한다. 삽관과 산소화 실패가 함께 지속되는 구조 상황에서 D를 유지한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006366
