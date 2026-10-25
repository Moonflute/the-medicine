---
type: qbank
schema_version: 1
id: medqa-us-train-004060
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:83044070a9e2c47b087bb46d4203ba06ce420c749b21ccc722884ed2cc032f1c
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "칼슘 옥살산염 신장결석"
  - "크론병"
  - "장-신장 축"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
  - MDUg7Iug7J6lL-yalOuhnOqysOyEnSAoVXJvbGl0aGlhc2lzKS5tZA
question_type: 임상증례 객관식
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 남자가 심한 발작성 허리 통증으로 응급실에 왔다. 오늘 아침 갑자기 시작되었고 통증은 10점 만점에 9점이며 왼쪽 서혜부로 방사된다. 앞서 소변에 피가 섞인 것을 보았으나 배뇨통이나 비정상 요도 분비물은 없다. 크론병, 통풍, 인슐린 의존성 당뇨병 병력이 있고 인슐린, 알로푸리놀, 설파살라진을 복용한다. 여러 여성과 성관계를 하며 콘돔은 일관되게 사용하지 않는다. 주말마다 맥주 4캔을 마시고 담배나 다른 기호용 약물은 사용하지 않는다. 체온 37.2°C, 혈압 121/73 mmHg, 맥박 89회/분, 호흡수 14회/분, 실내 공기 산소포화도 94%이다. 복부와 골반 조영증강 CT에서 수신증 없이 왼쪽 요관에 5mm 결석이 보인다. 소변검사와 현미경검사에서 혈뇨와 봉투 모양 결정을 보인다. 이 환자의 급성 증상 발생에 가장 기여한 요인은 무엇인가?

## 선택지

A. 크론병
B. 당뇨병
C. 통풍
D. 약물 효과

## 해설

지방흡수장애에서 지방산이 장내 Ca와 결합하면 oxalate와 결합할 Ca가 줄어 oxalate 흡수·요배설이 증가한다. 이 enteric hyperoxaluria가 Crohn A와 calcium oxalate 결석을 연결하며 봉투형 결정이 부합한다. 요중 Ca가 반드시 함께 증가하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Crohn 장성고옥살산뇨에서 소변Ca도 항상 증가한다고 한 기전 오류.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004060
