---
type: qbank
schema_version: 1
id: medqa-us-train-008152
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4555c36093437e532ded37c360e51400de74a933837627149a924c27239a708a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute pancreatitis"
  - "didanosine-induced pancreatitis"
  - "antiretroviral adverse effect"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

28세 여성이 3시간 동안 갑자기 발생한 오심, 구토, 상복부 통증으로 응급실에 왔다. 통증이 점점 심해지고 등으로 자주 방사된다. 2년 전 HIV 양성으로 진단받았고 랄테그라비르/테노포비르/엠트리시타빈 치료에 실패해 3개월 전 아바카비르/디다노신/돌루테그라비르/엔푸비르타이드/포삼프레나비르로 변경했다. 체온 37.8°C(100.0°F), 심박수 110회/분, 호흡수 18회/분, 혈압 124/80 mm Hg이다. 복부 상부 압통은 있으나 방어와 경직은 없다. 초음파에서 부종성 췌장과 담석이 없음을 확인했다. 아밀라아제 800 U/L, 중성지방 125 mg/dL이다. 통증 조절 외에 초기 치료로 적절한 처치는?

## 선택지

A. 아바카비르 중단
B. 디다노신 중단
C. 돌루테그라비르 중단
D. 엔푸비르타이드 중단

## 해설


디다노신은 미토콘드리아 DNA 합성을 억제해 급성 췌장염을 유발한다. 환자는 HIV 치료 중이며 급성 췌장염이 의심되므로 디다노신을 중단하는 것이 초기 관리에 가장 적절하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008152 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 약 변경 후 급성 췌장염에서 didanosine 중단 B의 허가 경고 확인. 기존 복잡 ART 조합을 현대 표준 시작요법으로 추천하는 문항이 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=829e744d-7bd4-43dc-9b58-ffb016cb8e67&type=pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008152
