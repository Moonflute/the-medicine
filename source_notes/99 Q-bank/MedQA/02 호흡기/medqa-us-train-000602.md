---
type: qbank
schema_version: 1
id: medqa-us-train-000602
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8ad4bf76400365016c3039a3e4eb23f655b58f2ddeb0f8982766041bdd1cc730
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "Pneumonia"
  - "Gastroesophageal reflux disease"
  - "Asthma"
  - "Chronic bronchitis"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 여성이 1개월 전부터 시작된 발작적인 기침과 호흡곤란으로 내원하였다. 기침은 가래가 없으며 계단을 오를 때와 밤에 악화된다. 흉통이나 두근거림은 없었다. 8주 전에는 발열, 인후통, 코막힘 증상이 있었다. 10년 전 고혈압을 진단받았다. 16년 동안 하루 반 갑의 담배를 피웠다. 복용 중인 약물은 에날라프릴(enalapril)뿐이다. 맥박은 분당 78회, 호흡수는 분당 18회, 혈압은 145/95 mm Hg이다. 실내 공기 상태에서 맥박 산소포화도는 96%이다. 폐 청진 시 전반적인 호기말 천명음(diffuse end-expiratory wheezes)이 들린다. 흉부 X-선 검사에서는 이상 소견이 없다. 폐기능 검사(spirometry)에서 FEV1:FVC 비율은 65%, FEV1은 60%이다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 폐렴
B. 위식도역류질환
C. 천식
D. 만성 기관지염

## 해설

야간과 운동 시 악화되는 발작성 마른기침·호흡곤란과 천명, 폐쇄성 폐기능 소견은 보기 중 천식(C)에 가장 합당하다. FEV1/FVC 감소만으로 천식의 가역성이 입증된 것은 아니며, 필요하면 기관지확장제 반응 등 변동성 기류제한을 확인한다. 만성기관지염/COPD도 폐쇄성 패턴을 보일 수 있지만 이 사례의 짧은 발작적 경과와 야간 증상이 천식을 더 지지한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 가역성이 측정된 것처럼 쓰고 만성기관지염이 다른 폐기능 패턴이라고 한 과장 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000602
