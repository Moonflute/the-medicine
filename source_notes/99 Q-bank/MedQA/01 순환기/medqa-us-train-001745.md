---
type: qbank
schema_version: 1
id: medqa-us-train-001745
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1b11c4f0470efb0b292f4e84d711687a7ea4bbb41c671b420360351432b7f8a9
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "reperfusion injury"
  - "compartment syndrome"
  - "acute limb ischemia"
related_disease_slugs:
  - MTEg7Jm46rO8L-uzteqwlSDqtaztmo0g7Kad7ZuE6rWwIChBYmRvbWluYWwgQ29tcGFydG1lbnQgU3luZHJvbWUpLm1k
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

왼쪽 대퇴동맥 색전절제술 2시간 후 63세 비만 여성이 왼쪽 다리의 심한 통증, 저림 및 이상감각을 보인다. 수술은 합병증 없이 끝났으나 시술 후 말초맥박은 약하게 만져졌다. 왼쪽 하지가 붓고 뻣뻣하며 압통이 있고 발을 발등굽힘하면 종아리에 심한 통증이 생긴다. 양측 대퇴맥박은 만져지고 왼쪽 발맥박은 약하다. 다음 중 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 심부정맥혈전증
B. 재관류 손상
C. 횡문근융해증
D. 콜레스테롤 색전증

## 해설


색전 절제술 후 재관류 손상은 조직 부종과 압력 상승을 일으켜 급성 구획 증후군을 초래한다. 따라서 이 환자의 증상은 재관류 손상에 의한 구획 증후군이 가장 가능성 높다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 B/해설 읽음. 동맥 재개통 직후 심한 통증·부종·신장통과 감각이상은 재관류 손상에 의한 구획압 상승과 일치. 맥박이 일부 있어도 구획증후군이 배제되지 않음. 응급 술기/치료지침 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001745
