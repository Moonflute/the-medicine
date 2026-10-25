---
type: qbank
schema_version: 1
id: medqa-us-test-000653
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:48684e8f75b15ccc9272b8d711efe898d1aed174d49a66e86f17c0b868260ef1
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "디곡신 독성"
  - "약물 축적"
  - "만성신부전"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWN0aXZhdGVkQ2hhcmNvYWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

89세 여성이 4일 동안의 설사와 쇠약으로 남편과 함께 응급실에 왔다. 매일 묽은 변을 2~3회 보고 구토도 3번 했다. 두통과 흐린 시력이 있으며 3주 전 바하마 크루즈 여행에서 돌아왔다. 울혈성 심부전, 심방세동, 연령 관련 황반변성, 제2형 당뇨병, 만성신부전이 있다. 와파린, 메토프롤롤, 인슐린, 디곡신, 라미프릴, 스피로놀락톤을 복용한다. 체온 36.7°C(98°F), 맥박 61회/분, 혈압 108/74 mmHg였다. 복부는 부드럽고 경미한 전반적 압통이 있었다. 혈색소 12.9 g/dL, 백혈구 7,200/mm³, 혈소판 230,000/mm³, 혈청 나트륨 137 mEq/L, 칼륨 5.2 mEq/L, 포도당 141 mg/dL, 크레아티닌 1.3 mg/dL였다. 다음 중 가장 적절한 처치는?

## 선택지

A. 혈액투석
B. C. difficile 독소 검사
C. 혈청 약물 농도 측정
D. 경구 활성탄 투여

## 해설

정답은 C이다. 고령·신기능 저하 상태에서 digoxin을 복용하면서 구역/설사·쇠약·시각 이상이 나타나면 digoxin 독성을 의심한다. digoxin은 주로 신장으로 제거되므로 신기능 저하와 탈수는 축적 위험을 높인다. 혈중 digoxin 농도와 ECG·전해질·신기능을 함께 평가하고 농도만으로 독성을 판단하지 않는다. warfarin의 신장 대사 때문이라고 설명하지 않으며 일반적인 digoxin 중독에서 혈액투석은 효과적인 제거 방법이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: digoxin의 신장 배설과 위장관/시각 독성을 연결하고 warfarin 신장 대사라는 무관한 오류 제거.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=48cad559-c17b-4d41-a154-e664e958c1c0

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000653
