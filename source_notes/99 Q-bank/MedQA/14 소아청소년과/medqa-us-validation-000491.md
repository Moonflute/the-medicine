---
type: qbank
schema_version: 1
id: medqa-us-validation-000491
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:4655d8631aaae6d262a077c909367839ec3a98d1b567bc7f84622db79b23779d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "심실중격결손"
  - "좌우 단락"
  - "폐혈관 저항 감소"
question_type: mechanism
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius7IukIOykkeqyqSDqsrDshpAgKFZlbnRyaWN1bGFyIFNlcHRhbCBEZWZlY3QpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 생후 2개월 남아가 수유곤란으로 진료를 받으러 왔다. 수유 시간이 20분에서 40분으로 늘었고 수유 중 호흡곤란과 발한이 있다. 왼쪽 흉골 하연에 3/6등급 범수축기 잡음, 심전도에서 좌축편위, 흉부 X선에서 좌심방·좌심실 확장과 폐혈관 음영 증가가 보이며 심초음파에서 심장내 단락이 확인되었다. 이 단락의 혈류 방향을 설명하는 것은?

## 선택지

A. 우심방과 좌심방 사이의 연결
B. 우심실 유출로 폐쇄
C. 폐혈관 저항 증가
D. 폐혈관 저항 감소

## 해설

출생 후 수주에 걸쳐 폐혈관 저항이 생리적으로 감소하면 좌심실에서 우심실로의 VSD 단락이 늘어날 수 있다. 그에 따른 폐혈류·폐정맥 환류 증가는 좌심방·좌심실 용적 부하와 수유 시 심부전 증상을 설명하므로 D가 적절하다. VSD가 먼저 폐혈관 저항을 낮춘다는 뜻이 아니며 장기간 과도한 폐혈류는 오히려 폐혈관 질환으로 이어질 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: VSD 때문에 폐혈관 저항이 감소한다는 역전된 인과를 출생 후 저항 감소가 좌우 단락을 증가시키는 순서로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000491
