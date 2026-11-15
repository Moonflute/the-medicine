---
type: qbank
schema_version: 1
id: medqa-us-train-005561
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4ec4095623c9c92901bded21025ef90147bac26db4b333410967790939aedf64
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "백일해"
  - "마크롤라이드 항생제"
  - "QT 간격 연장"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cx7J287ZW0IChQZXJ0dXNzaXMpLm1k
question_type: prevention
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

백일해가 확인된 초등학생이 열 없이 지내지만 아직 기침을 한다. 적절한 항생제를 복용한 지 만 3일이 지났다. 학교 복귀를 언제 안내하는가?

## 선택지

A. 열이 없으므로 오늘 복귀한다
B. 효과적인 항생제를 시작하고 만 5일이 지난 후 복귀한다
C. 기침이 완전히 사라질 때까지 복귀를 미룬다
D. PCR이 음성이 될 때까지 매일 검사한다

## 해설


적절한 항생제 치료를 시작한 뒤 5일간은 등교를 제한한다. 기침은 그 뒤에도 남을 수 있으며, 기침 소실이나 PCR 음성을 일률적으로 요구하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005561 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 백일해에 쓰이는 macrolide의 QT 연장 A를 현재 CDC 치료·안전성 권고와 원문 대조 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/pertussis/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005561
- https://www.kdca.go.kr/bbs/kdca/42/239913/download.do
