---
type: qbank
schema_version: 1
id: medqa-us-train-005855
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce5d476c2a3e61007db4b3bbd5fa7566922b2ed267b6bdeab8ef3a4fff2cac55
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "파보바이러스 B19 감염"
  - "태아 수종 위험"
  - "산모 혈청 IgG/IgM"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIO2ZjeuwmCAoRXJ5dGhlbWEgSW5mZWN0aW9zdW0pLm1k
difficulty: complex
answer: B
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

임신 9주인 26세 G2P1 여성이 16개월 된 아들과 함께 첫 산전 진료를 받으러 왔다. 아들은 5일 동안 미열, 두통 및 관절통이 있었고 2일 전부터 뺨에 시작된 전신 발진이 몸으로 퍼졌다. 여성은 약간의 오심이 있지만 상태는 양호하다. 첫 임신은 순조로웠으며 아들은 태아심박수 이상으로 임신 40주에 하부 횡절개 제왕절개로 출생했다. 엽산이 포함된 산전비타민을 복용하고 있고 임신 전 풍진 및 수두 항체 역가는 충분했다. 아이의 예방접종은 최신 상태이다. 여성의 체온은 36.8°C(98.2°F), 맥박은 분당 85회, 호흡수는 분당 13회, 혈압은 114/65 mmHg이고 자궁은 임신 9주 크기이다. 아이의 사진이 제시되어 있으며 전혈구검사는 정상이다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 보건당국에 질환을 신고
B. 바이러스 특이 IgG 및 IgM에 대한 산모 혈청검사
C. 연속적인 태아 초음파
D. 아이에게 격리 주의

## 해설

발진이 있는 사람은 16개월 아들이며 산모는 무증상에 가깝다. 뺨에서 시작해 몸으로 퍼진 발진·미열은 파보바이러스 B19를 시사한다. 임신 중 접촉 후 산모 IgG/IgM 검사(B)로 감염·면역 상태를 평가한다. 급성 감염이 확인되면 태아빈혈·수종 감시를 계획한다. 제공되지 않은 사진의 추가 소견은 가정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 산모·신생아 모두 발진이라는 허위 서술 수정; 그림 없이도 접촉력·뺨 시작 발진으로 판단 가능.
- https://www.cdc.gov/parvovirus-b19/about/parvovirus-b19-in-pregnancy.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005855
