---
type: qbank
schema_version: 1
id: medqa-us-validation-000710
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:55019372bc9fe8cbbfb3279cad3360fdf13eb1bcc8728cd448fe79aacc1e043d
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병 예방접종"
  - "인플루엔자 백신"
  - "건강 유지 관리"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: prevention
difficulty: complex
answer: B
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
---

# MedQA US 임상문제

## 문제

58세 제2형 당뇨병 환자가 가을에 외래에 왔다. 지난해 인플루엔자 백신을 맞았지만 이번 절기에는 아직 맞지 않았다. 국내 진료지침에 따른 권고는?

## 선택지

A. 지난해 맞았으므로 올해는 건너뛴다.
B. 이번 절기 인플루엔자 백신을 접종한다.
C. 혈당이 정상으로 떨어질 때까지 접종을 미룬다.
D. 65세가 될 때까지 접종하지 않는다.

## 해설


당뇨병이 있는 사람에게는 매년 인플루엔자 예방접종을 권고한다. 임상적 접종 권고는 국가 무료접종의 대상 조건과 별개다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000710 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 영어 원문의 10월 말·돌봄시설 근무·최근 정상 대장내시경 등 선택지 비교의 핵심 맥락 복원; influenza B 현행 근거 확인.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/flu/hcp/vax-summary/acip-recommendations.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000710
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
