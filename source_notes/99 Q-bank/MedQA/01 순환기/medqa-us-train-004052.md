---
type: qbank
schema_version: 1
id: medqa-us-train-004052
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3e44d514136e60b6e4d7b742869ef94dcdfe481bd1d5fab4208b1d1d41291dd8
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 대동맥박리"
  - "고혈압성 응급"
  - "흉통"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVleyEsSDsnITquLAgKEh5cGVydGVuc2l2ZSBDcmlzaXMpLm1k
question_type: 임상증례 객관식
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남자가 흉통으로 응급실에 왔다. 집에서 TV를 보던 중 갑자기 가슴이 아팠고 통증이 등으로 퍼졌다. 알코올 사용장애, 비만, 고혈압, 당뇨병, 우울증 병력이 있다. 체온 36.9°C, 혈압 177/118 mmHg, 맥박 123회/분, 호흡수 14회/분, 실내 공기 산소포화도 97%이다. 심장검사에서 S4가 들리고 흉통은 촉진으로 악화되는 듯하다. 환자에게서 술 냄새가 난다. 100% 산소와 모르핀을 투여하기 시작했다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. CT 촬영
B. 라베타롤
C. 니트로프루시드
D. 금식, 정맥 수액, 혈청 리파아제 측정

## 해설

갑작스러운 등방사 흉통과 고혈압·빈맥은 박리를 의심하게 하므로 선택지 B의 IV labetalol로 감시하에 anti-impulse 치료를 고려하고 신속한 영상/외과평가를 병행한다. 심박수 조절 전 nitroprusside 단독투여는 반사빈맥을 악화시킬 수 있다. 이 정보만으로 박리가 확진된 것은 아니며 관류를 유지하면서 조절한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Aortic dissection 의심의 labetalol B는 유지하되 진단확정/급격한무제한강하 주장을 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004052
