---
type: qbank
schema_version: 1
id: medqa-us-validation-001023
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1189bfa266248288b8b575af8c8587ba19fe406f3b6f2a9341e5758f35602a65
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "아나필락시스"
  - "식품 알레르기"
  - "에피네프린 자동주사기"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sC5tZA
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
---

# MedQA US 임상문제

## 문제

22세 남성이 트레일 믹스를 먹은 한 시간 후 갑자기 얼굴이 붓고 복통과 구역이 생겨 응급실에 왔다. 알부테롤 흡입제를 월 1회 미만으로 사용하는 천식 병력이 있다. 입 주위 부종과 얼굴 및 오른손 손가락의 두드러기가 있으나 호흡곤란, 쉰 목소리, 인두 부종이나 천명은 없다. 정맥 디펜히드라민 투여 후 증상이 호전되었다. 가장 적절한 다음 처치는?

## 선택지

A. 땅콩 회피를 권고
B. 첩포검사 시행
C. 에피네프린 자동주사기 처방
D. 경구 프레드니손 투여

## 해설


음식 섭취 후 두드러기·입 주위 부종과 위장관 증상이 함께 발생해 재노출 시 중증 반응 위험에 대비해야 한다. 호전된 뒤 에피네프린 자동주사기 처방과 사용 교육(C), 유발 음식 평가가 적절하다. 자동주사기가 재발 자체를 막는 것은 아니며 호흡기 증상 부재만으로 중등도 아나필락시스라고 분류할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-validation-001023`와 직접 대조했다.
- 판정: 자동주사기 C 유지. 호흡기 증상이 없으므로 중등도 아나필락시스라는 잘못된 진단·중증도 논리 제거. 원문의 천식 병력도 복구.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001023
