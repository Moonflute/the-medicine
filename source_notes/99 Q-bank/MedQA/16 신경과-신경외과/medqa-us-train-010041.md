---
type: qbank
schema_version: 1
id: medqa-us-train-010041
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b831c9c0432b6f4acf161a0a978fc153a1e81b7e1d03297c23e297deede6a3d7
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "하지불안증후군"
  - "철결핍"
  - "철분 검사"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2VmOyngCDrtojslYgg7Kad7ZuE6rWwIChSZXN0bGVzcyBMZWcgU3luZHJvbWUpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 여성이 잠을 잘 수 없어 일차진료의에게 내원했다. 밤에 잠자리에 들면 일어나서 걸어 다니고 싶은 충동이 생긴다. 그렇게 하면 남편을 자주 깨워 남편이 짜증을 낸다. 밤에 계속 불안하고 다리를 움직이고 싶은 느낌이 있으며 일어나 걸으면 호전된다. 낮에는 증상이 없다. 우편배달원으로 일하며 은퇴를 앞두고 있다. 과거력으로 불안, 우울증, 과민성대장증후군, 월경곤란증이 있으나 현재 약물은 복용하지 않는다. 체온 99.5°F(37.5°C), 혈압 157/98 mmHg, 맥박 분당 80회, 호흡수 분당 17회, 산소포화도 98%이다. 상하지 근력 5/5, 반사 2+, 보행 안정, 감각 정상이다. 심폐 및 복부 진찰은 정상이다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. 알프라졸람
B. 황산철
C. 철분 검사
D. 프라미펙솔

## 해설

야간 휴식 시 다리를 움직이고 싶은 충동이 생기고 움직이면 호전하는 양상은 RLS에 맞는다. 초기에는 철 상태(C), 특히 ferritin과 transferrin saturation을 평가하여 철 보충 필요성을 결정한다. 말초신경병증이나 akathisia 등의 모방 질환도 감별한다. 철 결핍을 확인하지 않고 일률적으로 철분이나 도파민작용제를 시작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 철 검사 C 유지하며 ferritin/TSAT 평가를 명시. 화씨 온도 오역 복원.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC11701286/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010041
