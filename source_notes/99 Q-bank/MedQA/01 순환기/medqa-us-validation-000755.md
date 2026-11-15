---
type: qbank
schema_version: 1
id: medqa-us-validation-000755
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:5678f58f9b6f186f14cbd483bc6d3e71a5a509b1dad4fe000c176871daf1e81c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "늑연골염"
  - "근골격성 흉통"
  - "이부프로펜"
  - "Costochondritis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uKkeyXsOqzqOyXvCAoQ29zdG9jaG9uZHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 여성이 무거운 상자를 옮긴 뒤 이틀째 왼쪽 앞가슴이 아프다. 제3~4 늑연골 접합부를 누르면 같은 통증이 재현된다. 붓기는 없다. 문진, 심전도와 연속 트로포닌 평가에서 급성 관상동맥증후군 가능성은 낮았다. 가장 가능성 높은 진단은?

## 선택지

A. 늑연골염
B. 급성 심낭염
C. 혈관연축 협심증
D. 갈비뼈 골수염

## 해설


힘을 쓴 뒤 시작된 국소 통증이 늑연골 접합부 압박으로 재현되고 붓기나 전신 염증이 없어 늑연골염에 합당하다. 압통 하나만으로 심장 원인을 배제하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 무거운 물건을 옮긴 뒤 움직임 관련 흉벽 압통과 음성 트로포닌은 근골격성 흉통으로 초기 이부프로펜 A가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000755
