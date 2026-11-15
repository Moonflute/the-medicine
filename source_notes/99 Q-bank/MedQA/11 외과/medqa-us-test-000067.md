---
type: qbank
schema_version: 1
id: medqa-us-test-000067
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:402205175f1ab473ac007f6fb9df1387b5ba3af6a4934cc0161a400b4fa45caa
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "응급 수술"
  - "묵시적 동의"
  - "장폐색"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snqXtj5Dsg4kubWQ
  - MTEg7Jm46rO8L-yepSDtj5Dsg4kgKEJvd2VsIE9ic3RydWN0aW9uKS5tZA
question_type: ethics
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

4세 남아가 복막염과 쇼크로 응급실에 왔다. 외과에서 지연하면 생명이 위험한 응급 수술이 필요하다고 판단했다. 부모와 바로 연락되지 않고 동행인은 미성년 형이다. 적절한 조치는?

## 선택지

A. 형의 서면 동의를 법정대리인 동의로 간주한다
B. 부모가 병원에 올 때까지 소생술만 한다
C. 연락 시도와 응급성을 기록하되 필요한 수술은 지연하지 않는다
D. 환아에게 동의서에 서명하도록 한 뒤 수술한다

## 해설


국내에서는 설명·동의 절차를 기다리면 생명이 위험하거나 중대한 장애가 우려되는 응급상황에서 필요한 수술을 지연하지 않는다. 가능한 범위에서 연락하고 판단 근거를 기록한 뒤 법정대리인에게 설명한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000067 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 복막자극징후가 있는 소아 응급수술의 동의 예외와 단순 장폐색의 일반화를 구분했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://code-medical-ethics.ama-assn.org/sites/default/files/2022-08/2.1.1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000067
- https://www.law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1028255763
- https://www.law.go.kr/LSW/lsSideInfoP.do?docCls=jo&joBrNo=00&joNo=0009&lsiSeq=280429&urlMode=lsScJoRltInfoR
