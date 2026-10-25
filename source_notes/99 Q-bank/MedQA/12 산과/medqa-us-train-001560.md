---
type: qbank
schema_version: 1
id: medqa-us-train-001560
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c0b1b8f2061d762179a196886504d9bd4a20e09456c52da1ed39a05c2cafd7e2
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "incomplete abortion"
  - "anembryonic pregnancy"
  - "expectant management"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-u2iOyZhOyghCDsnKDsgrAgKEluY29tcGxldGUgQWJvcnRpb24pLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 12주인 22세 초임부가 몇 시간 동안 복부 경련과 큰 질혈전을 배출하여 내원했다. 체온은 36.8°C (98.3°F), 맥박은 75회/분, 혈압은 110/65 mmHg이다. 자궁은 임신 12주 크기이고 질경검사에서 자궁경부구가 열려 있으며 질원개에 혈전이 있다. 질식 초음파에서 빈 임신낭이 보인다. 침습적 처치를 걱정한다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 기대요법
B. 메토트렉세이트 치료
C. 연속 β-hCG 측정
D. 옥시토신 치료

## 해설

출혈·경련과 열린 경부는 진행 중 초기 유산에 합당하다. 임신 소실이 확실하고 혈역학적으로 안정하며 감염·과다출혈이 없고 비침습 관리를 원한다면 기대요법(A)이 가능하다. 빈 임신낭이라는 한 문구만으로 모든 초기 임신을 유산 확진하지 않으며 필요시 크기·반복영상 기준을 확인한다. 과다출혈·발열·실신 시 즉시 재평가하고 완료 여부를 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 안정된 초기 유산의 선택권 및 진단 확인·출혈 경고 보강.
- https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001560
