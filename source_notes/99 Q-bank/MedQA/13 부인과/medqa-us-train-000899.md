---
type: qbank
schema_version: 1
id: medqa-us-train-000899
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a2e3227698c4e85fbe3b4ba0c2cd4927f80041dbdeb545edd767be21c91d6597
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "asthma"
  - "breast cancer"
  - "colon cancer"
  - "gonorrhea"
  - "chlamydia"
  - "syphilis"
  - "human immunodeficiency virus"
question_type: management
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
  - MDgg6rCQ7Je8L-unpOuPhSAoU3lwaGlsaXMpLm1k
  - MTMg67aA7J246rO8L-unpOuPhSAoU3lwaGlsaXMpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Y-Q7IeEIChMYXJnZSBCb3dlbCBPYnN0cnVjdGlvbikubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

HPV 백신을 맞은 적 없는 16세 여성이 피임 상담을 받으러 왔다. 최근 성생활을 시작했고 출혈이나 질분비물 등 증상은 없다. HPV 관련 권고는?

## 선택지

A. 자궁경부세포검사와 HPV 검사부터 시행
B. HPV 검사 음성일 때만 백신 접종
C. 성생활을 시작했으므로 백신은 권하지 않음
D. HPV 백신을 시작하고 정기 자궁경부암 검진은 검진 연령에 시행

## 해설

16세 미접종 여성은 국내 HPV 국가예방접종 지원 대상이다. 이 나이에 처음 접종하면 3회 접종 일정에 해당한다. 성생활이나 HPV 검사 여부가 접종을 시작하기 위한 조건은 아니다. 증상이 없다면 정기 국가 자궁경부암 검진은 20세부터 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HPV백신 접종횟수를 모든11–26세3회로 일반화한 오류 수정.
- https://www.cdc.gov/hpv/hcp/vaccination-considerations/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000899
- 질병관리청, HPV 국가예방접종 실시 기준: https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=132&menuLv=1
- 국가암정보센터, 국가암검진 사업: https://www.cancer.go.kr/lay1/S1T261C262/contents.do
