---
type: qbank
schema_version: 1
id: medqa-us-train-000937
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f0b55b3f135d5191174a834274537a3db64a1d33af37c1f11b2e36f486a4cac
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "type II diabetes mellitus"
  - "hypertension"
  - "glaucoma"
  - "coronary artery disease"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MTgg7JWI6rO8L-uFueuCtOyepSAoZ2xhdWNvbWEpLm1k
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2FwdG9wcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG92YXN0YXRpbi5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 남성이 심한 안구 통증으로 응급실에 내원하였다. 환자는 건설 노동자이며 금속 빔을 드릴로 작업하던 중 갑자기 오른쪽 눈에 날카로운 통증을 느꼈다고 보고하였다. 그 이후로 오른쪽 눈의 시야가 흐릿해 보이고 눈물이 멈추지 않는다고 한다. 환자의 과거력상 제2형 당뇨병과 고혈압이 있다. 복용 중인 약물은 메트포르민(metformin), 캡토프릴(captopril), 로바스타틴(lovastatin)이다. 어머니는 녹내장이 있고, 형제와 아버지는 모두 관상동맥질환이 있다. 신체 검진상 오른쪽 눈에 결막 충혈이 관찰되며 눈꺼풀의 명백한 열상이나 외안근 운동의 결함은 없다. 동공은 양측 대칭적이며 빛에 반응한다. 구심성 동공 운동 장애(afferent pupillary defect)는 관찰되지 않는다. 반대쪽 눈의 시력은 20/20이다. 환자는 통증 때문에 오른쪽 눈의 시력 검사 참여를 거부하고 있다. 다음 중 가장 적절한 초기 관리 단계는 무엇인가?

## 선택지

A. 플루오레세인 염색(Fluorescein stain)
B. 안와 자기공명영상(Orbital MRI)
C. 안압 측정(Tonometry)
D. 국소 코르티코스테로이드(Topical corticosteroids)

## 해설

금속 드릴 작업 후 통증·눈물·시야흐림은 각막 이물/상피 손상뿐 아니라 관통상과 안구내 금속 이물도 의심해야 한다. 주어진 선지 중 플루오레세인(A)은 세극등에서 상피결손과 방수 유출(Seidel)을 평가하는 데 적절하다. 다만 명백한 개방성 안구손상이 의심되면 눈을 누르거나 불필요하게 조작하지 않고 보호대와 긴급 안과 평가를 우선한다. 금속 이물 가능성이 있으면 MRI는 피하고 필요 시 안와 CT를 사용한다. 안압측정·국소 스테로이드를 먼저 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 금속 고속 이물에서 단순 각막찰과상만 가정하지 않도록 수정했다. A는 표면·Seidel 평가로 유지하되 안구압박 금지·금속 의심 MRI 금기를 명시했다.
- 공식/학회 근거: https://eyewiki.aao.org/Intraocular_Foreign_Bodies_%28IOFB%29

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000937
