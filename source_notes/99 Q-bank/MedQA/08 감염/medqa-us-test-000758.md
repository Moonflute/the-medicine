---
type: qbank
schema_version: 1
id: medqa-us-test-000758
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:d949fc258934877488b4f3a1d01e8a02c9041c6ab04e78cbb704198f5fbe4d88
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "독성쇼크증후군"
  - "월경용 탐폰"
  - "황색포도상구균 독소"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

18세 여성이 어지러움과 현기증으로 응급실에 왔다. 일주일 동안 메스꺼움, 간헐적 구토, 근육통, 전신 발진, 기면이 있었다. 호흡곤란은 없었다. 아파 보였고 체온 39.1°C(102.3°F), 맥박 118회/분, 혈압 94/60 mmHg였다. 심장 진찰은 정상이었고 몸통과 사지에 넓은 홍반성 발진 및 손바닥·발바닥 피부 박리가 있었다. 혈색소 13.6 g/dL, 백혈구 19,300/mm³, 혈소판 98,000/mm³, BUN 47 mg/dL, 포도당 88 mg/dL, 크레아티닌 1.8 mg/dL, 총 빌리루빈 2.1 mg/dL, AST 190 U/L, ALT 175 U/L였고 요검사는 정상이었다. 추가 병력에서 가장 가능성 높은 내용은?

## 선택지

A. 최근 하이킹 여행
B. 정맥주사 헤로인 남용
C. 수막구균혈증 환자와의 접촉
D. 현재 월경 중

## 해설


고열, 미만성 홍반, 손발의 피부 박리와 다장기 이상은 독성쇼크증후군을 시사한다. 선택지 중 월경 중이라는 병력(D)은 탐폰 사용과 연관된 포도알균 독성쇼크 가능성을 뒷받침한다. 탐폰을 생리식염수라고 설명한 기존 문구는 오류이다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000758`와 직접 대조했다.
- 판정: 월경 관련 독성쇼크를 시사해 D 유지. 생리식염수(탐폰)라는 해설 오류와 원인 빈도 단정을 제거.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.fda.gov/consumers/consumer-updates/facts-tampons-and-tampon-safety

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000758
