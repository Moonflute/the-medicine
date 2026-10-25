---
type: qbank
schema_version: 1
id: medqa-us-train-007604
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:696102a8a5e933992f415e63f631c1ec01a3949d04d98b67ad174041c5ff8e35
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "췌장 선암"
  - "폐쇄성 황달"
  - "CA 19-9"
  - "췌장 두부 종괴"
related_disease_slugs:
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

이전에 건강했던 48세 남자가 3주 동안 점점 심해지는 황달, 전신 가려움, 심와부 불편감으로 내원했다. 오심과 식욕부진도 있고 지난 일주일 동안 변이 점토색이었다. 일주일 전 태국 여행에서 새 문신을 했고 여러 파트너와 성생활을 하며 보호장비는 사용하지 않는다. 활력징후는 정상이다. 황달과 공막 황달이 있고 사지 전체에 긁은 자국이 있다. 복부검사는 정상이다. 공복 포도당 198 mg/dL, 총 빌리루빈 10.6 mg/dL, 직접 빌리루빈 9.8 mg/dL, ALP 450 U/L이다. 복부 초음파에서 담도와 췌관이 확장되고 췌장 머리에 경계가 불규칙한 3cm 저에코 고형 종괴가 보인다. 이 환자 상태에 가장 특이적인 혈청검사 상승은 무엇인가?

## 선택지

A. 항-HBc 면역글로불린 M
B. 항중성구 세포질 항체 상승
C. 암항원 19-9
D. 알파태아단백

## 해설


문장으로 제공된 췌장두부 종괴, 담관·췌관 확장과 폐쇄성 황달은 췌장 선암을 의심하게 한다. 보기 중 C의 CA19-9가 가장 관련된 혈청 종양표지자이다. 그러나 담도폐쇄·염증 및 다른 암에서도 올라갈 수 있고 일부 사람은 생산하지 않아 췌장암 특이적 확진검사나 일반인 선별검사는 아니다. 영상·조직 및 임상 맥락과 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007604 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CA19-9가 보기 중 췌장암 연관표지 C인 것은 유지하되 질환특이적 확진검사라는 오류 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/pancreatic/hp/pancreatic-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007604
