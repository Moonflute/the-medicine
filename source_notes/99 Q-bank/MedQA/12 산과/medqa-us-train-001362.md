---
type: qbank
schema_version: 1
id: medqa-us-train-001362
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f494420611a9f991c1790c9a793f69713416beb3c766eb043679fa00ce47cbb
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "premature rupture of membranes"
  - "ascending infection"
question_type: mechanism
related_disease_slugs:
  - MTIg7IKw6rO8L-yhsOq4sCDslpHrp4kg7YyM7IiYIChQcmVtYXR1cmUgUnVwdHVyZSBvZiBNZW1icmFuZXMpLm1k
difficulty: complex
answer: A
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 38주인 29세 여성(임신 1회, 분만 0회)이 질에서 맑은 액체가 갑자기 새어 나와 응급실에 내원했다. 임신은 합병증 없이 진행되었다. 산전진료를 대체로 잘 받았지만 일부 예약을 놓쳤다. 만성 고혈압 병력이 있다. 일주일에 한 번 와인 한 잔을 마신다. 현재 라베타롤, 철분 및 비타민 보충제를 복용한다. 체온은 37.9°C (100.2°F), 맥박은 70회/분, 호흡수는 18회/분, 혈압은 128/82 mm Hg이다. 복부는 부드럽고 압통이 없다. 질경검사에서 자궁경관에 맑은 액체가 보인다. 태아 심박수는 감속 없이 170회/분으로 반응성이다. 자궁수축은 없다. 질액을 유리 슬라이드에 놓자 양치상 결정이 보인다. 다음 중 이 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 상행성 감염
B. 임신 3기의 성교
C. 베타차단제 사용
D. 알코올 사용

## 해설

진통 전 맑은 질액 유출과 양치상 결정은 진통 전 양막파열을 지지한다. 선택지 중 상행성 감염(A)은 양막의 염증·약화를 통해 파열에 기여할 수 있다. 양막파열 후 감염 위험이 증가한다는 반대 방향의 설명만으로 원인 문항에 답해서는 안 된다. 37.9°C와 태아 빈맥만으로 확진된 자궁내감염을 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 진통 전 양막파열의 선행 원인을 묻는데 해설이 파열 후 감염 위험으로 인과를 뒤집은 오류를 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001362
