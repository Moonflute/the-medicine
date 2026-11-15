---
type: qbank
schema_version: 1
id: medqa-us-train-005146
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9829d97bf57ea544c5ac5eeb04221110bb1ba1875fd93e1b6b5cec82614f4aea
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "근위축성 측삭경화증"
  - "상위 운동뉴런"
  - "하위 운동뉴런"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qt7zsnITstpXshLEg7Lih7IKtIOqyve2ZlOymnSAoQW15b3Ryb3BoaWMgbGF0ZXJhbCBzY2xlcm9zaXMpLm1k
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

54세 환자가 수개월에 걸쳐 말하기와 삼키기가 어려워졌다. 혀 위축과 근섬유다발수축이 있고 팔다리는 약해지면서 반사가 항진됐다. 감각은 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 중증근무력증
B. 근위축성 측삭경화증
C. 척수공동증
D. 만성 염증성 탈수초 다발신경병증

## 해설

근위축과 근섬유다발수축은 하위운동신경원, 반사항진은 상위운동신경원 이상을 시사한다. 감각이 보존된 채 두 소견이 진행성으로 함께 나타나면 근위축성 측삭경화증을 의심한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 번역에서 생략된 심부건반사3+를 복원하여 ALS의 상위·하위 운동뉴런 근거를 모두 명확히 했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005146
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11235832/
