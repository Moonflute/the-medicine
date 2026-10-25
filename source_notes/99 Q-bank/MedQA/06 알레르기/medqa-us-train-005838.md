---
type: qbank
schema_version: 1
id: medqa-us-train-005838
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3645a676dbe6b7dfa5d345b6386e7edf1244aff85f169f8dcdbbc3d4d3e4886b
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "급성 두드러기"
  - "식품 알레르기"
  - "히스타민 H1 차단제"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-uRkOuTnOufrOq4sCAoVXJ0aWNhcmlhKS5tZA
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sC5tZA
question_type: management
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0NldGlyaXppbmUubWQ
---

# MedQA US 임상문제

## 문제

4세 남아가 발진으로 어머니와 함께 내원했다. 몇 시간 전 식당에서 조개류를 먹은 뒤 증상이 갑자기 시작되어 점점 악화되었다. 목과 가슴에 몇 개의 돌기가 생긴 후 팔과 상체로 빠르게 퍼졌고, 발진이 불편하고 심하게 가렵다고 한다. 발열, 오한, 야간 발한, 호흡곤란 또는 과거 유사 증상은 없다. 생후 9개월에 아토피 피부염 병력이 있었으나 국소 약물로 호전되었다. 열은 없고 활력징후는 정상이다. 신체검사에서 압박하면 창백해지는 융기된 홍반성 반점이 여러 부위에 보인다. 후두 부종은 없고 폐 청진도 깨끗하다. 다음 중 가장 가능성 높은 상태에 대한 최선의 치료는 무엇인가?

## 선택지

A. 국소 코르티코스테로이드
B. 세티리진
C. 프레드니손
D. 근육 내 에피네프린

## 해설


가려운 팽진만 있고 호흡곤란·후두 부종·순환장애가 없어 피부에 국한된 급성 두드러기에 합당하다. 선택지 중 2세대 H1 항히스타민제인 세티리진(B)이 적절하다. 국소 스테로이드는 두드러기의 표준 치료가 아니며, 에피네프린은 아나필락시스가 의심될 때 우선한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-005838`와 직접 대조했다.
- 판정: 피부에 국한된 급성 두드러기에서 B 유지. 국소 스테로이드가 중증 전신반응 치료라는 오류 제거. 원문의 이미지 언급은 있지만 텍스트의 팽진·기도 정상 소견만으로 선택 가능.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://doi.org/10.1111/all.70210
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005838
