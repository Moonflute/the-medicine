---
type: qbank
schema_version: 1
quality_reviewed_at: 2026-09-09
id: medqa-us-train-003961
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5a86281ee4ba712afcddeb514fcd4522f69be1b44902c615e69ad440766acd3a
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "지역사회획득폐렴"
  - "세균성 폐렴"
  - "CURB-65"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ygle2YlSDtj5DroLQgKFR5cGljYWwgUG5ldW1vbmlhKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: verified
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
---

# MedQA US 임상문제

## 문제


67세 여자가 발열, 흉통, 그리고 2일간 지속된 중등도의 녹황색 가래를 동반한 기침으로 응급실에 왔다. 그동안 심한 권태감, 오한, 호흡곤란이 있었다. 과거력은 고혈압, 고콜레스테롤혈증, 제2형 당뇨병이며 리시노프릴, 아토르바스타틴, 메트포르민을 복용한다. 20년간 하루 한 갑을 흡연했으며 현재는 금연했다. 체온 39.0°C, 맥박 110회/분, 호흡수 33회/분, 혈압 143/88 mmHg이다. 실내 공기에서 산소포화도는 94%이다. 청진에서 우상엽에 수포음이 들린다. 백혈구 12,300/mm³, 적혈구침강속도 60 mm/h, 요소질소 15 mg/dL이다. 지역사회획득 폐렴으로 진단되었다. 증상 관리를 위한 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지


A. 중환자실 입원 후 암피실린-설박탐과 레보플록사신 투여
B. 아지트로마이신과 세프트리악손으로 입원 치료
C. 세페핌, 아지트로마이신, 겐타마이신으로 입원 치료
D. 입원하지 않고 경구 아목시실린만 처방한 뒤 경과 관찰

## 해설



65세 이상이고 호흡수가 분당 30회 이상인 폐렴 환자로, 제시된 보기 중 입원 후 세프트리악손과 아지트로마이신의 병용(B)이 적절하다. 이는 베타락탐과 마크롤라이드의 두 약제 조합이다. 쇼크나 기계환기 필요성이 제시되지 않아 중환자실 입원을 일률적으로 선택하지 않는다. 녹농균 위험인자가 제시되지 않은 상황에서 세페핌·겐타마이신 등으로 광범위하게 확대하는 것도 우선 선택이 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003961
- 편집 이력: 원본부터 중복이던 C/D 중 D를 외래 단독 경구 치료 보기로 교체했다. 첨부 없는 X선 참조는 폐렴 진단 조건으로 명시하여 치료 선택에 필요한 정보를 완결했다.
- 검토 근거: [ATS/IDSA Community-Acquired Pneumonia](https://www.atsjournals.org/doi/full/10.1164/rccm.201908-1581ST)
