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

35세 남성이 일주일 동안 지속된 가렵고 눈물 나는 눈으로 내원했다. 이 기간에 하루에도 여러 번 재채기를 했고 1년 전 봄에도 비슷한 증상이 있었다. 철결핍성 빈혈과 강직성 척추염이 있으며 황산철, 인공눈물, 인도메타신을 복용한다. 초등학교 교사로 일한다. 시력은 교정 없이 20/20이고 양측 결막충혈과 맑은 분비물이 있다. 동공은 3mm로 같고 빛에 반응하며 전방은 정상이다. 다음 중 가장 적절한 치료는?

## 선택지

A. 에리트로마이신 연고
B. 케토티펜 점안액
C. 온찜질
D. 플루오로메톨론 점안액

## 해설


계절성 재발, 양측 가려움과 맑은 분비물은 알레르기결막염을 시사한다. 케토티펜은 H1 수용체 길항 및 비만세포 안정화 작용을 하므로 B가 적절하다. H2 차단제로 설명한 기존 해설은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000005`와 직접 대조했다.
- 판정: 알레르기결막염과 정답 B는 일치. 케토티펜을 H1/H2 차단제라고 설명한 약리 오류를 H1 길항·비만세포 안정화로 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2001/21066s4lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000005
