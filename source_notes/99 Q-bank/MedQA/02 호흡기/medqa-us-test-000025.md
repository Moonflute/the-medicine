---
type: qbank
schema_version: 1
id: medqa-us-test-000025
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:a9ae97b6ff0695f47ebd6b36f78f80ec055806705a98925834057b74c6fd5afe
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "중증 천식 악화"
  - "조용한 흉부"
  - "호흡부전"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
  - MDIg7Zi47Z2h6riwL-2YuO2doeu2gOyghCAoUmVzcGlyYXRvcnkgRmFpbHVyZSkubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

6세 남아가 하루 동안 악화된 천명과 호흡곤란으로 어머니와 함께 응급실에 내원했다. 발열, 기침, 구토, 설사는 없다. 천식과 습진이 있으며 글루코코르티코이드와 알부테롤 흡입기를 사용하지만 휴가 중 일주일 동안 약을 빠뜨렸다. 불편해 보이며 체온 36°C, 맥박 분당 120회, 호흡수 분당 40회, 혈압 100/80 mmHg이다. 양쪽 폐야에 흡기·호기 천명과 중등도 늑간 및 늑골하 함몰, 흡기:호기 비율 감소가 있다. 응급실에서 네뷸라이저 알부테롤·이프라트로피움과 정맥 메틸프레드니솔론을 투여했다. 한 시간 후 아이가 축 늘어지고 기면 상태가 되었다. 황산마그네슘을 투여한 후 체온 36°C, 맥박 분당 150회, 호흡수 분당 22회, 혈압 100/70 mmHg이며 재검에서 천명은 들리지 않는다. 다음 중 가장 적절한 처치는?

## 선택지

A. 기계환기를 위한 기관내 삽관
B. 제2늑간에서 바늘 흉강감압
C. 기관지경검사
D. 메틸프레드니솔론 추가 투여

## 해설

정답은 A이다. 기관지확장제와 스테로이드 치료 뒤 소아가 축 늘어지고 기면 상태가 되며 호흡수가 감소하고 천명이 사라진 것은 호전보다 호흡근 피로와 심한 기류 감소를 우려해야 하는 소견이다. 즉시 소아 중환자/기도 전문 인력의 도움을 받아 삽관과 기계환기를 준비한다. 산소포화도나 혈액가스가 제시되지 않았으므로 실제 저산소혈증 수치를 추정하지 않는다. 긴장성 기흉을 지지하는 일측성 소견은 없고 추가 스테로이드만 기다려서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 처치 후 호흡수 감소를 호전으로 오판하지 않도록 무기력·기류 감소에 따른 호흡부전 위험을 설명; 미측정 저산소혈증을 단정하지 않음.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000025
