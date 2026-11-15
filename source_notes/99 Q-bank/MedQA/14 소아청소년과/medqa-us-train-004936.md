---
type: qbank
schema_version: 1
id: medqa-us-train-004936
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d816bd5e545b3124d301486e5264f2b49e55eefb7b1eba9a6f8c68e18421106c
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "열성경련"
  - "DTaP 예방접종"
  - "예방접종 금기 없음"
question_type: prevention
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Je07ISxIOqyveugqCAoRmVicmlsZSBDb252dWxzaW9uKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15개월 아이가 DTaP 4차 접종을 받으러 왔다. 3개월 전 MMR 접종 열흘 뒤 열과 함께 전신 발작이 2분간 있었고, 이후 완전히 회복했다. 현재 신경학적 이상은 없다. DTaP 접종은 어떻게 할까?

## 선택지

A. 신경과에서 뇌파를 확인할 때까지 연기한다
B. 예정대로 접종한다
C. 백일해 성분은 이후 접종에서도 제외한다
D. 첫 접종부터 다시 시작한다

## 해설

회복된 단순 열성경련은 DTaP 금기가 아니다. 이전 백일해 백신 후 다른 원인 없이 발생한 뇌병증, 또는 진행성·조절되지 않는 신경학적 질환은 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 기왕 접종에 DTaP가 없는데 DTaP 후 경련으로 연결한 오류를 교정.
- https://www.cdc.gov/vaccines/hcp/imz-best-practices/contraindications-precautions.html
- https://www.cdc.gov/vaccine-safety/about/febrile-seizures.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004936
- https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=1120&menuLv=1
