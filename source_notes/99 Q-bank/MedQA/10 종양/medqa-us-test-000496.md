---
type: qbank
schema_version: 1
id: medqa-us-test-000496
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:697083720a38972e6c2d393d2e0d94ac5f7dcb2a352db34fb1179322a133d38f
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "타목시펜"
  - "유방암"
  - "심부정맥혈전증"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: prognosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
---

# MedQA US 임상문제

## 문제

55세 여성이 정기 유방촬영술에서 비정상 종괴가 발견되었다. 생검 세포검사에서 에스트로겐 수용체 양성 침윤성 유관 선암으로 진단되었다. 화학요법을 시작한 뒤 종괴를 절제했고 타목시펜을 복용하며 정기 외래 추적 관찰 중이다. 천식, 비만, 지난해 확실히 치료한 자궁 평활근종 병력이 있다. 마지막 월경은 47세였다. 활력징후와 진찰은 정상이었다. 다음 중 발생할 수 있는 합병증은?

## 선택지

A. 심부정맥혈전증
B. 지루각화증의 급발진
C. 출혈 증가
D. 골다공증

## 해설


타목시펜은 조직별 에스트로겐 수용체 효과가 다른 선택적 에스트로겐 수용체 조절제(SERM)이다. 혈전색전증 위험을 높일 수 있어 선택지 중 심부정맥혈전증(A)이 맞다. 모든 사용자에게 흔하게 생긴다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000496 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: tamoxifen의 VTE 위험 A 유지. 단순 에스트로겐 억제제로 부른 기전을 SERM으로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/about-cancer/treatment/drugs/tamoxifencitrate

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000496
