---
type: qbank
schema_version: 1
id: medqa-us-train-002932
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:28235f4ee91b75ae01e1d590e57c7bcd5d124c7f5ee4f2922915bb31e45b3dd5
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "colorectal cancer"
  - "liver metastases"
  - "iron deficiency anemia"
  - "colonoscopy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: B
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
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvT3hhbGlwbGF0aW4ubWQ
---

# MedQA US 임상문제

## 문제

68세 남성이 피로로 주치의를 찾아왔다. 손녀는 환자가 우울한 것 같아 걱정한다. 지난 2개월 동안 체중이 15파운드 감소했고 너무 피곤하다며 가족 행사에도 오지 않았다. 자전거 타기와 친구들과 볼링처럼 좋아하는 일을 계속하려 하지만 쉽게 지친다고 한다. 수면에 문제는 없고 식욕 저하로 체중이 줄었다고 한다. 관상동맥질환과 골관절염이 있으며 수년간 의사를 방문하지 않아 필요 시 아세트아미노펜 외에는 약을 복용하지 않는다. 진찰에서 간비대가 보인다. 백혈구 11,000/mm³, 혈색소 9 g/dL, 혈소판 300,000/mm³, MCV 75 μm³, 혈청 철 35 mcg/dL이다. 복부 초음파에서 다발성 저에코성 간 병변이 보이고 CT에서 중심부에 위치한 다발성 저감쇠 병변이 확인된다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 시탈로프람
B. 대장내시경
C. 플루오로우라실, 류코보린, 옥살리플라틴
D. 수술적 절제

## 해설


철결핍성 소구성 빈혈, 체중 감소와 다발성 간 병변은 대장암 및 간 전이를 의심하게 한다. 선지 중 대장내시경(B)으로 원발 병변을 확인하고 조직진단을 얻는 것이 적절하다. 이는 무증상 인구의 선별검사가 아니라 증상·이상 소견에 대한 진단검사이다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-002932`와 직접 대조했다.
- 판정: 철결핍성 빈혈·체중감소·간 병변에서 원발 대장암 진단을 위한 B 유지. 증상 환자 진단검사를 무증상 검진이라고 잘못 기술한 표현 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.nice.org.uk/guidance/HTG690/chapter/2-the-diagnostic-tests

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002932
