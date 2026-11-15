---
type: qbank
schema_version: 1
id: medqa-us-train-004254
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:87b9126e1f51e735092145a3d7f3f0799026415f4b426ccc3dc17c56b141a44e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "다혈관 관상동맥질환"
  - "허혈성 심근병증"
  - "관상동맥 우회술"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: 임상증례 객관식
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 제2형 당뇨병과 만성 관상동맥질환으로 약을 복용해도 일상 활동 중 협심증이 지속된다. 관상동맥조영에서 근위 좌전하행동맥을 포함한 세 혈관에 중증 협착이 있다. 심장팀은 재혈관화가 필요하고 수술 위험도는 감당할 수 있다고 판단했다. 우선 권고할 재혈관화 방법은?

## 선택지

A. 관상동맥우회술
B. 항응고제만 정맥 투여
C. 서방형 질산염만 추가
D. 모든 병변의 경피적 관상동맥중재술을 수술보다 우선

## 해설

당뇨병이 있고 좌전하행동맥을 포함한 다혈관질환에서 수술이 가능한 환자라면 관상동맥우회술을 중재술보다 우선하는 경우가 많다. 병변의 복잡도, 수술 위험과 환자 선호를 심장팀이 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DM+LAD포함 다혈관CAD의 CABG A는 타당하나 서맥 자체를 수술근거로 한 해설 수정.
- https://www.jacc.org/doi/10.1016/j.jacc.2021.09.005

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004254
- ACC/AHA/SCAI 관상동맥 재혈관화 진료지침: https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2021/12/08/21/19/2021-Guideline-for-Revascularization-gl-revasc
