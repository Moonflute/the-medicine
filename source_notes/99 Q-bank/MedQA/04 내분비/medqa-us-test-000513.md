---
type: qbank
schema_version: 1
id: medqa-us-test-000513
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e33e4a6cea76236b28888da1f4a1832dbf033ff09789202bbaa0de562d8285dd
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "임신 중 갑상샘항진증"
  - "메티마졸"
  - "프로필티오우라실"
  - "Graves disease"
related_disease_slugs:
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9Qcm9weWx0aGlvdXJhY2lsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 여성이 임신 가능성에 대해 상담하기 위해 일차 진료를 받으러 왔다. 4주마다 4일 정도 경미하거나 중등도의 출혈을 하는 규칙적인 월경이 있었으나 마지막 월경을 2주째 하지 않았다. 집에서 시행한 임신검사는 양성이었다. 6년 전부터 갑상샘항진증이 있어 매일 메티마졸로 잘 조절하고 있다. 현재 증상은 없고 불편감이나 걱정도 없다. 혈액검사로 임신을 확인했으며 TSH는 2.0 μU/mL였다. 다음 중 가장 적절한 조치는?

## 선택지

A. 메티마졸을 계속한다
B. 메티마졸을 중단하고 프로필티오우라실을 시작한다
C. 글루코코르티코이드를 추가한다
D. 방사성 요오드 치료를 의뢰한다

## 해설

정답은 B이다. 임신 초기 항갑상샘약 치료가 계속 필요하다면 methimazole 관련 태아 기형 위험을 줄이기 위해 PTU를 선호한다. PTU 역시 태아 위험과 간독성이 있어 무위험 약이 아니며 최소 유효 용량과 반복 갑상샘기능 감시가 필요하다. 임신 중기 이후의 약제 선택은 위험과 재발 가능성을 다시 평가한다. 방사성 요오드는 임신 중 금기이다. 장기간 잘 조절된 일부 저위험 환자에서는 전문의 감독 아래 약 중단 가능성도 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 초기 임신 PTU의 상대적 선호를 명확히 하고 모든 임신 기간 무위험이라는 인상을 제거.
- https://www.thyroid.org/hyperthyroidism-in-pregnancy/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000513
