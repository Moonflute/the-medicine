---
type: qbank
schema_version: 1
id: medqa-us-train-002495
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b4fa62eb856443a3d048982885826fa030edb7061c299d028583ce87957db49
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "acute pyelonephritis"
  - "outpatient fluoroquinolone"
  - "costovertebral angle tenderness"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 3일간 점점 악화된 빈뇨와 소량 배뇨, 통증으로 응급실에 왔다. 과거력은 없고 담배를 하루 한 갑 피우며 남성 두 명과 피임 없이 성관계를 한다. 체온 103°F(39.4°C), 혈압 127/68 mmHg, 맥박 97회/분이다. 심폐 및 복부검사는 정상이나 왼쪽 늑골척추각과 옆구리에 압통이 있다. 임신검사는 음성이다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 농양 배액과 정맥 항생제
B. 세프트리악손과 입원
C. 레보플록사신과 외래 추적
D. 니트로푸란토인

## 해설

고열·배뇨통·CVA 압통은 급성 신우신염을 시사한다. 임신이 아니며 혈역학적으로 안정적이고 경구 섭취와 추적이 가능한 경우 C의 외래 경구 levofloxacin은 가능한 접근이다. 소변배양 후 지역 내성률·기왕 배양·금기와 부작용 위험에 맞추어 선택해야 하며 FQ 내성이 높거나 불명확하면 초기 장시간 작용 정맥 항생제 등 보완이 필요할 수 있다. 패혈증·구토·폐쇄 등은 입원 평가 사유이며 nitrofurantoin은 신실질 감염 치료에 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정적 비임신 신우신염 외래치료 C는 가능하나 FQ 감수성·경구섭취·추적가능성 조건을 명시.
- https://uroweb.org/guidelines/urological-infections/chapter/the-guideline

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002495
