---
type: qbank
schema_version: 1
id: medqa-us-validation-001151
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:74215068d76ee44c19cbb615f86347a2ff8b1e918af69cb91706ec7ffca6ea08
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 심근경색"
  - "심실세동"
  - "돌연심장사"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 남성이 45분간 지속된 심한 흉골 뒤 흉통과 호흡곤란으로 응급실에 왔다. 심전도에서 전벽 ST분절 상승 심근경색이 보이고 아스피린, 클로피도그렐, 메토프롤롤, 니트로글리세린과 헤파린을 투여받았다. 이송을 기다리던 중 쓰러져 맥박과 혈압이 측정되지 않았고 소생술에도 사망했다. 가장 가능성 높은 사망 원인은?

## 선택지

A. 유두근 파열
B. 심실세동
C. 중격벽 파열
D. 폐색전증

## 해설


ST‑분절 상승 심근경색 후 급성 사망의 가장 흔한 원인은 심실세동으로 인한 급성 심정지이다. 심근 손상으로 전기 불안정성이 증가해 전기적 재진입이 발생한다. 따라서 사망 원인은 심실세동이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 급성 광범위 STEMI 직후 무맥박 돌연사는 수일 뒤 기계적 합병증보다 심실세동 B가 가장 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001151
