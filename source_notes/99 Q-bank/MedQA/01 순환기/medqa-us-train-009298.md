---
type: qbank
schema_version: 1
id: medqa-us-train-009298
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:06d13b98c3a0be110dec80e03b543e7b64d553dbe681b0e82afd34894922ea28
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "cocaine toxicity"
  - "코카인 독성"
  - "pulmonary hypertension"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqzoO2YiOyVlSAoUHVsbW9uYXJ5IEh5cGVydGVuc2lvbikubWQ
question_type: diagnosis
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EdWxveGV0aW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남자가 급성 호흡곤란, 흉통, 실신으로 입원했다. 17세 때 감염성 심내막염을 앓았고 그 전 정맥주사 약물을 남용했다. 가벼운 운동 시 호흡곤란 병력이 있다. 현재 우울증으로 둘록세틴만 복용한다. 혈압 160/100 mmHg, 심박수 103회/분, 호흡수 21회/분, 체온 38.1℃, 실내 공기 산소포화도 91%이다. 호흡곤란, 안절부절못함, 혼란, 불안이 있고 동공은 양측 산동되었지만 빛에 반응한다. 피부는 창백하고 말단 청색증이 있으나 주사 흔적은 없다. 양측 경정맥 팽창과 양측 폐 하엽 수포음이 있다. 심장 청진에서 S3가 감소하고 S2가 삼첨판 및 폐동맥 부위에서 크게 들리며 삼첨판 부위에 2/6등급 범수축기 잡음이 있다. 간은 늑골연 아래 3 cm에서 만져진다. 혈색소 감소 외 전혈구검사는 정상이고 신속 HIV 검사는 음성이다. 이 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 급성 바이러스성 간염
B. 둘록세틴 과량복용
C. 코카인 독성
D. 관상동맥 죽상경화증

## 해설

급성 흉통과 호흡곤란에 고혈압, 빈맥, 산동, 초조와 발열이 동반되어 교감신경 항진성 독성 상태를 의심하게 한다. 제시된 선택지 중 코카인 독성(C)이 가장 부합하며 심근허혈, 부정맥과 급성 심부전을 유발할 수 있다. 실제 노출력과 독성·심장 평가로 확인해야 하며, 제시된 소견만으로 급성 폐동맥고혈압이나 새 심실비대를 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 코카인 독성 의심 C를 폐고혈압·심실비대 확진으로 과장한 해설을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009298
