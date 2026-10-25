---
type: qbank
schema_version: 1
id: medqa-us-train-009973
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:73e2f0f0a4f329d042be9b70c851d2165ec825cdd530bee0ae86fbd103ebe832
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "세균성 장염"
  - "집단 발생"
  - "캄필로박터 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-y6hO2VhOuhnOuwle2EsCAoQ2FtcHlsb2JhY3RlcikubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

특이한 과거력이 없는 4세 남아가 2일 동안 지속된 고열, 인후통, 오심, 구토, 혈성 설사로 아버지와 함께 소아과에 내원했다. 아버지는 새 개를 키우기 시작한 지 약 3주 후에 증상이 시작되었다고 한다. 또한 아이가 다니는 유치원의 다른 아이 몇 명도 비슷한 증상으로 아팠다고 한다. 최근 식단이나 생활 방식의 다른 변화는 없다. 혈압 123/81 mmHg, 맥박 분당 91회, 호흡수 분당 15회, 체온 39.2°C이다. 다음 중 이 환자 증상의 가장 가능성 높은 원인은?

## 선택지

A. 새로 키운 개
B. 최근 항생제 처방
C. 학교에서 세균에 노출
D. 적절한 예방접종 실패

## 해설


유치원에서 비슷한 혈성 설사 환자들이 발생한 역학은 학교에서의 세균 노출(C)을 지지한다. Shigella 등은 소량으로도 분변-경구 전파되어 보육시설 집단 발생을 일으킬 수 있다. Campylobacter는 개·오염 음식·물로 전파되지만 사람 간 전파는 흔하지 않다. 배양 없이 특정 균을 확정하거나 공동 음식 노출을 배제할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009973 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 유치원 유사 증상 집단 발생은 학교 세균 노출 C를 지지. Campylobacter의 흔한 사람 간 전파라고 잘못 설명하지 않고 Shigella 등 분변경구 집단감염을 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/shigella/prevention/preventing-shigella-infection-among-young-children.html
- https://www.cdc.gov/campylobacter/hcp/clinical-overview/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009973
