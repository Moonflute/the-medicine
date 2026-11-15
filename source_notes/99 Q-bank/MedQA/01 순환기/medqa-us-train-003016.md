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
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

큰 심실중격결손을 치료받지 않은 16세 환자가 점차 심해지는 운동 시 호흡곤란을 호소한다. 산소포화도는 86%이고 곤봉손가락과 큰 폐동맥판 제2심음이 있다. 심도자에서 매우 높은 폐혈관저항과 우좌 단락이 확인된다. 결손 폐쇄에 대한 판단으로 옳은 것은?

## 선택지

A. 청색증을 교정하기 위해 즉시 결손을 폐쇄한다
B. 아이젠멩거 생리이므로 결손 폐쇄를 피하고 전문 치료를 의뢰한다
C. 이뇨제로 울혈이 감소하면 폐혈관저항과 무관하게 폐쇄한다
D. 결손이 클수록 폐혈관저항과 무관하게 폐쇄의 이득이 커진다

## 해설


지속된 좌우 단락으로 폐혈관저항이 크게 올라 우좌 단락과 저산소혈증이 생기면 아이젠멩거 생리다. 이 상태에서 결손을 닫으면 우심실 부하가 악화될 수 있어 폐쇄하지 않고 선천성 심장질환과 폐고혈압 전문팀에 의뢰한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 큰 미교정 VSD의 폐혈관질환/우심실 압력부하는 우심실 융기 B; 좌심실 용적부하 소견과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003016
- https://doi.org/10.1161/CIR.0000000000001402
