---
type: qbank
schema_version: 1
id: medqa-us-validation-000983
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8ed825bbb28757c16ebbb05613b4efdcbc6ad4cdd1e833dc6245f191cb0da838
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 췌장염"
  - "리파아제 상승"
  - "상복부 통증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: diagnosis
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
---

# MedQA US 임상문제

## 문제

50세 남성이 한 시간 전부터 시작된 심한 하부 흉통으로 응급실에 왔다. 통증은 등으로 퍼지고 구역과 구토가 동반된다. 복부가 팽창하고 명치 압통과 근육 경직이 있으나 반발통은 없으며 장음이 감소되어 있다. 리파아제는 880 U/L로 상승했고 심전도는 동성 빈맥이다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 장간막 허혈
B. 소화성 궤양 질환
C. 심근경색
D. 급성 췌장염

## 해설


정답 D. 등으로 퍼지는 급성 상복부/하부흉부 통증과 정상 상한의 3배를 넘는 lipase(880, 상한 280)는 급성 췌장염 진단에 부합한다. 본문에는 troponin 결과가 없으므로 상승했다고 추가해서는 안 된다. ECG 동성빈맥만으로 심근경색이 완전히 배제되는 것도 아니며 위험인자가 있으므로 임상적으로 필요한 심장 평가를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000983 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 본문에 없는 troponin 상승을 삭제; 통증+lipase >3배로 췌장염 D를 설명하되 ECG만으로 MI 배제하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13221274/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000983
