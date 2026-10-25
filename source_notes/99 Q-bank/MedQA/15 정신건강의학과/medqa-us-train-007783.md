---
type: qbank
schema_version: 1
id: medqa-us-train-007783
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1ec36aece85829ea6bba01a33f0f6ed1fd3ee4b9d5370f8d958114e350be6de7
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "panic disorder"
  - "agoraphobia"
  - "acute benzodiazepine treatment"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qzte2ZqSDsnqXslaAgKFBhbmljIERpc29yZGVyKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q0keyepSDqs7Xtj6zspp0gKEFnb3JhcGhvYmlhKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 유발 요인 없이 반복되는 공포 발작, 두근거림, 실신 병력으로 내원했다. 발작은 보통 사람이 붐비는 장소나 대중교통에 들어갈 때 유발되어 혼자 공공장소에 있는 것을 피한다. 잠들기 어렵고 직장과 건강에 대해 통제할 수 없이 걱정하며 친구들의 신뢰를 잃을까 두려워하고 식욕도 저하되었다. 춤을 좋아하고 취미에 대한 열정은 잃지 않았지만, 최근 지역 대회에서 발작이 발생해 진정되고 상태가 좋아질 때까지 공연을 중단했다. 자신의 상태 때문에 속상해한다. 영업 관리자로 일하며 마감이 많은 힘든 직업이라고 한다. 최근 남자친구와 헤어졌다. 만성질환은 없고 잠들기 위해 가끔 독실아민을 복용한다. 4갑년의 흡연력이 있고 술은 가끔 마신다. 혈압 110/60 mm Hg, 심박수 71회/분, 호흡수 13회/분, 체온 36.5°C(97.7°F)이며 신체검사는 정상이다. 다음 중 발작의 급성 치료에 사용할 수 있는 약물은?

## 선택지

A. 부프로피온
B. 메토프롤롤
C. 클로나제팜
D. 니페디핀

## 해설

제시된 약물 중 클로나제팜은 공황발작의 단기 증상 완화에 사용할 수 있다. 부프로피온·메토프롤롤·니페디핀을 공황장애의 표준 장기치료제로 묶는 설명은 맞지 않는다. 급성 안정화와 위험 평가를 병행하고 벤조디아제핀의 진정·의존·알코올 병용 위험을 고려하며, 장기 관리에는 CBT나 근거 기반 항우울제 등을 검토한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007783

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 클로나제팜 급성 선택 유지. 다른 선택지가 공황장애 장기 약이라는 오류 제거.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
