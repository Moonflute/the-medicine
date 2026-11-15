---
type: qbank
schema_version: 1
id: medqa-us-train-006829
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:35a7e9e730583454ce45e468d1e285ae1bb2b2068cd3e770f8630e1a3e75432d
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "임신 중 폐색전증"
  - "심부정맥혈전증"
  - "대퇴정맥 비압박"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 32주인 38세 여성이 갑자기 숨이 차고 깊게 들이쉴 때 가슴이 아프다. 왼쪽 다리만 붓고 종아리에 압통이 있다. 혈압은 안정적이며 폐색전증을 의심하고 있다. 폐혈관 영상 전, 다리 증상을 활용해 먼저 시행할 검사는?

## 선택지

A. 태아 심장초음파
B. 하지 동맥 혈관조영술
C. 단순 흉부 X선만으로 혈전 유무를 확정한다
D. 증상이 있는 하지의 정맥 압박 초음파

## 해설

임신 중 폐색전증이 의심되면서 심부정맥혈전증에 해당하는 다리 증상이 있으면 정맥 압박 초음파를 먼저 할 수 있다. 근위부 심부정맥혈전이 확인되면 정맥혈전색전증 치료 근거가 된다. 음성 결과 하나로 폐색전증을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DVT의 압박불가 D를 단순정맥압상승/외부압박부재와 혼동한 기전 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006829
- https://academic.oup.com/eurheartj/article/46/43/4462/8234487
