---
type: qbank
schema_version: 1
id: medqa-us-test-000555
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:eba958cdb100c32e72899a1a69d7c1c7ab45e513727bc0b3f0052b03d0377173
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "공황장애"
  - "공황발작"
  - "광장공포증"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qzte2ZqSDsnqXslaAgKFBhbmljIERpc29yZGVyKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q0keyepSDqs7Xtj6zspp0gKEFnb3JhcGhvYmlhKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 여성이 최근 발생한 흉통으로 응급실에 왔다. 이전에는 건강했고 유사한 증상은 없었다. 발작이 시작될 때 죽을 것 같은 느낌과 매우 빠른 심장박동, 심한 발한, 호흡곤란이 있었다. 얼마나 지속되었는지는 기억하지 못하지만 응급실에 도착할 때쯤 증상이 저절로 사라졌다. 병력을 듣는 동안 활력징후가 빠르게 정상으로 돌아왔고 차분해졌다. 과거력, 복용약, 신체진찰, 심전도, 초기 심장효소는 정상이었다. 이 환자에서 가장 가능성 높은 진단을 확진하기 위해 필요한 것은?

## 선택지

A. 관련 증상이 1개월 동안 지속됨
B. 30분 이상 지속되는 장애 사건이 두 차례 발생
C. 가족력
D. 광장공포증

## 해설

제시된 갑작스러운 공포와 심계항진·발한·호흡곤란은 공황발작에 부합하지만, 한 차례 발작만으로 공황장애가 확진되지는 않는다. 공황장애는 반복되는 예기치 않은 발작에 더해 적어도 한 발작 이후 1개월 이상의 지속적 걱정 또는 부적응적 행동 변화가 필요하므로 A가 관련 기준이다. 발작이 30분 이상 지속되어야 하거나 광장공포증·가족력이 필수라는 조건은 없다. 의학적·물질 관련 원인도 배제한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 공황발작과공황장애혼동/30분지속필수창작교정. 반복예기치않은발작후1개월걱정·행동변화A.
- https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms
- https://www.ncbi.nlm.nih.gov/books/NBK571021/box/ch4.b27/?report=objectonly

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000555
