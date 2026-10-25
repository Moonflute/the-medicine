---
type: qbank
schema_version: 1
id: medqa-us-train-003574
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f262f2cd1251d60c6da43da156f7c66cf5f879d7dabdad131c894f209045c33f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "coronary steal phenomenon"
  - "stable angina"
  - "adenosine stress testing"
  - "coronary artery stenosis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yViOyglSDtmJHsi6zspp0gKFN0YWJsZSBBbmdpbmEpLm1k
question_type: mechanism
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQWRlbm9zaW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 운동 시 2개월간 반복되는 흉골 뒤 통증과 압박감으로 내원했다. 트로포닌은 정상이었고 안정 시 심전도는 우각차단과 드문 심실조기수축을 보였다. 아데노신 부하검사 중 증상이 재현되고 V2~V4에서 1 mm를 초과하는 새로운 ST 하강이 나타났다. 다음 중 심전도 변화의 가장 중요한 기전은?

## 선택지

A. 협착된 관상동맥에서 혈류가 다른 곳으로 전환됨
B. 일시적인 방실결절 차단
C. 좌심실 전부하 감소
D. 심근 산소 요구량 증가

## 해설


아데노신은 관상동맥을 확장시키지만, 협착된 부위에서는 혈류가 다른 혈관으로 전환(‘steal’)되어 심근 허혈을 유발한다. 이때 ST 하강이 나타나는 주요 기전은 협착된 관상동맥에서 혈류가 다른 곳으로 전환되는 것이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Adenosine은 정상관상동맥을 확장하여 협착 영역의 상대적 관류저하/steal A를 드러냄; 산소요구 증가가 주기전 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003574
