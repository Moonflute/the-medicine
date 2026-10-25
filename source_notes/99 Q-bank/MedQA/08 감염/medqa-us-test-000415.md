---
type: qbank
schema_version: 1
id: medqa-us-test-000415
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:eb9e59ce87795c1247718dc1a96b4224ee90e1450ecddd3e13a148757b66e5d6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "여행자 설사"
  - "장독소생성 대장균"
  - "급성 수양성 설사"
  - "Enterohemorrhagic E. coli infection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uMgOyepeq3oCAoRS4gY29saSkubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUmFuaXRpZGluZS5tZA
---

# MedQA US 임상문제

## 문제

46세 여성이 3일 동안 지속된 설사, 중등도 복통, 쇠약으로 병원에 왔다. 인도에서 2주간 요가 수련회를 마치고 돌아오는 비행기 안에서 증상이 시작되었다. 리조트에 머물렀으며 비행기에 탑승할 때 약간 메스꺼웠고 기내식을 먹은 직후 설사가 발생했다. 이후 하루 최대 다섯 차례 수양성 변을 보았다. 1년 전 위식도역류병이 있고 조개류 알레르기가 있으며 유일한 약물은 라니티딘이다. 기면 상태로 보였고 체온 37°C(98.6°F), 맥박 70회/분, 혈압 115/72 mmHg였다. 복부에 전반적인 압통이 있었으나 방어성 긴장이나 반발통은 없었고 장음은 항진되어 있었다. 가장 가능성 높은 병원체는?

## 선택지

A. Giardia intestinalis
B. Shigella 종
C. 황색포도상구균
D. 장독소생성 대장균

## 해설


인도 여행 후 급성 수양성 설사는 장독소생성 대장균(ETEC, D)을 시사한다. 장독소가 분비성 설사를 유발하며 혈변은 본문에 제시되지 않았다. 기내식 직후 발생했다고 해서 그 식사가 반드시 감염원인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000415 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 여행자 수양성 설사의 ETEC D 유지. 미제시 혈변을 덧붙인 오류와 모든 경우 항생제 불필요라는 불필요한 치료 단정 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000415
