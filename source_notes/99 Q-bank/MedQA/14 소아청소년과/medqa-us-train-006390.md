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
question_type: diagnosis
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

생후 6일 된 여아가 심한 구토와 수유 불량으로 어머니와 함께 병원에 내원했다. 어머니는 산전 진찰을 받지 않았다. 체온은 36.8°C(98.2°F), 혈압은 50/30 mm Hg, 맥박은 분당 150회이다. 진찰에서 탈수되어 있고 쇼크 징후가 보인다. 외부 생식기는 모호하며 소음순이 붙어 있고 음핵이 커져 있다. 검사 결과 혈청 나트륨 125 mEq/L, 혈청 칼륨 6 mEq/L, 혈청 17-하이드록시프로게스테론 100,000 ng/dL(정상 1,000~3,000 ng/dL)이다. 다음 중 이 영아의 상태를 일으킨 가장 가능성 높은 원인은?

## 선택지

A. 21-수산화효소 결핍
B. 11β-수산화효소 결핍
C. 17α-수산화효소 결핍
D. 태반 아로마타제 결핍

## 해설

21-수산화효소 결핍(A)은 코르티솔·알도스테론 합성을 저하시켜 염분 소실, 저나트륨혈증·고칼륨혈증·쇼크를 일으킬 수 있다. 전구물질이 안드로겐 합성으로 전환되어 안드로겐은 증가하며 46,XX 영아의 음핵 비대·음순 융합 등 남성화가 생긴다. 현저한 17-hydroxyprogesterone 상승도 이 진단에 부합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 21-hydroxylase 결핍에서 안드로겐 감소·여성화라는 반대 기전 오류를 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006390
