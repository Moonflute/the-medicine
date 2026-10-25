---
type: qbank
schema_version: 1
id: medqa-us-train-006348
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cb83396236187067c9742d4ed762172b908d21afac7ae82afaee5da9ee97e94e
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "가와사키병"
  - "점막피부 림프절 증후군"
  - "관상동맥류"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCA7JmA7IKs7YKk67ORIChLYXdhc2FraSBEaXNlYXNlKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 남아가 10일 동안 38.0~40.0°C(100.4~104.0°F)의 발열이 지속되어 부모와 함께 응급실에 내원했다. 진찰에서 아이는 아파 보이고 몸통 전체에 반점성 표피박리가 동반된 광범위한 발진이 있다. 손이 부어 있고 양쪽 결막염도 보인다. 검사 결과는 혈색소 12.9 g/dL, 헤마토크릿 37.7%, 평균적혈구용적 82.2 μm³, 백혈구 10,500/mm³(호중구 65%, 림프구 30%, 단핵구 5%), 혈소판 290,000/mm³, 적혈구침강속도 35 mm/h이다. 이 환자의 상태에서 다음 중 관리의 다음 단계로 가장 적절한 것은?

## 선택지

A. 저용량 아스피린
B. 고용량 아스피린
C. 코르티코스테로이드
D. 인플루엔자 백신

## 해설

10일 발열, 결막염·발진·사지 변화는 불완전 가와사키병도 포함하여 신속한 심초음파와 추가 염증 평가가 필요하다. 보기의 aspirin(B)은 급성 치료 구성요소이나 IVIG를 대체하지 않는다. 세 가지 임상 특징만으로 완전형 진단기준을 모두 충족했다고 단정하지 않으며, IVIG 중심 치료가 지연되어서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 완전 가와사키 기준 충족을 과잉 단정한 설명과 aspirin 단독 관상동맥류 예방 주장을 교정.
- https://www.heart.org/en/health-topics/kawasaki-disease
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001295

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006348
