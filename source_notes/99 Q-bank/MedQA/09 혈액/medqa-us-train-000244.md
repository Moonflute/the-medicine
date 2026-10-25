---
type: qbank
schema_version: 1
id: medqa-us-train-000244
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:671a45914198c2a63a9e1d3b2c8b527cbaa16a95428b10c23805dedab10662f3
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "appendicitis"
  - "Hemophilia A"
  - "Bernard-Soulier syndrome"
  - "Glanzman syndrome"
  - "Thrombotic thrombocytopenic purpura"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_stqnsiJjsl7wgKEFwcGVuZGljaXRpcykubWQ
  - MDkg7ZiI7JWhL-2YiOyasOuzkSAoSGVtb3BoaWxpYSkubWQ
  - MDkg7ZiI7JWhL-2YiOyghOyEsSDtmIjshoztjJDqsJDshowg7J6Q7IOJ67CYIChUaHJvbWJvdGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgVFRQKS5tZA
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

28세 남성이 심한 복통으로 내원하여 충수염(appendicitis)으로 진단받았다. 그는 응급 충수절제술(appendectomy)을 받았다. 수술 중 환자에게 수혈이 필요한 대량의 지속적인 출혈이 발생했다. 수술 전 검사 결과 출혈 시간(bleeding time), 프로트롬빈 시간(PT), INR 1.0, 혈소판 수는 모두 정상이었다. 수술 후 환자에게 수술 중 합병증에 대해 설명하자, 그는 자신이 알 수 없는 출혈 질환의 가족력이 있다는 사실을 말하는 것을 잊었다고 회상했다. 수술 후 검사에서 부분 트롬보플라스틴 시간(PTT)이 연장된 것으로 나타났다. 이 환자에서 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 혈우병 A (Hemophilia A)
B. 베르나르-술리에 증후군 (Bernard-Soulier syndrome)
C. 글란즈만 증후군 (Glanzman syndrome)
D. 혈전성 혈소판감소성 자반증 (Thrombotic thrombocytopenic purpura)

## 해설


남성의 수술 후 지속 출혈과 가족력, 정상 혈소판·PT·출혈시간에 비해 단독으로 연장된 aPTT는 내인성 응고인자 결핍을 시사한다. 선택지 중 VIII 인자 결핍인 혈우병 A(A)가 가장 잘 맞는다. Bernard-Soulier·Glanzmann은 일차 지혈 장애로 출혈시간 이상과 관련되며 이 양상과 다르다. 실제 혈우병 A/B 구분은 인자 활성도 검사로 확인한다. 본문에 출혈시간 연장이 있다고 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000244 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 출혈시간이 정상이란 원문을 연장되었다고 한 설명을 바로잡았다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000244
