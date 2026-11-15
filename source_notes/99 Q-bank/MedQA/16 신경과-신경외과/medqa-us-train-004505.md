---
type: qbank
schema_version: 1
id: medqa-us-train-004505
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68506d1f7c84192e7a77bec58d1ecaf4931c6895f1fcbe0148111c2317eefa58
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "경막하혈종"
  - "혈우병"
  - "두부 외상"
question_type: diagnosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyasOuzkSAoSGVtb3BoaWxpYSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 가벼운 두부외상 일주일 뒤 심해지는 두통, 혼돈과 오른쪽 근력저하로 내원했다. 외삼촌에게 출혈성 질환이 있으며 환자는 PT가 정상이고 aPTT는 연장돼 있다. 두부 CT에서 뇌 표면을 따라 초승달 모양의 혈액 저류가 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 두피하 출혈
B. 뇌정맥동 혈전증
C. 경막외혈종
D. 경막하혈종

## 해설

두부외상 뒤 점차 심해진 두통과 국소 신경결손, 초승달 모양의 경막하 혈액 저류는 경막하혈종에 합당하다. 단독 aPTT 연장과 가족력은 응고인자 이상 가능성을 높인다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 사진에서 얇은 고밀도 층을 보았다는 추가 사실을 삭제했다. 작은 외상 후 지연 진행과 응고장애로 경막하혈종 D를 가장 시사하므로 그림 부재만으로 보류하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004505
