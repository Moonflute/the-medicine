---
type: qbank
schema_version: 1
id: medqa-us-train-007187
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:74e2f77ff169a5b6372dac050394e8190b9dd9ccdf8d6fa954f54b264ecc8c97
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "자궁경부 무력증"
  - "LEEP 병력"
  - "자궁경부 길이"
  - "질식 초음파"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geqyveu2gCDrrLTroKXspp0gKEluY29tcGV0ZW50IEludGVybmFsIE9zIG9mIENlcnZpeCkubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

29세 초임부가 마지막 월경일 기준 임신 12주에 첫 산전 진료를 위해 산과를 방문했다. 유방이 매우 아프고 부었으며 운동 지구력이 감소했다고 한다. 그 외에는 건강하다. 자궁경부 시술이 조산 위험을 높인다고 들어 걱정한다. 부인과 병력으로 수년 전 자궁경부 이형성증에 대해 고리 전기절제술(LEEP)을 받았고 이후 자궁경부 세포검사는 계속 음성이었다. 경미한 간헐적 천식이 있지만 가끔 알부테롤 흡입기를 사용하는 것으로 잘 조절된다. 체온은 98.6°F(37.0°C), 맥박 69회/분, 혈압 119/61 mmHg, 호흡수 13회/분이다. 심폐검사는 정상이고 자궁저부는 골반 가장자리에서 막 만져진다. 골반검사에서 외부 생식기는 정상이며 자궁경부는 닫혀 있고 약간 부드럽다. 자궁은 임신 12주 크기이고 부속기 종괴는 없다. 이 환자에서 자궁경부 무력증 가능성을 평가하는 가장 좋은 방법은 무엇인가?

## 선택지

A. 임신 1분기의 경복부 초음파
B. 임신 18주에 경복부 초음파
C. 임신 1분기의 질식 초음파
D. 임신 18주에 질식 초음파

## 해설

선택지 중 18주 질식 초음파(D)가 중기 경부 길이를 평가하는 적절한 방법이다. 일반적으로 16–24주 평가 범위를 사용하므로 반드시 18주 이후에만 가능하다는 뜻은 아니다. LEEP 병력만으로 경부무력증을 진단하거나 모든 환자에게 봉축술을 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 중기 질식 경부 길이 평가와 경부무력증 진단 구분.
- https://med.uc.edu/docs/default-source/obstetrics-and-gynecology-docs/ob-mfm-protocols/q-z/short-cervix-protocol-2022.pdf?sfvrsn=27a7db17_2

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007187
