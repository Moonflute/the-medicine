---
type: qbank
schema_version: 1
id: medqa-us-test-001048
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:6d9a080c0cca26991a6467a1a5c457928ee580a0fde6e4cce009e4708eb8426f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "원발성 담즙성 담관염"
  - "담즙정체"
  - "피부 황색종"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sm5DrsJzshLEg64u07KaZ7ISxIOuLtOq0gOyXvCAoUEJDKSAoUHJpbWFyeSBCaWxpYXJ5IENob2xhbmdpdGlzKS5tZA
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

57세 여성이 3개월간 피로하고 2개월 전부터 전신 가려움이 생겼으며 2주 전 눈이 노래졌다. 흡연과 음주는 하지 않고 지속적인 눈 건조에 안약을 사용한다. 결막과 피부에 황달, 구강 건조, 간연 3 cm 촉지, 전신 긁은 자국이 있었다. 총 빌리루빈 3.1 mg/dL, 직접 빌리루빈 2.5 mg/dL, ALP 452 U/L, AST 155 U/L, ALT 168 U/L였고 B형·C형간염 검사는 음성이었다. 복부 초음파에서 간 에코가 경미하게 증가했다. 추가로 가장 가능성 높은 소견은?

## 선택지

A. 하대정맥 혈전증
B. 피부 황색종
C. CA 19-9 증가
D. 카이저-플라이셔 고리

## 해설

정답은 B이다. 중년 여성의 소양증·담즙정체성 간검사·황달과 건조 증상은 원발성 담즙성 담관염(PBC)에 합당하다. 만성 담즙정체와 지질 이상에서는 피부에 지질이 침착한 황색종이 생길 수 있다. PBC는 원발성 경화성 담관염(PSC)과 다른 질환이며 황색종을 단순 피부 색소침착으로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원발성 담즙성 담관염의 약어를 PBC로 바로잡고 황색종을 색소침착이라고 한 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001048
