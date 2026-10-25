---
type: qbank
schema_version: 1
id: medqa-us-train-004292
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:763dbf10b7e3dd7cd6bec57d5e9ce3723dc0f7cb4725bfc32010be446f0f493b
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "개 물림"
  - "파스퇴렐라 멀토시다"
  - "동물 교상 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-q1kOyDgSDqsJDsl7wgKEJpdGUgV291bmQgSW5mZWN0aW9uKS5tZA
question_type: 임상증례 객관식
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

7세 여아가 개에게 물린 후 어머니와 함께 응급실에 왔다. 예방접종을 최신 상태로 받은 개와 놀다가 개가 더 공격적으로 놀기 시작해 손에 송곳니로 두 개의 자상 상처가 생겼다. 아이의 예방접종과 건강 상태는 정상이다. 이 상처가 감염된다면 가장 가능성 높은 원인균은 무엇인가?

## 선택지

A. 녹농균
B. 파스퇴렐라 멀토시다
C. 파상풍균
D. 푸소박테리움

## 해설


개·고양이 구강세균인 Pasteurella multocida는 짧은 그람음성 구간균(coccobacillus)이며 동물 물림 감염의 중요한 원인이므로 B가 가장 적절하다. 실제 물림 감염은 여러 호기성·혐기성 균이 함께 관여할 수 있으며 개가 예방접종을 받았다고 일반 세균 감염 위험이 없어지는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004292 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Pasteurella를 그람음성 구균이라 한 형태 오류 교정; 개물림의 B 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004292
