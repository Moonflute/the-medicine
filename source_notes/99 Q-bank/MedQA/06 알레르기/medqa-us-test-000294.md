---
type: qbank
schema_version: 1
id: medqa-us-test-000294
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5b52be90179aa18554ade73a43d27a05f674a4a2304aa375e49acc43651684c1
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "아나필락시스"
  - "땅콩 알레르기"
  - "천식"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sC5tZA
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: management
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
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
---

# MedQA US 임상문제

## 문제

8세 여아가 가족과 뷔페 저녁식사를 한 뒤 호흡곤란, 얼굴 부종, 피부 발진이 발생하여 응급실에 왔다. 임신 39주에 자연 질식분만으로 태어났고 발달 이정표를 모두 달성했으며 예방접종도 완료했다. 과거력으로 반려동물 비듬과 돼지풀에 대한 경미한 알레르기, 심한 땅콩 알레르기, 천식이 있다. 평소 응급 흡입기와 에피펜을 모두 가지고 다니지만 오늘은 잊어버렸다. 혈압 112/87 mmHg, 심박수 111회/분, 호흡수 25회/분, 체온 37.2°C(99.0°F)였다. 진찰에서 얼굴에 심한 부종이 있고 양쪽 폐에서 들을 수 있는 협착음이 있었다. 다음 중 가장 적절한 처치는?

## 선택지

A. 근육 내 에피네프린
B. 경구 디펜히드라민
C. 고강도 국소 디펜히드라민
D. 흡입 나트륨 크로몰린(비만세포 안정제)

## 해설


음식 노출 후 얼굴 부종·발진과 호흡곤란·협착음이 함께 있어 혈압이 정상이어도 아나필락시스를 의심한다. 우선 처치는 근육 내 에피네프린(A)이다. 항히스타민제나 크로몰린으로 기도 문제의 치료를 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000294`와 직접 대조했다.
- 판정: 음식 노출 후 피부·점막 및 호흡기 침범으로 A 유지. 정상 혈압인 본 사례에 저혈압을 필수인 것처럼 덧붙이지 않도록 해설 교정. 불일치 플래그는 오연결 아님.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/
- https://www.resus.org.uk/professional-library/faqs/faqs-anaphylaxis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000294
