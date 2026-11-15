---
type: qbank
schema_version: 1
quality_reviewed_at: 2026-09-09
id: medqa-us-train-003961
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5a86281ee4ba712afcddeb514fcd4522f69be1b44902c615e69ad440766acd3a
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "지역사회획득폐렴"
  - "세균성 폐렴"
  - "CURB-65"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ygle2YlSDtj5DroLQgKFR5cGljYWwgUG5ldW1vbmlhKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제


67세 여성이 발열, 기침과 호흡곤란으로 내원했다. 영상에서 두 폐엽에 새 침윤이 있다. 새로 혼돈이 생겼고 호흡수는 분당 34회, PaO₂/FiO₂는 225이다. 최근 입원·정맥 항생제 사용이나 내성균 분리 이력은 없다. 중증 지역사회획득 폐렴의 초기 항생제는?

## 선택지


A. 정맥 세파졸린 단독
B. 세프트리악손과 아지트로마이신 병용
C. 반코마이신 단독
D. 경구 아목시실린 단독으로 귀가

## 해설



호흡수 증가, 산소화 저하, 다엽 침윤과 혼돈은 중증 폐렴을 지지한다. 질병관리청 2026 실무지침은 내성균 위험이 없는 중증 입원 환자에서 세프트리악손과 아지트로마이신 병용을 제시한다. 호흡·순환 상태에 따라 집중치료 필요성도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 현재 한국어 CAP입원치료 B는 적절하며 ICU/녹농균 확대 근거 없음. 영어 D가 C와 중복된 선지결함도 대조 확인했으나 B 판정에는 영향 없음.
- https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap-in-adults

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003961
- https://www.kdca.go.kr/bbs/kdca/263/307008/download.do
- 편집 이력: 원본부터 중복이던 C/D 중 D를 외래 단독 경구 치료 보기로 교체했다. 첨부 없는 X선 참조는 폐렴 진단 조건으로 명시하여 치료 선택에 필요한 정보를 완결했다.
- 검토 근거: [ATS/IDSA Community-Acquired Pneumonia](https://www.atsjournals.org/doi/full/10.1164/rccm.201908-1581ST)
