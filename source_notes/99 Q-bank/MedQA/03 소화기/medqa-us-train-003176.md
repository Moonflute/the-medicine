---
type: qbank
schema_version: 1
id: medqa-us-train-003176
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c6b1a0c8ea2be02efd637e1136d61850f1226fad079b8016d8a22806f683e25c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "ulcerative colitis"
  - "continuous colitis"
  - "pseudopolyps"
  - "p-ANCA"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: C
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

22세 백인 여성이 6개월 동안 지속된 하복부 통증으로 내원했다. 그동안 피가 섞인 묽은 변이 여러 차례 있었고 한 달 동안 배변 시 통증이 있었다. 지난 1년 동안 10 kg의 체중이 감소했으며 지난주 연쇄상구균 인두염 치료를 받았다. 복부는 부드럽지만 왼쪽 하복부 압통이 있고 혈색소 10.4 g/dL, 혈소판 450,000/mm³, p-ANCA 양성, ASCA 음성이다. 다음 날 대장내시경을 예약했다. 다음 중 대장내시경에서 가장 가능성 높은 소견은?

## 선택지

A. 결장 염증 부위를 덮는 위막
B. 자갈돌 모양의 반점성 점막염과 정상 점막이 교대로 보임
C. 부종, 섬유소로 덮인 궤양, 혈관상 소실을 동반한 결장 점막의 연속적 염증
D. 결장 전체에 수많은 용종

## 해설


p‑ANCA 양성, 연속성 대장 점막 염증, 궤양 및 혈관 소실은 궤양성 대장염의 전형적인 내시경 소견이다. 다른 선택지는 해당 병리와 맞지 않는다. 따라서 가장 가능성 높은 소견은 C이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 만성 혈성설사·LLQ통증과 pANCA+/ASCA-는 UC 의심; 연속 점막염·혈관상 소실 C가 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003176
