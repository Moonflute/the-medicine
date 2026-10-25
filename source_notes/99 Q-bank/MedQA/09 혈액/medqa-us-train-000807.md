---
type: qbank
schema_version: 1
id: medqa-us-train-000807
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0708db5766afe3a94db4bd5def0d47c3976626b753b9c093fa5e572a975f48fc
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "polycythemia vera"
  - "essential thrombocythemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ynhOyEsSDsoIHtmIjqtazspp3qsIDspp0gKFBWKSAoUG9seWN5dGhlbWlhIFZlcmEgKFBWKSkubWQ
  - MDkg7ZiI7JWhL-uzuO2DnOyEsSDtmIjshoztjJDspp3qsIDspp0gKEVUKSAoRXNzZW50aWFsIFRocm9tYm9jeXRoZW1pYSAoRVQpKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9BbGVuZHJvbmF0ZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0ZlYnV4b3N0YXQubWQ
---

# MedQA US 임상문제

## 문제

64세 여성이 심한 전신 가려움증을 주소로 응급실에 내원하였다. 환자는 집에서 욕조에 있을 때 처음 증상을 느꼈다고 한다. 이전에 이런 증상을 겪은 적은 없다. 그러나 지난 수개월 동안 손의 심한 관절 부종과 통증, 그리고 손과 발의 발적, 작열통, 부종이 있었다. 과거력상 제2형 당뇨병, 고혈압, 골다공증이 있으며 각각 메트포르민(metformin), 에날라프릴(enalapril), 알렌드로네이트(alendronate)를 복용 중이다. 또한, 내원 3개월 전 좌측 다리에 심부정맥혈전증(deep vein thrombosis)이 발견된 바 있다. 환자의 체온은 98.6°F(37.0°C), 맥박은 80회/분, 혈압은 135/85 mmHg, 호흡수는 13회/분이다. 신체 검진상 불편감을 호소하며 전완부 피부에 긁힌 자국이 관찰된다. 환자의 검사 결과는 다음과 같다. 혈청: Na+ 135 mEq/L, Cl- 100 mEq/L, K+ 5.0 mEq/L, HCO3- 22 mEq/L, BUN 19 mg/dL, 포도당 130 mg/dL, 크레아티닌 1.0 mg/dL. 헤마토크릿 64%, 백혈구 수 19,000 cells/mm^3(정상 감별계산), 혈소판 수 900,000/mm^3. 이 환자의 기저 질환에 대한 최선의 다음 치료 단계는 무엇인가?

## 선택지

A. 디펜히드라민(Diphenhydramine)
B. 하이드록시우레아(Hydroxyurea)
C. 페북소스타트(Febuxostat)
D. 프레드니손(Prednisone)

## 해설


Hct64%에 백혈구·혈소판증가, 수성 소양증·홍색사지통증과 혈전 병력은 진성적혈구증가증(PV)을 강하게 시사한다. 60세 이상이고 DVT 병력이 있어 혈전 고위험군이며, 제시된 선택지 중 hydroxyurea(B)가 적절한 세포감소 치료이다. 실제 진단은 JAK2·EPO·골수 등으로 확인하며 Hct 조절을 위한 사혈, 항혈전 치료와 출혈위험 평가도 함께 계획한다. 이것을 단순히 본태성혈소판증으로 설명하거나 hydroxyurea만으로 모든 처치가 끝난다고 해석하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000807 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 진성적혈구증가증을 본태성혈소판증으로 오진한 해설을 교체하고 고위험 PV 치료 범위를 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/myeloproliferative/hp/myeloproliferative-neoplasms-treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000807
