---
type: qbank
schema_version: 1
id: medqa-us-train-009921
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:220d70aaea6b89127dcabda25955c5b21906e28df7e8e899cc321b9a8a65e4de
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "갑상선 수질암"
  - "칼시토닌"
  - "반데타닙"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
question_type: management
difficulty: standard
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
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
---

# MedQA US 임상문제

## 문제

54세 여성이 갑작스러운 호흡곤란으로 응급실에 내원했다. CT에서 왼쪽 폐에 여러 결절이 보인다. 지난 6개월 동안 피로하고 우울했으며, 폐경이 가까워져서 그렇다고 생각한 홍조도 자주 있었다. 진찰에서 왼쪽 갑상선엽에 2.5cm 크기의 단단하고 압통 없는 결절이 만져지고 경부 림프절병증이 있다. 미세침흡인 세포검사에서 갑상선암 가능성이 높다. 혈청 기저 칼시토닌은 620 pg/mL이다. 갑상선절제술을 받았지만 6주 이내 홍조와 설사로 다시 응급실에 내원했다. 다음 중 시행해야 할 치료는?

## 선택지

A. 방사성 요오드
B. 갑상선자극호르몬(TSH) 억제
C. 타목시펜
D. 반데타닙

## 해설


칼시토닌 상승과 갑상선절제 후에도 지속되는 설사·홍조, 폐전이는 증상성 진행성 수질갑상선암에 부합한다. Vandetanib D는 절제 불가능한 국소 진행성 또는 전이성 수질암의 허가 치료 중 하나다. 방사성 요오드나 TSH 억제는 여포세포 유래 분화암의 접근으로 이 종양의 적절한 대체가 아니다. 모든 환자에서 RET 변이가 입증된 것은 아니므로 유전·종양 검사가 필요하며 RET 변이 양성에서는 선택적 RET 억제제 등도 고려한다. QT 연장·전해질 이상·설사 등의 안전성 평가가 필요하고 D가 모든 상황의 유일 최선 치료라는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009921 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전이성 증상성 MTC에서 vandetanib D는 유효한 선택지이나 모든 MTC의 RET 변이 및 유일 최선 치료로 단정한 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/022405s023lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009921
