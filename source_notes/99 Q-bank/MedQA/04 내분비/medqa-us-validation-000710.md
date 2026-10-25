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

58세 남성이 정기 추적검사를 받으러 왔다. 제2형 당뇨병을 2개월 전 진단받았고 당시 HbA1c는 7.6%이며 그 외 신체진찰은 정상이다. 현재 10월 말이며 돌봄시설의 환자 돌봄 종사자이다. 아버지는 52세에 대장암으로 사망했지만 환자의 55세 선별 대장내시경은 정상이었다. 현재 가장 적절한 건강 유지 권고는?

## 선택지

A. HbA1c 측정
B. 인플루엔자 백신
C. 전립선특이항원 측정
D. 대장내시경

## 해설


정답 B. 10월 말에 돌봄시설에서 근무하는 당뇨 환자로 계절 influenza 예방접종이 적절하다. 2026–27 CDC 지침에서도 연례 접종을 권고하며 당뇨병은 중증 합병증 위험인자다. 영어 원문에는 55세 정상 대장내시경과 52세 대장암 아버지가 있어 가족력에 맞춘 향후 추적은 필요하나 3년 만의 즉시 내시경이 우선은 아니다. A1c도 진단 후 약3개월 간격 추적 등을 계획하지만 직전 측정은 2개월 전이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000710 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 영어 원문의 10월 말·돌봄시설 근무·최근 정상 대장내시경 등 선택지 비교의 핵심 맥락 복원; influenza B 현행 근거 확인.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/flu/hcp/vax-summary/acip-recommendations.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000710
