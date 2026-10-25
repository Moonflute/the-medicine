---
type: qbank
schema_version: 1
id: medqa-us-train-001983
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:47e9ebb7de44d02e57b08d780a76b8bf4fc9080665217ac769a28787879dd32f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "pneumococcal pneumonia"
  - "conjugate vaccine"
  - "Streptococcus pneumoniae"
question_type: prevention
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ygle2YlSDtj5DroLQgKFR5cGljYWwgUG5ldW1vbmlhKS5tZA
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

4세 남아가 1월에 1주간의 기침과 졸림으로 소아과에 왔다. 3~4일 전 발열과 기침이 시작되면서 다리가 ‘정말 심하게’ 아프다고 했다. 천식이 있고 albuterol을 사용하며 어머니가 acetaminophen을 투여했다. 체온 39.2°C (102.6°F), 맥박 118/min, 호흡 40/min, 혈압 92/66 mm Hg이다. 인두에 경한 홍반이 있고 우측 폐 기저부 수포음이 들리며 신속 연쇄상구균 검사는 음성이다. 흉부 X선에서 오른쪽 하엽의 균질한 음영이 보인다. 이 감염을 예방했을 백신의 종류는 무엇인가?

## 선택지

A. 생약독화 백신
B. 불활화 백신
C. 결합 백신
D. 톡소이드 백신

## 해설

1월에 발열·심한 근육통 뒤 호흡기 증상은 인플루엔자 관련 감염을 시사하므로 B는 불활화 인플루엔자 백신을 뜻한다. 4세 천식 환자에게 비강 생백신은 적합하지 않다. 폐렴구균 결합백신(C)과는 다르며 폐음영만으로 병원체를 확정할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 겨울철 근육통 전구의 인플루엔자 의도와 IIV B를 연결. 폐렴구균 백신을 불활화 2가로 설명한 오류 교정 및 원문 1월 복원.
- https://www.cdc.gov/flu/hcp/vax-summary/seasonal-influenza-vaccines.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001983
