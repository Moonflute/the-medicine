---
type: qbank
schema_version: 1
id: medqa-us-test-000338
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5420dd655ba0d204366f43905d5a81d565c98500ede8f0da337145108fe8ca09
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심방중격결손"
  - "아이젠멩거 증후군"
  - "임신 중 심혈역학 변화"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius67CpIOykkeqyqSDqsrDshpAgKEF0cmlhbCBTZXB0YWwgRGVmZWN0KS5tZA
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

최근 임신 사실을 알게 된 농촌 지역 출신 22세 여성이 첫 산전 진찰에서 발견된 청색증, 호흡곤란, 심잡음 때문에 심장내과 상담을 의뢰받았다. 임신 19주이며 초임부이다. 어릴 때부터 심잡음이 있었고 당시 의사는 관찰만 했으나 이후 추적 관찰이 끊겼다. 현재 임신이 진행되면서 어지럼증과 간헐적인 운동 시 호흡곤란이 점차 심해지고 있다. 임신 전에는 증상이 없었다. 혈압 125/60 mmHg, 심박수 81회/분, 호흡수 13회/분, 체온 36.7°C(98.0°F)였다. 말단 청색증, S2의 고정 분열, 왼쪽 상흉골연에서 가장 크게 들리는 3/6등급 중간수축기 심잡음이 있었다. 다음 중 어떤 임신 생리 변화가 환자 상태의 변화를 일으켰는가?

## 선택지

A. 심박수 증가
B. 전신혈관저항 감소
C. 심박출량 증가
D. 혈액량 증가

## 해설

고정분열 S2와 좌상흉골연 수축기 잡음은 심방중격결손 같은 선천성 단락 병변을 시사한다. 폐혈관저항이 높아져 우→좌 단락이 있는 상태라면 임신의 전신혈관저항 감소(B)가 우→좌 단락을 늘리고 폐혈류와 전신 산소화를 감소시켜 청색증을 악화시킬 수 있다.

좌→우 단락 증가 자체가 전신 청색증을 만든다는 설명은 잘못이다. 단순 ASD가 모두 이 상태인 것은 아니며, 실제 폐고혈압과 단락 방향은 심초음파 등으로 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. SVR 감소가 좌→우 단락을 늘려 청색증을 만든다는 반대 방향 설명을 우→좌 단락 증가로 교정하고 폐혈관질환 전제의 한계 명시.
- https://academic.oup.com/eurheartj/article/46/43/4462/8234487

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000338
