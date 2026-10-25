---
type: qbank
schema_version: 1
id: medqa-us-train-009489
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a8a2c2595ab79a0779ef46b699b7076f04d4158d8091960c0dbaee6cd53ccac9
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "asbestosis"
  - "석면폐증"
  - "pleural plaques"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yEneuptO2PkOymnSAoQXNiZXN0b3NpcykubWQ
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

61세 남자가 고혈압, 제2형 당뇨병, 고콜레스테롤혈증, 천식 병력이 있다. 최근 육체노동을 할 때 호흡곤란이 증가하고 실내외에서 새 기침이 발생한다. 40갑년 흡연력이 있지만 최근에는 피우지 않는다. 30년간 건설업에 종사해 증상이 특히 스트레스라고 한다. 체온 36.7°C, 혈압 126/74 mmHg, 심박수 74회/분, 호흡수 14회/분이다. 손가락 곤봉지가 있고 청진에서 천명음이 들리며 심음은 정상이다. 흉부 X선에서 양측 폐기저부의 선상 음영과 다수의 석회화 흉막판이 보인다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 석면폐증
B. 탄광부병
C. 규폐증
D. 과민성 폐렴

## 해설


석면 노출은 석면폐증을 일으키며, 폐기저부 석회화 플라크와 선상 음영이 특징이다. 환자는 건설업 경력과 석면 노출 이력이 있어 석면폐증이 가장 가능성 높다.
다른 질환은 동일한 영상 소견을 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 장기 건설업 노출 가능성과 기저부 선상 음영·석회화 흉막판·곤봉지는 석면폐증 A에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009489
