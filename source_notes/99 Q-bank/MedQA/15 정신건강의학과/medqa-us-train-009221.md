---
type: qbank
schema_version: 1
id: medqa-us-train-009221
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e1872a25c5a67c1d7789fce8a9d2fbef2132d683bd1b6c59036b55b8940c842
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "tricyclic antidepressant"
  - "삼환계 항우울제"
  - "anticholinergic effects"
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

68세 남자가 1주일 동안 지속된 요폐로 내원했다. 우울증 치료를 위해 새 약을 처방받은 직후 증상이 서서히 시작되었다고 한다. 호전될까 하여 수분 섭취를 늘렸지만 효과가 없었다. 변비와 입마름도 있다. 6개월 전 주요우울장애를 진단받았고 흡연, 음주, 기분전환용 약물 사용은 부인한다. 열은 없고 활력징후는 정상이며 신체검사도 특이사항이 없다. 소변검사는 정상이다. 우울증에 어떤 약물을 처방받았을 가능성이 가장 큰가?

## 선택지

A. 페넬진
B. 미르타자핀
C. 아미트립틸린
D. 벤라팍신

## 해설


삼환계 항우울제는 강한 항콜린성 부작용을 일으켜 요폐, 변비, 구강 건조를 유발한다. 환자는 새 약 복용 직후 이러한 증상이 나타났으며, 소변 검사는 정상이라 요폐는 기능성이다. 따라서 처방받은 약물은 아미트립틸린이 가장 가능성이 높다. (다른 선택지인 페넬진은 항콜린성 효과가 거의 없으며, 우울증 치료에 쓰이지 않는다.)

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009221
