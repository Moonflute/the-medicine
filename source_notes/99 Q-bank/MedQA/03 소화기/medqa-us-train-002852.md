---
type: qbank
schema_version: 1
id: medqa-us-train-002852
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8455e0c696cded3292cc0e1e1284d6e217fb3ba1fefb4212178853a180cd3c66
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Dubin-Johnson syndrome"
  - "conjugated hyperbilirubinemia"
  - "bilirubin storage and excretion defect"
  - "normal liver enzymes"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-uRkOu5iC3sobTsiqgg7Kad7ZuE6rWwIChEdWJpbi1Kb2huc29uIFN5bmRyb21lKS5tZA
question_type: mechanism
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 남성이 지난 2년 동안 반복되는 눈의 황변으로 내원했다. 각 에피소드는 1~2주 지속되다가 저절로 호전된다. 가족력에 중대한 질환은 없다. 최근 휴가로 멕시코에서 일주일을 보냈다. 두 명의 파트너와 성생활을 하며 콘돔 사용은 일관되지 않다. 음주나 불법 약물 사용은 하지 않는다. 활력징후는 정상이고 결막과 피부에 황달이 보인다. 복부는 부드럽고 장기비대는 없다. 총 빌리루빈 4.0 mg/dL, 직접 빌리루빈 3.0 mg/dL, ALP 75 U/L, AST 12 U/L, ALT 12 U/L이다. anti-HAV IgG 양성, HBsAg 음성, anti-HBs 양성, HCV RNA 음성이다. 소변에 빌리루빈이 있고 유로빌리노겐은 정상이다. 다음 중 이 환자 상태의 가장 가능성 높은 기저 원인은?

## 선택지

A. 소엽 내 담관 파괴
B. 간내 및 간외 담관의 염증
C. 간의 빌리루빈 저장 장애
D. 세포에서 빌리루빈 방출 증가

## 해설

반복되는 경한 결합형 고빌리루빈혈증에 간효소·ALP 정상이고 감염성 간염 근거가 없어 유전성 빌리루빈 처리 장애를 시사한다. 선택지 C의 간내 저장/처리 장애는 Rotor 증후군의 간세포 유입·재섭취 수송 결함에 부합한다. Dubin-Johnson 증후군은 결합 빌리루빈의 담즙 배설 장애로 기전이 다르므로 기존처럼 저장 장애와 같은 것으로 설명하지 않는다. 임상양상만으로 두 질환을 확정 구분하는 데에는 한계가 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정상효소의 반복 결합형 황달과 hepatic storage C는 Rotor 수송/재섭취 장애에 연결해야 하며 Dubin-Johnson의 담즙 배설 장애와 구분.
- https://medlineplus.gov/genetics/condition/rotor-syndrome/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002852
