---
type: qbank
schema_version: 1
id: medqa-us-test-000005
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2073bfd77c058db48cedca6a44391f0a5473bf22a653bb1f158703b429c1a914
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "알레르기 결막염"
  - "케토티펜"
  - "계절성 알레르기"
  - "Allergic conjunctivitis"
related_disease_slugs:
  - MTgg7JWI6rO8L-qzhOygiOyEseyVjOugiOultOq4sOqysOunieyXvCAoc2Vhc29uYWwgYWxsZXJnaWMgY29uanVuY3Rpdml0aXMpLm1k
question_type: management
difficulty: standard
answer: B
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

35세 남성이 매년 봄 양쪽 눈 가려움과 눈물, 재채기를 겪는다. 시력저하·통증·화농성 분비물은 없다. 눈 증상의 약물 치료로 적절한 것은?

## 선택지

A. 에리트로마이신 안연고
B. 케토티펜 점안액
C. 국소 마취 점안액
D. 장기 스테로이드 점안액

## 해설


양측 가려움과 맑은 눈물이 계절적으로 반복되면 알레르기결막염에 부합한다. 케토티펜은 국소 H1 항히스타민 및 비만세포 안정 작용을 한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000005`와 직접 대조했다.
- 판정: 알레르기결막염과 정답 B는 일치. 케토티펜을 H1/H2 차단제라고 설명한 약리 오류를 H1 길항·비만세포 안정화로 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2001/21066s4lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000005
- https://www.aaojournal.org/article/S0161-6420%2824%2900009-5/fulltext
