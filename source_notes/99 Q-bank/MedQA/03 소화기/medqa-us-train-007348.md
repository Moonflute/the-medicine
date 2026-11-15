---
type: qbank
schema_version: 1
id: medqa-us-train-007348
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eaee61154a50e5d88fe756309dc0443b8315f98f8dd17728b541cce4741e4b55
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "클로스트리디오이데스 디피실 감염"
  - "항생제 관련 설사"
  - "포자 형성 막대균"
  - "장내 세균총"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

폐렴으로 항생제를 복용한 72세 남성이 하루 여섯 차례의 새 수양성 설사와 복통을 호소한다. 최근 완하제를 쓰지 않았다. C. difficile 감염을 평가할 가장 적절한 검사는?

## 선택지

A. 묽은 대변으로 GDH와 독소 EIA를 검사하고 불일치하면 NAAT를 추가
B. 형태가 잡힌 대변에서 GDH만 확인
C. 대변 잠혈검사와 칼프로텍틴 측정
D. 혈청 C. difficile 항체검사

## 해설


뚜렷한 원인 없이 새로 시작한 묽은 변이 하루 3회 이상이면 감염을 고려한다. GDH·독소 검사 후 불일치할 때 NAAT를 추가하는 단계적 전략은 독소를 만드는 균의 단순 보균과 증상이 있는 감염을 구별하는 데 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 항생제후C.difficile은정상균총파괴·포자형성균독소 A기전과일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007348
- https://doi.org/10.5145/ACM.2024.27.1.2
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714433/
