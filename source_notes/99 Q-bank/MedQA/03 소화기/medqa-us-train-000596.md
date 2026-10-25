---
type: qbank
schema_version: 1
id: medqa-us-train-000596
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ae8dd650a90f041e73a8d5bed55d460c79ef3c566f4573f608e29f783f52cf3d
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hepatitis B"
  - "chronic hepatitis B"
  - "acute hepatitis B"
  - "alcoholic hepatitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQu2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEIgKEhCVikpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQu2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBCKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 여성이 3주간 지속된 전신 피로감, 미열, 복통, 구역질을 주소로 내원하였다. 환자는 한 달 전 지역 축제에 참석하여 여러 지역 음식을 먹었으며, 이것이 원인이 아닐까 생각하고 있다. 또한 최근 물을 충분히 마시지 않아 소변 색이 진해졌다고 생각하고 있다. 환자는 제2형 당뇨병이 있다. 매일 맥주 1~2잔을 마신다. 재활 시설에서 간호조무사로 일하고 있다. 현재 복용 중인 약물은 글리부라이드(glyburide), 시타글립틴(sitagliptin), 종합비타민이다. 환자는 피로해 보인다. 체온은 38.1°C, 맥박은 99회/분, 혈압은 110/74 mmHg이다. 진찰상 경미한 공막 황달이 관찰된다. 간은 우측 늑골 하단 2~3cm 아래에서 촉지되며 압통이 있다. 검사실 소견은 다음과 같다: 혈색소 10.6 g/dL, 백혈구 수 11600/mm3, 혈소판 수 221,000/mm3. 혈청 요소질소 26 mg/dL, 포도당 122 mg/dL, 크레아티닌 1.3 mg/dL, 빌리루빈 3.6 mg/dL (총 3.6 mg/dL, 직접 2.4 mg/dL), 알칼리성 인산분해효소 72 U/L, AST 488 U/L, ALT 798 U/L. A형 간염 IgG 항체(HAV-IgG) 양성, B형 간염 표면 항원(HBsAg) 양성, B형 간염 핵심 IgG 항체(anti-HBc) 양성, B형 간염 외피 항원(HBeAg) 양성, C형 간염 항체(anti-HCV) 음성. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 비활동성 만성 B형 간염 감염
B. 급성 B형 간염 감염
C. 활동성 만성 B형 간염 감염
D. 알코올성 간염

## 해설

정답은 C이다. HBsAg·anti-HBc IgG·HBeAg 양성과 높은 ALT는 복제/염증 활성이 있는 만성 HBV 감염의 맥락에 가장 합당하다. 실제 만성성은 HBsAg 지속 기간 등으로 확인하고 HBV DNA로 활성을 평가한다. 급성 감염은 anti-HBc IgM이 중요하지만 만성 악화에서도 나타날 수 있다. HBeAg 음성 만성 간염도 존재하므로 HBeAg 음성만으로 비활동성이라고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HBeAg음성은 모두 비활동성이라는 잘못된 일반화 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000596
