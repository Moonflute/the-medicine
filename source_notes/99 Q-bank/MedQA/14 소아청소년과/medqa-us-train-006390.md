---
type: qbank
schema_version: 1
id: medqa-us-train-006390
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5f0595663989f4be12381437987b9cc4f66afc630328e17e34b7e474ad6a3e4d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "선천성 부신과형성증"
  - "21-수산화효소 결핍"
  - "염분 소실 위기"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISg7LKc7ISxIOu2gOyLoCDqs7ztmJXshLHspp0gKENvbmdlbml0YWwgQWRyZW5hbCBIeXBlcnBsYXNpYSkubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 8일 신생아에게 구토·탈수·저혈압이 있다. 혈당 42 mg/dL, 나트륨 122 mmol/L, 칼륨 6.5 mmol/L이고 17-하이드록시프로게스테론이 현저히 높다. 염분소실형 부신과형성증이 의심된다. 초기 소생과 함께 투여할 약은?

## 선택지

A. 정맥 하이드로코르티손
B. 경구 플루드로코르티손만 투여
C. 레보티록신
D. 덱스트로스만 투여하고 확진 때까지 스테로이드는 보류

## 해설

저혈압, 저혈당, 저나트륨혈증과 고칼륨혈증은 부신위기를 시사한다. 응급 하이드로코르티손, 수액과 포도당을 투여하며 고칼륨혈증도 즉시 평가·관리한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 21-hydroxylase 결핍에서 안드로겐 감소·여성화라는 반대 기전 오류를 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006390
- https://www.endocrine.org/clinical-practice-guidelines/congenital-adrenal-hyperplasia-guideline-resources
