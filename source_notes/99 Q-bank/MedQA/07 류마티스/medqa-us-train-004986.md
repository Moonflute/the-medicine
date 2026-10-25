---
type: qbank
schema_version: 1
id: medqa-us-train-004986
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d004fae113833772fa843a583f514d39c098a4f741ce359d0297f2262ef0751e
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "급성 세균성 관절염"
  - "혈행성 관절 감염"
  - "패혈성 무릎관절염"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

42세 여자가 2일 동안 악화되는 심한 오른쪽 무릎 통증, 부종과 뻣뻣함으로 응급실에 왔다. 제2형 당뇨병과 골다공증으로 metformin·alendronate를 복용하고 어머니는 RA가 있다. 여러 파트너와 성생활을 하며 콘돔을 일관되게 쓰지 않는다. 매일 와인1~2잔을 마시고 BMI29kg/m²이다. 최근 체중 감량을 위해 주 3회 2마일 달리기를 시작했다. 체온 38.3°C이고 오른쪽 무릎은 붓고 압통이 있다. 발가락 발바닥에 통증 없는 궤양이 있으며 관절액 백혈구는 55,000/μL, 다형핵세포 77%이다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 세균 감염에 대한 자가면역 반응
B. 숨은 반월상연골 파열
C. 감염의 혈행성 전파
D. 관절강 내 요산 결정 침착

## 해설


급성 세균성 관절염은 혈행성 전이로 인해 관절액에 고농도 백혈구와 다형핵구가 나타난다. 이는 감염성 원인에 해당한다. 따라서 혈행성 전파가 가장 가능성 높은 원인이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004986 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈행성 감염 C의 임상상은 유지하며 감염원·위험 평가에 중요한 당뇨/성생활 정보를 복원했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004986
