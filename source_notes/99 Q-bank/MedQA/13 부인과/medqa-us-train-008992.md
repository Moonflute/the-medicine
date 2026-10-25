---
type: qbank
schema_version: 1
id: medqa-us-train-008992
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b4d7e55a406c98004210e365ef9eddf05ecf0443e49042e595f84e407df54ebb
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "LSIL"
  - "cervical intraepithelial neoplasia"
  - "repeat Pap smear"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA
difficulty: standard
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
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 정기 건강유지검사를 위해 내원했다. 건강하고 월경은 28일 간격으로 규칙적이며 3~5일 지속되고 양은 정상이다. 가끔 통증이 있다. 3년 전 클라미디아 자궁경부염으로 진단받아 독시사이클린 치료를 받았다. 18세 이후 여러 파트너와 성생활을 했고 피임에는 콘돔을 규칙적으로 사용한다. 주말에 맥주 2~3잔을 마시고 하루 반 갑을 피운다. 활력징후와 골반검사는 정상이다. 자궁경부 세포검사에서 저등급 편평상피내 병변(LSIL)이 보인다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 자궁경부내관 검체를 포함한 질확대경검사
B. 자궁경부내관 및 자궁내막 검체를 포함한 질확대경검사
C. 12개월 후 자궁경부 세포검사 반복
D. 3년 후 자궁경부 세포검사 반복

## 해설

25세 미만의 LSIL은 1년 후 세포검사로 추적한다(C). 2년 지속되는 저등급 이상이나 고등급 소견이 생기면 질확대경이 필요하다. 모든 연령의 LSIL이 같은 경로인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 24세 LSIL 12개월 세포검사 C 유지. 연령별 보존적 경로임을 명시.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7147428/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008992
