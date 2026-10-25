---
type: qbank
schema_version: 1
id: medqa-us-train-010150
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a128cbd291cd0472e0dd8c8509373d4d5ba00b17e5c117bab31c9d56b6db7772
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경이완제 악성 증후군"
  - "메토클로프라미드"
  - "할로페리돌"
question_type: mechanism
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveydtOyZhOygnCDslYXshLEg7Kad7ZuE6rWwIChOZXVyb2xlcHRpYyBNYWxpZ25hbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 8주인 23세 초임부가 16시간 동안 점점 심해지는 혼란과 고열로 남편과 함께 응급실에 내원했다. 3일 전 오심과 구토 치료를 위해 메토클로프라미드를 처방받았다. 우울증 병력이 있고 플루옥세틴을 복용한다. 의식이 혼란스럽고 사람, 장소, 시간에 대한 지남력이 없다. 체온 39.8°C, 맥박 분당 112회, 혈압 168/96 mmHg이다. 심한 발한과 홍조 피부, 근육 경직이 있으며 양측 심부건반사는 감소되어 있다. 정신상태검사에서 정신운동성 초조가 보인다. 혈색소 12.2 g/dL, 백혈구 17,500/mm³, 크레아티닌 1.4 mg/dL, 총빌리루빈 0.7 mg/dL, ALP 45 U/L, AST 122 U/L, ALT 138 U/L, CK 1,070 U/L이다. 다음 중 이 환자의 현재 증상을 일으킨 상태를 유발할 수 있는 약물은?

## 선택지

A. 석시닐콜린
B. 할로페리돌
C. 덱스트로암페타민
D. 아미트립틸린

## 해설

메토클로프라미드 투여 후 고열·강직·의식 변화·자율신경 이상과 CK 상승은 신경이완제 악성증후군을 시사한다. 같은 도파민 차단 관련 증후군을 일으킬 수 있는 선택지는 할로페리돌(B)이다. 이는 이 환자가 실제로 할로페리돌을 투여받았다는 뜻이 아니다. 플루옥세틴 병력 때문에 세로토닌증후군도 감별해야 하지만 감소된 반사와 강직은 본문에서 NMS 쪽 단서다. 메토클로프라미드 공식 허가정보도 NMS를 경고한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 같은 증후군을 추가로 일으킬 수 있는 약물을 묻는데 할로페리돌이 실제 투여된 원인 약물이라고 오인시킨 해설을 교정했다.
- https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5d31d815-50fa-4e78-8ebd-affc2514ce78

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010150
