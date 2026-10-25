---
type: qbank
schema_version: 1
id: medqa-us-train-000825
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:00fe7780ec9d2eefd1958c730ee4d626f826e0bb9eba935e6e143c5e3ece3c54
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "major depressive disorder"
  - "anxiety"
  - "hypothyroidism"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-ustOymneyDgSDqsJHsg4Hsg5gg6riw64ql7KCA7ZWY7KadIChTdWJjbGluaWNhbCBIeXBvdGh5cm9pZGlzbSkubWQ
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 식후 상복부 불편감과 아침에 더 심해지는 간헐적인 마른 기침을 주소로 응급 진료 센터에 내원하였다. 두 증상 모두 지난 수개월 동안 빈도가 증가하였다. 그 외에는 건강하며 다른 호소 증상은 없다. 과거력상 주요 우울 장애, 불안, 갑상선 기능 저하증이 있다. 신체 검진상 특이 소견은 없다. 활력 징후는 체온 36.7°C, 혈압 126/74 mm Hg, 심박수 74회/분, 호흡수 14회/분이다. 다음 선택지 중 환자 관리의 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 심전도(ECG)
B. 생활 습관 교정
C. 오메프라졸(omeprazole) 치료 시작
D. 투시 바륨 연하 검사(fluoroscopic barium swallow)

## 해설

정답은 B이다. 식후 불편감과 아침 기침은 역류 관련 증상일 수 있어 경고 증상이 없다면 식사/체위 등 생활요인을 평가·교정할 수 있다. 취침 직전 식사를 피하고 필요 시 상체를 높이는 등의 조치이며 지속적인 금식이 치료라는 뜻은 아니다. 증상이 지속되면 GERD 외 원인과 약물치료/검사 필요성을 재평가하고 기침을 역류만으로 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: GERD 생활교정에 금식을 권고한 부적절 표현을 늦은 식사 회피 등으로 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8754510/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000825
