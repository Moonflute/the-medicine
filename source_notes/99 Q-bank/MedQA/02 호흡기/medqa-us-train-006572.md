---
type: qbank
schema_version: 1
id: medqa-us-train-006572
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:18ed70b92a94ad55f5c555c3b4a7c735c1b5d7f613cee0668bedb9badbc60308
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐포자충 폐렴"
  - "스테로이드 유발 면역저하"
  - "베타-D-글루칸 상승"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

류마티스질환 때문에 수주간 고용량 전신 스테로이드를 복용한 42세 여성이 마른기침과 저산소증으로 입원했다. 흉부 CT에 양측 미만성 간유리 음영이 있고 β-D-글루칸은 상승했다. 폐포자충 폐렴이 의심되지만 유도 객담으로 진단하지 못했다. 환기가 안정되고 시술이 가능한 경우 다음 검사는?

## 선택지

A. 기관지폐포세척액에서 폐포자충 검사
B. 흉부 CT만 다시 찍고 균을 확진한다
C. 투베르쿨린 피부검사
D. 혈청 총 IgE

## 해설


면역저하 환자의 저산소증, 마른기침과 미만성 간유리 음영은 폐포자충 폐렴과 맞을 수 있다. β-D-글루칸은 비특이적이며, 유도 객담으로 확인되지 않으면 기관지폐포세척액을 검사한다. 분자검사 결과는 임상 소견과 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 면역억제·저산소·βDglucan·미만성간질침윤의 PCP 의심은 BAL검체 A 병원체확인으로 연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006572
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8243279/
