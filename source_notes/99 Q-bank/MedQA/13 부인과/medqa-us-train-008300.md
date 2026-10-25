---
type: qbank
schema_version: 1
id: medqa-us-train-008300
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f405bcc87b1de6a51f2074b64ed0788bec72037bea4240db6179dacb095c9ec3
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Chlamydia trachomatis cervicitis"
  - "mucopurulent cervicitis"
  - "azithromycin"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyXvCAoQ2VydmljaXRpcykubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 비정상 질 분비물과 가려움으로 응급실에 왔다. 며칠 전 시작되어 악화되었고 1년 전 의학적 유산을 했다. 체온 98.6°F(37.0°C), 혈압 129/68 mmHg, 맥박 80회/분, 호흡수 14회/분이다. 골반검사에서 노란색 자궁경부 분비물이 보이고 핵산증폭검사에서 Neisseria 종은 음성이다. 가장 적절한 다음 처치는?

## 선택지

A. 아지스로마이신
B. 아지스로마이신과 세프트리악손
C. 세프트리악손
D. 자궁경부 배양

## 해설

점액농성 자궁경부염에서 임질 NAAT는 음성이고 클라미디아 평가·치료가 필요하다. 현재 비임신 성인의 우선 요법은 독시사이클린 7일이며 아지스로마이신은 대체요법이다. 보기 중 A가 유효한 선택이다. 임질 음성만으로 클라미디아를 확진하지 않으며 파트너 평가도 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 아지스로마이신 A는 현재 대체요법으로 유효하여 유지. 일률적 1차약 표현을 교정.
- https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm
- https://www.cdc.gov/std/treatment-guidelines/urethritis-and-cervicitis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008300
