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

6세 남아가 급성 천식 악화로 산소, 반복 살부타몰·이프라트로피움 흡입, 전신 스테로이드와 마그네슘을 받았다. 이후 아이가 기면 상태가 되고 호흡수가 줄었다. 두 폐에 공기 유입이 거의 없어 천명도 들리지 않는다. 가장 적절한 다음 조치는?

## 선택지

A. 숙련된 기도팀과 즉시 기관삽관 및 기계환기를 시작한다
B. 천명이 사라졌으므로 산소를 중단한다
C. 침상 관찰만 하면서 한 시간 뒤 다시 평가한다
D. 전신 스테로이드를 한 번 더 주고 다른 처치는 기다린다

## 해설

심한 천식 악화 중 의식저하, 호흡노력 감소와 공기 유입이 거의 없는 조용한 흉부는 호전이 아니라 호흡부전이 임박했다는 징후다. 기도팀을 호출해 즉시 기도와 환기를 확보한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 처치 후 호흡수 감소를 호전으로 오판하지 않도록 무기력·기류 감소에 따른 호흡부전 위험을 설명; 미측정 저산소혈증을 단정하지 않음.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000025
- https://new.lungkorea.org/board/guide/view/14959
- https://ginasthma.org/2026-gina-strategy-report/
