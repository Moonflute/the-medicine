---
type: qbank
schema_version: 1
id: medqa-us-train-001508
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e6000831e4d62bcff4d95ccba8a707af7d7cba29f62455094971c494752bdd7b
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Friedreich ataxia"
  - "GAA repeat expansion"
  - "spinocerebellar ataxia"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: D
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

11세 남아가 걷기 어려워 어머니와 함께 소아과에 내원했다. 약 1년 전까지 정상적으로 걷다가 다리에 힘이 빠지기 시작했다. 발이 전보다 불안정하고 집에서 두 번 넘어졌다. 그 전에는 걷는 데 문제가 없었고 학교 축구팀에서 활동적이었다. 다른 병력이나 가족력은 없다. 신체검사에서 말이 약간 어눌하고, 넓은 기반 보행과 양쪽 하지의 대칭적 쇠약 및 감각 저하가 있다. 그림 A와 B의 소견도 보인다. 다음 중 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 그람음성 막대균 감염
B. X염색체의 삼핵산(CGG) 반복 확장
C. 19번 염색체의 삼핵산(CTG) 반복 확장
D. 9번 염색체의 삼핵산(GAA) 반복 확장

## 해설

소아기에 진행하는 보행실조·구음장애와 대칭적 하지 위약·감각저하의 조합은 프리드라이히 운동실조증을 시사한다. 가장 흔한 원인은 9번 염색체 FXN 유전자의 GAA 반복 확장(D)이다. 상염색체열성 유전이므로 가족력이 없어도 가능하다. 문항은 신체진찰 사진을 언급했을 뿐 MRI를 제시하지 않았으며, 보지 못한 영상의 뇌 변화를 근거로 삼지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 신체 사진 A·B를 MRI 소견으로 만들어낸 설명을 제거한다. 소아 진행성 실조·구음장애·감각저하와 제시된 유전 선지상 Friedreich D는 본문으로 판단 가능하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001508
