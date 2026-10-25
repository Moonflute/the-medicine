---
type: qbank
schema_version: 1
id: medqa-us-validation-001115
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:07cff4599b2ca557d3632ade42d18490c835a53e555731a8e8a2415c7cc6828e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "선페스트"
  - "페스트균"
  - "서혜부 림프절병증"
  - "Plague"
related_disease_slugs: []
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

34세 남성이 심한 왼쪽 서혜부 통증과 부종으로 진료를 받으러 왔다. 뉴멕시코와 유타 사이 지역에서 노숙인들과 일한 뒤 귀가했으며 숙소에서 생쥐와 배설물을 본 적이 있다. 발열과 함께 단단한 중심을 가진 압통성 서혜부 림프절이 여러 개 커져 있고 같은 쪽 허벅지 안쪽에 국소 발진이 있다. 가장 가능성 높은 원인 병원체는?

## 선택지

A. 한타바이러스
B. 랍도바이러스
C. 보렐리아 부르그도르페리
D. 페스트균(Yersinia pestis)

## 해설


미국 남서부의 설치류 노출 가능성과 급성 발열·심한 통증의 서혜부 림프절 종대(bubo)는 림프절형 페스트를 시사한다. 원인균은 Yersinia pestis(D)이며 보통 감염된 벼룩에 의해 전파된다. 이는 흉터성 림프절염이라는 뜻이 아니며, 동물과 직접 접촉한 기억이 없어도 벼룩 노출을 배제할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001115 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 미국 남서부 설치류/벼룩 노출과 통증성 bubo의 plague D 유지. 흉터성 림프절염이라는 오역 교체.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001115
