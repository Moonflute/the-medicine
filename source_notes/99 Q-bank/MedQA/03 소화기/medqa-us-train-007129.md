---
type: qbank
schema_version: 1
id: medqa-us-train-007129
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f392da437d12a21e467fc85dc01785610cbb8dc06193c697ba01f4e41ffe47b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "소화불량"
  - "헬리코박터 파일로리"
  - "요소 호기검사"
  - "Helicobacter pylori infection"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9ILnB5bG9yaSDqsJDsl7wgKEgucHlsb3JpIEluZmVjdGlvbikubWQ
question_type: investigation
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 남성이 헬리코박터 파일로리 제균 치료를 마치고 6주 뒤 외래에 왔다. 항생제나 비스무트는 치료 이후 복용하지 않았고, PPI도 2주 넘게 복용하지 않았다. 별도로 추적 내시경이 필요한 소견은 없다. 제균 성공을 비침습적으로 확인할 검사는?

## 선택지

A. 요소호기검사
B. 혈청 헬리코박터 IgG 검사
C. 공복 혈청 가스트린 검사
D. 분변잠혈검사

## 해설

요소호기검사는 현재 헬리코박터 감염을 확인할 수 있어 제균 확인에 쓴다. 항생제·비스무트 종료 후 적어도 4주, PPI 중단 후 적어도 2주를 두어 위음성 가능성을 줄인다. 혈청 IgG는 제균된 뒤에도 남을 수 있어 제균 성공 확인에 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 요소호기 A는위산분비검사가아닌H.pylori urease검사라는기전교정.
- https://gi.org/guideline/management-of-dyspepsia/
- https://gi.org/wp-content/uploads/2025/01/ACG-Hpylori-Guidelines-Highlights-2024-FINAL.pdf.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007129
- 대한상부위장관·헬리코박터학회, 2025 개정 지침: https://pmc.ncbi.nlm.nih.gov/articles/PMC13284574/
