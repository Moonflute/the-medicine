---
type: qbank
schema_version: 1
id: medqa-us-test-000368
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b814468f6b5394f6e695c65270c127d6f0406e3ccde96d27f91ebf52c03277b6
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 발진"
  - "파보바이러스 B19"
  - "풍진 감별"
  - "Parvovirus B19 infection"
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoCDspJEg6rCQ7Je8Lm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 15주인 22세 여성이 산전 진찰을 받으러 왔다. 5일 동안 가슴, 얼굴, 팔의 발진, 맑은 콧물, 경미한 양측 무릎 통증이 있었다. 증상은 심하지 않지만 태아를 걱정한다. 10일 전 가족 모임에서 발진이 있던 여동생과 접촉했으며 여동생은 풍진 감염 진단을 받았다. 예방접종력은 확인할 수 없다. 혈압 110/70 mmHg, 심박수 89회/분, 호흡 12회/분, 체온 37.6℃(99.7℉)였다. 몸통, 사지, 얼굴에 조밀한 반구진성 망상 발진이 있었고 림프절, 간, 비장 비대는 없었다. 무릎 관절은 정상이었다. 1년 전 혈청검사에서 풍진 IgM 음성, IgG 1:128, IgG 결합력 높음이었고 현재는 IgM 음성, IgG 1:64, 결합력 높음이었다. 다음 중 가장 적절한 처치는?

## 선택지

A. 안심시키고 산후 풍진 예방접종을 권한다
B. 임신 중절을 권한다
C. 융모막융모검사를 시행한다
D. 파보바이러스 B19 추가 혈청검사를 시행한다

## 해설

과거부터 높은 결합력의 풍진 IgG가 있고 IgM 음성 및 IgG 역가 상승이 없어 최근 일차 풍진 감염을 지지하지 않는다. 망상 발진과 관절통은 파보바이러스 B19 감염을 시사하므로 D의 항체 검사를 고려한다. 이는 풍진 재감염을 검출하는 검사가 아니라 발진의 다른 원인을 평가하는 검사이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 풍진 재감염 배제용으로 B19 검사를 한다는 잘못된 연결 수정.
- https://www.cdc.gov/rubella/php/laboratories/serology-testing.html
- https://www.cdc.gov/parvovirus-b19/about/parvovirus-b19-in-pregnancy.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000368
