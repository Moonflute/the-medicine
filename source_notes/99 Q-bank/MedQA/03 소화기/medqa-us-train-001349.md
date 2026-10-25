---
type: qbank
schema_version: 1
id: medqa-us-train-001349
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b4540f304590aa63b3812d9e6f7494ebea44a529c5d0871941dca8c0b28450d7
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Mallory-Weiss tear"
  - "upper gastrointestinal bleeding"
related_disease_slugs:
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

23세 대학 졸업반 남성이 다량의 피를 토한 뒤 대학 보건소를 방문했다. 국가 하키 선수권대회에서 팀이 우승한 것을 축하하며 친구들과 많은 양의 술을 마신 후 36시간 동안 구토했다. 과거력은 특이사항이 없다. 혈압은 누운 자세에서 129/89 mm Hg, 선 자세에서 100/70 mm Hg이다. 맥박은 98회/분으로 강하고 규칙적이며 산소포화도는 98%이다. 체온은 36.5°C (97.7°F)이고 나머지 신체검사는 정상이다. 다음 중 이 환자의 상태와 관련된 소견은 무엇인가?

## 선택지

A. 식도 천공
B. 식도 화생
C. 식도 점막의 배출
D. 식도 열상

## 해설

정답은 D이다. 폭음 뒤 반복적인 헛구역질/구토로 위식도접합부 점막이 찢어지는 Mallory–Weiss 열상이 생겨 토혈할 수 있다. 압력 상승에 의한 점막 열상이며 식도 전층 천공(Boerhaave)이나 만성 화생과 구별한다. 기립성 혈압 감소가 있어 출혈·탈수의 중증도 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복 구토 해설의 무의미한 반복 문장과 병명 오기를 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001349
