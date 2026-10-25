---
type: qbank
schema_version: 1
id: medqa-us-train-004319
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a76fdd9e46a4861f9ce8a0727e33648cc0b6e7a067e63f49d8ec0c7f287fb166
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "전교통동맥 동맥류"
  - "지주막하출혈"
  - "상염색체 우성 다낭신"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

39세 남자가 갑자기 시작된 심한 두통에 이어 오심, 구토, 시야 변화, 의식소실이 발생해 응급실에 왔다. 과거력은 알 수 없고 평생 경험한 두통 중 가장 심하다고 한다. 비조영 두부 CT에서 두개강 내 출혈이 보이고, 뇌혈관조영술에서 전교통동맥 파열 동맥류가 확인되었다. 현재 상태와 가장 강하게 연관된 소견은 무엇인가?

## 선택지

A. 중심 괴사핵을 가진 나비모양 교종이 보이는 뇌 MRI
B. 신세포암을 시사하는 복부 CT
C. 양측 신장에 다수의 낭종이 보이는 신장 초음파
D. 8세에 신장이식을 받은 병력

## 해설

낭상 두개내동맥류와 상염색체우성 다낭신장병(ADPKD)은 알려진 연관이 있어, 제시 선지 중 양측 신장 다발 낭종(C)이 가장 관련 깊다. ADPKD에서는 혈관벽 이상으로 두개내동맥류 위험이 증가한다. 그러나 모든 낭상 동맥류 또는 대부분의 지주막하출혈이 ADPKD에서 발생한다는 뜻은 아니다. 신세포암이나 나비모양 교모세포종, 어린 나이 신장이식 병력만은 이 연관을 직접 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. ADPKD가 낭상 동맥류 위험을 높인다는 연관을 유지하되 동맥류성 SAH가 대부분 다낭신증과 연결된다는 과도한 일반화를 제한했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004319
