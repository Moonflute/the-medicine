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

8세 여아가 땅콩을 먹고 수분 뒤 전신 두드러기와 입술 부종, 쉰 목소리와 숨참이 생겼다. 혈압은 아직 정상이다. 가장 먼저 투여할 약과 경로는?

## 선택지

A. 에피네프린 허벅지 근육주사
B. 에피네프린 정맥 일시주사
C. 살부타몰 흡입 단독
D. 세티리진 경구 투여

## 해설


알레르겐 노출 뒤 피부 증상과 기도 증상이 함께 나타나면 혈압이 정상이어도 아나필락시스로 치료한다. 첫 치료는 허벅지 앞가쪽 에피네프린 근육주사다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000294`와 직접 대조했다.
- 판정: 음식 노출 후 피부·점막 및 호흡기 침범으로 A 유지. 정상 혈압인 본 사례에 저혈압을 필수인 것처럼 덧붙이지 않도록 해설 교정. 불일치 플래그는 오연결 아님.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/
- https://www.resus.org.uk/professional-library/faqs/faqs-anaphylaxis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000294
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6684
