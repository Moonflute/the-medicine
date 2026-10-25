---
type: qbank
schema_version: 1
id: medqa-us-test-000163
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:be716bcfb63c5a5c6f8c976786c1224b99f7aeb5d489e6750574dd04fd1ff355
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "굿파스처 증후군"
  - "항사구체기저막 항체"
  - "선형 IgG 침착"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyGjSDsp4Ttlokg7Yag66as7L2p7Yyl7Je8IChSYXBpZGx5IFByb2dyZXNzaXZlIEdsb21lcnVsb25lcGhyaXRpcykubWQ
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2hsb3J0aGFsaWRvbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남성이 피로, 피가 섞인 점점 심해지는 기침, 호흡곤란, 짙은 소변으로 내원했다. 3주 동안 아팠고 고혈압과 고지혈증으로 클로르탈리돈과 아토르바스타틴을 복용한다. 26년 동안 하루 20~30개비의 담배를 피웠다. 항사구체기저막 혈청검사가 양성이다. 다음 중 이 상태의 특이적 소견은?

## 선택지

A. 육아종성 염증과 괴사성 혈관염
B. 한랭글로불린 양성
C. 면역형광에서 선형 IgG 염색
D. 사구체 기저막의 세로 분열과 비후

## 해설


항사구체기저막 항체 양성은 굿파스처 증후군을 의미하며, 면역형광에서 선형 IgG와 C3가 기저막에 균일하게 착색된다. 이는 질환의 특이적 소견이다. 따라서 정답은 면역형광에서 선형 IgG 염색이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/4선지/정답 C/해설 읽음. 폐출혈-신장 증상과 anti-GBM 양성에서 기저막을 따르는 선형 IgG가 특징이며 GPA/한랭글로불린/Alport 보기와 구별됨. 병리 내용 검토.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000163
