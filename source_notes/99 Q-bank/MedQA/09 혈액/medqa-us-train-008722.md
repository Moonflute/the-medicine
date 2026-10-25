---
type: qbank
schema_version: 1
id: medqa-us-train-008722
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86198f33c6ccf315a66d553ad1f27d8881bbf8ced1e8c0fa1957530caecb89dd
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "aplastic anemia"
  - "pancytopenia"
  - "hypocellular bone marrow"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yerOyDneu2iOufieyEsSDruYjtmIggKEFBKSAoQXBsYXN0aWMgQW5lbWlhIChBQSkpLm1k
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

9세 남아가 3일 동안 지속된 발열과 양치 후 출혈로 어머니와 함께 내원했다. 어머니는 최근 며칠 동안 피로 때문에 축구 연습을 일찍 마치고 데리러 와 달라고 했다고 한다. 창백하고 병색이 있다. 체온 38.3°C(101.1°F), 맥박 115회/분, 혈압 100/60mmHg이다. 폐 청진은 깨끗하고 복부는 부드럽고 압통이 없으며 장기비대는 없다. 복부와 정강이에 피하 출혈 반점이 여러 개 있다. 혈색소 7g/dL, 백혈구 2,000/mm³, 혈소판 40,000/mm³, 망상적혈구 0.2%이다. 혈청 전해질은 정상이다. 골수 생검에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 비정상 형질세포가 판상으로 증식
B. 정상 형태의 적혈구가 있는 저세포성 지방 충만 골수
C. 고세포성 이형성 골수와 고리형 철적모구
D. 골수의 콜라겐과 섬유조직 침윤

## 해설


장기비대 없이 범혈구감소와 심한 망상적혈구 감소가 있어 재생불량빈혈이 의심된다. 골수검사에서는 조혈세포가 감소하고 지방으로 대체된 저세포성 골수(B)가 예상된다. 골막의 이상을 뜻하는 것이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008722 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 범혈구감소·망상적혈구 저하에서 재생불량빈혈의 지방성 저세포 골수 B를 유지. 골수를 골막으로 기술한 오류를 정리.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008722
