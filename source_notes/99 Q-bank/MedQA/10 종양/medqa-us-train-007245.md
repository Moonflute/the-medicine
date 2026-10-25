---
type: qbank
schema_version: 1
id: medqa-us-train-007245
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:99383bdec86fc0ab51d07ddb91dc204ee3709aca6a4e21d208d6f602a4fc623f
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "5-HT3 길항제"
  - "온단세트론"
  - "화학요법 유발 오심"
  - "변비"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: D
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
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
---

# MedQA US 임상문제

## 문제

60세 남자가 일주일 동안 지속된 오심으로 내원했다. 이 기간 동안 비혈성 구토를 여러 차례 했다. 지난달 II기 호지킨 림프종을 진단받아 아드리아마이신, 블레오마이신, 빈블라스틴, 다카르바진 치료를 시작했다. 체온은 37°C(98.6°F), 맥박 95회/분, 혈압 105/70 mmHg이다. 신체검사에서 경부 림프절병증이 보인다. 간은 오른쪽 늑골연 아래 1~2cm, 비장은 왼쪽 늑골연 아래 2~3cm에서 만져진다. 나머지 진찰은 정상이다. 적절한 약물치료를 시작했다. 2주 후 두통이 발생했고 마지막 배변이 4일 전이었다고 한다. 다음 중 어떤 약물로 치료받았을 가능성이 가장 높은가?

## 선택지

A. 칸나비노이드 수용체 작용제
B. H1 길항제
C. D2 길항제
D. 5-HT3 길항제

## 해설


항암치료 관련 구역·구토에 쓰는 5-HT3 antagonist(예: ondansetron)는 두통과 변비를 일으킬 수 있어 D가 가장 부합한다. 이 약제군이 모든 항암요법에서 단독으로 가장 효과적이라는 뜻은 아니다. 실제 구토 예방은 항암제의 emetogenic risk에 따라 NK1 antagonist, dexamethasone, olanzapine 등과 병합한다. 본 문항은 치료 후 부작용으로 약제군을 추론하는 문제이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007245 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 5-HT3 길항제 두통·변비 D는 맞으나 항암 구토 전반에서 단독 최효과라는 과장 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/about-cancer/treatment/side-effects/nausea/nausea-hp-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007245
