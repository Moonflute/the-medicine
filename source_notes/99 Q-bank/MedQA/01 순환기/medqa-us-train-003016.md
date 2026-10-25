---
type: qbank
schema_version: 1
id: medqa-us-train-003016
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b3b392f910390c263a8be99058227841553d04a4f3f6acd89093e37c2cb0c7a6
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Eisenmenger syndrome"
  - "ventricular septal defect"
  - "right ventricular heave"
  - "pulmonary hypertension"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius7IukIOykkeqyqSDqsrDshpAgKFZlbnRyaWN1bGFyIFNlcHRhbCBEZWZlY3QpLm1k
  - MDIg7Zi47Z2h6riwL-2PkOqzoO2YiOyVlSAoUHVsbW9uYXJ5IEh5cGVydGVuc2lvbikubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cp7IukIOykkeqyqSDqsrDshpAgKEF0cmlvdmVudHJpY3VsYXIgU2VwdGFsIERlZmVjdCkubWQ
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

16세 남아가 점점 심해지는 피로와 운동 시 호흡곤란으로 소아과에 내원했다. 부모는 개발도상국에서 이주했으며 그곳에서 큰 심실중격결손을 진단받았지만 경제적 사정과 의료시설 부족으로 수술을 받지 못했다고 한다. 큰 심실중격결손 환자는 아이젠멩거증후군을 포함한 합병증 위험이 높고, 이 합병증이 발생하면 결손의 수술적 폐쇄에 적합하지 않다고 설명했다. 신체검사에서 다음 중 어떤 소견이 있으면 이 합병증을 시사하는가?

## 선택지

A. 심첨부의 중간이완기 저음 우렁거림
B. 우심실 융기
C. 왼쪽 전흉부 돌출
D. 심첨 박동의 외측 전위

## 해설


큰 VSD가 장기간 남아 있으면 폐고혈압이 진행되어 우심실 융기가 나타난다(우심실 부하 증가). 이는 Eisenmenger 증후군의 전형적인 신체소견이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 큰 미교정 VSD의 폐혈관질환/우심실 압력부하는 우심실 융기 B; 좌심실 용적부하 소견과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003016
