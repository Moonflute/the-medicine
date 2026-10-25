---
type: qbank
schema_version: 1
id: medqa-us-train-001146
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:84fbdecf78a99f9bd97eb56ca5ffdb925ed91f165bbb06b7dbdb7931778a977c
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "Boerhaave syndrome"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtYjrpbTtlZjruIwg7Kad7ZuE6rWwIChCb2VyaGFhdmUgU3luZHJvbWUpLm1k
question_type: investigation
difficulty: standard
answer: C
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

17세 여아가 심한 흉골하 흉통으로 응급실에 내원하였다. 통증은 과식 후 스스로 유도한 구토 직후 갑자기 시작되었다. 환자의 부모에 따르면 환자는 음식 섭취를 매우 제한하며 식사 후 자주 구토를 유도한다고 한다. 활력 징후는 혈압 100/60 mm Hg, 심박수 98회/분, 호흡수 14회/분, 체온 37.9℃이다. 환자는 창백하고 심한 고통을 호소하고 있다. 폐 청진상 깨끗하다. 심장 검진에서 심장 박동과 동기화된, 으드득거리는 거친 소리가 앞가슴 부위(precordium)에서 청진된다. 복부는 부드럽고 압통은 없다. 이 환자에서 진단을 확진할 가능성이 가장 높은 검사는 무엇인가?

## 선택지

A. 상부 위장관 내시경(Upper endoscopy)
B. 심전도(ECG)
C. 조영제 식도 조영술(Contrast esophagram)
D. D-이량체(D-dimer) 측정

## 해설


심한 구토 직후 흉통과 심박동에 동기화된 으드득거리는 소리(Hamman 징후)는 종격동 공기를 시사하여 식도 천공(Boerhaave 증후군)을 의심하게 한다. 제시된 선택지 중 조영 식도조영술(C)로 식도 밖 누출을 확인할 수 있다. 필요하면 CT/CT 식도조영술로 누출과 종격동·흉막 오염을 평가한다. 단순 상부내시경은 처음부터 무조건 시행하지 않으며, 영상 음성이라도 의심이 높으면 추가 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001146 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 조영 식도검사 C는 유지하되 항상 가장 정확하다는 비교 근거 없는 단정을 제거했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001146
