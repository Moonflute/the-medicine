---
type: qbank
schema_version: 1
id: medqa-us-train-010031
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c88daa10f21808c19445540670b13c7e468c674a90e85ebf8cd47019da3f0491
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "인위성 장애"
  - "뮌하우젠 증후군"
  - "자가 유발 감염"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yduOychOyEsSDsnqXslaAgKEZhY3RpdGlvdXMgRGlzb3JkZXIpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2VtOumrOyEsSDquLDslrUg7IOB7IukIChEaXNzb2NpYXRpdmUgQW1uZXNpYSkubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

제2형 당뇨병이 있는 40세 성생활 여성에게 합병증 없는 담낭절제술 2주 후 절개 부위 통증, 가려움, 홍반이 발생해 입원했다. HbA1c는 6.5%이고 상처 배양에서 장내 세균이 혼합되어 자랐다. 적절한 항생제 치료 후 증상이 호전되어 퇴원했지만 일주일 뒤 같은 증상으로 재입원했다. 입원 중 거의 먹지 않지만 사교적이고 의료진과 함께 시간을 보내는 것을 좋아한다. 체온을 반복 측정하고 올라가면 간호사에게 알린다. 어느 날 아침 체온계를 사용하기 전에 뜨거운 차에 넣는 것을 보았다. 다음 중 재발성 감염 및/또는 상처 치유 불량의 가장 가능성 높은 원인은?

## 선택지

A. 메티실린 내성 황색포도상구균(MRSA) 집락화
B. 비타민 C 결핍에 의한 상처 치유 불량
C. 면역결핍 증후군에 의한 재발성 감염
D. 대변으로 상처를 스스로 오염시킴

## 해설

관찰된 체온계 조작은 질병 징후를 의도적으로 만들어 보이는 행동의 근거이며, 반복 상처 감염에서 혼합 장내세균이 자란 점을 함께 보면 제시된 선택지 중 대변으로 상처를 스스로 오염시켰을 가능성을 추론한다. 실제로 상처에 대변을 넣는 장면이 확인됐다는 뜻은 아니다. 인위성 장애 가능성을 비난 없이 평가하되 감염 자체는 실제일 수 있으므로 적절히 치료하고 다른 감염 원인도 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010031

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 관찰된 체온 조작과 장내세균 배양으로 자가오염을 추론하는 답 유지. 실제 대변 오염이 직접 증명됐다는 과장과 병적거짓증 동일시 제거.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
