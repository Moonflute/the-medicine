---
type: qbank
schema_version: 1
id: medqa-us-train-000238
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:565c6b8691ce1fde4a49471c05e2cd0282f2f95a156582605f4912326927fd3d
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "diverticulitis"
  - "post-operative anemia"
  - "febrile non-hemolytic transfusion reaction"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6Tsl7wgKERpdmVydGljdWxpdGlzKS5tZA
  - MTEg7Jm46rO8L-u5hOyaqe2YiOyEsSDrsJzsl7Qg7IiY7ZiIIOuwmOydkSAoTm9uLWhlbW9seXRpYyBGZWJyaWxlIFRyYW5zZnVzaW9uIFJlYWN0aW9uKS5tZA
question_type: management
difficulty: complex
answer: A
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

일반외과 인턴이 재발성 게실염 치료를 위해 성공적으로 S자결장절제술(sigmoidectomy)을 받은 59세 남성 환자의 병실로 호출되었습니다. 담당 간호사는 환자의 체온이 38.7 C로 측정되었으며 환자가 오한을 호소하고 있다고 보고했습니다. 수술은 8시간 전에 완료되었으며, 1,700 mL의 추정 실혈량으로 인한 대량 출혈의 합병증이 있었습니다. 헤모글로빈 수치가 5.9 g/dL로 확인되어 수술 후 빈혈로 진단되었고, 농축적혈구 2단위가 처방되어 90분 전에 수혈이 시작되었습니다. 환자의 활력징후는 다음과 같습니다: 체온 38.7 C, 심박수 88회/분, 혈압 138/77 mmHg, 호흡수 18회/분, 산소포화도 98%. 신체 검진상 이상 소견은 없습니다. 즉시 수혈을 중단한 후, 이 환자의 상태에 대한 가장 적절한 처치는 무엇입니까?

## 선택지

A. 환자를 관찰하고 아세트아미노펜(acetaminophen)을 투여한다
B. 디펜히드라민(diphenhydramine)을 처방한다
C. 비강 캐뉼라를 통해 산소 보충을 시작한다
D. 광범위 항생제 투여를 시작한다

## 해설


수혈 시작 90분 뒤 발생한 발열·오한에 비해 혈압·호흡·산소포화도가 안정적이어서 발열성 비용혈성 수혈반응이 의심된다. 수혈 중단 후 환자·혈액제제 확인, 수혈 담당부서 통보와 평가를 시행하고 급성 용혈·세균 오염 등 위험한 반응을 배제한다. 단순 발열성 비용혈반응으로 판단되면 관찰과 아세트아미노펜(A)이 적절하다. 안정된 활력징후만으로 용혈이나 오염이 완전히 배제되는 것은 아니며 평가 없이 수혈을 재개하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000238 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수혈 시작 90분을 1시간 이내로 바꾼 오류를 고치고 발열성 비용혈반응은 중증 원인 배제 후 진단임을 명시했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.lifeblood.com.au/health-professionals/clinical-practice/adverse-events/management-of-suspected-reactions

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000238
