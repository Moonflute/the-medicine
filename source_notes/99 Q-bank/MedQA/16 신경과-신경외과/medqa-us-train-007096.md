---
type: qbank
schema_version: 1
id: medqa-us-train-007096
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a533d031e52434ba597450ca1c7121f47d8e19e59777532419550c43316df9e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "브라운-세카르 증후군"
  - "척수 반절단"
  - "호너 증후군"
  - "척수 손상"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC9Ccm93bi1TZXF1YXJkIOymne2bhOq1sCAoQnJvd24tU2VxdWFyZCBzeW5kcm9tZSkubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sspnsiJgg7Jm47IOBIChTcGluYWwgY29yZCB0cmF1bWEpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

39세 여자가 목에 자상을 입은 후 응급실에 내원했다. 환자는 개를 산책시키던 중 강도를 만나 칼에 찔렸다고 한다. 활력징후는 안정적이다. 근력검사에서 오른쪽 팔꿈치 굽힘과 폄, 손목 폄, 손가락 움직임이 2/5이다. 오른쪽 바빈스키 징후는 위쪽으로 나타난다. 오른쪽 어깨까지 가벼운 촉각과 진동 감각이 감소되어 있다. 또한 왼쪽 하지, 아래팔 뒤쪽, 가운데손가락을 포함한 왼쪽에서 핀으로 찌르는 감각과 온도 감각이 감소되어 있다고 한다. 오른쪽 동공은 왼쪽보다 2mm 작고 오른쪽 위눈꺼풀이 처져 있다. 이 환자의 증상을 일으킨 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 전척수 증후군
B. 척수 반절단 손상
C. 후척수 증후군
D. 척수공동증

## 해설

우측 척수 반절단(B)은 병변 아래 우측 피질척수로 손상에 의한 근력저하·Babinski 징후와 우측 후주 감각 저하를 일으킨다. 척수시상로의 통각·온도각은 척수에서 교차하므로 좌측에서 저하된다. 우측 교감신경 하행로 손상은 같은 쪽 Horner 증후군을 설명한다. 모든 감각과 운동이 반대쪽에 나타나는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 반절단 손상의 운동·후주 감각과 통온각의 좌우를 반대로 설명한 해설 교정. neck 부위 번역 누락 복원.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007096
