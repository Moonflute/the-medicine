---
type: qbank
schema_version: 1
id: medqa-us-validation-000202
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:290a55e36cf9f9ebe293f02c8d2506f8400a2c23975b0309966a3b896f38ccdc
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "쿠싱병"
  - "이소성 ACTH"
  - "소세포 폐암"
related_disease_slugs:
  - MDQg64K067aE67mEL-y_oOyLseuzkSAoQ3VzaGluZydzIERpc2Vhc2UpLm1k
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
---

# MedQA US 임상문제

## 문제

45세 여성이 피로, 불규칙 월경, 반복 부비동 감염, 빈뇨, 발 부종, 근위부 근력저하로 진료를 받으러 왔다. 중심성 비만, 멍, 근위부 근위축, 저칼륨혈증, 고혈당, 코르티솔 증가와 ACTH 169 pg/mL, 고용량 덱사메타손 후에도 코르티솔이 167에서 164 nmol/L로 거의 억제되지 않았다. 가장 가능성 높은 원인은?

## 선택지

A. 부신암
B. 갑상선기능저하증
C. 소세포 폐암
D. 부신 선종

## 해설


정답 C. ACTH169pg/mL와 고코르티솔혈증, 고용량 dex 후에도 cortisol이167에서164nmol/L로 거의 억제되지 않은 소견은 이소성 ACTH를 고려하게 한다. 선택지 중 소세포폐암이 ACTH 분비 종양에 해당한다. 부신 자율종양이면 보통 ACTH가 억제된다. 고용량 검사만으로 뇌하수체/이소성 원인을 완전히 분리하거나 폐암을 확진할 수는 없어 추가 원인 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000202 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문의 고용량 dex 후 cortisol164 지속을 억제됨으로 요약한 반대 오류 정정; 이소성 ACTH C는 선택지상 추론이지 원발부위 확진 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.endocrine.org/clinical-practice-guidelines/diagnosis-of-cushing-syndrome

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000202
