---
type: qbank
schema_version: 1
id: medqa-us-train-004287
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d65b08c6df71ad3d054ad01a388594d4d892194fed965b0fbf2d0b1a3007dd41
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "폰빌레브란트병"
  - "과다월경"
  - "부분트롬보플라스틴시간"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2PsCDruYzroIjruIzrnoDtirjrs5EgKHZvbiBXaWxsZWJyYW5kIERpc2Vhc2UsIHZXRCkubWQ
question_type: 임상증례 객관식
difficulty: complex
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

15세 여자가 4개월간 지속된 과다월경으로 내원했다. 어머니는 4개월 전 초경을 시작한 뒤 월경량이 많고 오래 지속되었다고 한다. 3년 전 치아를 뽑은 후 출혈이 지속된 적이 있다. 다른 병력과 복용약은 없고 활력징후와 신체검사는 정상이다. 이 환자 평가에서 진단적 가치가 가장 높은 검사는 무엇인가?

## 선택지

A. 제9응고인자 검사
B. 부분트롬보플라스틴시간(PTT)
C. 항카디오리핀 항체
D. 프로트롬빈시간(PT)

## 해설


초경부터의 과다월경과 발치 후 지속 출혈은 vWD 등 선천 출혈질환을 의심하게 한다. 선택지 중 aPTT B는 vWF 저하에 동반된 VIII 감소 등 내인성 경로 이상을 발견할 수 있어 의미가 있다. 하지만 aPTT는 혈소판 기능검사가 아니고 경한 vWD에서 정상일 수 있어 가장 민감한 확진검사라고 할 수 없다. 실제로 혈소판 수·vWF 항원/활성·VIII 등을 출혈 병력과 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004287 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PTT를 혈소판 기능의 가장 민감한 검사라고 설명한 오류 교정; 선택지 중 B의 보조적 가치만 인정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7805326/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004287
