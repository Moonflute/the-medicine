---
type: qbank
schema_version: 1
id: medqa-us-train-008631
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e9f4dd854c72f138d419bd102358d59a337735af70aee1118160614957cb1cd2
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "vitiligo"
  - "autoimmune thyroid disease"
  - "anti-TPO antibodies"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uwseuwmOymnSAoVml0aWxpZ28pLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남성의 양손등과 눈 주위에 가렵지 않은, 경계가 뚜렷한 흰색 반점이 서서히 넓어진다. 인설이 없고 감각은 정상이다. 우드등 아래에서 병변과 정상 피부의 경계가 청백색으로 뚜렷해진다. 가장 가능성 높은 진단은?

## 선택지

A. 백반증
B. 어루러기
C. 백색비강진
D. 염증 후 저색소침착

## 해설

완전한 탈색에 가까운 경계 뚜렷한 반점이 손과 눈 주위에 생기고 우드등에서 구분이 선명해지면 백반증을 지지한다. 미세 인설이 있는 어루러기와 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정답 anti-TPO C에 반대 선지 B(멜라닌세포 정상)를 정답으로 설명한 해설을 교체한다.
- 공식/학회 근거: https://bpg.org.uk/wp-content/uploads/2024/01/Br-J-Dermatol-2021-Eleftheriadou-British-Association-of-Dermatologists-guidelines-for-the-management-of-people-with-vitiligo.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008631
- https://www.kvpcr.org/html/vitiligo2
- https://pubmed.ncbi.nlm.nih.gov/37746876/
