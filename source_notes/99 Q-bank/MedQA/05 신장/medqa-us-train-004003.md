---
type: qbank
schema_version: 1
id: medqa-us-train-004003
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:031f14170fea454b6c74bf68c254b0772840836a6fe8b72f94c9b4d3641e976a
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급성 세뇨관 괴사"
  - "급성 신손상"
  - "아미노글리코사이드 신독성"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: 임상증례 객관식
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdGF6aWRpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

천공성 위궤양과 패혈증으로 치료받은 지 9일 후, 78세 여자의 소변량이 감소하고 권태감이 생겼다. 응급 개복술을 받았고 이후 패혈증으로 중환자실 치료를 받았다. 혈액배양에서 녹농균이 자랐으며 세프타지딤과 겐타마이신을 투여받았다. 제2형 당뇨병, 동맥성 고혈압, 고관절 골관절염이 있다. 입원 전 약물은 인슐린, 라미프릴, 이부프로펜이었다. 체온 37.3°C, 맥박 80회/분, 혈압 115/75 mmHg이다. 상복부 수술 절개부는 치유 중이다. 헤모글로빈 14 g/dL, 백혈구 16,400/mm³, 호중구 60%, 호산구 2%, 림프구 30%, 단핵구 6%, 혈소판 260,000/mm³이다. 혈청 Na+ 137, Cl− 102, K+ 5.1 mEq/L, 요소질소 25 mg/dL, 크레아티닌 4.2 mg/dL이며 나트륨 분획배설률은 2.1%이다. 이 환자 상태와 가장 관련이 높은 소변검사 소견은 무엇인가?

## 선택지

A. 색소 원주
B. 탁한 갈색 원주
C. 적혈구 원주
D. 왁스상 원주

## 해설

Gentamicin 노출 후 AKI·FENa상승은 급성 세뇨관손상을 지지하며 muddy brown granular cast B가 부합한다. 손상된 세뇨관상피와 세포잔해 등이 원주를 형성한다. FENa 하나로 독성을 확진하거나 단순 색소침착을 기전으로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Aminoglycoside ATN의 muddy brown cast는 괴사상피/세포잔해이며 색소침착 자체로 정의하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004003
