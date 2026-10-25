---
type: qbank
schema_version: 1
id: medqa-us-train-007531
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6f6f11baeddeff79251b55a407ab61e4b45eeade374cc169755c5fb9627eeb9b
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 HGSIL"
  - "고등급 편평상피내병변"
  - "질확대경검사"
  - "자궁경부 생검"
  - "Cervical intraepithelial neoplasia"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 G3P2002 여성이 첫 산전 방문 후 추적 진료를 위해 내원했다. 마지막 월경은 8주 전이었다. 비만, 고혈압, 제2형 당뇨병, 습진이 있다. 두 아이는 건강하며 현재 임신은 이전 파트너와 헤어진 후 새 파트너와의 임신이다. 둘째 아이 출산 후 예방접종은 최신이다. 체온은 98°F(37°C), 혈압 110/60 mmHg, 맥박 85회/분, 호흡수 18회/분이다. 신체검사는 정상이다. 혈액형은 O형, Rh 음성이다. 소변에서 상피세포는 드물고 포도당 양성, 백혈구 5/고배율 시야, 세균은 없다. RPR 음성, 풍진 역가 >1:8, HIV 항체 음성, 임질·클라미디아 NAAT 음성이다. 자궁경부 세포검사에서 고등급 편평상피내병변(HGSIL)이 보인다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 분만 후 질확대경검사와 생검
B. 지금 질확대경검사와 생검
C. 고리 전기절제술(LEEP)
D. 자궁경부 세포검사 반복

## 해설

HSIL에서 침윤암 배제를 위해 임신 중 질확대경검사 및 필요한 병변 생검(B)을 시행한다. 경험 있는 검사자가 평가하며 임신 중 자궁경부관 소파술은 하지 않는다. 암이 의심되지 않는 한 신속 절제치료/LEEP를 일률 시행하지 않고 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신 중 HSIL의 질확대경·적응증별 생검 및 치료 제한 보강.
- https://www.asccp.org/wp-content/uploads/2025/09/ASCCP_Management-of-Abnormal-Cervical-Cancer-Screening-Tests-in-Pregnancy.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007531
