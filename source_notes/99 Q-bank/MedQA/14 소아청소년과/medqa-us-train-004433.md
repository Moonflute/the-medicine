---
type: qbank
schema_version: 1
id: medqa-us-train-004433
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e5a95908fcb182eb00aef23b468f504a861c6c28f0b9d94384de89440540daf
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "대혈관 전위"
  - "청색증성 선천성 심장병"
  - "임신성 당뇨병"
question_type: association
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA7ZiI6rSAIOyghOychCAoVHJhbnNwb3NpdGlvbiBvZiB0aGUgR3JlYXQgQXJ0ZXJpZXMpLm1k
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
difficulty: complex
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

4,700g (10lb 6oz)의 남아가 28세 초임부에게서 태어난 지 하루 후 입술과 손발톱이 푸르게 변했다. 체온은 37.3°C (99.1°F), 맥박은 분당 166회, 호흡수는 분당 63회, 혈압은 68/44 mm Hg이다. 실내 공기에서 맥박산소측정 산소포화도는 81%이다. 신체검사에서 중심성 청색증이 보인다. 왼쪽 아래 흉골연에서 2/6등급 범수축기 잡음이 들린다. 제2심음은 하나로 들린다. 보조 산소를 투여해도 청색증은 호전되지 않는다. 흉부 X선에서 심장 윤곽이 커져 있고 종격동이 좁아져 있다. 산모를 추가로 평가하면 다음 중 무엇이 나타날 가능성이 가장 높은가?

## 선택지

A. 혈청 TSH 증가
B. 임신 중 리튬 복용
C. 신속 혈장 리진검사 양성
D. HbA1c 상승

## 해설

신생아의 산소에 잘 반응하지 않는 중심 청색증·단일 제2심음과 좁은 종격동은 대혈관전위(d-TGA)를 시사한다. 조절되지 않는 모체 당뇨와 d-TGA의 위험 증가가 연관되어 D가 가장 적절하다. 선천 구조 이상은 기관 형성기 노출과 관련되므로 이를 임신 후반에 진단되는 임신성 당뇨만의 영향으로 한정할 수 없다. HbA1c 상승이나 거대아만으로 개별 기형을 확진한다는 뜻도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 선천 심장기형의 모체 당뇨 연관성을 임신 후반에 진단되는 임신성 당뇨 하나로 한정한 설명을 바로잡았다.
- https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects/d-transposition-of-the-great-arteries

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004433
