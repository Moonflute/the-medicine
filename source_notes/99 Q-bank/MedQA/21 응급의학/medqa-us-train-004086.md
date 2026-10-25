---
type: qbank
schema_version: 1
id: medqa-us-train-004086
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fcb9c646e9a28231955f8ae8468a64b125daed84433c205c5ee206e70200d848
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "칸나비스 구토 증후군"
  - "대마 사용"
  - "온수 목욕으로 호전되는 구토"
question_type: 임상증례 객관식
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-q4ieyEsSDspJHrj4Ug7LSd66GgIChHZW5lcmFsIE1hbmFnZW1lbnQgb2YgQWN1dGUgUG9pc29uaW5nKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 남자가 구토로 응급실에 왔다. 어젯밤부터 심한 구토가 시작되어 호전되지 않았고 뜨거운 샤워를 하면 증상이 좋아진다고 한다. 과거에도 비슷한 증상으로 응급실을 여러 번 방문했으며 정맥 약물 남용으로 온 적도 있다. 체온 37.5°C, 혈압 127/68 mmHg, 맥박 110회/분, 호흡수 22회/분, 실내 공기 산소포화도 98%이다. 현재 구토 중이어서 신체검사는 보류했다. 가장 가능성 높은 진단과 관련된 요인은 무엇인가?

## 선택지

A. 알코올 사용
B. 마리화나 사용
C. 약물 금단
D. 바이러스성 위장염

## 해설

반복 구토와 뜨거운 샤워로의 호전은 cannabinoid hyperemesis syndrome을 시사하며 관련 요인은 marijuana 사용(B)이다. 일반적인 cyclic vomiting syndrome과 완전히 같은 병명은 아니다. 실제 진단에서는 장기간 대마 사용과 중단 후 경과를 확인하고 다른 급성 구토 원인도 배제한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CHS와 일반 cyclic vomiting syndrome을 동의어로 설명한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004086
