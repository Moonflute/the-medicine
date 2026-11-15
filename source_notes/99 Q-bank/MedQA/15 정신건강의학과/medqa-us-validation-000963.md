---
type: qbank
schema_version: 1
id: medqa-us-validation-000963
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:fc1ff91c32882f5fd1baedf81eb3571e66244cc5edaec3620bd5439fde4417e0
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "HIV 감염"
  - "감염병 신고"
  - "환자 비밀보장"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
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
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

외래 환자의 HIV 확인검사에서 처음으로 감염이 확진됐다. 국내에서 진단한 의료기관이 해야 할 신고는?

## 선택지

A. 24시간 이내 관할 보건소장에게 신고한다
B. 7일 이내 관할 보건소장에게 신고한다
C. 24시간 이내 국민건강보험공단에 신고한다
D. 환자의 별도 동의를 받은 경우에만 신고한다

## 해설

국내에서는 HIV 감염을 진단한 의사 또는 의료기관이 진단 사실을 24시간 이내 관할 보건소장에게 신고한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000963
- 국가법령정보센터, 후천성면역결핍증 예방법 제5조: https://law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1006934417
- 질병관리청, 2026 HIV/AIDS 관리지침: https://dportal.kdca.go.kr/pot/bbs/BD_selectBbs.do?q_bbsDocNo=20260202102903689&q_bbsSn=1001&q_clsfNo=-1

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 미국 원문 공중보건 보고와 파트너 알림을 모든 국가·모든 가족 공개 의무로 일반화하지 않도록 교정. 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://www.cdc.gov/hivnexus/hcp/partner-services/index.html
