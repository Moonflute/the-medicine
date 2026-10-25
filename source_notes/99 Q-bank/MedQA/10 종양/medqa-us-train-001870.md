---
type: qbank
schema_version: 1
id: medqa-us-train-001870
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec87eb9354c2101bf6693113b470203aa8680667261b2db281981cae66f83e18
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "hepatocellular carcinoma"
  - "chronic hepatitis B"
  - "alpha-fetoprotein"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLjtj6zslZQgKEhlcGF0b2NlbGx1bGFyIENhcmNpbm9tYSkubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQu2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEIgKEhCVikpLm1k
question_type: diagnosis
difficulty: complex
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

56세 아프리카계 미국인 남성이 3개월간의 복통, 피로 및 체중 감소로 응급실에 왔다. 간경변이 합병된 만성 B형간염 병력이 오래되었다. 황달, 다리 부종 및 오른쪽 상복부 촉지 종괴가 있다. 복부 초음파에서 경계가 불명확하고 내부 에코가 거칠고 불규칙한 3-cm 간 종괴가 보인다. AST 90 U/L, ALT 50 U/L, 총 빌리루빈 2 mg/dL, 알부민 3 g/dL, ALP 100 U/L, AFP 600 micrograms/L이다. 다음 중 이 상태의 특징은 무엇인가?

## 선택지

A. 대부분의 환자에서 진단에 간 생검이 필요하다
B. 담관 상피에서 발생한다
C. 간세포에서 발생한다
D. 복부 초음파에서 딸낭종이 보통 관찰된다

## 해설


만성 HBV·간경변 환자의 간 종괴와 높은 AFP는 간세포암(HCC)을 강하게 의심하게 한다. HCC는 간세포에서 발생하므로 C가 적절하다. 담관상피에서 발생하는 담관암이나 딸낭종을 보이는 포충낭종과 다르다. 본문은 거칠고 불규칙한 내부 에코를 기술할 뿐 저에코라고 명시하지 않았으며 초음파·AFP만으로 모든 HCC를 확진할 수 있다는 뜻도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001870 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 초음파에 없는 저에코 소견을 추가하지 않고 HCC의 세포기원을 묻는 정답 C에 맞췄다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001870
