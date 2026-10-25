---
type: qbank
schema_version: 1
id: medqa-us-train-010081
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:44a853b71e24305fe26d959a7317d7c40a2d35b735b305fbbe4b3082be0505a9
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "게실 출혈"
  - "하부 위장관 출혈"
  - "섬유질 섭취"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6Qg7Lac7ZiIIChEaXZlcnRpY3VsYXIgQmxlZWRpbmcpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tlZjrtoAg7JyE7J6l6rSAIOy2nO2YiCAoTG93ZXIgR2FzdHJvaW50ZXN0aW5hbCBUcmFjdCkubWQ
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

62세 남성이 최근 대변에 많은 피가 섞여 나온 것을 걱정해 응급실에 내원했다. 집에서 많은 양의 선홍색 혈액이 변에 있는 것을 보았다고 한다. 통증은 없고 그 외에는 건강하다. 과거력으로 당뇨병과 비만이 있다. 체온 98.9°F(37.2°C), 혈압 147/88 mmHg, 맥박 분당 90회, 호흡수 분당 13회, 실내 공기 산소포화도 98%이다. 고통스러워 보이지 않고 복부는 압통이 없으며 장음은 정상이다. 대변 구아이악 검사는 양성이다. 정맥 수액을 시작하고 금식시켰다. 4시간 후 다음 배변은 육안상 정상이다. 다음 중 향후 합병증을 줄일 가능성이 가장 높은 중재는?

## 선택지

A. 섬유질과 수분 섭취 증가
B. 붉은 고기 섭취 감소
C. 구불결장 절제
D. 좌욕

## 해설


정답 A. 고령자의 통증 없는 일시적 다량 혈변은 게실출혈을 시사하며 많은 경우 자연 지혈된다. 출혈 원인 평가와 추적은 별도로 필요하고 증상만으로 확진하지 않는다. 선택지 중 섬유질·수분 섭취 증가는 변비/게실질환의 장기적 식이 관리에 부합한다. 다만 이것이 게실 재출혈을 확실히 막는 가장 효과적인 치료로 입증되었다고 과장하지 않는다. 대량 출혈이 멎었다고 즉시 구불결장을 절제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010081 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 통증 없는 일시적 대량 혈변은 게실출혈 가능성. 섬유·수분 A의 일반 관리 취지 유지하되 재출혈 감소의 가장 효과적인 확립 치료라는 과장 교정, 체온 오역 정정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niddk.nih.gov/health-information/digestive-diseases/gastrointestinal-bleeding/eating-diet-nutrition

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010081
