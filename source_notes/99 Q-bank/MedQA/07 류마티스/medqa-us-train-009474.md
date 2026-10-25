---
type: qbank
schema_version: 1
id: medqa-us-train-009474
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:db2481aff33aba2263cf7f0797769be4fb098a37db0563050a6c124eeac6396e
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "ankylosing spondylitis"
  - "강직성 척추염"
  - "TNF inhibitor screening"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
question_type: investigation
difficulty: standard
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
---

# MedQA US 임상문제

## 문제

40세 남자가 2개월 동안 점점 악화되는 요통으로 내원했다. 밤에도 아프고 자세를 바꿔도 호전되지 않는다. 매일 아침 적어도 1시간 뻣뻣하다가 하루 동안 호전된다. 지난 3개월 동안 급성 통풍이 세 번 발생해 알로푸리놀을 시작했다. 진찰에서 요추 굴곡이 감소하고 천장관절 압통이 있다. 엉덩관절을 무릎을 편 채 수동 굴곡해도 통증은 없고 근력과 감각은 정상이다. 골반 X선에서 진단이 확인되었다. 인도메타신과 운동 프로그램을 시작했지만 6주 후에도 호전이 없다. 추가 약물치료 전에 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 폐기능검사
B. 알로푸리놀 중단
C. PPD 피부반응검사
D. 간기능검사

## 해설


충분한 NSAID·운동 치료에도 활동성 axial SpA가 지속되어 생물학적 치료를 고려한다면 잠복결핵 screening이 필요해 보기 C가 가장 부합한다. TST/PPD 외 IGRA가 가능하고 EULAR는 이용 가능하면 IGRA를 선호하며 증상·흉부영상도 함께 평가한다. 간검사·HBV 등 다른 기초 안전검사가 불필요하다는 뜻은 아니고, 검사결과와 감염 위험에 따라 치료 계획을 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009474 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: TNF억제 전 잠복결핵 평가 C 유지, PPD만 유일검사·LFT불필요라는 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://ard.bmj.com/content/82/6/742

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009474
