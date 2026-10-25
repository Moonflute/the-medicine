---
type: qbank
schema_version: 1
id: medqa-us-validation-000428
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f32e713ad61f5384fefeab2345aaed3a25f6f75fc19c1f5e86132440f7a4e11d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "대퇴동맥 가성동맥류"
  - "혈관중재술 합병증"
  - "박동성 종괴"
  - "Femoral artery pseudoaneurysm"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwgOyEsSDrj5nrp6XrpZggKFBzZXVkb2FuZXVyeXNtKS5tZA
question_type: diagnosis
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

56세 남성이 왼쪽 서혜부 통증으로 진료를 받으러 왔다. 한 달 전 심근경색으로 입원해 좌전하행동맥에 스텐트 2개를 삽입받았다. 왼쪽 허벅지에서 서혜인대 아래 3 cm 크기의 압통이 있는 박동성 종괴와 그 위 피부의 경미한 발적이 보이고 종괴를 청진하면 큰 잡음이 들린다. 가장 가능성 높은 진단은?

## 선택지

A. 대퇴동맥 박리
B. 대퇴동맥 가성동맥류
C. 대퇴동맥 혈전증
D. 대퇴부 농양

## 해설

대퇴동맥 접근 후 생긴 압통성 박동 종괴와 잡음은 가성동맥류(B)를 시사한다. 동맥 천자 부위로 새어 나온 혈액이 주변 조직에 둘러싸여 동맥과 통하는 주머니를 이루는 상태이다. 정상 동맥벽의 모든 층이 늘어난 진성 동맥류와 다르며, 도플러 초음파로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 도관 후 가성동맥류 B의 혈관벽 밖 누출·포획 기전을 명확히 함.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000428
