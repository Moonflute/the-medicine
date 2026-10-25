---
type: qbank
schema_version: 1
id: medqa-us-test-000830
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7191a608eed50b2306f6ef3f6867549a5c49b053e85d550c953400903c42c897
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "지역사회획득폐렴"
  - "노인 폐렴"
  - "중증도 평가"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ygle2YlSDtj5DroLQgKFR5cGljYWwgUG5ldW1vbmlhKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTW94aWZsb3hhY2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성이 기침과 피로로 응급실에 왔다. 요양원 직원에 따르면 지난 하루 동안 혼돈이 있어 이송되었다. 당뇨병과 고혈압이 있으며 인슐린, 메트포르민, 리시노프릴, 아토르바스타틴을 복용 중이다. 체온 102°F(38.9°C), 혈압 107/58 mmHg, 맥박 120회/분, 호흡 15회/분, 산소포화도 98%였다. 폐에서 수포음이 들리고 심장 청진에서 S4가 있었다. 다음 중 가장 적절한 처치는?

## 선택지

A. 아지트로마이신을 투여하고 일반병실에 입원시킨다
B. 아지트로마이신을 투여하고 퇴원시킨다
C. 아지트로마이신과 목시플록사신을 투여하고 중환자실에 입원시킨다
D. 목시플록사신을 투여하고 일반병실에 입원시킨다

## 해설

정답은 D이다. 발열·기침·수포음과 새 혼돈이 있어 폐렴을 의심하며 입원 평가가 필요하다. 제시된 자료에서 기계환기나 혈관수축제 필요 등 ICU의 주요 기준은 없고, 비중증 입원 CAP의 한 선택지인 호흡기 fluoroquinolone 단독요법 moxifloxacin과 일반병실 입원 D가 가장 적합하다. 누락된 검사·중증도 평가를 보완해야 하므로 일반병실이 반드시 충분하다고 단정하지 않는다. 요양원 거주 자체만으로 광범위 HCAP 요법을 적용하지 않으며 macrolide와 fluoroquinolone을 무조건 중복하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐렴의 중증도를 단정하지 않고 입원 비중증 CAP 치료로 D를 설명; 요양원 거주만으로 HCAP 분류하지 않음.
- https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap-in-adults

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000830
