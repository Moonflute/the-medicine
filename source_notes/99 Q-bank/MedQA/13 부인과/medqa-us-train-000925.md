---
type: qbank
schema_version: 1
id: medqa-us-train-000925
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c09af41957925139a0f353fdcae31b5fe0a4e0c3e97da36285052c3dcaa9f902
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Pyelonephritis"
  - "Ectopic pregnancy"
  - "Appendicitis"
  - "Pelvic inflammatory disease"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_stqnsiJjsl7wgKEFwcGVuZGljaXRpcykubWQ
  - MTMg67aA7J246rO8L-qzqOuwmOuCtCDqsJDsl7wgKFBlbHZpYyBJbmZsYW1tYXRvcnkgRGlzZWFzZSkubWQ
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
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

17세 여성이 5일간 지속된 심한 복통, 경련, 오심 및 구토를 주소로 응급실에 내원했다. 환자는 배뇨 시 통증도 호소한다. 한 명의 남성 파트너와 성생활을 하고 있으며, 콘돔을 일관되게 사용하지 않는다. 3일 전 마지막 성관계 시 타는 듯한 통증을 경험했다. 월경은 28일 주기로 규칙적이며 5일간 지속된다. 마지막 월경은 3주 전이었다. 체온은 38.5°C, 맥박은 83회/분, 혈압은 110/70 mm Hg이다. 신체 검진상 하복부에 압통이 관찰된다. 골반 검진상 자궁경부 이동통증(cervical motion tenderness)과 화농성 자궁경부 분비물이 확인된다. 검사실 검사 결과 백혈구 수치는 15,000/mm3, 적혈구 침강 속도(ESR)는 100 mm/h이다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 신우신염(Pyelonephritis)
B. 자궁외 임신(Ectopic pregnancy)
C. 충수염(Appendicitis)
D. 골반 염증성 질환(Pelvic inflammatory disease)

## 해설


발열, 하복부 압통, 자궁경부 이동통, 화농성 분비물, 백혈구 증가는 골반 염증성 질환(PID)을 가장 잘 설명한다. 다른 선택지는 통증 양상이 다르거나 출혈을 동반한다. 따라서 정답은 D이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000925
