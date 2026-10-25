---
type: qbank
schema_version: 1
id: medqa-us-train-000847
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f7a5af42c7afaf884c61fc8458d8d537ffad9267a69451f4d3ec38d0e43a54c9
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "cauda equina syndrome"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rp4jrr7jspp3tm4TqtbAgKENhdWRhIEVxdWluYSBTeW5kcm9tZSkubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 남성이 지난 4일간 점진적으로 악화되는 요통으로 응급실에 내원하였다. 추가 문진에서 그는 양측 발에서 무릎까지 올라오는 저림과 타는 듯한 감각이 있다고 언급하였다. 환자는 지난 며칠간 배뇨와 배변에 어려움을 겪고 있다고 말하였다. 체온은 97.4°F(36.3°C), 혈압은 122/80 mmHg, 맥박은 85회/분, 호흡수는 14회/분, 실내 공기에서 산소 포화도는 98%이다. 신체 검진상 양측 다리 굴곡 약화와 항문 괄약근 긴장도 저하가 관찰된다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 응급 수술
B. 요추 천자
C. MRI
D. 폐기능 검사

## 해설

요통에 양측 다리 위약·감각 변화, 배뇨·배변 장애와 항문괄약근 긴장도 저하가 동반되어 마미증후군(cauda equina syndrome)을 의심한다. 성인 요천추관의 마미 신경근 압박을 확인하기 위한 응급 MRI(C)가 필요하다. 확인된 압박은 지체 없는 척추수술 평가로 연결한다. 이는 꼬리뼈 자체의 질환을 뜻하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 마미신경 압박 의심 시 MRI C는 맞으나 척수말단·꼬리뼈 증후군으로 혼동한 해부 용어를 교정한다.
- 공식/학회 근거: https://acsearch.acr.org/list/TopicNarrativePdf?topicId=141

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000847
