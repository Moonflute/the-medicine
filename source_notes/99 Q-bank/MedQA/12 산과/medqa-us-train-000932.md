---
type: qbank
schema_version: 1
id: medqa-us-train-000932
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6384c49fb5ff54391d33af05a54244866c7d624d10e0a432e55a2224c357758e
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "hypotension"
  - "tachycardia"
  - "sympathetic blockade"
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

21세 임신 39주 G1P0 여성이 선택적 유도 분만을 위해 분만실에 내원하였다. 환자는 무통 분만(labor epidural)을 요청하였다. L4-L5 공간에 경막외 카테터를 고정하였다. 1.5% 리도카인(lidocaine)과 1:200,000 에피네프린(epinephrine)에 대한 혈역학적 반응은 없었다. 0.0625% 부피바카인(bupivacaine)의 지속적 주입을 시작하였다. 5분 후, 간호사가 마취과 의사에게 환자의 혈압이 80/50 mmHg로 저하되었고 심박수가 90 bpm에서 120 bpm으로 증가했다고 알렸다. 환자는 무증상이며 태아 심박수는 기저치에서 유의미한 변화가 없다. 환자는 다리가 무겁게 느껴지지만 여전히 움직일 수 있다고 말한다. 혈역학적 변화의 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 베인브리지 반사(Bainbridge reflex)
B. 국소 마취제의 척수강 내 침윤(Intrathecal infiltration)
C. 국소 마취제 전신 독성(Local anesthetic systemic toxicity)
D. 교감신경 차단(Sympathetic blockade)

## 해설


경막외 마취 시 교감신경 차단으로 혈관이 확장되어 혈압이 떨어지고 반사성 빈맥이 나타난다. 이는 환자의 저혈압·빈맥과 일치한다. 따라서 정답은 D이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000932
