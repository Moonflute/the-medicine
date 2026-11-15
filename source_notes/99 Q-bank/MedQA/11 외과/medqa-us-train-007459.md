---
type: qbank
schema_version: 1
id: medqa-us-train-007459
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7f84d69230b96f962985b065ee068fd012394fd225b04d69ce30216a73e2858b
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "습성 괴저"
  - "당뇨병성 족부 감염"
  - "말초동맥질환"
  - "절단 적응증"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
---

# MedQA US 임상문제

## 문제

60세 당뇨병 환자가 발에 검게 변한 조직과 악취 나는 고름, 물집이 생긴 뒤 쇼크로 내원했다. 발 혈류도 나쁘다. 소생과 광범위 정맥 항생제를 시작했다. 다음 조치는?

## 선택지

A. 괴사 경계가 선명해질 때까지 기다린다
B. 항생제 감수성이 나올 때까지 수술을 보류한다
C. 외과·혈관외과에 즉시 의뢰해 배농·괴사조직 제거와 재관류 가능성을 평가한다
D. 발 전체를 바로 절단하고 혈류 평가는 생략한다

## 해설


감염된 괴저와 쇼크에서는 신속한 감염원 조절이 필요하며, 허혈이 동반되면 혈관팀이 재관류 가능성과 시점을 함께 판단한다. 감염 범위와 조직 생존 가능성에 따라 절제 범위를 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007459 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 패혈증·난치성 PAD·수포성 검은 변색과 악취/농성 배액의 습성 괴저 C가 절단 고려를 가장 강하게 지지한다. 혈류 저하·흡연력·균혈증 각각만으로 자동 절단한다고 판단하지 않았다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/diabetic-foot-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007459
