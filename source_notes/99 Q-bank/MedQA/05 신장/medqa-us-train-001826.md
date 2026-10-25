---
type: qbank
schema_version: 1
id: medqa-us-train-001826
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b0e698c1ddba3fc0295600f4f7d43c39ed867de1574bc57bb33983c6acb948f8
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "chronic kidney disease G3a"
  - "hyperkalemia"
  - "albuminuria"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 백인 남성이 신장내과 추적진료를 위해 내원했다. G3a 병기 만성콩팥병과 A2 알부민뇨로 진단받았고 엄격한 식이요법과 enalapril을 복용 중이다. 양성 전립선비대증으로 요로폐색이 합병된 병력이 있다. 활력징후는 안정적이고 혈압은 권고 범위다. 최근 검사에서 혈청 나트륨 140 mEq/L, 칼륨 5.8 mEq/L, 염소 102 mEq/L, 인산염 4.0 mg/dL, 헤모글로빈 11.5 mg/dL, 알부민 배설률 280 mg/day이다. 다음 중 최선의 관리 전략은 무엇인가?

## 선택지

A. furosemide 추가
B. 관찰
C. patiromer 추가
D. sevelamer 추가

## 해설

정답은 C이다. CKD와 ACEI 복용 중 K5.8은 고칼륨혈증이다. patiromer는 장내 K를 결합해 배출시키는 고칼륨혈증 치료제로 지속적인 K조절을 도울 수 있다. 약물·식이·가성고K 여부 및 ECG/긴급성도 평가한다. 작용발현이 지연되므로 생명위협 급성고K의 응급처치를 대신하지 않는다. 저칼륨혈증 치료제가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: patiromer를 저칼륨 치료제라고 한 반대 설명 교정.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bf002984-d6c9-46df-aecb-a07733f763c1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001826
