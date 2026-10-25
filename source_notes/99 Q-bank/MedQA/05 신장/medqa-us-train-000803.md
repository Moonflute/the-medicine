---
type: qbank
schema_version: 1
id: medqa-us-train-000803
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:38639d5220da0bf673f16ce91388b06dde5ab95ac81371be76ff557778eca3bc
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "gastroesophageal reflux disease"
  - "chronic diarrhea"
  - "hyperkalemia"
  - "renal failure"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2FwdG9wcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 여성이 흉통, 호흡곤란, 쇠약감을 주소로 응급실에 내원하였다. 과거력은 없으며 평소 건강 문제로 의사를 만나는 것을 거부해 왔다. 계통적 문진상 만성적이고 심한 위식도역류질환(GERD)과 만성 설사가 확인된다. 체온은 36.8°C, 혈압은 177/105 mmHg, 맥박은 88회/분, 호흡수는 14회/분, 실내 공기에서의 산소 포화도는 97%이다. 검사 결과는 다음과 같다. 혈색소: 10 g/dL, 헤마토크릿: 30%, 백혈구 수: 4,500/mm^3(정상 감별계산), 혈소판 수: 192,400/mm^3. 혈청: Na+: 139 mEq/L, Cl-: 101 mEq/L, K+: 6.3 mEq/L, BUN: 65 mg/dL, 포도당: 99 mg/dL, 크레아티닌: 3.1 mg/dL. 특이사항으로 환자는 손의 움직임이 좋지 않아 가운을 입거나 물컵을 다루는 등의 대부분의 작업에 간호사의 도움이 필요하다. 또한 환자는 저절로 호전되는 심한 손 통증이 재발한다. 환자에게 칼슘, 인슐린, 포도당을 투여하고 투석을 시작하였다. 이 환자에게 가장 적절한 약물 치료는 무엇인가?

## 선택지

A. Captopril
B. Furosemide
C. Labetalol
D. Nifedipine

## 해설

정답은 A이다. 심한 GERD·설사, 손 운동 제한과 반복 Raynaud 유사 통증은 전신경화증을 시사한다. 심한 고혈압·AKI는 경피증 신위기를 의심하게 하며 ACE 억제제 captopril을 신속히 사용하는 특이 적응증이다. ACEI는 K를 낮추는 약이 아니라 오히려 고칼륨혈증을 악화시킬 수 있다. 이미 시행한 응급 고K처치·투석과 함께 K/신기능·혈압을 면밀히 감시하면서 치료한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACEI가 K를 낮춘다는 위험한 오류를 제거하고 systemic sclerosis renal crisis의 특이 적응증 설명.
- https://ard.bmj.com/content/annrheumdis/early/2024/10/17/ard-2024-226430.full.pdf?with-ds=yes

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000803
