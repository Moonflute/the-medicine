---
type: qbank
schema_version: 1
id: medqa-us-train-001306
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fad9176a9d82f3f545d0696da681e25da25e247af563eccbf90d803abf051884
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "intrauterine fetal demise"
  - "stillbirth"
  - "Intrauterine fetal demise"
question_type: management
related_disease_slugs: []
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
related_drug_slugs:
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 26주인 36세 초임부가 지난 2일 동안 태동이 없다고 호소하며 내원했다. 14주 전 초음파로 임신이 확인되었다. 질 출혈이나 분비물은 없다. 인슐린으로 조절되는 제1형 당뇨병 병력이 있다. 활력징후는 모두 정상 범위이다. 골반검사에서 자궁경부는 정중선에 위치한 길이 2 cm의 부드러운 상태이고 자궁경부구는 3 cm 열려 있으며 자궁은 임신 24주 크기이다. 질식 초음파에서 심장 활동이 없는 태아가 보인다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 제왕절개를 시행한다
B. 옥시토신 투여를 계획한다
C. 황산마그네슘을 투여한다
D. 확장 및 소파술을 시행한다

## 해설

임신 주수는 26주이며 자궁 크기만 24주에 해당한다. 태아 사망 확인 후 산모 상태와 선호를 고려해 분만을 계획하며, 선택지에서는 옥시토신 유도(B)가 가능하다. 28주 전에는 미소프로스톨이 효율적인 유도 방법이지만 고용량 옥시토신도 허용되는 대안이다. 단순히 경부 3 cm라는 이유만으로 옥시토신이 유일한 치료인 것은 아니며 태아 적응증의 제왕절개는 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 26주를 24주로 바꾼 해설 수정 및 유도분만 선택의 범위 명시.
- https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2020/03/management-of-stillbirth

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001306
