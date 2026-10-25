---
type: qbank
schema_version: 1
id: medqa-us-train-005278
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1aff827cdce25cc01e1119c02477179ba568159a551d9932621694306176b2d2
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유전성 대장암"
  - "린치증후군 의심"
  - "조기 대장내시경 선별"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: prevention
difficulty: standard
answer: A
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
---

# MedQA US 임상문제

## 문제

18세 남자가 대학에 가기 전 진료를 받으러 왔다. 아버지는 50세, 친할아버지는 55세, 삼촌은 45세에 대장암을 앓았으나 아버지의 APC 유전자 검사는 음성이었다. 가족 중 치과 이상이나 다른 악성종양은 없다. 이 환자에게 권장되는 대장암 선별 프로토콜은?

## 선택지

A. 25세부터 1~2년마다 대장내시경
B. 40세부터 5년마다 대장내시경
C. 50세부터 10년마다 대장내시경
D. 예방적 결장절제술

## 해설


부계의 세 친족에 걸친 2세대 대장암과 50세 미만 발병은 Lynch syndrome 같은 유전성 대장암을 의심하게 한다. APC 음성은 FAP 가능성을 낮출 수 있지만 mismatch repair 유전자 이상이나 Lynch 위험을 배제하지 않는다. 보기 중 A의 25세부터1–2년 간격 대장내시경이 이러한 고위험 출제 의도에 부합한다. 실제로는 가족의 병리·진단력을 확인하고 유전상담 및 MMR/EPCAM 평가를 통해 검진계획을 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005278 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: APC 음성이 유전 대장암 위험을 낮춘다는 역전 설명 교정. 가족의 진단나이 복구 및 Lynch 유전상담 필요성 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4695986/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005278
