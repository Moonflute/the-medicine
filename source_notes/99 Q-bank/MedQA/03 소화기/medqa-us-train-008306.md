---
type: qbank
schema_version: 1
id: medqa-us-train-008306
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:19ba5684ca22c3b74cee9380921ca1a3086eaf105aed53bd150e1c35e3a55e52
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "esophageal variceal bleeding"
  - "cirrhosis"
  - "vasoactive and endoscopic therapy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvTGFjdHVsb3NlLm1k
---

# MedQA US 임상문제

## 문제

57세 남자가 24시간 동안 여러 차례 토혈해 가족과 응급실에 왔다. 알코올성 간경변이 있고 복수는 이뇨제, 뇌병증은 락툴로오스로 치료 중이다. 체온 36.9°C(98.4°F), 맥박 85회/분, 혈압 80/52 mm Hg이다. 혼돈되어 완전한 병력을 말하지 못하고 황달, 비장비대, 흉부의 거미혈관종이 여러 개 보인다. 가장 적절한 초기 처치는?

## 선택지

A. 비선택적 베타차단제
B. 혈관작용제와 내시경 치료 병행
C. 풍선 탐포네이드
D. 경정맥 간내 문맥전신 단락술(TIPS)

## 해설


간경변 환자의 토혈·저혈압은 급성 정맥류 출혈을 의심하게 한다. 기도 보호와 순환 소생을 우선·병행하면서 octreotide·somatostatin·terlipressin 같은 혈관작용제를 신속히 시작하고 안정화 후 조기 내시경적 식도정맥류 결찰술(B)을 시행한다. 항균 예방도 병행한다. Oxymorphone은 opioid 진통제이지 이 혈관작용제가 아니고 경동맥을 결찰하는 시술도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008306 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정맥류 출혈 B 유지. Oxymorphone을 혈관수축제로, 식도정맥류 결찰을 경동맥 결찰로 적은 중대 해설오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11090185/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008306
