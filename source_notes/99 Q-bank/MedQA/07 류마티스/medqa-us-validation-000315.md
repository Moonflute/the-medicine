---
type: qbank
schema_version: 1
id: medqa-us-validation-000315
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:46854c75b94b74a76129f216d942a8f64d91826b68ea91a706f68fa4e4ee7ee1
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "쇼그렌증후군"
  - "구강건조증"
  - "안구건조증"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yHvOq3uOugjCDspp3tm4TqtbAgKFNqw7ZncmVuJ3MgU3luZHJvbWUpLm1k
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
---

# MedQA US 임상문제

## 문제

70세 여성이 구강건조와 안구건조를 호소하며 진료를 받으러 왔다. 최근 구강건조 때문에 틀니를 착용하기 어렵고, 혀가 입천장에 달라붙어 말하고 음식을 삼키기 어렵다. 눈이 화끈거려 일반의약품 안약을 훨씬 자주 사용한다. 수개월째 지속되는 증상이며 양측 이하선이 경미하게 커져 있고 혀 등쪽과 볼 점막이 붉고 건조하며 매끈하다. 가장 적절한 첫 단계는?

## 선택지

A. 프레드니손 투여
B. 심전도 시행
C. 쉬르머 검사와 항-Ro/항-La 항체 역가 측정
D. 이하선 생검

## 해설


만성 구강·안구 건조와 이하선비대는 Sjögren disease를 의심하게 한다. 보기 중 tear production을 측정하는 Schirmer test와 anti-Ro/La 평가 C가 적절한 초기 평가이다. 핵심 항체는 anti-SSA/Ro이며 anti-La 단독양성이나 건조 증상만으로 확진하지 않는다. 상황에 따라 ocular staining, salivary flow 및 소타액선생검 등 객관 검사를 조합하며 항체음성 사례도 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000315 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 깨진 검사명을 Schirmer로 복구; anti-La·Schirmer가 모두필수/단독확정은 아님을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5650478/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000315
