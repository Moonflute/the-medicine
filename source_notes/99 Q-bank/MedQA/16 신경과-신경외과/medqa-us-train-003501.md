---
type: qbank
schema_version: 1
id: medqa-us-train-003501
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:40f443dc356c6f3a1180a70c666b8262ca391516317562128b168f09a5e360bb
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "cortical laminar necrosis"
  - "status epilepticus"
  - "postictal neurologic deficit"
  - "hemiparesis"
question_type: mechanism
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64eM7KCE7KadIOyngOyGjeymnSAoU3RhdHVzIEVwaWxlcHRpY3VzKS5tZA
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

간질 병력이 있는 45세 남성이 2주간 지속된 오른쪽 몸의 움직임 장애로 내원했다. 3주 전 전신 경련발작으로 입원해 정맥 로라제팜과 페니토인을 투여받았고, 발작은 약 50분 후 멈췄다. 최근 진찰에서 오른쪽 편마비, 오른쪽 동측성 반맹, 수용성 실어증이 있었다. 다음 중 현재 증상의 가장 가능성 높은 원인은?

## 선택지

A. 뇌농양
B. 피질 층판 괴사
C. 뇌실내 출혈
D. 두개내 동맥류 파열

## 해설

50분간 지속된 발작 후 지속적인 편마비·동측성 반맹·수용성 실어증은 좌측 대뇌피질의 구조적 손상 가능성을 시사한다. 장시간 발작은 대사 요구량 증가, 에너지 불균형 및 흥분독성 손상을 통해 피질 층판 괴사(B)를 일으킬 수 있다. 이는 외부 전류에 의한 전기적 손상을 뜻하지 않는다. 2주간 지속되는 결손을 일시적 발작후 마비만으로 설명하지 않으며 실제로는 영상 등으로 다른 뇌혈관·구조적 원인도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 장시간 발작 후 피질 손상을 단순 전기적 손상이라고 부른 부정확한 기전을 에너지 요구 증가와 흥분독성 손상으로 교정했다. 지속되는 편측 피질 결손의 B를 유지한다.
- 공식/학회 근거: https://jnnp.bmj.com/content/jnnp/77/1/104.full.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003501
