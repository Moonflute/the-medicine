---
type: qbank
schema_version: 1
id: medqa-us-train-004152
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:71ef929ee8c6005d1f636579cd7bc8fdbdcbd46b3b15406bed31b5171c1f1ef9
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "조현병"
  - "급성 초조"
  - "항정신병약물"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

조현병 병력이 있는 50세 여자가 약을 중단한 후 폐쇄병동에 입원했다. 거리에서 허공을 향해 소리를 지르며 돌아다니는 모습으로 발견되었다. 20대 초반에 조현병을 진단받았고, 약물 순응도 문제와 물질 남용, 대인관계 문제로 가족과 살다가 10년간 노숙 상태였다. 조현병 외에도 고혈압, 당뇨병, 갑상샘기능저하증, 고지혈증, 병적 비만, 물질 남용 병력이 있으며 현재 복용약은 없다. 활력징후는 정상이다. 긴장하고 지저분해 보이며 옷은 낡고 소변과 대변 냄새가 난다. 너무 초조하고 파괴적이어서 적절한 신체검사를 할 수 없다. 이 환자의 조현병 치료에 가장 적절한 약물은 무엇인가?

## 선택지

A. 클로자핀
B. 쿠에티아핀
C. 할로페리돌
D. 리스페리돈

## 해설

약물 중단 후 급성으로 악화된 조현병과 심한 초조가 있다. 제시된 선택지 중 고역가 1세대(전형적) 항정신병약인 할로페리돌이 원문 선택이다. 비정형 항정신병약으로 분류하지 않는다. 병적 비만·당뇨병 등 대사 부담을 고려하되 할로페리돌도 정좌불능·급성 근긴장이상·QT 연장 등 위험이 있어 모니터링해야 한다. 급성 안정화 후에는 지속 치료와 복약 순응도 지원 계획을 따로 세운다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004152

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 할로페리돌을 '전형 1형 비정형'으로 혼합 분류한 오류 수정. 급성 선택과 대사·추체외로 위험 및 장기 순응도 계획 구별.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
