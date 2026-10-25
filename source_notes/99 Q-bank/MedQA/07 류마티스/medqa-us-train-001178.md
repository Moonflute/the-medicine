---
type: qbank
schema_version: 1
id: medqa-us-train-001178
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68d799d8f84aa11f679d85e815f4026307b15383aa7d00e2b471090309d5c82c
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "ankylosing spondylitis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

23세 남성이 약 6개월 전부터 시작된 요통을 호소한다. 환자는 왜 통증이 있는지 확실하지 않으며, 아침에 일어난 직후에 통증이 더 심하고 신체 활동을 하면 호전된다고 한다. 이부프로펜(Ibuprofen) 복용 시 통증이 상당히 완화된다. 대소변 실금이나 발기 부전은 부인한다. 신체 검진상 흉곽 확장 감소, 척추 가동 범위 감소, 양측 하지 근력 5/5, 양측 슬개건 반사 2+, 안장 마취(saddle anesthesia) 없음이 확인된다. 이 환자에게 가장 적절한 다음 검사는 무엇인가?

## 선택지

A. 적혈구 침강 속도(ESR)
B. 천장관절(sacroiliac joint) MRI
C. 천장관절(sacroiliac joint) 방사선 촬영
D. 세극등 검사(slit-lamp examination)

## 해설


염증성 요통과 흉곽·척추 운동 제한으로 축성 척추관절염을 의심한다. 골격이 성숙한 이 성인의 초기 영상은 천장관절 방사선촬영(C)이다. 사진이 진단적이지 않거나 염증성 병변을 더 평가해야 하면 MRI를 시행한다. MRI의 민감도가 높다는 사실이 이 문항의 초기 검사 답을 B로 바꾸지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-train-001178` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원답 C와 달리 MRI B만 설명한 해설 교정. 성인 의심 axSpA에서 SI 방사선 우선, 음성/불충분하면 MRI 순서를 NICE로 확인.
- 범위: evidence-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/NG65/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001178
