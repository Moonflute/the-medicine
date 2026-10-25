---
type: qbank
schema_version: 1
id: medqa-us-train-003768
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f8d77085a7cb50d3b2228ebabd34efb58a70a8bc04df0c36c9bb77fd5460db0b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "pancreatic head adenocarcinoma"
  - "obstructive jaundice"
  - "resectable pancreatic cancer"
  - "pancreaticoduodenectomy"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshKDslZQgKEFkZW5vY2FyY2lub21hKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
question_type: management
difficulty: complex
answer: B
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

66세 남성이 황달, 짙은 소변, 회색 변, 체중감소로 내원했다. 검사에서 직접 빌리루빈과 알칼리성 인산분해효소가 상승했고 CT에서 췌장 머리의 2.5 cm 종괴가 보였다. 담도 스텐트를 삽입한 뒤 다음 중 가장 적절한 치료는?

## 선택지

A. 정위 방사선치료
B. 췌십이지장절제술
C. 젬시타빈과 5-플루오로우라실 치료
D. 중앙 췌장절제술

## 해설

폐쇄성 황달과 췌장두부 종괴는 췌장암을 의심하게 한다. 전이·주요혈관 침범·전신상태 등을 평가해 절제가능하면 선택지 B의 pancreaticoduodenectomy가 근치적 치료 접근이다. 2.5cm와 복부림프절 비대 없음만으로 병기나 절제가능성을 확정할 수 없으며, 다학제 병기평가·주변기 항암계획이 필요하다. 국소진행암이라는 기존 단정은 부정확하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 췌장두부암의 Whipple B는 유지하되 종괴2.5cm만으로 절제가능/국소진행 병기를 단정한 오류.
- https://www.nice.org.uk/guidance/NG85/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003768
