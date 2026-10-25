---
type: qbank
schema_version: 1
id: medqa-us-train-002271
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2418c1cd2b20eecf8984834dcb0c552df0116ebc9b7eae1786d06c6a1f25a8e9
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "aortic stenosis"
  - "paradoxical S2 splitting"
  - "left ventricular outflow obstruction"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
question_type: diagnosis
difficulty: standard
answer: C
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

77세 남성이 호흡곤란과 흉부 불편감으로 응급실에 왔다. 운동을 견디는 능력이 점점 감소해 최근에는 숨을 돌리기 위해 멈추지 않고는 계단 한 층도 오르기 어렵다. 신체검사에서 오른쪽 흉골 경계에 거칠고 점점 커졌다 작아지는 수축기 잡음이 들리며 경동맥으로 방사된다. 다음 중 추가로 나타날 가능성이 가장 높은 소견은?

## 선택지

A. 넓고 고정된 S2 분열
B. 견갑골 사이에서 지속적으로 기계음처럼 들리는 잡음
C. 역설적으로 분열된 S2
D. 심첨부에서 들리는 이완기 잡음

## 해설

대동맥판 협착에서는 좌심실 박출 시간이 길어져 A2가 P2 뒤로 지연될 수 있어 역설적 제2심음 분열 C가 나타난다. 흡기 때 P2가 늦어지면 분열이 좁아진다. 중증 석회화에서는 A2가 약해지거나 안 들릴 수도 있으므로 모든 협착에서 분열이 들리는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 대동맥판 협착의 역분열은 좌심실 박출 지연으로 A2가 늦어지는 기전.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002271
