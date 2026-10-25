---
type: qbank
schema_version: 1
id: medqa-us-train-001742
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:979b1f2eb68ac9a90badf87c6fd90c4d3ca5cf72279f9dbf4cea63fce1bdb4a0
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "ovarian torsion"
  - "adnexal torsion"
  - "reduced ovarian blood flow"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-u2gOyGjeq4sOyXvOyghCAoQWRuZXhhbCBUb3JzaW9uKS5tZA
difficulty: complex
answer: B
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

23세 여성이 성관계 6시간 후 갑자기 시작된 복통, 오심 및 구토로 응급실에 내원했다. 발열, 설사, 질 출혈·분비물은 없고 복부검사에서 심한 오른쪽 하복부 압통, 반발통과 근육 방어가 있다. 골반검사에서 맑은 분비물과 오른쪽 부속기 압통이 있으나 자궁경부 움직임 통증은 없다. 헤모글로빈 10.5 g/dL, 백혈구 9,000/mm3, 혈소판 250,000/mm3이며 임신검사는 음성이다. 다음 중 영상검사에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 고에코성 난관 고리
B. 도플러에서 난소 혈류 감소
C. 복잡한 에코성 자궁내 종괴
D. 불완전 격막이 있는 난관 팽창

## 해설

갑작스러운 일측 통증·구토·부속기 압통은 난소/부속기 염전을 의심하게 한다. 선택지 중 도플러 혈류 감소(B)가 해당 병태를 지지한다. 다만 혈류가 보존되어도 염전을 배제하지 못하며, 출혈성 낭종 파열 등 다른 급성 원인과 감별해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ‘난소 비전형성 낭종’이라는 잘못된 병명 삭제 및 도플러 한계 설명.
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/08/adnexal-torsion-in-adolescents

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001742
