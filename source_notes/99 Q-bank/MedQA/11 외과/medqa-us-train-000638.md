---
type: qbank
schema_version: 1
id: medqa-us-train-000638
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2e2f5eb99c24bced298a864cb7c096975a6bad829f119a145cd669383e15377e
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "acute cholecystitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
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
---

# MedQA US 임상문제

## 문제

43세 백인 여성이 급성 우상복부(RUQ) 통증으로 입원하였다. 통증은 6시간 전 생일 파티에서 과식을 한 후 시작되었으며 점차 악화되었다. 환자는 이전에도 비슷한 통증을 느낀 적이 있으나 이번처럼 심하지는 않았다고 한다. 유의미한 과거력은 없다. 현재 복용 중인 약물은 경구 피임약뿐이다. 활력징후는 혈압 140/80 mm Hg, 심박수 79회/분, 호흡수 14회/분, 체온 37.6℃이다. 환자의 체질량지수(BMI)는 36.3 kg/m2이다. 신체 검진상 환자는 약간의 황달을 보인다. 심장 및 호흡기 검진은 정상 범위 내에 있다. 복부 촉진 시 우상복부(RUQ)에 압통이 있으나 반발통이나 근육 방어는 없으며, 해당 부위를 깊게 촉진할 때 흡기 시 통증으로 인한 호흡 정지가 관찰된다. 나머지 검진 결과는 정상 범위 내에 있다. 검사실 검사 결과는 다음과 같다: 적혈구 수 4.1 million/mm3, 혈색소 13.4 g/dL, 백혈구 수 11,200/mm3, 적혈구 침강 속도(ESR) 22 mm/hr, 혈소판 수 230,000/mm3, 총 빌리루빈 2 mg/dL, 직접 빌리루빈 1.1 mg/dL, ALT 20 IU/L, AST 18 IU/L, 아밀라아제 33 IU/L. 복부 초음파 결과는 다음과 같다(이미지 참조). 총담관(CBD)은 확장되지 않았다. 이 환자의 치료로 가장 적절한 시술은 무엇인가?

## 선택지

A. 내시경 역행 담췌관 조영술(ERCP)
B. 복강경 담낭 절제술
C. 경피적 담낭 배액술
D. 충격파 쇄석술

## 해설


지속되는 우상복부 통증과 Murphy 징후, 염증 소견은 급성 담낭염을 시사한다. 안정적이고 수술 금기가 제시되지 않은 환자에서 선지 중 복강경 담낭절제술(B)이 적절하다. 실제 초음파 그림은 누락되어 벽 두께나 담낭 주위 액체를 관찰했다고 단정할 수 없다. 총담관은 확장되지 않았다고 본문에 명시되어 있다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-000638`와 직접 대조했다.
- 판정: Murphy 징후·지속 RUQ 통증에서 B 유지. 누락 초음파의 벽비후/주위액을 본 것처럼 기술한 해설과 벽이 얇아진다는 오류 제거. 텍스트만으로 선지 선택은 가능; Hb 단위 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7643471/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000638
