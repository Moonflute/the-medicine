---
type: qbank
schema_version: 1
id: medqa-us-train-008283
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:76ce26d431190bd4e0faf50d011d4e6bbe212c0c4a205215997e14010825d7cd
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "COPD exacerbation"
  - "hypercapnic respiratory failure"
  - "smoking"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL0NPUETsnZgg6riJ7ISxIOyVhe2ZlCAoQWN1dGUgRXhhY2VyYmF0aW9uIG9mIENPUEQpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

62세 남자가 2일 동안 점점 심해지는 호흡곤란, 운동 시 경미한 흉통, 기침으로 내원했다. 일주일 전 미열과 코막힘이 있었고 고혈압 약을 잘 복용하지 않는다. 30년간 하루 담배 한 갑을 피우고 매일 맥주 3~4병을 마신다. 체온 37.1°C(98.8°F), 맥박 125회/분, 호흡수 29회/분, 혈압 145/86 mm Hg이다. 앉아 있어도 중등도 호흡곤란이 있고 양측 호흡음이 감소하며 전 폐야에 천명음, 흡기 시 복부가 안쪽으로 당겨지는 움직임이 있다. 동맥혈가스 pH 7.29, PCO₂ 63 mm Hg, PO₂ 71 mm Hg, HCO₃⁻ 29 mEq/L, 산소포화도 89%이다. 가장 가능성 높은 원인은?

## 선택지

A. 급성 천식 악화
B. 급성 폐색전증
C. 만성폐쇄성폐질환의 급성 악화
D. 울혈성심부전의 급성 비대상성 악화

## 해설


COPD 악화는 고탄산혈증, 저산소혈증을 동반한 저환기성 호흡부전으로, 환자의 흡연력·증상·ABG 소견이 이를 뒷받침한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008283
