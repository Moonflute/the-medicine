---
type: qbank
schema_version: 1
id: medqa-us-train-000963
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d0a5146112a2dc36729339fda1c994676b64e6ec3ab484c18368b0fadb5d6ff1
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "Burkitt’s lymphoma"
  - "tumor lysis syndrome"
related_disease_slugs:
  - MTAg7KKF7JaRL-yiheyWkSDsmqntlbQg7Kad7ZuE6rWwIChUdW1vciBMeXNpcyBTeW5kcm9tZSkubWQ
  - MDkg7ZiI7JWhL-uyhO2CtyDrprztlITsooUgKEJ1cmtpdHQncyBMeW1waG9tYSkubWQ
question_type: prevention
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
---

# MedQA US 임상문제

## 문제

버킷 림프종(Burkitt’s lymphoma) 치료를 위한 긴급 화학요법으로 입원한 지 2일 후, 7세 소년에게 호흡곤란과 소변량 감소가 나타났다. 환아는 또한 손가락과 발가락에 저림 증상을 느낀다. 혈압은 100/65 mm Hg, 호흡수는 28회/분, 맥박은 100회/분, 체온은 36.2°C이다. 폐 청진상 깨끗하다. 지난 6시간 동안 배설된 소변량은 20 mL이다. 검사실 검사 결과는 다음과 같다: 혈색소 15 g/dL, 백혈구 수 6,000/mm3(정상 감별계산), K+ 6.5 mEq/L, Ca+ 7.6 mg/dL, 인 5.4 mg/dL, HCO3− 15 mEq/L, 요산 12 mg/dL, 요소질소 44 mg/dL, 크레아티닌 2.4 mg/dL. 실내 공기 상태에서의 동맥혈 가스 분석: pH 7.30, PCO2 30 mm Hg, O2 포화도 95%. 다음 중 이 환자의 상태를 예방할 수 있었던 가장 가능성 높은 것은 무엇인가?

## 선택지

A. 알로퓨리놀(Allopurinol)
B. 시프로플록사신(Ciprofloxacin)
C. 중탄산나트륨(Sodium bicarbonate)
D. 어떠한 예방 조치도 효과가 없었을 것이다

## 해설


선지 중 allopurinol(A)은 새 요산 생성을 줄여 TLS 예방에 도움된다. 다만 Burkitt 림프종은 고위험이므로 적절한 수액·감시와 rasburicase 등 위험도별 예방이 중요하며 allopurinol만으로 모든 TLS를 막는 것은 아니다. 이미 형성된 요산을 직접 분해하지도 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000963 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: TLS 예방 allopurinol A는 선지상 타당. 고위험 Burkitt에서 수액·rasburicase까지 고려한다는 현행 맥락 추가, allopurinol 단독 보장 금지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.eviq.org.au/clinical-resources/side-effect-and-toxicity-management/prophylaxis-and-treatment/108-prevention-of-tumour-lysis-syndrome

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000963
