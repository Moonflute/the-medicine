---
type: qbank
schema_version: 1
id: medqa-us-train-007737
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c287b5bc25c07eb4633cece98911fe768e7714f1c2c3d7c60c43f5ff847b91ec
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "high-grade squamous intraepithelial lesion"
  - "inadequate colposcopy"
  - "cold-knife conization"
  - "High-grade squamous intraepithelial lesion"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA
difficulty: complex
answer: C
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

37세 여성(G3P2)이 선별검사 결과 추적을 위해 산부인과에 의뢰되었다. 의학적 유산 1회와 질식 분만 2회의 병력이 있다. 31세 때 마지막 분만은 임신 41주에 자궁경부에 프로스타글란딘을 적용해 유도했으며 자궁경부 열상이 합병되었다. 1년 전 자궁경부 세포검사에서 저등급 편평상피내 병변(LSIL)이었지만 HPV 검사는 음성이었다. 현재 증상은 없고 남편만 성 파트너이며 경구피임약을 사용한다. 동반 질환은 없다. 최근 HPV 검사는 양성이었고 자궁경부 세포검사는 고등급 편평상피내 병변(HSIL)이었다. 질확대경검사는 자궁경부 반흔으로 외자궁구가 부분적으로 폐쇄되어 불충분했다. 병변은 7~8시 방향에 보이며 우측 하부 가시 영역의 절반을 차지하고, 조밀한 아세트산 백색 상피와 거친 점상 무늬가 있다. 반흔 때문에 병변의 경계와 자궁경관 내 확장을 확인할 수 없다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 병변 냉동절제
B. 병변 레이저 절제
C. 냉칼 원추절제술
D. 펀치 생검 후 결과에 따른 치료

## 해설

이 환자는 HSIL 세포검사이고 반흔 때문에 병변 경계와 자궁경관 내 확장을 볼 수 없다. 침윤 여부와 병변 범위를 평가할 진단적 절제가 필요하며 보기 중 냉칼 원추절제(C)가 적절하다. 경계가 보이지 않는 병변의 냉동·레이저 소작은 피한다. 불충분 시야만 있으면 모든 환자에게 같은 처치를 한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HSIL/HPV 양성에 병변 상단·변환대가 불완전 관찰되어 진단적 절제 C 유지. 모든 불충분 질확대경에 일괄 냉칼 원추절제를 권한 설명 한정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7147428/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007737
