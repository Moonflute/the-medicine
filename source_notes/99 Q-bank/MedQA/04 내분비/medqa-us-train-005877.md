---
type: qbank
schema_version: 1
id: medqa-us-train-005877
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dee906b361b7001a34dea479590b9c7c5e3255ef56b7a2ac1b0dc2e5a53d7001
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "선천성 부신과형성"
  - "21-수산화효소 결핍"
  - "신생아 염분소실"
  - "congenital adrenal hyperplasia"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISg7LKc7ISxIOu2gOyLoCDqs7ztmJXshLHspp0gKENvbmdlbml0YWwgQWRyZW5hbCBIeXBlcnBsYXNpYSkubWQ
question_type: management
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9GbHVkcm9jb3J0aXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 10일에 구토와 체중 감소로 온 영아가 염분소실형 21-수산화효소 결핍으로 진단됐다. 급성 수액·스테로이드 치료로 안정됐다. 퇴원 뒤 유지 치료 조합은?

## 선택지

A. 하이드로코르티손, 플루드로코르티손과 염분 보충
B. 하이드로코르티손만 투여하고 염분 제한
C. 플루드로코르티손만 투여
D. 덱사메타손과 스피로놀락톤 병용

## 해설

염분소실형은 코르티솔과 무기질코르티코이드가 모두 부족하다. 영아기에 하이드로코르티손과 플루드로코르티손을 보충하고 염분을 추가한다. 아플 때의 스트레스 용량 교육과 성장·전해질 추적도 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 신생아 CAH A의 steroid를 glucocorticoid/mineralocorticoid 대체와 Na관리로 구체화.
- https://doi.org/10.1210/jc.2018-01865

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005877
