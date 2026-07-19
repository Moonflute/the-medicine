---
type: qbank
schema_version: 1
id: medqa-us-train-000913
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cc14a35fac40abad12ae4f17eed7327562c9b81cd01f21a5930f19bdcc60fa34
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "Caffeine intoxication"
  - "Cocaine intoxication"
  - "Lisdexamfetamine intoxication"
  - "Phencyclidine intoxication"
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

24세 남성이 공격적이고 비정상적인 행동으로 룸메이트들에 의해 응급실로 이송되었다. 룸메이트들은 그가 최근 기말고사로 인해 스트레스를 많이 받았고 더 은둔적인 생활을 해왔다고 진술했다. 그들은 오늘 저녁 그가 매우 짜증을 내며 컴퓨터에 소리를 지르다가 부수었고, 그 후 헬스장에서 몇 시간을 보냈다고 말했다. 체온은 101°F(38.3°C), 혈압은 137/98 mmHg, 맥박은 120회/분, 호흡수는 23회/분, 실내 공기에서의 산소 포화도는 99%이다. 신체 검진상 짜증을 내는 젊은 남성이 확인된다. 심폐 검진상 빈맥이 있고 양측 폐음은 깨끗하다. 신경학적 검진에서 동공 확장이 관찰된다. 환자는 현저하게 발한을 보이고 신체 검진 중 매우 빠르게 말하며 공격적이다. 진정을 위해 할로페리돌(haloperidol), 디펜히드라민(diphenhydramine), 디아제팜(diazepam)을 투여받고 부드러운 억제대를 착용했다. 그의 증상은 응급실에서 10시간에 걸쳐 호전되었다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 카페인 중독
B. 코카인 중독
C. 리스덱삼페타민(lisdexamfetamine) 중독
D. 펜시클리딘(phencyclidine) 중독

## 해설


과다 흥분, 고열, 혈압 상승, 빈맥, 동공 확대, 과다 발한 및 급성 언어 과다는 중추신경계 흥분제인 lisdexamfetamine(ADHD 약물) 과다복용과 일치한다. 증상이 약 10시간 내에 호전되는 점도 이 약물의 반감기에 부합한다. 따라서 정답은 C이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000913
