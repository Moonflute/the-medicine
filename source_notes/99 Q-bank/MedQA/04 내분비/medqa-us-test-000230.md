---
type: qbank
schema_version: 1
id: medqa-us-test-000230
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ee99b753b895bbe8bbe9ab4b1506af4288b8c36b8a33ff2fb0e81d467f0a727f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "비갑상샘 질환 증후군"
  - "패혈성 쇼크"
  - "중증 질환"
related_disease_slugs:
  - MTEg7Jm46rO8L-2MqO2YiOyEsSDsh7ztgawgKFNlcHRpYyBTaG9jaykubWQ
  - MDQg64K067aE67mEL-uzkeyggSDqsJHsg4Hsg5gg6riw64qlIOygleyDgSDspp3tm4TqtbAgKFNpY2sgRXV0aHlyb2lkIFN5bmRyb21lKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

요로감염으로 인한 패혈성 쇼크와 균혈증으로 중환자실에 입원한 지 3일째인 34세 여성이 지속되는 저혈압을 보이고 있다. 혈액배양에서 대장균이 자랐으며 입원 당시부터 적절한 항생제를 투여받고 있다. 심각한 질환 과거력은 없고 불법 약물도 사용하지 않는다. 현재 노르에피네프린, 세프트리악손, 아세트아미노펜을 투여 중이며 겉보기에는 상태가 좋아 보인다. 체온 37.5°C(99.5°F), 심박수 96회/분, 혈압 85/55 mmHg였다. 등 진찰에서 양측 늑골척추각 압통이 있었다. 갑상샘은 정상이었다. 검사에서 입원 1일째와 3일째 백혈구는 각각 18,500/mm³와 10,300/mm³, 혈색소는 14.1 mg/dL와 13.4 mg/dL였다. 혈청 크레아티닌은 1.4에서 0.9 mg/dL로, 공복혈당은 95에서 100 mg/dL로 변했다. TSH 1.8 μU/mL, 유리 T3 0.1 ng/dL, 유리 T4 0.9 ng/dL였다. 반복 혈액배양은 음성이었고 흉부 X선도 정상이었다. 다음 중 가장 적절한 치료는?

## 선택지

A. 브로모크립틴
B. 레보티록신
C. 독성 약물 중단
D. 기저 질환 치료

## 해설

정답은 D이다. 패혈증과 중증 질환 중 TSH가 정상 범위이고 free T3가 낮으며 free T4가 비교적 유지되는 결과는 비갑상샘질환증후군(NTIS, low-T3 syndrome)에 합당하다. 갑상샘 호르몬이 모두 정상이라는 뜻은 아니다. 기존 갑상샘질환을 시사하는 근거가 없다면 감염과 혈역학적 이상 등 기저 중증 질환을 치료하며 NTIS만을 이유로 levothyroxine을 일률적으로 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 낮은 free T3를 정상 갑상샘검사라고 한 해설 교체; 패혈증 관련 NTIS의 임상 맥락 설명.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4267409/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000230
