---
type: qbank
schema_version: 1
id: medqa-us-train-000768
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f68809b6dff1d6968e6c5e8c9954e1b4634e3727189cf6afe0be30557915c2a2
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "pseudogout"
  - "calcium pyrophosphate deposition disease"
  - "hyperparathyroidism"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
  - MDcg66WY66eI7Yuw7IqkL-y5vOyKmO2UvOuhnOyduOyCsCDsuajssKnsp4jtmZggKENQUEQpIChDYWxjaXVtIFB5cm9waG9zcGhhdGUgRGVwb3NpdGlvbiBEaXNlYXNlKS5tZA
question_type: investigation
difficulty: complex
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

52세 남성이 반복되는 무릎 관절염으로 평가받는다. 관절액에 약한 양성 복굴절을 보이는 마름모꼴 결정이 보이고 배양은 음성이다. 혈청 칼슘이 두 차례 상승했고 신기능은 정상이다. 비교적 이른 나이의 결정관절염과 관련해 확인할 질환은?

## 선택지

A. 고지혈증
B. 통풍
C. 원발성 부갑상선기능항진증
D. 수술 후 반응성 관절염

## 해설


마름모꼴 약양성 복굴절은 피로인산칼슘 결정의 단서다. 비교적 젊은 환자에서 고칼슘혈증이 동반되면 PTH를 측정해 원발성 부갑상선기능항진증 등 대사 원인을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-train-000768` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 마름모꼴 약한 양성 복굴절 CPP 결정과 부갑상선 이상 C 유지. 모든 CPPD의 가장 큰 위험인자가 부갑상선항진이라는 일반화 제거.
- 범위: evidence-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.
- https://rheumatology.org/I-Am-A/Patient-Caregiver/Diseases-Conditions/Calcium-Pyrophosphate-Deposition-CPPD

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000768
- https://ard.bmj.com/content/82/10/1248
