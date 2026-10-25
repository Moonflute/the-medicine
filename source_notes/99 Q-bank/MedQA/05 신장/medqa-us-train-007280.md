---
type: qbank
schema_version: 1
id: medqa-us-train-007280
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cd098ef52a309b7093133b3caa13efd4de49a492f4a87ef539667983c63efecf
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신동맥 협착"
  - "이차성 고알도스테론증"
  - "일측 신장 위축"
  - "난치성 고혈압"
related_disease_slugs:
  - MDQg64K067aE67mEL-yVjOuPhOyKpO2FjOuhoOymnSAoQWxkb3N0ZXJvbmlzbSkubWQ
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
question_type: diagnosis
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVsb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
curation_status: "revised"
curation_reason: "이차성 고알도스테론증 전반이 아니라 죽상경화성 신동맥 협착의 허혈 소견을 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

55세 남자가 추적 진료를 위해 내원했다. 6개월 동안 피로, 두통, 어지럼 에피소드가 여러 차례 있었다. 3개월 전 고혈압을 진단받아 약물을 시작했으나 혈압이 계속 높아 약물을 여러 차례 조정했다. 고콜레스테롤혈증과 말초동맥질환도 있다. 34년 동안 하루 한 갑을 피웠으나 2개월 전에 끊었다. 아스피린, 아토르바스타틴, 로사르탄, 펠로디핀, 히드로클로로티아지드를 복용한다. 키는 188cm(6피트 2인치), 체중은 109kg(240lb), BMI는 31kg/m²이다. 맥박은 82회/분, 혈압은 158/98 mmHg이다. 양측 경동맥 잡음이 들리고 심음은 정상이다. 혈청 칼륨은 3.2 mEq/L, 혈장 레닌 활성도는 4.5 ng/mL/h(정상 0.3~4.2), 혈청 크레아티닌은 1.5 mg/dL이다. 추가 평가에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. 일측 신장 위축
B. 양측 신장 비대
C. 뇌하수체 종괴
D. 미만성 갑상선 비대

## 해설

다발성 동맥경화 위험·말초혈관질환과 치료 저항성 고혈압 맥락에서 신동맥 협착을 고려한다. 한쪽 신장의 만성 저관류는 해당 신장 위축을 만들 수 있어 A가 적합하다. Losartan·이뇨제는 renin과 칼륨에 영향을 주므로 제시된 값만으로 신동맥 협착을 확진하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007280

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 이차성 고알도스테론증 전반이 아니라 죽상경화성 신동맥 협착의 허혈 소견을 설명.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
