---
type: qbank
schema_version: 1
id: medqa-us-train-009331
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4e6072d0f8309ebfddd7ce9726fe76dbe71338803fc7c9c10a00d6fc854badf5
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "deviated nasal septum"
  - "비중격 만곡"
  - "deep sedation"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL1Byb3BvZm9sLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 만성 코막힘으로 일차의료기관에 내원했다. 항상 코로 숨쉬기 어려웠고 새 남편이 잘 때 숨소리가 크다고 한다. 잦은 감염이나 알레르기는 없고 만성 질환이나 복용약, 가족력도 없다. 혈압 124/78 mmHg, 심박수 74회/분, 호흡수 14회/분이다. 폐 청진은 정상이고 비강 안을 보니 비중격이 휘어 있다. 이비인후과에서 수술 평가를 받기로 했고 프로포폴을 사용한 마취가 가능한지 물었다. 정맥 프로포폴을 사용할 수 있는 마취 형태는 무엇인가?

## 선택지

A. 최소 진정
B. 경막외 마취
C. 깊은 진정
D. 해리성 마취

## 해설

정맥 propofol은 깊은 진정 및 전신마취에 사용될 수 있어 C가 적절하다. 깊은 진정에서는 반복적·통증성 자극에만 목적 있는 반응을 보이고 자발환기가 불충분하거나 기도 확보 도움이 필요할 수 있다. 따라서 적절한 모니터링과 기도 구조 능력을 갖춘 인력이 필요하며, 기도 유지가 필요 없는 경우에만 적용된다는 설명은 틀리다. 경막외 마취는 다른 투여 경로의 국소마취이고 해리성 마취는 propofol의 대표 작용 양상이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 깊은 진정은 기도 처치가 필요 없다는 위험한 해설을 ASA 정의에 따라 교정.
- 공식/학회 근거: https://www.asahq.org/standards-and-practice-parameters/statement-on-continuum-of-depth-of-sedation-definition-of-general-anesthesia-and-levels-of-sedation-analgesia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009331
