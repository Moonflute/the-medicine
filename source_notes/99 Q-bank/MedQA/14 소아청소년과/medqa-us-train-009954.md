---
type: qbank
schema_version: 1
id: medqa-us-train-009954
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7dd24fbd56a26d9e52e7be0f206b67d759d2ab908b543f722308f10916ac73d8
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "백신 유발 발진"
  - "약독화 생백신"
  - "수두 백신"
  - "Varicella"
question_type: mechanism
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IiY65GQIChWYXJpY2VsbGEpLm1k
difficulty: standard
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

13개월 여아가 2일 동안 지속된 가려운 발진으로 내원했다. 어머니는 이틀 전 몸통에 가려워 보이는 고립된 피부 병변 몇 개를 발견했다. 18일 전에 정기 예방접종을 받았고 증상 때문에 이부프로펜을 투여하고 있다. 알려진 접촉자 중 아픈 사람은 없었다. 키는 71백분위수, 체중은 64백분위수이며 급성 고통은 없다. 체온 38.1°C, 맥박 분당 120회, 호흡수 분당 26회이다. 진찰에서 얼굴과 몸통에 산재한 몇 개의 반구진 및 농포성 병변이 보이고 긁은 자국과 딱지가 있는 병변도 있다. 다음 중 이 소견을 가장 잘 설명하는 것은?

## 선택지

A. 감작된 T림프구와 항원의 접촉
B. 후근신경절에 잠복한 바이러스의 재활성화
C. 미리 형성된 IgE 항체의 교차결합
D. 약독화 백신 균주의 복제

## 해설

약독화 생수두백신 후 백신 균주가 제한적으로 복제되면서 소수의 수두 유사 피부 병변이 발생할 수 있어 D가 가장 적절하다. CDC는 전신성 발진이 대체로 접종 후 3주 이내에 생길 수 있다고 설명하므로 접종 18일째 내원·2일 전 발진이라는 경과와 맞는다. 피부 소견과 시점만으로 실제 균주를 검사로 확정한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 접종 16일 후 발생한 발진에 맞추어 수두백신 발진 시기를 공식 CDC의 대체로 3주 이내로 교정했다.
- https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-22-varicella.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009954
