---
type: qbank
schema_version: 1
id: medqa-us-train-002742
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d25200d2746d4db1a1f0bd648e595a35f6a340e2cce2ef3969d2bbc9bf0c439f
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "Goodpasture syndrome"
  - "anti-glomerular basement membrane antibody"
  - "pulmonary-renal syndrome"
  - "hemoptysis with glomerulonephritis"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyGjSDsp4Ttlokg7Yag66as7L2p7Yyl7Je8IChSYXBpZGx5IFByb2dyZXNzaXZlIEdsb21lcnVsb25lcGhyaXRpcykubWQ
  - MDUg7Iug7J6lL-2PkOyLoOyepSDspp3tm4TqtbAgKFB1bG1vbmFyeS1SZW5hbCBTeW5kcm9tZSkubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 남성이 지속되는 기침으로 응급실에 내원했다. 일주일 동안 기침을 했고 가래에 피가 섞이며 호흡곤란도 있다. 발열과 오한, 관절통을 호소한다. 체온은 38.9°C, 혈압은 159/98 mmHg, 맥박은 80회/분, 호흡수는 14회/분, 산소포화도는 98%이다. 검사 결과는 다음과 같다: 혈색소 12 g/dL, 헤마토크리트 36%, 백혈구 7,500/mm³(감별계수 정상), 혈소판 107,000/mm³, 혈청 나트륨 138 mEq/L, 염소 101 mEq/L, 칼륨 4.2 mEq/L, 중탄산염 24 mEq/L, BUN 32 mg/dL, 포도당 99 mg/dL, 크레아티닌 1.9 mg/dL, 칼슘 10.0 mg/dL, AST 11 U/L, ALT 10 U/L이다. 소변은 호박색이고 혼탁하며 적혈구와 단백질이 양성이다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 아지트로마이신
B. 제4형 콜라겐 항체 수치
C. p-ANCA 수치
D. 신장 생검

## 해설

객혈·혈뇨·단백뇨·신기능 저하는 폐신장증후군을 시사하므로 anti-GBM(제IV형 collagen) 항체 B를 신속히 검사한다. ANCA 혈관염도 감별해야 하며 상황에 따라 ANCA 검사와 신장생검을 병행한다. 양성 항체만을 기다리며 중증 환자 평가를 지연해서는 안 된다. Azithromycin은 이 폐신장증후군의 치료가 아니며 기존 해설처럼 결핵의 표준 치료제라고 설명한 것은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐신장증후군 anti-GBM B는 유지. Azithromycin을 결핵 치료제라 한 잘못을 제거.
- https://kdigo.org/wp-content/uploads/2017/02/KDIGO-Glomerular-Diseases-Guideline-2021-English.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002742
