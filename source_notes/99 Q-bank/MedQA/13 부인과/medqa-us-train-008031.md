---
type: qbank
schema_version: 1
id: medqa-us-train-008031
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e0cb0cdf26300d45ac90374589238385719bccea6eada1a294757e04aa0858f8
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "uterine leiomyoma"
  - "fibroid uterus"
  - "pelvic pressure"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geq3vOyihSAoVXRlcmluZSBGaWJyb2lkcykubWQ
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

37세 여성(G1P0)이 첫 산전 방문을 위해 내원했다. 마지막 월경은 11주 전이지만 주기가 불규칙해 정확한 날짜는 모른다. 임신 테스트 양성 전 5개월 동안 계획된 무피임 성관계를 했다. 아침 오심과 구토가 있지만 전반적으로 건강하다. 약 6개월 동안 골반 압박감과 빈뇨가 점점 심해졌으나 진료를 받지 않았다. 비만과 고혈압 병력이 있지만 약물은 복용하지 않는다. 어머니는 64세에 자궁근종으로 자궁적출술을 받았고 언니는 보조생식으로 쌍둥이를 임신했다. 체온 98.3°F(36.8°C), 혈압 142/85 mmHg, 맥박 82회/분, 호흡수 14회/분이다. 자궁저부가 배꼽에서 만져지고 자궁경부는 닫혀 단단하며 부속기 종괴는 없다. β-hCG 81,324 mIU/mL, TSH 1.2 µIU/L이다. 가장 가능성 높은 진단은?

## 선택지

A. 포상임신
B. 자궁근종
C. 다태임신
D. 전굴자궁

## 해설

임신보다 앞서 6개월간 지속된 골반 압박감과 빈뇨, 임신 약 11주에 비해 배꼽 높이까지 커진 자궁은 자궁근종(B)을 시사한다. 근종은 자궁 크기를 키우고 방광을 압박할 수 있다. β-hCG 한 값만으로 다태임신이나 포상임신을 확진할 수 없고, 실제 확인에는 초음파가 필요하다. 가족의 보조생식 후 쌍둥이 임신은 이 환자의 다태임신 근거가 아니며 전굴자궁도 이러한 종괴 효과를 설명하지 못한다. 매독 검사나 치료는 본문에 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신 중 매독 치료 오연결 해설을 자궁근종으로 교체. 임신 전 시작된 압박·빈뇨와 과대 자궁에 근거해 B 유지.
- https://www.fda.gov/consumers/womens-health-topics/uterine-fibroids

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008031
