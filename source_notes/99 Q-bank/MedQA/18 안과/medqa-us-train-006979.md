---
type: qbank
schema_version: 1
id: medqa-us-train-006979
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3468f98b0664809986f730c987f4a6b5cb63f91384de643927bfa412104e0b15
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "개방각 녹내장"
  - "시신경유두 함몰"
  - "안압"
  - "Infantile esotropia"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 여자가 추적 진료를 위해 내원했다. 6개월 전부터 읽기가 어려웠다. 도수가 다른 일반 안경을 여러 개 사용해 보았지만 도움이 되지 않았다. 고혈압과 제2형 당뇨병이 있으며 인슐린과 에날라프릴을 복용 중이다. 체온은 37.1°C(98.8°F), 맥박은 80회/분, 혈압은 126/84 mm Hg이다. 동공은 둥글고 빛에 느리게 반응한다. 시력은 왼쪽 눈 6/60, 오른쪽 눈은 6피트 거리에서 손가락 세기 정도이다. 안저검사에서 양측 시신경유두가 창백하다. 시신경유두 함몰비는 왼쪽 0.7, 오른쪽 0.9이다(정상 0.3). 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 연령관련 황반변성
B. 당뇨병성 망막병증
C. 개방각 녹내장
D. 시신경염

## 해설

현저하게 증가한 양측 시신경유두 함몰비와 점진적 시력저하는 선지 중 C, 개방각 녹내장에 가장 부합한다. 실제 진단은 안압·전방각·시야·시신경 구조검사를 종합하며 정상 안압에서도 녹내장성 손상이 가능하다. 이 문항에는 시야검사 결과가 제시되지 않았으므로 특정 시야 결손을 관찰한 것처럼 쓰지 않는다. 창백이 함몰에 비해 지나치면 다른 시신경병증도 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 유두 함몰에 근거한 C는 유지하되 본문에 없는 시야 결손을 만들어 넣지 않고 함몰비만으로 확진하지 않음을 명시.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006979
