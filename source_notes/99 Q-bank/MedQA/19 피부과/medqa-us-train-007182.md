---
type: qbank
schema_version: 1
id: medqa-us-train-007182
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3bd164ec818a1472ab7e9ee86b170c466e1395b0b60fe6c00890b3f871e3bf33
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "편평세포암"
  - "장기이식 후 면역억제"
  - "각질 진주"
  - "피부암"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-2OuO2PiSDshLjtj6zslZQgKFNxdWFtb3VzIENlbGwgQ2FyY2lub21hKS5tZA
difficulty: standard
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

69세 남자가 얼굴에 점점 커지는 비늘성 분홍색 판으로 피부과에 내원했다. 5주 동안 있었고 사진이 제시되어 있다. 신체검사에서 쉽게 출혈하는 부스러지기 쉬운 병변이 보인다. 제1형 당뇨병으로 인한 말기 신장질환이 있어 5년 전 신장이식을 받았다. 흔한 바이러스성 사마귀 병력도 있지만 몇 년 동안 발생하지 않았다. 피부 생검에서 전층 각질형성세포 이형성과 각질 진주가 보인다. 이 환자의 상태에 대한 주요 위험인자는 무엇인가?

## 선택지

A. 비정형 모반
B. 면역억제
C. C형 간염 바이러스
D. 사람면역결핍바이러스

## 해설

이식 후 장기 면역억제는 피부 편평세포암 위험을 높여 B가 가장 적절하다. 전층 각질형성세포 이형성과 각화는 편평세포 종양을 지지한다. 전층 이형성은 in situ SCC에서 나타날 수 있고 침윤 여부는 기저막·진피 침범으로 판단하므로 이 짧은 병리 문장만으로 전구 병변 또는 침윤 깊이를 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 이식 후 면역억제 B는 맞지만 전층 이형성·keratin pearl을 단순 전구 병변이라고 부른 설명을 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007182
