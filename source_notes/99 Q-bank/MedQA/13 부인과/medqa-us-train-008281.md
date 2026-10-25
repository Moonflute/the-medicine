---
type: qbank
schema_version: 1
id: medqa-us-train-008281
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:024de42a64257d776c5023af0314c59cc534abc88c846f2048c34767cb62a7c3
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "cervical intraepithelial neoplasia"
  - "HPV risk"
  - "early sexual debut"
question_type: prognosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 여성(G2P2)이 자궁경부 세포검사에서 고등급 상피내 병변이 발견되어 질확대경검사를 받았다. 이전 두 번의 세포검사에서는 저등급 상피내 병변이었다. 평생 성 파트너는 2명이고 최근 10년간 남편만 파트너였다. 첫 성관계는 16세였고 첫 임신은 26세였다. 경구피임약을 사용하며 우측 난소의 큰 난포낭종으로 절제술을 받은 병력과 코카인 남용으로 재활 프로그램을 마친 병력이 있다. 질확대경검사에서 4시 방향 아세트산 백색 병변과 비정상 혈관이 보였고 표적 조직검사의 조직학적 결과가 제시되어 있다. (원문 참조 조직사진은 현재 문서에 포함되어 있지 않다.) 다음 중 이 질환의 위험요인은?

## 선택지

A. 환자 나이
B. 첫 성관계 나이
C. 난소 수술
D. 코카인 남용 병력

## 해설

반복된 비정상 세포검사와 고등급 자궁경부 상피내 병변의 맥락에서 제시된 위험인자는 16세의 이른 첫 성관계(B)이다. 이른 성생활은 고위험 HPV 노출 가능성을 높이며 지속 HPV 감염은 자궁경부 전암병변의 핵심 원인이다. 난소 수술이나 코카인 사용 병력은 이 선택지들 중 직접적인 대표 위험인자가 아니다. 원문이 참조하는 조직사진은 현재 문서에 없어 조직학적 세부소견은 검증하지 않았다. 본문의 HSIL 정보와 위험인자 문항만 대조해 정답을 유지하며, 보이지 않는 조직 형태를 만들어 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: tPA 혈소판 금기 오연결 해설을 조기 성경험/HPV 위험으로 교체. 원문에 있는 코카인 재활 병력 복원; 누락 조직사진을 본 것처럼 기술한 번역 수정. B 유지하되 조직영상 검수는 미완료.
- https://www.cancer.gov/types/cervical/causes-risk-prevention
- https://www.acog.org/womens-health/faqs/cervical-cancer

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008281
