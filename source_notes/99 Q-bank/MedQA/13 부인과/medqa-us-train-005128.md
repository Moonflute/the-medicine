---
type: qbank
schema_version: 1
id: medqa-us-train-005128
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6800bbec24aa637b964d1f3f3e3bba3feb04188c72f68d75ee1b27c31ea608a
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁경부암 선별검사"
  - "고령 여성 선별검사 중단"
  - "HPV 공동검사"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 임신 2회·출산 2회의 여자가 정기 부인과 검진을 받으러 왔다. 42세 세포검사에서 LSIL이었으나 질확대경은 정상이었고 이후 세포검사는 정상이었다. 5년 전 HPV 공동검사도 음성이었다. 현재 세포검사와 HPV 검사가 모두 음성이며 위축성 세포 양상이 보인다. 향후 선별검사에 대해 가장 적절한 고려사항은?

## 선택지

A. 자궁경부세포검사와 HPV 공동검사를 5년마다 시행
B. 자궁경부세포검사를 3년마다 반복
C. 이 환자에서 선별검사 중단을 고려
D. 자궁경부세포검사를 5년마다 반복

## 해설

65세 이상에서 충분한 최근 음성 선별 이력이 있고 CIN2+ 병력이나 면역저하 등 고위험 요인이 없으면 중단을 고려한다(C). 과거 LSIL 뒤 정상 질확대경은 CIN2+와 같지 않다. 본문상 과거 30년 정상이라는 표현과 42세 LSIL 이력은 불일치하므로 42세 이후 정상 추적 이력으로 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 충분한 음성 선별 이력이 있는 65세의 중단 C 유지. 고령·정상 결과만으로 일괄 중단하는 설명을 한정.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005128
