---
type: qbank
schema_version: 1
id: medqa-us-train-010017
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:04e5bcddfa8bf132a9010ae4f724543834dbfbfc8cc633ed13525296740868c1
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신성 당뇨병"
  - "거대아 출산력"
  - "조기 포도당 선별"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 아시아계 G4P3 여성이 임신 사실이 확인되어 첫 산전 방문을 위해 내원했다. 추정 임신 주수는 5주이다. 질식분만 2회와 의학적 유산 1회의 과거력이 있으며 자녀의 출생체중은 4,100g과 4,560g이었다. 위식도 역류병으로 판토프라졸을 복용한다. 임신 전 체중은 78kg, 내원 시 체중은 79kg, 키는 157cm이다. 혈압 130/80 mmHg, 심박수 분당 75회, 호흡수 분당 13회, 체온 36.7℃이다. 신체검사에서 지방 축적 증가 외에는 특이사항이 없다. 다음 중 이 여성에게 시행해야 하는 검사는?

## 선택지

A. 거대세포바이러스 혈청검사
B. 응고검사
C. 간효소 평가
D. 경구 포도당부하검사

## 해설

비만·고령·거대아 출산력은 임신 전부터 있던 미진단 당뇨의 조기 평가 필요성을 높인다. 선택지 중 포도당 검사(D)가 적절하나 임신5주에 통상24–28주 GDM 기준을 그대로 적용하는 의미는 아니다. 표준 당뇨 진단 검사로 조기 평가하고 음성이어도24–28주 다시 선별한다. 임신1–2주라는 특정 창은 근거가 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신1–2주 검사라는 창작 삭제 및 초기 미진단 당뇨 평가와 통상 GDM선별 구분.
- https://doi.org/10.2337/dc26-s002

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010017
