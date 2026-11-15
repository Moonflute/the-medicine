---
type: qbank
schema_version: 1
id: medqa-us-train-005638
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:928729f0836ecd97c22f6ea85509efb3846de5bc657f8d22143bcaff438012e3
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "베크위드-비데만 증후군"
  - "제대탈장"
  - "거대설 및 저혈당"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv67Kg7YGs7JyE65OcLeu5hOuNsOunjCDspp3tm4TqtbAgKEJlY2t3aXRoLVdpZWRlbWFubiBTeW5kcm9tZSkubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

신생아에게 거대설, 배꼽탈장과 반복 저혈당이 있으며 왼쪽 팔다리가 오른쪽보다 크다. 베크위트–비데만 스펙트럼이 의심될 때 먼저 평가할 분자 이상은?

## 선택지

A. 5번 염색체 단완 결실
B. 11p15.5 영역의 유전체 각인·메틸화 이상
C. 22q11.2 영역 결실
D. DMD 유전자 점돌연변이

## 해설

이 스펙트럼은 성장조절 유전자가 있는 11p15.5의 각인 이상과 관련된다. 1차로 메틸화 분석 등을 시행하고, 임상 소견이 강하면 모자이크나 다른 기전을 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 베크위트-비데만 증후군을 WT1·11번 장완으로 설명한 오류를 11p15.5 각인/성장조절 영역 및 CDKN1C로 교정했다.
- https://medlineplus.gov/genetics/condition/beckwith-wiedemann-syndrome/
- https://medlineplus.gov/genetics/gene/cdkn1c/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005638
- https://www.ncbi.nlm.nih.gov/books/NBK1394/
