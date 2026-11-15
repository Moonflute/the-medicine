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
question_type: prevention
difficulty: simple
answer: A
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

4시간 전 개에 물려 손등에 깊은 찔린 상처가 난 환자다. 상처를 충분히 세척했고 아직 발열과 홍반은 없다. 파상풍·광견병 노출은 별도로 평가할 때, 적절한 예방 항생제는?

## 선택지

A. 아목시실린/클라불란산
B. 세팔렉신
C. 메트로니다졸 단독
D. 항생제 없이 염증이 생길 때까지 관찰

## 해설


손의 깊은 물림 상처는 감염 위험이 높아 예방 항생제를 고려한다. 아목시실린/클라불란산은 동물 구강 세균과 혐기성균을 함께 포괄한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004292 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Pasteurella를 그람음성 구균이라 한 형태 오류 교정; 개물림의 B 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004292
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5754343/
