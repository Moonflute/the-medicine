---
type: qbank
schema_version: 1
id: medqa-us-train-006537
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fd3d905a21cb43a308f310798f6de6f4914cb344a8402bc350ad6e89f6e52632
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "중증 화상"
  - "화상성 쇼크"
  - "초기 정맥 수액"
  - "Burn shock"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 주택 화재 현장에서 구조되어 응급실에 내원했다. 몸 전체에 광범위한 화상이 있고 의식은 있지만 심한 통증을 호소한다. 과거력으로 대마초 사용이 있다. 현재 복용 약물은 없다. 등, 흉부, 허벅지 및 다리 전반에 광범위한 화상이 보인다. 구강인두에는 손상이나 심한 연기 흡입 징후가 없고 스스로 호흡하며 양쪽 폐의 호흡음은 정상이다. 체온은 99.5°F(37.5°C), 맥박은 분당 145회, 혈압은 100/70 mmHg, 호흡수는 분당 27회, 실내 공기에서 산소포화도는 93%이다. 다음 중 이 환자의 사망률을 낮출 가능성이 가장 높은 중재는?

## 선택지

A. 정맥 수액
B. 경구 항생제
C. 국소 항생제
D. 생리식염수 적신 드레싱

## 해설

넓은 부위의 화상과 빈맥은 혈장 누출과 저혈량의 위험을 시사한다. 보기 중 생존에 직접적으로 중요한 처치는 적절한 정맥 수액 소생(A)이다. 실제 투여량은 화상 면적과 깊이, 체중, 소변량 및 순환 반응을 평가하여 조절하며, 무제한으로 수액을 주는 것은 아니다. 본문만으로 정확한 화상 깊이나 면적을 만들어 계산해서는 안 된다. 일률적인 예방적 경구 항생제나 국소 처치만으로 화상 쇼크를 예방할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 광범위 화상에서 수액 소생 A를 유지하되 원문에 없는 깊이·정확한 면적을 만들지 않고 예방적 항생제를 기본 치료로 오인하지 않게 한다.
- 공식/학회 근거: https://academic.oup.com/jbcr/article/45/3/565/7458089

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006537
