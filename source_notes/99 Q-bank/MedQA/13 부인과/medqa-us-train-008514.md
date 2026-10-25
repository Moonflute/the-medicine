---
type: qbank
schema_version: 1
id: medqa-us-train-008514
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec8acf77c7d3552b9462bbbad19ce53079d660d9b0745394a506b99521597e6e
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "adnexal mass"
  - "ovarian cancer"
  - "pelvic ultrasound"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yDge2UvOyEsSDrgpzshozslZQgKEVwaXRoZWxpYWwgT3ZhcmlhbiBDYW5jZXIpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG92YXN0YXRpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 여성이 정기 신체검사를 위해 일차진료를 받으러 왔다. 특별한 증상은 없지만 약간의 체중 증가를 언급한다. 최근 수학교사에서 은퇴하고 하이킹을 시작했다. 활동량이 늘었는데도 바지가 ‘더 꽉 끼는’ 것 같다고 한다. 두통, 요로 증상, 관절통은 없다. 고혈압, 제2형 당뇨병, 류마티스관절염 병력이 있다. 아스피린, 리시노프릴, 로바스타틴, 메트포르민, 메토트렉세이트를 복용하며 지시에 따라 잘 복용하고 예방접종도 최신이다. 2년 전 대장내시경과 지난해 정기 유방촬영술은 모두 정상이었다. 마지막 월경은 10년 전이었다. 아버지는 71세에 대장암으로 사망했고 어머니는 유방암이 있다. 체온 98.7°F(37°C), 혈압 132/86mmHg, 맥박 86회/분, 호흡수 14회/분, 실내 공기 산소포화도 98%이다. 신체검사에서 복부가 약간 팽만되어 있고 단단하며 움직이지 않는 오른쪽 부속기 종괴가 만져진다. 다음 관리 단계는 무엇인가?

## 선택지

A. 복부 MRI
B. CA-125 수치 측정
C. 시험적 개복술과 종양감축술
D. 골반 초음파

## 해설

폐경 후 고정된 부속기 종괴와 팽만은 악성 위험 평가가 필요하다. 골반, 특히 질식 초음파(D)로 구조를 확인하고 CA125를 함께 평가해 위험도를 산정한다. 영상 평가 없이 바로 종양감축술을 선택하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 부속기 종괴의 골반 초음파 D 유지. 폐경 후 종괴에서 CA125를 반드시 초음파 이후로만 미룬다는 설명 수정.
- https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/ovarian-cysts-in-postmenopausal-women-green-top-guideline-no-34/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008514
