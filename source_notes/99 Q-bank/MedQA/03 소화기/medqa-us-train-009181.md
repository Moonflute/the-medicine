---
type: qbank
schema_version: 1
id: medqa-us-train-009181
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:037f69aabc4a7702edf35c9cf9b1992a9a39c1458fc9e9770f0d2688b855fdca
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute cholecystitis"
  - "급성 담낭염"
  - "cholelithiasis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL0tldG9yb2xhYy5tZA
---

# MedQA US 임상문제

## 문제

44세 여성이 저녁 식사 30분 후 시작된 10시간 동안의 심한 오심과 복통으로 응급실에 내원했다. 통증은 주로 오른쪽 상복부에 있고 때때로 등으로 방사된다. 제2형 당뇨병과 고콜레스테롤혈증 병력이 있으며 메트포르민과 아토르바스타틴을 복용한다. 키 163 cm(5 ft 4 in), 체중 91 kg(200 lb), BMI 34 kg/m²이다. 체온 38.8°C, 맥박 100회/분, 호흡수 14회/분, 혈압 150/76 mmHg이다. 복부 진찰에서 방어를 동반한 우상복부 압통이 있다. 침상 초음파에서 담낭벽 6 mm, 담낭 주위 액체, 내강 내 막의 박리, 담낭 경부에 2×2 cm 결석이 보인다. 총담관은 정상으로 보인다. 백혈구증가증이 있으나 간기능검사는 정상이다. 정맥 수액을 시작하고 통증 조절을 위해 케토롤락을 투여했다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 내시경적 역행성 담췌관 조영술
B. 항생제 치료
C. 응급 개복 담낭절제술
D. 6주 후 계획 복강경 담낭절제술

## 해설


정답 B. 담낭경부 결석과 급성 담낭염 소견이 있으므로 초기 정맥 항생제 치료를 시작한다. 특히 초음파의 박리된 점막은 괴저성 담낭염 가능성을 높여 신속한 외과 평가와 조기 담낭절제 등 감염원 조절이 필요하다. 항생제만 투여하고 일률적으로 6주 기다리는 상황이 아니다. 수술 방식은 환자와 해부학적 소견에 따라 정하며 응급 개복술이 자동으로 유일한 선택은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009181 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항생제 B는 초기 처치로 유지하되 점막 박리는 괴저 가능성으로 조기 외과적 감염원 조절이 필요하며 단순 6주 지연 설명을 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/7643471/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009181
