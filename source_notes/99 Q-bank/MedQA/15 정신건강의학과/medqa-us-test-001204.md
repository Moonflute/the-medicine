---
type: qbank
schema_version: 1
id: medqa-us-test-001204
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:55d1799d2e945c0a9164403019d045ed970d50221bb0f118a9d1db548dac289e
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "부프로피온"
  - "금연"
  - "발작 위험"
  - "Seizure disorder"
question_type: prevention
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: complex
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
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 남성이 금연을 원해 진료를 받으러 왔다. 15갑년 흡연력과 위식도 역류질환이 있고 두부외상 후 두 차례 발작이 있었으며 현재 항발작약은 복용하지 않는다. 위식도 역류질환에 오메프라졸을 복용한다. 친구에게서 금연에 효과적인 항우울제에 대해 듣고 복용을 원한다. 다음 중 옳은 설명은?

## 선택지

A. 오메프라졸이 부프로피온 대사를 방해하므로 오메프라졸 복용 1시간 전에 부프로피온을 복용해야 한다
B. 부프로피온은 니코틴 대체요법과 함께 사용할 때만 효과적이다
C. 부프로피온은 발작 역치를 낮추므로 발작장애 병력이 있는 환자는 복용하면 안 된다
D. 심장 정밀검사 후에만 부프로피온을 처방할 수 있다

## 해설

부프로피온은 주로 노르에피네프린·도파민 재흡수를 억제하는 항우울제로 금연에도 사용되며, GABA 수용체 억제제로 분류하지 않는다. 발작 역치를 낮출 수 있으므로 발작장애에서는 금기이며, 두부외상과 발작 병력이 있는 이 환자에게 적절하지 않다. 제시된 설명 중 발작 위험에 관한 내용이 옳다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001204

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 부프로피온을 GABA 억제제로 설명한 기전 오류 수정; 원문 두부외상 후 발작·오메프라졸 복용을 복원.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=2563ea9f-6e29-2747-e054-00144ff88e88&type=display
