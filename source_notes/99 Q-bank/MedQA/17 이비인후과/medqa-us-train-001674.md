---
type: qbank
schema_version: 1
id: medqa-us-train-001674
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4ae20f952971ee7d357b43178a7ea4a2089ebcba40cc2cff7790a41afb561973
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "juvenile nasopharyngeal angiofibroma"
  - "epistaxis"
  - "nasal mass"
question_type: investigation
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-u5hOy2nO2YiCAoRXBpc3RheGlzKS5tZA
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
---

# MedQA US 임상문제

## 문제

13세 남아가 1개월 동안 점점 심해지는 코호흡곤란과 2주 동안 반복되는 심한 코피로 내원했다. 오른쪽 콧구멍을 막으면 코로 숨을 쉴 수 없고 후각이 감소한다. 천식은 흡입 알부테롤로 잘 조절된다. 활력징후는 정상이다. 코 안에 분홍색 엽상 종괴가 왼쪽 비강을 가득 채우고 중격은 오른쪽으로 휘어져 있다. 종괴는 만지면 출혈한다. 다음 중 진단의 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 응고검사
B. 염소 땀검사
C. 종괴 펀치생검
D. 조영증강 머리 CT

## 해설

청소년 남성의 반복 코피, 편측 코막힘, 접촉 시 출혈하는 종괴는 청소년 비인두 혈관섬유종(juvenile nasopharyngeal angiofibroma)을 시사한다. 이는 혈관이 풍부한 양성 종양으로 혈관육종이 아니다. 제시된 선택지 중 D, 조영증강 CT로 병변 범위와 혈관성 특징을 평가하는 것이 적절하다. 혈관성 종양이 의심될 때 외래 펀치생검을 먼저 하면 심한 출혈을 일으킬 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 청소년 남성의 출혈성 비강 종괴를 혈관육종으로 잘못 명명한 해설을 비인두 혈관섬유종으로 교정. 조영 CT D와 무분별한 생검의 출혈위험을 대조.
- 공식/학회 근거: https://medicine.uiowa.edu/iowaprotocols/juvenile-nasopharyngeal-angiofibroma

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001674
