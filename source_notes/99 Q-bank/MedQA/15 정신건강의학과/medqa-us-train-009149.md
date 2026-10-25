---
type: qbank
schema_version: 1
id: medqa-us-train-009149
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:12df95c7d8f1ae8010f01ed72b60b061efc5f293f86a16d31d4d7c874a862151
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "postoperative delirium"
  - "수술 후 섬망"
  - "illusion"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yErOunnSAoRGVsaXJpdW0pLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

대장암으로 반결장절제술을 받은 지 2일 된 78세 남자가 병실에서 초조하고 혼란스러워하는 모습이 발견되었다. 그는 도둑이 침입했다고 말하며 방 한쪽 구석을 가리켜 “저기 있어요, 의사 선생님!”이라고 한다. 자세히 보니 환자는 벽에 걸린 목욕 가운을 가리키고 있었다. 제2형 당뇨병과 동맥성 고혈압이 있으며 인슐린과 히드로클로로티아지드를 복용 중이다. 체온 36.9°C, 맥박 89회/분, 호흡수 15회/분, 혈압 145/98 mmHg이다. 복부 정중선 수술 상처는 압통이나 발적이 없다. 정신상태검사에서 초조하고 사람만 지남력이 있다. 이 환자의 지각을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 착각
B. 망상
C. 연상이완
D. 환각

## 해설

벽에 실제로 걸린 목욕가운을 도둑으로 잘못 지각했으므로 착각이다. 외부 자극이 없는 상태에서 생기는 환각과 구별한다. 수술 후 급성 혼돈은 이 지각 오류가 나타나는 배경이며, 이 문항은 혼돈의 원인 진단이 아니라 지각 현상의 이름을 묻는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009149

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 실제 물체가 없다고 하면서 착각이라 한 내부 모순 교정. 목욕가운 오인이라는 실제 자극을 명시.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
