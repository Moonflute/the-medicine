---
type: qbank
schema_version: 1
id: medqa-us-train-010129
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:521e89a262abc6cd6919345f8869d13db548be35bab1849fa51415cae2975776
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "대장암 선별"
  - "내치핵"
  - "잠혈"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rgrTsuZjtlbUgKEludGVybmFsIEhlbW9ycmhvaWQpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Y-Q7IeEIChMYXJnZSBCb3dlbCBPYnN0cnVjdGlvbikubWQ
question_type: investigation
difficulty: standard
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvU2FsbWV0ZXJvbC5tZA
---

# MedQA US 임상문제

## 문제

68세 남성이 정기 건강검진을 위해 내원했다. 지난 6개월 동안 배변 횟수가 늘고 간헐적으로 혈변을 보았다. 고혈압, 관상동맥질환, 만성폐쇄성폐질환이 있다. 40년 동안 매일 담배 한 갑을 피웠다. 아스피린, 리시노프릴, 살메테롤을 복용한다. 체온 37°C, 맥박 분당 75회, 혈압 128/75 mmHg이다. 폐 청진은 깨끗하고 심장 진찰에서 잡음, 마찰음, 갤럽은 없다. 복부는 부드럽고 장기비대는 없다. 직장수지검사에서 큰 내치핵이 보이고 대변 잠혈검사는 양성이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 고무밴드 결찰
B. 대장내시경
C. 캡슐내시경
D. 치핵절제술

## 해설


정답 B. 68세 환자의 새로운 배변 변화와 혈변은 대장 병변을 평가해야 하는 증상이다. 내치핵이 발견되어도 모든 출혈을 치핵 탓으로 돌리면 안 된다. 대장내시경은 단순 무증상 선별이 아니라 출혈 원인과 종양 등 기질적 질환을 확인하기 위한 진단 검사다. 원인 평가 전 치핵 시술만 시행하는 것은 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010129 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈변·배변 변화는 단순 선별 아닌 증상 진단 내시경 B; 내치핵만으로 출혈 귀속하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://fascrs.org/ascrs/media/files/2024-Hemorrhoids-CPG.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010129
