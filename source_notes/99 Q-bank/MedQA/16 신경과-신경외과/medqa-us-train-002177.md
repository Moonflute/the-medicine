---
type: qbank
schema_version: 1
id: medqa-us-train-002177
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e77fefffc5f9ebe4b6435ec7c4fd369fbc1f770868e6d48c8aa6a014441af895
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "migraine without aura"
  - "migraine prophylaxis"
  - "amitriptyline"
  - "Migraine"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjrjrkZDthrUgKE1pZ3JhaW5lKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9HYWJhcGVudGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

비만한 24세 여성이 2일 전 시작된 심한 오른쪽 전두측두부 두통으로 내원했다. 일반의약품 진통제로 호전되지 않는다. 어제는 통증이 너무 심해 출근하지 않고 하루 종일 어둡고 조용한 방에 누워 있었다. 오늘 아침 구토 후 내원했다. 지난 6개월 동안 12~24시간 지속되는 비슷한 두통이 5~6회 있었지만 이렇게 심한 적은 없다. 발작, 시각장애, 수막자극징후, 아픈 사람과의 접촉, 국소 신경학적 결손은 없다. 중등도 지속성 천식이 있어 이프라트로피움과 알부테롤 흡입기로 치료 중이다. 두 남성과 성관계를 하며 콘돔을 꾸준히 사용하고 에스트로겐 함유 경구 피임약을 정기적으로 복용한다. 활력징후와 완전한 신경학적검사는 정상이고 뇌 MRI도 정상이다. 다음 중 이 환자의 가장 가능성 높은 질환에 대한 예방 치료는?

## 선택지

A. 수마트립탄
B. 메티세르지드
C. 가바펜틴
D. 아미트립틸린

## 해설

반복되는 일측성 중증 두통과 광선·소리 회피, 구토는 편두통을 시사한다. 발작이 생활에 미치는 영향과 환자 선호에 따라 예방치료를 논의할 수 있으며, 주어진 선지 중 삼환계 항우울제 아미트립틸린(D)이 적절한 예방약이다. 수마트립탄은 급성기 약이고 가바펜틴은 편두통 예방에 권장되지 않는다. 아미트립틸린은 체중 증가·진정 등 부작용을 고려하여 선택해야 하며 비만 환자에게 무조건 최선이라는 뜻은 아니다. 피임약 복용만으로 예방약 선택이 결정되지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 아미트립틸린의 약물 분류 오기와 피임약만으로 예방약을 정하는 설명을 교정했다. 예방치료의 개별 이득·부작용을 고려하면서 선지 D를 유지한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002177
