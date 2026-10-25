---
type: qbank
schema_version: 1
id: medqa-us-test-000652
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2bb55ad0acee2cb4ca4b98df98fa38399fe86cfc44241d1a3cb59fb9fc88f2aa
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "만성질환 빈혈"
  - "류마티스관절염"
  - "철 대사"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDsp4jtmZgg67mI7ZiIIChBbmVtaWEgb2YgQ2hyb25pYyBEaXNlYXNlKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: mechanism
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

45세 여성이 추적 진료를 받으러 왔다. 특별한 증상은 없지만 최근 평소보다 피곤하고 매주 쇠약해지는 느낌이 있다. 장거리 보행이나 격한 활동 시 숨이 차기도 한다. 3년 전 류마티스관절염을 진단받아 통증 완화와 질병 진행 억제를 위한 약물을 복용 중이다. 체온 37.0°C(98.6°F), 호흡 15회/분, 맥박 107회/분, 혈압 102/98 mmHg였다. 모발이 가늘고 사지가 약간 차가우며 손발톱 바닥이 평평했다. 혈액검사와 철분검사를 시행할 예정이다. 철분 검사에서 가장 예상되는 소견은?

## 선택지

A. 철결합능 증가
B. 페리틴 수치 감소
C. 철결합능 감소
D. 철결합능 정상

## 해설


만성 염증에서는 hepcidin 증가로 철의 이용이 제한되고 transferrin/TIBC가 감소할 수 있어 C가 맞다. Ferritin은 보통 정상 또는 증가하며 저장철이 아예 없다는 뜻은 아니다. 철결핍이 동반되면 양상이 달라질 수 있어 실제 철검사와 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000652 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 염증성 빈혈의 TIBC 감소 C 유지. low ferritin·철저장 실패라는 반대 설명을 정상/증가 ferritin과 철격리로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niddk.nih.gov/health-information/blood-diseases/anemia-inflammation-chronic-disease

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000652
