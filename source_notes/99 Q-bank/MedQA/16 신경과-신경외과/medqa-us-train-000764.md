---
type: qbank
schema_version: 1
id: medqa-us-train-000764
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d28b2d86678c3eeed27e0633c188d23862f230b54396d209e5b43a444807f94a
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "narcolepsy"
  - "delayed sleep phase syndrome"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOuptOymnSAoTmFyY29sZXBzeSkubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9ab2xwaWRlbS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남성이 집중력과 주의력 문제로 일차 진료 의사를 방문했다. 환자는 평생 부모님과 함께 살았으며 최근 지역 공장에 취직했다고 한다. 일을 시작한 이후로 직장에서 집중하는 데 어려움을 겪고 있다. 그는 어떤 업무에도 집중을 유지할 수 없다. 상사는 그가 멍하니 허공을 응시하며 '공상'에 잠겨 있는 모습을 자주 목격한다. 상사가 소리를 질러야 그가 깜짝 놀라 다시 일을 시작한다. 환자는 항상 피로감을 느끼며 때때로 장비를 작동하다가 갑자기 잠에 빠져든다고 말한다. 지난 한 달 동안 일찍 잠자리에 들려고 노력했지만 알람이 울리기 2시간 전까지는 잠들지 못한다고 한다. 환자는 이 상태가 계속되면 직장을 잃을까 봐 두려워하고 있다. 다음 중 가장 적절한 초기 관리 단계는 무엇인가?

## 선택지

A. 수면다원검사(Polysomnography)
B. 밝은 빛 치료(Bright light therapy)
C. 모다피닐(Modafinil)
D. 졸피뎀(Zolpidem)

## 해설

알람 직전까지 잠들지 못하는 양상은 지연성 수면-각성위상장애를 고려하게 한다. 선지 중 밝은 빛 치료(B)는 일주기 위상조정을 위해 사용될 수 있지만, 성인에서 확립된 지침상 유일한1차치료로 단정해서는 안 된다. AASM2015는 성인 DSWPD의 빛치료에 근거부족으로 별도권고를 내리지 않았고 적절한 시각의 멜라토닌을 약하게 권고하였다. 수면일지/일정·노출시각을 평가해 개별화해야 한다. 졸림이 해결되기 전 위험기계 조작은 피하고, 기면증 등 다른원인도 필요시 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 성인DSWPD에 밝은빛이 확고한1차지침치료라는 단정 수정. B의 제한된근거/적용맥락과 안전상담 명시.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC4582061/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000764
