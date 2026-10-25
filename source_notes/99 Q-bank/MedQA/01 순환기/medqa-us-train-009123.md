---
type: qbank
schema_version: 1
id: medqa-us-train-009123
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:141faf36b289b6a3250a382dc5d42fe8ab94ea0dc1c7912c92e441bde7970c9a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "unstable angina"
  - "불안정 협심증"
  - "acute coronary syndrome"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-u2iOyViOyglSDtmJHsi6zspp0gKFVuc3RhYmxlIEFuZ2luYSkubWQ
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDqtIDsg4Hrj5nrp6Ug7Kad7ZuE6rWwIChBQ1MpLm1k
question_type: diagnosis
difficulty: complex
answer: B
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

57세 남자가 3주간 지속된 흉통으로 일차의료기관에 내원했다. 두 층 이상의 계단을 오르거나 10분 이상 걸은 후 흉통이 발생한다. 증상은 휴식해도 평균 30분간 지속되지만 결국 소실된다. 비만이고 제2형 당뇨병이 있으며 25년간 하루 15~20개비를 흡연했다. 아버지는 52세에 심근경색으로 사망했다. 체온 36.7°C, 혈압 145/93 mmHg, 심박수 85회/분이며 신체검사는 정상이다. 다음 중 불안정 협심증에 부합하는 소견은 무엇인가?

## 선택지

A. 심전도에서 ST 분절 하강
B. 휴식해도 30분간 지속되는 증상
C. 청진에서 수포음
D. 청진에서 S3 심음

## 해설

휴식해도 약 30분 지속되는 흉통(B)은 안정 협심증보다 불안정한 허혈 증상을 우려하게 한다. 다만 지속시간 하나만으로 불안정 협심증을 확진하지는 않는다. 급성 관상동맥증후군 평가에서 ECG와 연속 트로포닌으로 심근경색 여부를 구별해야 하며, ST 하강도 허혈에서 나타날 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 휴식 후에도 지속되는 통증은 불안정 증상이지만 지속시간만으로 UA 확진하거나 NSTEMI를 배제하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009123
