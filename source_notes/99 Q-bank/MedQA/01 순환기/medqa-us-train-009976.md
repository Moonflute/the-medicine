---
type: qbank
schema_version: 1
id: medqa-us-train-009976
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b781bde04202742bc85ba9cb60f36686da6271e9d1e6d977912a38da4bc964f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "폐색전증"
  - "심부정맥혈전증"
  - "엉덩정맥"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: mechanism
difficulty: standard
answer: B
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

55세 여성이 1시간 전 시작된 흉통과 피가 섞인 가래를 동반한 기침으로 남편과 함께 응급실에 내원했다. 이틀 전 중국 여행에서 돌아왔고 35년 동안 매일 담배 한 갑을 피웠다. 유일한 가정 약물은 폐경 후 홍조를 위한 경구 호르몬 대체요법이다. 맥박 분당 123회, 혈압 91/55 mmHg이며 경정맥이 팽창되어 있다. 심전도에서 동성 빈맥, 우각차단, V5~V6 유도의 T파 역전이 보인다. 적절한 생명구조 조치에도 사망했다. 부검에서 오른쪽 폐동맥에 크고 급성인 혈전이 보였다. 이 혈전의 가장 가능성 높은 기원은?

## 선택지

A. 뒤정강정맥
B. 엉덩정맥
C. 쇄골하정맥
D. 신정맥

## 해설


폐동맥 혈전은 주로 심부정맥 혈전이 이동한 것이며, 가장 흔한 원천은 골반·대퇴부의 큰 정맥이다. 엉덩정맥은 골반 깊은 정맥으로, 대량 혈전이 형성되어 폐동맥으로 이동하기에 가장 가능성이 높다. 따라서 정답은 B이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 치명적 폐색전의 큰 혈전 원천으로 선택지 중 근위부 심부정맥인 엉덩정맥 B가 가장 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009976
