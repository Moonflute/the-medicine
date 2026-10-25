---
type: qbank
schema_version: 1
id: medqa-us-train-007902
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7c39a13b1bc802167ea91a31e9daed45d26b99dee40c3429b99fd8af3f6da6a1
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "community-acquired pneumonia"
  - "inpatient pneumonia treatment"
  - "cefota​​xime azithromycin"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 여성이 2일간 지속된 발열, 흉통, 녹황색 가래를 동반한 기침으로 응급실에 왔다. 심한 권태감, 오한, 호흡곤란도 있다. 고혈압, 고콜레스테롤혈증, 제2형 당뇨병이 있다. 20년간 매일 담배 한 갑을 피웠지만 5년 전 금연했다. 체온 39°C(102.2°F), 맥박 110회/분, 호흡수 33회/분, 혈압 143/88 mm Hg, 실내 공기 산소포화도 94%이다. 우측 상엽에서 수포음이 들린다. 백혈구 12,300/mm³, 적혈구침강속도 60 mm/h, BUN 15 mg/dL이다. 흉부 X선이 제시되어 있다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 세페핌, 아지스로마이신, 겐타마이신으로 입원 치료
B. 아지스로마이신과 아목시실린-클라불라네이트로 외래 치료
C. 아지스로마이신과 세포탁심으로 입원 치료
D. 세프트리악손으로 입원 치료

## 해설

발열, 화농성 가래, 국소 수포음은 지역사회획득 폐렴을 의심하게 한다. 고령과 호흡수 33회/분으로 입원 평가가 타당하며, 제시된 선택지 중 C의 세포탁심과 아지스로마이신은 입원 환자의 표준 병용요법이다. 이 조합이 MRSA나 녹농균까지 보편적으로 치료한다는 뜻은 아니다. 누락된 X선의 구체적인 영상 소견이나 중증 CAP 기준 충족 여부를 임의로 만들지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 입원 CAP의 표준 병용 C를 내성균 전반을 포괄하는 치료나 확정 중증 CAP로 과장한 설명을 교정.
- https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap-in-adults

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007902
