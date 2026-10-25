---
type: qbank
schema_version: 1
id: medqa-us-train-009012
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1866053cc4a9a05466b987596ba9807a9c38db6a601052c8d93a82516c7160bd
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "MEN2A"
  - "medullary thyroid carcinoma"
  - "pheochromocytoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
question_type: investigation
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
---

# MedQA US 임상문제

## 문제

27세 남성이 수개월 동안 악화된 복통으로 내원했다. 최근 슬픈 기분과 컴퓨터 프로그래머로 일할 때 의욕이 감소한 느낌도 있다. 자살 생각은 없다. 신장결석을 여러 번 앓았고 아버지와 삼촌이 30세 이전에 갑상선절제술을 받은 갑상선암 가족력이 있다. 체온 37°C(98°F), 혈압 138/86mmHg, 맥박 87회/분이다. 복부에 광범위한 압통과 비만이 있지만 그 외 검사는 정상이다. 혈청 칼슘 12.1mg/dL, 알부민 4.1g/dL, PTH 226pg/mL이고 RET 유전자 검사가 비정상이다. 내분비외과에 의뢰했다. 다음 중 진단에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 소변 메타네프린
B. 소변 5-HIAA
C. 자정 타액 코르티솔
D. 혈청 가스트린

## 해설


정답 A. 높은 Ca와 억제되지 않은 PTH는 원발성 부갑상선기능항진을 시사한다. RET 이상과 이른 갑상선암 가족력은 수질갑상선암·부갑상선 질환·갈색세포종의 MEN2A를 고려하게 한다. 내분비 수술 전 소변 분획 metanephrine 또는 혈장 유리 metanephrine으로 갈색세포종을 평가해야 예기치 않은 catecholamine 위기를 예방할 수 있다. 고Ca/PTH 자체가 부신수질 종양을 증명하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009012 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고Ca/PTH는 부갑상선 과기능이며 RET+가족력의 MEN2A에서 pheo 수술전 검사 A를 별도로 설명; 멜라노카르시노마 오류 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4490627/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009012
