---
type: qbank
schema_version: 1
id: medqa-us-train-001578
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2b88943297a741350bd1ae7e9e3b2ba2a9983bef4397e04147bd0d1ad59ef05b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "cervical intraepithelial neoplasia grade 1"
  - "HPV infection"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA
  - MTMg67aA7J246rO8L-u-sOyhsSDsvZjrlJzroZzrp4ggKENvbmR5bG9tYSBBY3VtaW5hdHVtKS5tZA
difficulty: standard
answer: B
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

38세 여성(G2P2)이 진단검사 결과를 상담하기 위해 산부인과에 내원했다. 현재 증상이나 동반질환은 없다. 마지막 임신 후 난관결찰술을 받았다. 최근 자궁경부 세포검사에서 고등급 편평상피내 병변이었고 반사 HPV검사 양성이었다. 질확대경검사에서 경계가 퍼지고 미세점이 있는 얇은 아세토백색 상피 영역이 보인다. 의심 부위 생검은 CIN 1이었다. 다음 중 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 냉동절제술
B. 루프 전기절제술
C. HPV 16형과 18형 검사
D. 6개월 후 세포검사와 HPV 동시검사 반복

## 해설

HSIL 세포검사와 CIN1 생검이 불일치하므로 슬라이드·질확대경 적절성을 검토하고 진단적 절제(B)를 선택할 수 있다. 변환대가 모두 보이고 자궁경관 검사가 적절하면1년 HPV기반검사·질확대경 관찰도 가능하다. D의6개월 동시검사만과는 다르다. CIN1이나 미세점 자체가 모두 LEEP 적응증이라는 설명은 부적절하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HSIL세포–CIN1조직 불일치에서 LEEP는 진단적 선택이지 CIN1의 일률 표준치료가 아님.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7147428/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001578
