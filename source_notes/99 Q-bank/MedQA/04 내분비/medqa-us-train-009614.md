---
type: qbank
schema_version: 1
id: medqa-us-train-009614
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:be48050feb0f2bbaa18dbe11ffb88947829753b9637f602ad22103b3b2390bed
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "pheochromocytoma"
  - "갈색세포종"
  - "alpha blockade before beta blockade"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcmFsYXppbmUubWQ
---

# MedQA US 임상문제

## 문제

50세 남자가 박동성 두통, 심계항진, 흉통, 불안으로 응급실에 왔다. 심박수 90회/분, 혈압 211/161 mmHg이며 안저검사에서 유두부종이 있다. 소변검사에서 단백과 적혈구가 증가했고 혈장 메타네프린이 상승되어 있다. 기저 질환의 확정 치료에서 첫 단계는 무엇인가?

## 선택지

A. 베타차단제 후 알파차단제
B. 알파차단제 후 베타차단제
C. 응급 수술
D. 하이드랄라진

## 해설


정답 B. 갈색세포종에서는 먼저 α-adrenergic 차단으로 혈관수축을 조절한 뒤 빈맥/부정맥 등 필요 시 β차단을 추가한다. β차단을 먼저 하면 unopposed α작용으로 고혈압 위기가 악화될 수 있다. 이 환자의 유두부종·심한 혈압상승은 즉각적인 감시하 응급치료가 필요한 상황이며 안정화 후 충분한 수술 전 준비를 거쳐 종양을 제거한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009614 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: α차단 후 필요시 β차단 B는 unopposed α 위기 예방 원칙; 현재 고혈압응급 안정화와 수술전 준비 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12819074/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009614
