---
type: qbank
schema_version: 1
id: medqa-us-train-004869
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c0802861fd05a39c7cbb8ed7f4e0ad0225df1ae381c33db90602171bb364836c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "폐결핵"
  - "법정 신고 감염병"
  - "공중보건 신고"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqysO2VtSAoUHVsbW9uYXJ5IFR1YmVyY3Vsb3NpcykubWQ
question_type: ethics
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

기침·체중 감소·발열이 있는 36세 남성의 객담 도말에서 항산균이 보이고, 객담 핵산증폭검사에서 결핵균이 확인됐다. 환자는 직장에 알려질까 걱정한다. 진료와 별도로 의사가 이행할 조치는?

## 선택지

A. 관할 보건소에 24시간 이내 결핵을 신고한다
B. 환자의 직장에 직접 연락해 진단을 알린다
C. 객담 배양 결과가 나올 때까지 신고를 미룬다
D. 환자가 동의할 때만 신고한다

## 해설


폐결핵 환자나 결핵이 의심되는 환자를 진단한 의료인은 국내 결핵 신고 절차에 따라 24시간 이내 신고한다. 법정 신고는 직장 등에 진단을 임의로 공개하는 것과 다르다. 환자에게 신고 취지를 설명하고 전파 예방과 치료를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004869 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 활동성 폐결핵의 공중보건 당국 신고 A를 미국 문항 맥락의 공식 의무와 원문 대조 유지. 일반인/고용주 무차별 공개를 허용하는 뜻은 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/testing-diagnosis/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004869
- 질병관리청 결핵ZERO, 결핵신고(감시): https://tbzero.kdca.go.kr/tbzero/contents.do?leftMenuId=5&paramBoardId=C00019&paramGubun=M&paramMenuId=52&subTabMenuId=&subTabSelected=
