---
type: qbank
schema_version: 1
id: medqa-us-validation-000875
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:cd41e18216ddbb5bc32f7654b2334d6e9904014dca5f73d54952a5029d8c8ad8
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "황색포도상구균 식중독"
  - "이미 형성된 독소"
  - "급성 구토"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

26세 남성이 델리에서 샌드위치와 코울슬로를 먹은 한 시간 후 복통, 메스꺼움, 구토가 시작되어 응급실에 왔다. 체온 37.6°C, 활력징후는 안정적이고 복부에 경미한 전반적 압통이 있다. 가장 가능성 높은 원인균은?

## 선택지

A. 이질균
B. 황색포도상구균
C. 장독소성 대장균
D. 바실루스 세레우스

## 해설


샌드위치와 코울슬로는 흔히 황색포도상구균이 만든 장내 독소에 오염될 수 있다. 급성 구토와 경미한 복통이 1시간 내에 나타나는 것은 전형적인 황색포도상구균 식중독이다. 따라서 가장 가능성 높은 원인균은 황색포도상구균이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000875 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 샌드위치/coleslaw 섭취 후1시간 급성 구토는 사전형성 staph toxin B. 다른 지연 감염성 원인 및 B.cereus대표 노출과 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000875
