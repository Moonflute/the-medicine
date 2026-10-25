---
type: qbank
schema_version: 1
id: medqa-us-train-006788
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7835e1fc443e7d009fd2820c0f80adc534756aaabab9f109c1aa1e5e00fe3469
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 다발신경병증"
  - "신경병성 통증"
  - "가바펜틴 치료"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsi6Dqsr3rs5Hspp0gKERpYWJldGljIE5ldXJvcGF0aHkpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9HYWJhcGVudGluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 여성이 ‘발이 아프다’고 주치의에게 내원했다. 처음에는 양발의 감각이 감소했고 최근에는 손에도 생겼다. 이제 이상감각, 무감각 및 ‘화끈거리는 통증’이 있다. 최근 심근경색에서 회복 중이며 약 1.5주 전 가벼운 물설사와 비정형 폐렴을 앓았다. 지난 3주 동안 피로감, 집중력 저하 및 경미한 체중 증가가 있었다. 그 외 급성 증상은 없다. 제2형 당뇨병, 고혈압 및 관상동맥질환 병력이 있고 메트포르민, 아스피린, 아토르바스타틴, 메토프롤롤 및 리시노프릴을 복용한다. 체온은 99°F(37.2°C), 혈압은 155/98 mm Hg, 맥박은 분당 85회, 호흡수는 분당 14회이다. 양쪽 발에서 진동감각과 위치감각이 소실되어 있고 발부터 종아리 중간 및 손까지 통증, 가벼운 촉각 및 온도 감각이 저하되어 있다. 상하지 근력과 근긴장도는 정상이며 양쪽 발목반사는 소실되어 있다. 다음 중 관리로 가장 적절한 것은?

## 선택지

A. 아미트립틸린
B. 가바펜틴
C. 정맥 면역글로불린
D. 벤라팍신

## 해설

원위대칭 감각소실·정상근력·소실발목반사는 통증성 당뇨다발신경병증을 지지한다. Gabapentin B는 전압의존 Ca통로의α2δ에 결합하며 GABA-B작용제가 아니다. Amitriptyline은 최근MI 등의 심장위험을 고려해 피할 수 있고 venlafaxine도 유효한 계열이나 고혈압/이상반응을 고려한다. 무조건 덜 효과적이라 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Gabapentin B의 GABA-B작용 오류를 α2δ로 교정하고 다른신경통약의 효능을 부정한 설명 교정.
- https://www.ema.europa.eu/en/documents/referral/neurontin-article-30-referral-annex-i-ii-iii_en.pdf
- https://doi.org/10.1212/WNL.0000000000013038

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006788
