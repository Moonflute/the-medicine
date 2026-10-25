---
type: qbank
schema_version: 1
id: medqa-us-train-006142
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2d9875030615d0d2e5a05de16887ff1a43e75c4281d3ff520742a980f5b706a0
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "비후성 폐쇄성 심근병증"
  - "운동 중 실신"
  - "쪼그려 앉기와 잡음 감소"
  - "Hypertrophic cardiomyopathy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-u5hO2bhOyEsSDsi6zqt7zrs5Hspp0gKEh5cGVydHJvcGhpYyBDYXJkaW9teW9wYXRoeSkubWQ
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

20세 남성이 경기 중 실신하여 코치와 함께 응급실에 왔다. 육상팀에 들어온 뒤 두 번째로 발생했다. 어린 시절 치료받지 않은 연쇄상구균 인두염이 여러 번 있었고 현재 약물은 복용하지 않는다. 체온은 99.5°F(37.5°C), 혈압은 132/68 mmHg, 맥박은 분당 90회, 호흡수는 분당 12회, 산소포화도는 98%이다. 신경학적·폐검사는 정상이고 심장검사에서 좌측 하부 흉골연에서 가장 크게 들리고 액와로 방사되는 수축기 잡음이 있다. 쪼그려 앉은 자세에서 심장검사를 반복했다. 다음 중 이 환자에게 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 비후성 폐쇄성 심근병증에서 잡음 감소
B. 승모판 협착에서 잡음 증가
C. 승모판 협착에서 잡음 감소
D. 대동맥판 협착에서 잡음 증가

## 해설

쪼그려 앉으면 정맥환류와 전신혈관저항이 증가하여 좌심실 충만/크기가 커지고 동적 유출로폐쇄가 줄어 HOCM 잡음 A가 감소한다. 좌심실 용적이 줄어서 잡음이 약해지는 것이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Squat의 HOCM잡음 감소 A를 좌심실 용적감소라는 반대 기전에서 증가로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006142
