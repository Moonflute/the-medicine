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
question_type: investigation
difficulty: complex
answer: A
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

발치 뒤 출혈력과 과다월경이 있는 15세 환자다. 대량 출혈로 응급실에 왔을 때 채취한 폰빌레브란트인자 항원과 활성은 모두 하한선 가까이 정상이었다. 유전 출혈질환 의심이 여전히 높다면 어떻게 하는가?

## 선택지

A. 급성 출혈과 스트레스가 가라앉고 건강 상태가 안정된 뒤 검사를 다시 시행한다
B. 정상 결과이므로 앞으로 출혈력은 확인하지 않는다
C. 출혈이 가장 심할 때만 검사해 가장 낮은 값을 얻는다
D. 급성기 수치만으로 특정 폰빌레브란트병 아형을 확진한다

## 해설


폰빌레브란트인자는 급성기 반응물질이라 출혈과 스트레스 중 높아져 결핍이 가려질 수 있다. 의심이 남으면 안정 상태에서 항원과 활성을 다시 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004287 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PTT를 혈소판 기능의 가장 민감한 검사라고 설명한 오류 교정; 선택지 중 B의 보조적 가치만 인정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7805326/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004287
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7805340/
