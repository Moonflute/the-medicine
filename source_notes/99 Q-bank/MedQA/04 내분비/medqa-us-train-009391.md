---
type: qbank
schema_version: 1
id: medqa-us-train-009391
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:17d63a89e3293a057173000c5b464c59a080173f991c232b7012f2670edb9b2e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "insulinoma"
  - "인슐린종"
  - "endogenous hyperinsulinemia"
  - "Insulinoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
question_type: diagnosis
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
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvR2x1Y2Fnb24ubWQ
---

# MedQA US 임상문제

## 문제

44세 여성이 쇼핑몰에서 의식을 잃고 응급실에 왔다. 남편에 따르면 땀을 흘리고 떨다가 혼란스러워하며 쓰러졌고 5분 후 구급대가 도착했다. 당시 손가락 혈당은 31 mg/dL로 근육 내 글루카곤을 투여받았다. 구급차로 이송되는 중 의식이 회복되었고 응급실에서는 의식은 있지만 졸려 한다. 쇼핑몰에 가기 5시간 전이 마지막 식사였다고 한다. 남편은 지난 3개월간 두통, 양쪽 유방에서 유즙 분비, 오래 굶으면 오심이 있었다고 한다. 입원 간호사로 10년 전 결핵에 노출되었지만 적절히 치료받았다. 영아 때 입양되어 가족력은 모른다. 체온 98.4°F(36.9°C), 혈압 101/59 mmHg, 맥박 88회/분, 호흡수 14회/분이다. 혈당 54 mg/dL, 인슐린 29 pmol/L(정상 <19), C-펩타이드 272 pmol/L(정상 <200), 프로인슐린 8 pmol/L(정상 <5), β-하이드록시부티레이트 1.2 mmol/L(금식 후 정상 >2.7)이다. 저혈당 발작의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 인슐린종
B. 설포닐우레아 사용
C. 비인슐린종 췌장성 저혈당 증후군(NIPHS)
D. 일차성 부신기능부전

## 해설


정답 A. 저혈당 때 억제되지 않은 insulin·C-peptide·proinsulin과 낮은 β-hydroxybutyrate는 내인성 insulin 작용을 지지한다. 공복 증상과 유즙분비/두통의 뇌하수체 병변 가능성을 함께 보면 MEN1 연관 insulinoma를 고려할 수 있다. 하지만 sulfonylurea도 같은 생화학 양상을 만들므로 저혈당 시 약물검사 등으로 배제해야 한다. 간호사라는 직업만으로 약물 남용을 단정하거나 이 수치만으로 종양을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009391 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고인슐린 저혈당의 insulinoma A 추론은 가능하나 SU screen 없이 확진·가장 흔하다는 주장 제거; 동반 prolactinoma/MEN1 단서 연결.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/jcem/article/94/3/709/2596247

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009391
