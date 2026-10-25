---
type: qbank
schema_version: 1
id: medqa-us-train-004720
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cf320043e4180e7c0f28bacdc07f3ceb99a35461e5733259737a0a1182e57e33
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "다낭성 난소 증후군"
  - "고인슐린혈증"
  - "LH:FSH 비율 증가"
question_type: mechanism
related_disease_slugs:
  - MTMg67aA7J246rO8L-uLpOuCrSDrgpzshowg7Kad7ZuE6rWwIChQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lKS5tZA
difficulty: complex
answer: C
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

16세 여아가 초경이 아직 없어 내원했다. 중대한 질환 병력이나 복용약은 없다. 키는 162cm (5피트 3인치), 체중은 80kg (176lb), BMI는 31.2kg/m2이다. 유방과 음모 발달은 태너 4단계이다. 지성 피부, 여드름과 목과 겨드랑이 접히는 부위의 과색소침착도 있다. 골반검사를 포함한 나머지 진찰은 정상이다. 이 환자의 무월경에 대한 가장 가능성 높은 설명은 무엇인가?

## 선택지

A. XO 염색체 이상
B. 뮐러관 무형성
C. LH:FSH 비율 증가
D. β-hCG 수치 증가

## 해설

무월경, 비만과 인슐린저항성을 시사하는 흑색가시세포증 및 여드름은 다낭성난소증후군을 고려하게 한다. LH:FSH 비 증가(C)는 이 질환에서 관찰될 수 있는 고전적 호르몬 양상으로 제시된 선택지 중 가장 적합하다. 그러나 비율 증가 자체가 무월경의 단일 원인이나 현행 진단 기준은 아니며 항상 나타나는 것도 아니다. 청소년은 월경 이상과 임상·생화학적 고안드로겐증을 평가하고 임신 등 다른 원인을 배제해야 하므로 본문만으로 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: LH:FSH비를PCOS원인/진단필수처럼쓰지않도록수정. C의고전적연관성은유지,청소년진단정보부족명시.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10505534

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004720
