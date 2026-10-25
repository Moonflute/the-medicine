---
type: qbank
schema_version: 1
id: medqa-us-train-010149
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:397bdee9ab3a27f122100547eebceb1d0fed358f0afd49ccba8b7f543836683d
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "아나필락시스"
  - "I형 과민반응"
  - "땅콩 알레르기"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sC5tZA
question_type: mechanism
difficulty: complex
answer: A
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

7세 남아가 친구 생일파티에서 호흡곤란이 발생해 긴급진료센터에 왔다. 즉시 산소를 투여했다. 아버지는 행사에서 땅콩버터 과자가 제공되었지만 아들이 먹는 것은 보지 못했다고 한다. 파티 중 얼굴이 붉어지고 얼굴과 목이 가려우며 호흡이 어려워 아버지에게 다가왔다. 만삭 자연분만으로 태어났고 발달은 정상이며 예방접종도 완료했다. 땅콩 알레르기와 천식 병력이 있고 응급 흡입기를 가지고 다닌다. 혈압 110/85 mmHg, 심박수 분당 110회, 호흡수 분당 25회, 체온 37.2°C이다. 진찰에서 얼굴에 심한 부종과 양쪽 폐에서 크게 들리는 심한 협착음이 들린다. 다음 중 이 환자가 겪는 과민반응 유형은?

## 선택지

A. I형-아나필락시스 과민반응
B. II형-세포독성 과민반응
C. III형-면역복합체 매개 과민반응
D. A와 B 모두

## 해설


땅콩 노출 가능성 뒤 홍조·가려움·안면부종과 호흡곤란·협착음이 생겨 IgE 매개 I형 아나필락시스 반응(A)을 지지한다. 실제 섭취는 목격되지 않았으며 혈압 저하는 제시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-010149`와 직접 대조했다.
- 판정: 원문 stridor를 천명으로 바꾼 번역 및 정상 혈압 사례에 저혈압을 덧붙인 해설 교정. I형 A 유지.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010149
