---
type: qbank
schema_version: 1
id: medqa-us-train-006732
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c21913aaabca68068890a7364f1ffe815f9da772fe9b9f31e189aa2471f7c695
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "금연"
  - "니코틴 의존"
  - "복합 금연치료"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: prevention
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남성이 하루 한 갑씩 흡연한다. 금연을 여러 번 시도했지만 니코틴 갈망 때문에 재흡연했다. 이번에는 약도 써 보고 싶다고 한다. 복용 약이 없고 콩팥 기능은 정상이다. 적절한 금연 계획은?

## 선택지

A. 금연 날짜만 정하게 하고 따로 지원하지 않는다
B. 바레니클린을 고려하고 행동상담과 추적을 함께 제공한다
C. 금단 증상이 생기면 한두 개비씩 피우도록 권한다
D. 금연 의지가 확인될 때까지 약물과 상담을 모두 미룬다

## 해설


국내 금연 지침에서 바레니클린은 우선 고려할 수 있는 약제다. 행동상담과 추적을 함께 제공하면 금단과 재흡연에 대응할 수 있다. 환자 선호, 병력과 내약성에 따라 니코틴 대체요법 등 다른 방법도 선택할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 제시선택지 중 약물+상담 병용 B가 단독보다 금연성공에 유리. 다른 미제시 약물과의 절대우열은 판정하지 않음.
- https://www.cdc.gov/tobacco/about/how-to-quit.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006732
- https://doi.org/10.3346/jkms.2025.40.e299
