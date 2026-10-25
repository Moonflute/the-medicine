---
type: qbank
schema_version: 1
id: medqa-us-train-006826
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b3de9da2cd22eac7748728c9c242d1dafaa99a11ac4547b59437c9b2be49dfe2
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급성 세뇨관간질신염"
  - "양성자펌프억제제 유발"
  - "호산구뇨"
related_disease_slugs:
  - MDUg7Iug7J6lL-yEuOq0gOyCrOydtOyniCDsvantjKXsl7wgKFR1YnVsb2ludGVyc3RpdGlhbCBOZXBocml0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowMyDshoztmZTquLAvUmFuaXRpZGluZS5tZA
curation_status: "revised"
curation_reason: "호산구성 요로염 오역과 호산구뇨를 흔한 확진 소견으로 과장한 해설 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

57세 남성이 전날 밤부터 시작된 양쪽 옆구리 통증과 혈뇨로 응급실에 내원했다. 지난 2일 동안 권태감, 근육통 및 전신 가려운 발진도 있었다. 라니티딘에 반응하지 않던 위식도역류가 2개월 전부터 판토프라졸을 복용한 후 호전되었다. 허리 통증으로 가끔 아세트아미노펜을 복용한다. 활력징후는 정상이고 전신에 미만성 반구진 발진이 있다. 혈색소 13 g/dL, 백혈구 7,800/mm³, Na+ 140, Cl− 105, K+ 4.6, HCO3− 25 mEq/L, 포도당 102 mg/dL, 크레아티닌 4.1 mg/dL이다. 신장 초음파는 정상이다. 다음 중 관찰될 가능성이 가장 높은 소견은?

## 선택지

A. 소변 호산구 증가
B. CT에서 유두 석회화
C. 명시야 현미경에서 요결정
D. 반월체 모양 사구체외 세포 증식

## 해설

Pantoprazole 시작 뒤 신기능 악화·발진은 약물 유발 급성 간질신염을 의심하게 한다. 선택지 중 호산구뇨가 연관될 수 있는 소견이지만 실제 민감도와 특이도는 낮고 PPI 관련 AIN에서 반드시 나타나지도 않는다. 소변 호산구만으로 진단하거나 음성이라고 배제하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006826

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 호산구성 요로염 오역과 호산구뇨를 흔한 확진 소견으로 과장한 해설 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pubmed.ncbi.nlm.nih.gov/24052222/
