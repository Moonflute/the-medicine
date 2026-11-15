---
type: qbank
schema_version: 1
id: medqa-us-train-006424
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c55bc281577092fd306d7aa8c101f4b7f15da9f33e4f721cdc6c741ba99914b0
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "HPV 예방접종"
  - "성매개감염 선별"
  - "자궁경부암 예방"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
  - MTMg67aA7J246rO8L-yEseunpOqwnOqwkOyXvC5tZA
difficulty: complex
answer: A
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

24세 여성이 정기 진료를 받으러 왔다. HPV 백신을 맞은 적이 없고 기초생활보장 수급자다. 13개월 전 자궁경부세포검사는 정상이었다. HPV 관련 권고는?

## 선택지

A. HPV 예방접종을 시작한다
B. 고위험 HPV 검사가 음성이어야 백신을 맞을 수 있다
C. 자궁경부세포검사만 매년 반복하고 백신은 생략한다
D. 성생활을 시작했으므로 백신을 접종하지 않는다

## 해설

국내 국가예방접종 사업은 18~26세 저소득층 여성에게 HPV 예방접종을 지원한다. 성생활을 시작했거나 이전 자궁경부세포검사가 정상이더라도 백신을 시작할 수 있다. 예방접종을 받아도 정기 자궁경부암 검진은 계속 받는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미접종 24세 HPV 백신 A 유지. 예방접종과 선별검사를 경쟁적 우선순위로 둔 설명 수정.
- https://www.cdc.gov/hpv/hcp/vaccination-considerations/
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006424
- 질병관리청, HPV 국가예방접종 실시 기준: https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=132&menuLv=1
- 국가암정보센터, 국가암검진 사업: https://www.cancer.go.kr/lay1/S1T261C262/contents.do
