---
type: qbank
schema_version: 1
id: medqa-us-train-005518
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8355491a65231635bddb151c587c0c4763d7ba5002064b195b4a48af143e80b7
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "독성쇼크증후군"
  - "비강 패킹"
  - "황색포도상구균 독소"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTmFmY2lsbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여자가 의식불명으로 발견되어 응급실에 왔다. 정맥주사 약물 사용자이며 2일 전 코뼈 골절로 코를 거즈로 패킹했다. 현재 혈압 90/48 mmHg, 맥박 150회/분, 발진과 팔의 주사 자국 및 수포가 있다. 다음 중 가장 적절한 처치는?

## 선택지

A. 나프실린
B. 노르에피네프린
C. 코 패킹 제거
D. 반코마이신

## 해설

비강 패킹과 쇼크·발진은 독성쇼크를 우려하게 하므로 가능한 원인인 패킹 제거(C)를 즉시 시행한다. 동시에 기도·순환 소생과 적절한 경험적 항균/독소억제 치료 및 배양이 필요하다. 패킹 제거만으로 쇼크 치료를 끝내거나 항생제·승압제 평가를 지연하는 뜻은 아니다. 자반·수포와 주사약물 병력은 다른 감염성 쇼크 원인도 감별하게 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 의심 TSS에서 패킹 제거 C를 확인하되 원인 제거가 소생/항생제보다 단독 우선이라는 해설 교정.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005518
