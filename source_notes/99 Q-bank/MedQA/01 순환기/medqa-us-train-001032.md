---
type: qbank
schema_version: 1
id: medqa-us-train-001032
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:432ecafe7610a4eee11069fcf8182e0ea4971ecb343edc3637e40feb65c8bf89
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "sudden cardiac arrest"
  - "hypertrophic cardiomyopathy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-u5hO2bhOyEsSDsi6zqt7zrs5Hspp0gKEh5cGVydHJvcGhpYyBDYXJkaW9teW9wYXRoeSkubWQ
question_type: diagnosis
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강하던 25세 남성이 축구 연습 중 쓰러진 지 30분 만에 응급실로 이송되었습니다. 그의 아버지는 36세에 급성 심정지로 사망했습니다. 환자의 상태는 양호해 보입니다. 맥박은 분당 73회, 혈압은 125/78 mm Hg입니다. 심장 검사 소견이 제시되었습니다. 심전도(ECG)상 측면 유도(lateral leads)에서 큰 R파와 V1 및 V2 유도에서 깊은 S파가 관찰됩니다. 추가 평가에서 가장 가능성이 높은 소견은 무엇입니까?

## 선택지

A. 대동맥 뿌리 확장(Aortic root dilatation)
B. 좌심실 편심성 확장(Eccentric left ventricular dilation)
C. 비대칭 중격 비대(Asymmetric septal hypertrophy)
D. 승모판 섬유소성 괴사(Mitral valve fibrinoid necrosis)

## 해설

정답은 C이다. 운동 중 실신·젊은 나이의 부친 급사와 LVH형 ECG는 유전성 비대심근병증을 의심하게 한다. 추가 영상에서 비대칭 중격 비대가 관찰될 수 있다. ECG 전압만으로 전벽 또는 중격의 해부학적 비대를 직접 확정하는 것은 아니며 누락된 심장 진찰 그림의 소견을 새로 만들지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ECG의 LVH만으로 비대칭 중격을 확정한다는 인상을 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001032
