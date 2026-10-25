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
question_type: mechanism
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv67Kg7YGs7JyE65OcLeu5hOuNsOunjCDspp3tm4TqtbAgKEJlY2t3aXRoLVdpZWRlbWFubiBTeW5kcm9tZSkubWQ
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 남아가 과도한 성장과 큰 혀 때문에 부모와 함께 소아과를 방문했다. 부모는 근친혼이 아닌 부부이며, 어머니는 20세 초임부였다. 아이는 임신 만삭에 출생했고 출생 체중은 3.8kg(8.4lb), 키는 52cm(20.5인치)였다. 체온은 37.0ºC(98.6°F), 맥박은 분당 90회, 호흡수는 분당 22회이다. 신체검사에서 배꼽으로 돌출된 종괴가 있고, 머리둘레는 같은 연령의 아이들보다 작다. 전신검사에서 간비대가 있다. 무증상 저혈당(36 mg/dL)도 발견되어 포도당을 주입했다. 다음 중 이 질환의 병인을 가장 잘 설명하는 기저 기전은 무엇인가?

## 선택지

A. 11번 염색체 단완의 종양억제유전자 돌연변이
B. 22번 염색체 장완의 종양억제유전자 돌연변이
C. 21번 염색체 비분리
D. 17번 염색체 장완의 종양억제유전자 돌연변이

## 해설

과성장, 거대설, 배꼽 부위 돌출, 장기 비대와 저혈당은 베크위트-비데만 스펙트럼을 시사한다. 관련 영역은 11번 염색체 단완 11p15.5의 각인·성장조절 유전자들이다. 일부에서는 성장 억제 기능을 가진 CDKN1C의 병적 변이가 원인이므로 선택지 중 A가 부합한다. 다수는 각인 메틸화 이상 등 다른 기전이며 모든 사례를 단일 종양억제유전자 변이로 일반화할 수 없다. WT1이나 11번 염색체 장완으로 설명한 기존 해설은 틀렸다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 베크위트-비데만 증후군을 WT1·11번 장완으로 설명한 오류를 11p15.5 각인/성장조절 영역 및 CDKN1C로 교정했다.
- https://medlineplus.gov/genetics/condition/beckwith-wiedemann-syndrome/
- https://medlineplus.gov/genetics/gene/cdkn1c/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005638
