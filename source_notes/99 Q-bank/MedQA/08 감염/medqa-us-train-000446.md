---
type: qbank
schema_version: 1
id: medqa-us-train-000446
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:87c83bdcf368740cf4edb0a177534d619966f83aa4f6f9818e1e53ef90017e47
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute intermittent porphyria"
  - "Acute intermittent porphyria"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
---

# MedQA US 임상문제

## 문제

23세 여성이 3일간 지속되는 복통 악화와 혼란으로 응급실에 내원했다. 통증은 지속적이며 강도는 10점 만점에 8점이라고 설명한다. 그녀는 누군가 자신을 지켜보고 있다는 강한 느낌을 받고 있다. 2일 동안 배변을 하지 못했다. 4시간 전부터 하지 일부에 저림 증상이 나타나기 시작했다. 복통이 시작되기 전 다량의 알코올 음료를 섭취했다. 체온은 38°C, 맥박은 113회/분, 혈압은 148/88 mm Hg이다. 그녀는 산만해 보이며 진찰 중 간헐적으로 속삭이는 소리가 들린다고 인정한다. 진찰 결과 복부 팽만과 전반적인 경미한 압통이 관찰된다. 복벽 강직(guarding)이나 반발 압통(rebound tenderness)은 없다. 장음은 감소되어 있다. 장요근(iliopsoas)과 햄스트링 근육의 위약이 있다. 하지의 감각은 저하되어 있다. 하지의 심부건 반사는 2+이다. 정신 상태 검사에서 사람과 장소에 대해서만 지남력이 있다. 전혈구 검사(CBC)와 혈청 전해질, 포도당, 크레아티닌 농도는 참고 범위 내에 있다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 헤민(Hemin) 요법
B. 할로페리돌(Haloperidol) 요법
C. 클로로퀸(Chloroquine)
D. 포도당(Glucose)

## 해설


심한 복통에 비해 복막자극징후가 없고 변비·자율신경 항진·정신증상·운동 및 감각 증상이 동반되어 급성 간성 포르피린증 발작을 의심한다. 음주는 촉발 요인이 될 수 있다. 중증 신경내장성 발작은 입원하여 정맥 hemin(A) 치료가 적절하며 요중 PBG·ALA 등 진단 검체를 확보하고 전해질·호흡 및 신경상태를 감시한다. Glucose만으로 중증 신경학적 발작 치료를 대체하지 않는다. 본문에는 소변 색 변화가 제시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000446 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 본문에 없는 소변 색 변화를 진단 근거로 추가하지 않고 중증 신경내장성 포르피린증의 hemin 선택을 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gastro.org/clinical-guidance/diagnosis-and-management-of-acute-hepatic-porphyrias-ahp/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000446
