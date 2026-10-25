---
type: qbank
schema_version: 1
id: medqa-us-train-010068
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6c745e7b6ac943ab24371ff5d80798f0955634faec88f80b0765b96dba0d0afa
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "조증 삽화"
  - "양극성장애"
  - "리튬"
question_type: mechanism
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOu2hCDsnqXslaAgKEJpcG9sYXIgYW5kIFJlbGF0ZWQgRGlzb3JkZXJzKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 친구들에 의해 응급실로 이송되었다. 담요만 걸친 채 빠르고 일관성 없이 말한다. 친구들은 그녀가 알몸으로 정원에 물을 주다가 옷을 입히려 하자 거부하며 자신이 안팎으로 얼마나 아름다운지 받아들였다고 말했다고 한다. 감당할 수 없는 새 차를 샀고 지난 일주일 동안 직장에 나오지 않으며 이상하게 행동했다. 매우 흥분해 밤늦게 친구들에게 미래 계획을 말하는 전화를 걸었다고 한다. 다음 중 이 환자 증상의 장기 관리에 도움이 되는 약물 기전은?

## 선택지

A. 시냅스 전 틈에서 노르에피네프린과 세로토닌 재흡수 억제
B. 이노시톨 모노포스파테이스와 이노시톨 폴리포스파테이스 1 억제
C. 시냅스 틈의 도파민과 노르에피네프린 농도 증가
D. γ-아미노부티르산 수용체 활성 조절

## 해설

기능 손상을 동반한 조증 양상에 대한 장기 기분 안정 약물로 리튬이 출제 의도에 부합하며 B가 해당한다. 리튬은 이노시톨 모노포스파테이스(inositol monophosphatase, 탈인산효소) 등 이노시톨 대사 효소를 억제할 수 있다. 이는 단백질 인산화효소(kinase)가 아니다. 이노시톨 재순환 억제는 제안된 관련 기전 중 하나이지 임상 효과 전체를 단일 기전으로 확정한 것은 아니다. NICE에서도 리튬은 양극성장애 장기 약물치료 선택지로 제시된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: IMPase를 단백질 인산화효소로 잘못 번역한 오류를 탈인산효소로 교정하고 리튬 기전을 유일하게 확정하지 않도록 구분했다.
- https://pubmed.ncbi.nlm.nih.gov/6253491/
- https://www.nice.org.uk/guidance/cg185/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010068
