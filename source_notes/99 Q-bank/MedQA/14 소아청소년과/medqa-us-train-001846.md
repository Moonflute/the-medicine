---
type: qbank
schema_version: 1
id: medqa-us-train-001846
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:715e0d0598adda5a47c7a7f40fe6dbf6f30773528ca8b8c61ce4500a22d38648
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "vaccine contraindication"
  - "anaphylaxis"
  - "live attenuated influenza vaccine"
question_type: prevention
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVhOuCmO2VhOudveyLnOyKpCAoQW5hcGh5bGF4aXMpLm1k
  - MDYg7JWM66CI66W06riwL-ydjOyLnSDsnZjsobQg7Jq064-ZIOycoOuwnCDslYTrgpjtlYTrnb3si5zsiqQgKEZvb2QtRGVwZW5kZW50IEV4ZXJjaXNlLUluZHVjZWQgQW5hcGh5bGF4aXMpLm1k
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
difficulty: standard
answer: D
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
original_answer: B
answer_change_reason: "난알레르기는 연령 적합 인플루엔자 백신 금기가 아니다. 12개월에서 비강 생백신 D가 연령상 부적합하여 B→D 변경."
---

# MedQA US 임상문제

## 문제

12개월 남아가 정기검진을 위해 내원했다. 몇 달 전 부모와 필리핀에서 이주했으며 예방접종 기록은 없다. 어머니는 생후 6개월에 예방접종 후 혀와 얼굴이 붓는 심한 알레르기 반응이 있었다고 한다. 당근, 달걀, 바나나 등 고형식을 시작했을 때도 같은 반응이 있었다. 다음 중 권장하지 않는 예방접종은 무엇인가?

## 선택지

A. 홍역·유행성이하선염·풍진 (MMR) 백신
B. 근육주사 인플루엔자 백신
C. 수두 백신
D. 비강 내 인플루엔자 백신

## 해설

비강 인플루엔자 생백신은 2세 미만에 사용하지 않으므로 D가 맞다. 난알레르기 자체는 연령·건강상태에 맞는 인플루엔자 백신의 금기가 아니다. 이전 불명 백신 뒤 중증 반응은 원인 성분·백신을 확인해 별도로 평가한다. 비강 제제를 불활화 백신으로 설명한 것도 잘못이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 난알레르기는 연령 적합 인플루엔자 백신 금기가 아니다. 12개월에서 비강 생백신 D가 연령상 부적합하여 B→D 변경.
- https://www.cdc.gov/flu/hcp/vax-summary/seasonal-influenza-vaccines.html
- https://www.cdc.gov/flu/vaccines/egg-allergies.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001846
