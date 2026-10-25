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

이전에 건강했던 37세 남자가 8주 동안 간헐적으로 발생한 작열성 심와부 통증을 평가하기 위해 내원했다. 이 기간 동안 식후 더부룩하고 불편한 느낌도 있었다. 체중 감소나 배변 습관 변화는 없다. 심각한 질환의 개인력이나 가족력은 없고 복용 약물도 없다. 담배는 피우지 않으며 일주일에 맥주 1~3잔을 마신다. 활력징후는 정상이다. 복부검사에서 방어와 반발통 없이 경미한 심와부 압통이 있고 장음은 정상이다. 나머지 진찰은 정상이다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 요소 호기검사
B. 헬리코박터 파일로리 제균요법
C. 헬리코박터 파일로리 혈청 IgG
D. 양성자펌프억제제

## 해설

경고 소견이 없는 젊은 환자의 미조사 소화불량에서는 A의 요소호기검사로 활동성 H. pylori 감염을 확인한다. 세균의 요소분해효소가 표지 요소를 분해하여 생성한 CO2를 측정하는 검사이며, 위산 분비량을 측정하는 검사가 아니다. 양성이면 제균 치료를 시행한다. 혈청 IgG 검사와 달리 현재 감염의 확인과 제균 판정에 활용할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 요소호기 A는위산분비검사가아닌H.pylori urease검사라는기전교정.
- https://gi.org/guideline/management-of-dyspepsia/
- https://gi.org/wp-content/uploads/2025/01/ACG-Hpylori-Guidelines-Highlights-2024-FINAL.pdf.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007129
