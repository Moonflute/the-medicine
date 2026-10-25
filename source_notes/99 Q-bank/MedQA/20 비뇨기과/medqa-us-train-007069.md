---
type: qbank
schema_version: 1
id: medqa-us-train-007069
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ff7440c490328cc4bd192f52e208027c9a891a31618d58523f52431bd07ba220
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "요관신우이행부 폐색"
  - "수신증"
  - "옆구리 통증"
question_type: diagnosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOuhnCDtj5Dsg4kgKFVyaW5hcnkgdHJhY3Qgb2JzdHJ1Y3Rpb24pLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여자가 오심, 구토, 혈뇨를 동반한 급성 복통으로 내원했다. 제2형 당뇨병으로 글리피지드를 복용 중이다. 유당불내증 병력도 있다. 최근 마라톤 훈련을 시작하여 전해질 보충을 위해 스포츠음료를 많이 마시고 근육 회복을 위해 고단백 식사를 한다. 체중 조절을 위해 가끔 완하제를 사용한다고 한다. 신체검사에서 괴로워하며 편안한 자세를 찾기 어려워한다. 체온은 36.8°C(98.2°F), 심박수 103회/분, 호흡수 15회/분, 혈압 105/85 mmHg, 산소포화도 100%이다. BMI는 21 kg/m²이다. 전혈구검사, 종합대사패널, 소변검사를 시행했다. 신장 초음파에서 요관신우이행부 폐색이 보인다(그림 참조). 이 환자에게서 다음 중 어떤 소견이 가장 잘 나타나는가?

## 선택지

A. 부종과 무뇨
B. 사타구니로 방사되지 않는 옆구리 통증
C. 사타구니로 방사되는 산통
D. 반발통과 기침으로 악화되는 통증

## 해설

본문에 폐색 위치가 요관신우이행부(UPJ)라고 명시되어 있어 신우 팽창에 따른 옆구리 중심 통증 B가 출제 의도에 가장 부합한다. 더 원위부 요관 병변에서 전형적인 사타구니 방향 방사통과 구별하는 문항이다. 다만 통증 양상은 겹칠 수 있어 위치를 통증만으로 확정하지 않는다. 반발통·기침 악화는 복막 자극을 더 시사하고 정상 반대쪽 신장이 있으면 일측 폐색만으로 부종·무뇨가 일반적이지 않다. 초음파의 핵심 위치가 본문에 서술되어 그림 자체는 필수 아님.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정답 B와 반대로 사타구니 방사통을 주장하고 질문을 '가장 안 나타나는' 것으로 바꾼 해설 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007069
