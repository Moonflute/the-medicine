---
type: qbank
schema_version: 1
id: medqa-us-test-000472
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7ea6e9f323efa530ad217a6959404124273a7d7825f3f309ee2870c09a8365dd
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "리델 갑상샘염"
  - "갑상샘저하증"
  - "섬유화 갑상샘염"
  - "Riedel thyroiditis"
related_disease_slugs:
  - MDQg64K067aE67mEL-umrOuNuCDqsJHsg4Hsg5jsl7wgKFJpZWRlbCBUaHlyb2lkaXRpcykubWQ
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 여성이 2주 동안 삼키기 매우 어려운 앞목의 커진 종괴로 병원에 왔다. 6주 동안 변비와 전반적인 피로가 있었고 월경량이 많으며 집에서 극심한 추위를 자주 느꼈다. 천식과 봄철 알레르기는 잘 조절되고 있다. 진찰에서 갑상샘은 돌처럼 단단하고 압통이 있으며 비대칭적으로 커져 있었고 삼킬 때 통증도 있었다. 혈청 T4 4.4 μg/dL, TSH 6.3 mU/L였고 방사성핵종 갑상샘 스캔에서 결절의 방사성 요오드 섭취가 낮았다. 다음 중 가장 가능성 높은 병리 소견은?

## 선택지

A. 역형성암
B. 수질암
C. 리델 갑상샘염
D. 무통성 갑상샘염

## 해설

돌처럼 단단한 갑상샘 종대와 압박에 의한 연하곤란, 갑상샘기능저하 소견은 보기 중 리델 갑상샘염(C)에 합당하다. 핵심 병리는 치밀한 섬유화가 갑상샘 실질을 대체하고 주변 조직으로 뻗어갈 수 있다는 점이다. 압통이나 낮은 방사성 요오드 섭취만으로 특이적으로 확진하지 않으며, 단단한 종괴는 악성질환과의 감별도 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 리델 갑상샘염의 침윤성 섬유화/압박을 설명하고 압통·저섭취가 특이소견이라는 오해 완화.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000472
