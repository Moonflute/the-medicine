---
type: qbank
schema_version: 1
id: medqa-us-train-003975
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:841f913f449a153b1eddf91315631886a8b09c6896fc6f939821272de06551ee
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상샘 수질암"
  - "다발성 내분비 종양 2형"
  - "RET 원종양유전자"
  - "갈색세포종"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
question_type: 임상증례 객관식
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

45세 남자가 1년 동안 악화된 연하곤란 평가를 위해 내원했다. 쉰 목소리와 전신의 뼈·근육·관절 통증도 호소한다. 지난 6개월 동안 변비가 진행되었고 신장결석이 두 차례 발생했다. 욱신거리는 두통, 발한, 심계항진이 반복되기도 한다. 흡연과 음주는 하지 않고 약물도 복용하지 않는다. 활력징후, 신체검사, 심전도는 정상이다. 혈청 칼슘 12 mg/dL, 인 2 mg/dL, 알칼리성 인산분해효소 100 U/L, 칼시토닌 11 pg/mL(정상 <8.8)이다. 경부 초음파에서 경계가 불규칙하고 미세석회화가 있는 저에코성 갑상샘 병변이 보인다. 이 환자 상태의 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. NF1 유전자 돌연변이
B. 전리 방사선 노출
C. VHL 유전자 결실
D. RET 원종양유전자 발현 이상

## 해설


갑상선 저에코성 미세석회화 병변은 수질암을 시사하고, 고칼슘·저인산혈증, 두통·발한·심계항진은 부갑상선 기능항진과 갈색세포종을 동반한 MEN2A와 일치한다. MEN2A는 RET 원종양유전자 활성화 변이로 발생한다. 따라서 가장 가능성 높은 기저 원인은 RET 원종양유전자 발현 이상이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수질암+부갑상샘항진/갈색세포종 의심의 MEN2는 RET 활성화 D.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003975
