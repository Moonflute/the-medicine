---
type: qbank
schema_version: 1
id: medqa-us-train-002215
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c9560997fde54d1bdc358abccda629702425cd93fa7a95e978500abfbbeace15
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "Paget disease of bone"
  - "elevated alkaline phosphatase"
  - "pathologic fracture"
  - "sensorineural hearing loss"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uPjOuwnOyEsSDrgpzssq0gKFN1ZGRlbiBzZW5zb3JpbmV1cmFsIGhlYXJpbmcgbG9zcykubWQ
  - MTMg67aA7J246rO8L-2MjOygnO2KuOuzkSAoUGFnZXQncyBEaXNlYXNlKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 여성이 의자에서 일어난 후 갑자기 시작된 허리 아래쪽 통증으로 내원했다. 고혈압, 만성 양측 무릎 통증, 15년 전 유방암으로 종괴절제술을 받은 병력이 있다. 어머니는 류마티스관절염을 앓았다. 히드로클로로티아지드와 아세트아미노펜을 복용한다. 활력징후는 정상이다. 하부 척추를 누르면 압통이 있고 양쪽 무릎이 커져 부어 있다. 신경학적검사에서 왼쪽 귀의 감각신경성 청력장애가 보인다. GGT 30 U/L(정상 0~30), ALP 310 U/L, 혈청 칼슘 10.2 mg/dL이다. 척추 X선에서 L4 척추뼈 골절이 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 제1형 골화석증
B. 원발성 담즙성 담관염
C. 파제트 골질환
D. 골 전이

## 해설

정답은 C, 파제트 골질환이다. 정상 GGT와 함께 ALP가 상승하여 골성 ALP 상승을 시사하고, 청력저하·관절 변화·척추 골절을 동반한 점은 파제트 골질환을 지지한다. 이 조합이 확진을 보장하는 '삼중징후'는 아니다. 특히 유방암 병력이 있으므로 골전이를 이러한 소견만으로 배제해서는 안 되며, 실제 진료에서는 특징적인 골 구조 변화의 영상 평가와 필요 시 추가 검사가 필요하다. 이 문항은 골절이 있다는 X선 결과가 본문에 제공되어 있으므로, 별도 핵심 이미지가 누락된 것으로 자동 판단하지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. ALP/청력저하/골절을 확진 삼중징후로 단정하고 유방암 골전이를 배제한 과도한 해설 완화. 원문 임상 단서상 C 가장 가능하나 실제 감별 필요.
- 공식/학회 근거: https://www.niams.nih.gov/health-topics/pagets-disease-bone/diagnosis-treatment-and-steps-to-take
- 공식/학회 근거: https://www.niams.nih.gov/health-topics/pagets-disease-bone

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002215
