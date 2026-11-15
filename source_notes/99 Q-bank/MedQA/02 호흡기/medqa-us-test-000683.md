---
type: qbank
schema_version: 1
id: medqa-us-test-000683
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:975cf9ed442cba6a268a91433eb2f5a2a7fd6552450217133275e928e107efcc
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "알레르기성 기관지폐 아스페르길루스증"
  - "Aspergillus fumigatus"
  - "천식"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yVjOugiOultOq4sOyEsSDquLDqtIDsp4Dtj5Ag7JWE7Iqk7Y6Y66W06ri466Oo7Iqk7KadIChBQlBBKSAoQWxsZXJnaWMgQnJvbmNob3B1bG1vbmFyeSBBc3BlcmdpbGxvc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2FzcG9mdW5naW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여성이 천식 치료를 받는데도 천명과 갈색 점액마개가 반복된다. 흉부 CT에서 중심성 기관지확장과 고음영 점액마개가 보인다. 총 IgE는 1,800 IU/mL이고 아스페르길루스 특이 IgE도 양성이다. 가장 가능성 높은 진단은?

## 선택지

A. 침습성 폐아스페르길루스증
B. 급성 세균성 폐렴
C. 과민성 폐렴
D. 알레르기성 기관지폐 아스페르길루스증

## 해설

천식 환자의 아스페르길루스 감작, 높은 총 IgE, 중심성 기관지확장과 고음영 점액마개는 알레르기성 기관지폐 아스페르길루스증을 지지한다. 이는 곰팡이에 대한 기도의 과민반응으로, 조직을 침범하는 진균성 폐렴과 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ABPA를 침습성 Aspergillus 폐렴으로 설명한 오류를 알레르기성 염증으로 교정.
- https://doi.org/10.1183/13993003.00061-2024

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000683
