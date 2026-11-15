---
type: qbank
schema_version: 1
id: medqa-us-train-000314
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:693ed1c7de68961e3fb617a9ff1c5a1d960e9b95ec489635627b80aa3706b6d7
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "ulcerative colitis"
  - "primary sclerosing cholangitis"
  - "autoimmune hepatitis"
  - "hepatitis B infection"
  - "IgG4-associated cholangitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sm5DrsJzshLEg6rK97ZmU7ISxIOuLtOq0gOyXvCAoUFNDKSAoUHJpbWFyeSBTY2xlcm9zaW5nIENob2xhbmdpdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDqsIDrqbTsl60g6rCE7Je8IChBdXRvaW1tdW5lIEhlcGF0aXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvTWVzYWxhemluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

궤양성 대장염이 있는 32세 남성이 가려움으로 내원했다. ALP와 GGT가 뚜렷하게 오르고, 초음파에 결석이나 종괴는 없다. 발열이나 급성 담관염 단서도 없다. 원발성 경화성 담관염을 평가할 다음 검사는?

## 선택지

A. ERCP로 진단부터 시도
B. 자기공명 담췌관조영술(MRCP)
C. HIDA 검사
D. 간 탄성도 검사

## 해설


염증성 장질환 환자에서 설명되지 않는 담즙정체가 있으면 PSC를 생각한다. MRCP로 여러 구간의 담관 협착과 사이의 정상 또는 확장 부위를 확인하고 다른 협착 원인을 감별한다. 진단만을 위한 ERCP는 피한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: UC 동반 남성의 소양증/담즙정체와 담관 비후·국소확장은 PSC B. AMA음성과 소견을 PBC/자가면역간염과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000314
- https://doi.org/10.1002/hep.32771
