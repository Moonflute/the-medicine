---
type: qbank
schema_version: 1
id: medqa-us-test-000424
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:822a98244c6174257a08d5bf5b9f01f2cb898274884280eed1c9e158832448e7
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "아밀로이드증"
  - "단백뇨"
  - "만성 염증성 장질환"
related_disease_slugs:
  - MDUg7Iug7J6lL-uLqOuwseuHqC5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sl7zspp3shLEg7J6l7KeI7ZmYIChJQkQpIChJbmZsYW1tYXRvcnkgQm93ZWwgRGlzZWFzZSkubWQ
question_type: mechanism
difficulty: complex
answer: D
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

27세 여성이 급성 혈성 설사로 응급실에 왔다. 평생 심한 복통이 있었고 가끔 혈성 설사를 했다. 최근 체중이 7파운드 감소했으며 지난 2일 동안 전반적으로 몸이 좋지 않았다. 전신 발작 병력이 있고 가장 최근 발작은 5일 전이었다. 한 달 전 농가진 치료를 받았다. 가끔 코카인을 사용하고 폭음한다고 한다. 체온 98.7°F(37.1°C), 혈압 107/58 mmHg, 맥박 127회/분, 호흡 16회/분, 산소포화도 99%였다. 복부 전반에 압통이 있고 대변 잠혈검사는 양성이었다. 혈색소 9 g/dL, 헤마토크릿 30%, 백혈구 9,400/mm³, 혈소판 199,000/mm³, 혈청 나트륨 139 mEq/L, 염소 101 mEq/L, 칼륨 4.9 mEq/L, 중탄산염 25 mEq/L, BUN 37 mg/dL, 포도당 99 mg/dL, 크레아티닌 1.8 mg/dL, AST 62 U/L, ALT 80 U/L, 혈중알코올농도 0.15 g/dL였다. 소변에서 단백질, 코카인, 마리화나가 양성이었다. 이 검사 결과를 가장 잘 설명하는 것은?

## 선택지

A. 알코올 유발 간손상
B. 연쇄상구균 감염에 대한 면역반응
C. 장 IgA 결핍
D. 단백질 침착

## 해설

오랜 반복성 혈성 설사와 복통은 만성 염증성 장질환을 고려하게 한다. 만성 염증에 이차적인 AA 아밀로이드가 신장에 침착하면 단백뇨와 신기능 저하가 생길 수 있어 보기 중 D, 단백질 침착이 출제 의도에 합당하다. 혈청 알부민은 제시되지 않았으므로 감소했다고 단정하지 않는다. 실제로는 탈수, 약물/코카인 관련 손상, 감염후 사구체질환 등도 평가하며 이 정보만으로 아밀로이드증을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. 측정되지 않은 저알부민을 가정한 설명을 제거하고 만성 장 염증 가능성과 AA 아밀로이드 신장 침착의 추론 한계 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000424
