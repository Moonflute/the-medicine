---
type: qbank
schema_version: 1
id: medqa-us-train-004480
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b20f2f6ab819d847753a1c59692440e16859e28cb654f61785a333931603ba6
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "비후성 폐쇄성 심근병증"
  - "승모판 수축기 전방운동"
  - "운동 중 실신"
  - "mitral valve prolapse"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDsnbztg4jspp0gKE1pdHJhbCBWYWx2ZSBQcm9sYXBzZSkubWQ
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

21세 남성이 축구 중 실신했다. 좌측 흉골연에 수축기 박출 잡음이 들리고, 서거나 발살바 수기를 하면 잡음이 더 커진다. 동적 좌심실 유출로 폐쇄가 의심된다. 심초음파에서 예상되는 소견은?

## 선택지

A. 비대칭 중격 비후와 승모판의 수축기 전방운동
B. 좌심실의 대칭 확장과 전반적 수축 저하
C. 석회화 대동맥판과 고정된 판막 협착
D. 심낭삼출과 우심실 이완기 허탈

## 해설


전부하를 줄이는 동작에서 잡음이 커지는 것은 비후성 심근병증의 동적 폐쇄에 맞는다. 비대해진 중격 쪽으로 승모판이 수축기에 이동하면 유출로가 더 좁아질 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 기립/Valsalva시증가하는 잡음·운동성실신의 HOCM은 systolic anterior mitral motion A.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004480
- AHA/ACC 비후성 심근병증 진료지침(2024): https://professional.heart.org/en/-/media/PHD-Files/2/Science-News/2/2024/2024-Guideline-for-HCM-Slide-Set.pdf
