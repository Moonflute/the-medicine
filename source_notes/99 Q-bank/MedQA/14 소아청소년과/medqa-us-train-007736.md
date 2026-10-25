---
type: qbank
schema_version: 1
id: medqa-us-train-007736
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:de5d10adb6f7b34c02831d5694c8618858f00d5d33dfcda715cb7ced699cff22
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "parvovirus B19"
  - "erythema infectiosum"
  - "slapped-cheek rash"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIO2ZjeuwmCAoRXJ5dGhlbWEgSW5mZWN0aW9zdW0pLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 남아가 3일 전 시작된 얼굴의 가려운 발진으로 어머니와 함께 가정의학과에 내원했다. 어머니에 따르면 1주일 조금 전에 발열과 콧물이 있었고 인후통이나 기침은 없었다. 특별한 질환이나 복용 약물은 없다. 예방접종은 모두 완료했다. 심박수 102회/분, 호흡수 24회/분, 체온 36.5°C(97.7°F), 혈압 92/65 mm Hg이다. 영양 상태가 좋고 의식이 명료하다. 심장 청진에서 심잡음은 없고 양측 폐 청진도 정상이다. 좌측 코 옆에서 좌측 광대뼈 안쪽까지 이어지는 홍반성 뺨 발진이 있다. 림프절병증은 없다. 전신 피부검사에서 하지에 홍반성 망상 발진이 보인다. 다음 중 이 환자의 징후와 증상을 일으킨 원인체는?

## 선택지

A. 파보바이러스 B19
B. 아데노바이러스
C. 사람 헤르페스바이러스 6형(HHV-6)
D. 풍진바이러스

## 해설

뺨 홍반과 망상성 사지 발진은 파보바이러스 B19에 의한 전염성 홍반(A)에 부합한다. 원문 체온은 36.5°C와 101.6°F가 모순되어, 섭씨값을 보존하고 화씨를 97.7°F로 환산하였다. 실제 발열을 새로 가정하지 않으며 제공되지 않은 사진 소견도 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 영어 원문 자체의 36.5°C/101.6°F 불일치를 명시하고 섭씨값의 화씨 환산만 정정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007736
