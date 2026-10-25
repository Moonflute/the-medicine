---
type: qbank
schema_version: 1
id: medqa-us-validation-000297
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8d0b94a648d45918bfd77d059cb4e4685c62ba951c7df84935172235deec47cd
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "기능성 신경학적 증상장애"
  - "전환장애"
  - "불일치성 근력저하"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yghO2ZmCDsnqXslaAgKENvbnZlcnNpb24gRGlzb3JkZXIpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BbHRlcGxhc2UubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

20세 여성이 남자친구와 말다툼 중 때리고 걷어찬 뒤 4시간 후 발생한 오른쪽 팔과 다리의 근력저하, 감각저하, 저림이 점차 호전되어 남자친구와 함께 응급실에 왔다. 오른쪽 팔을 전혀 사용할 수 없고 절뚝거린다고 한다. 과거 비슷한 증상은 없었다. 생식기 헤르페스와 발모벽 병력이 있다. 의식은 명료하고 얼굴 대칭과 말하기는 정상이다. 누워 있을 때 모든 사지 근력과 오른쪽 발목 발바닥굽힘은 5/5였지만 걸을 때 오른쪽 팔과 다리는 4/5였고 발끝으로 설 수 없었다. 심부건반사는 양측 2+이며 고유수용감각, 가벼운 촉각, 두 점 식별은 정상이다. 비조영 두부 CT도 정상이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 알테플라제 투여
B. 환자 교육 제공
C. 아스피린 처방
D. 바이오피드백 치료 시작

## 해설

누운 자세에서 정상 근력·발바닥굽힘이 보이는데 걷거나 발끝서기에서는 약해지는 등 과제에 따른 불일치가 기능성 신경증상을 뒷받침한다. 제시된 선택지 중 진찰 소견을 긍정적 근거로 설명하고 증상이 실제적이며 회복 가능함을 교육하는 접근이 적절하다. 스트레스가 있거나 CT가 정상이라는 사실만으로 진단하지 않으며, 급성 국소 증상에서 필요한 신경학적 감별·안전 평가를 완료해야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000297

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 정상 CT·스트레스만으로 전환장애를 정한 해설을 실제 진찰의 비일관성에 근거하도록 교정. 환자 교육 답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.mayoclinic.org/diseases-conditions/conversion-disorder/diagnosis-treatment/drc-20355202
