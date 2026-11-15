---
type: qbank
schema_version: 1
id: medqa-us-train-007902
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7c39a13b1bc802167ea91a31e9daed45d26b99dee40c3429b99fd8af3f6da6a1
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "community-acquired pneumonia"
  - "inpatient pneumonia treatment"
  - "cefota​​xime azithromycin"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
question_type: management
difficulty: complex
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 여성이 발열, 누런 가래, 호흡곤란으로 내원했다. 흉부 X선에서 우상엽 폐렴이 확인됐다. 호흡수는 분당 33회이고, 평가 후 중증 기준에 해당하지 않는 지역사회획득 폐렴으로 일반병동에 입원했다. 최근 90일 내 입원·정맥 항생제 사용이나 내성균 분리력은 없다. 질병관리청 실무지침에 따른 초기 경험적 정맥 항생제는?

## 선택지

A. 세페핌과 겐타마이신
B. 아지스로마이신 단독
C. 세프트리악손 단독
D. 피페라실린·타조박탐과 반코마이신

## 해설

질병관리청 2026 실무지침에서 비중증 지역사회획득 폐렴으로 입원한 성인에게는 세프트리악손 단독 정주를 기본으로 제시한다. 중증이거나 최근 입원·정맥 항생제 사용, 내성균 위험이 있으면 그에 맞게 범위를 조정한다. 입원 필요성과 중증 폐렴 기준은 구분한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 입원 CAP의 표준 병용 C를 내성균 전반을 포괄하는 치료나 확정 중증 CAP로 과장한 설명을 교정.
- https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap-in-adults

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007902
- 질병관리청, 2026 지역사회획득 폐렴 항생제 적정사용 실무지침: https://www.kdca.go.kr/bbs/kdca/263/307008/download.do
