---
type: qbank
schema_version: 1
id: medqa-us-train-009717
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2659fd89ce59e82cb612aa3e876b1d3fc0a161c0b0e3de85647e25b809bb1dac
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "pancreatic adenocarcinoma"
  - "췌장 선암"
  - "Courvoisier sign"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshKDslZQgKEFkZW5vY2FyY2lub21hKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

54세 남자가 피로와 체중 감소로 내원했다. 지난 몇 주 동안 피로가 심해지고 한 달에 7파운드가 감소했으며 아내는 눈이 노랗게 변했다고 한다. 오심은 있지만 구토, 복통, 대변 변화는 없다. 10년 전 급성 췌장염으로 입원했고 고지혈증, 당뇨병, 비만이 있다. 매일 저녁 와인 두 잔을 마시고 30갑년 흡연력이 있다. 공막 황달은 있지만 복부 압통은 없다. ALT 67 U/L, AST 54 U/L, ALP 771 U/L, 총 빌리루빈 12.1 mg/dL, 직접 빌리루빈 9.4 mg/dL이다. 복부 영상에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 간 표면 결절
B. 췌장 가성낭종
C. 팽창된 담낭
D. 간내·간외 담관의 다발성 확장 및 협착

## 해설


정답 C. 무통성 황달, 담즙정체성 검사와 체중감소는 췌장두부 종양 등 원위부 담도 폐쇄를 의심하게 하며 담낭 팽창이 동반될 수 있다(Courvoisier 징후). 이 환자는 이미 황달이 있으므로 황달이 없다고 해석하면 안 된다. 담낭 팽창만으로 암이 확진되는 것은 아니다. 영어 원문의 bilirubin g/dL 표기는 비현실적 단위이며 한국어 본문의 mg/dL 표기는 이를 바로잡은 것으로, 수치 자체를 새로 만들지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009717 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 이미 황달이 있는 본문을 황달 없음으로 읽은 오류 제거; 원문 bilirubin 단위 이상과 무통성 폐쇄성 황달 해석 한정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009717
