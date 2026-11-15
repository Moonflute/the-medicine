---
type: qbank
schema_version: 1
id: medqa-us-train-005613
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ece06614d64c92a21b6927a9ca8f92f42d626840dda972d5dc28c17811b4aa6e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "감염성 심내막염"
  - "패혈성 색전"
  - "Roth 반점"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

좌측 판막 감염성 심내막염으로 입원 중인 환자에게 1시간 전 갑자기 실어증과 오른쪽 편마비가 생겼다. 급성 허혈성 뇌졸중이 의심된다. 초기 대응으로 적절한 것은?

## 선택지

A. 정맥 혈전용해제부터 투여하고 혈관영상을 시행한다
B. 정맥 헤파린을 시작한 뒤 증상 호전을 기다린다
C. 응급 뇌·뇌혈관영상을 시행하고, 정맥 혈전용해는 피하며 대혈관 폐색이면 혈전제거술 가능성을 평가한다
D. 항생제를 먼저 조정하고 하루 뒤 신경학적 상태와 영상을 확인한다

## 해설


감염성 심내막염으로 인한 뇌색전에서는 두개내 출혈 위험 때문에 정맥 혈전용해를 권하지 않는다. 대혈관 폐색이면 다른 조건도 확인해 선별적으로 기계적 혈전제거술을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005613 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 실제 IE·뇌 색전 케이스에 Shigella 장출혈/신생물성 IE를 삽입한 오연결 해설 교체.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005613
- https://doi.org/10.1093/eurheartj/ehad193
