---
type: qbank
schema_version: 1
id: medqa-us-train-004471
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fb22c5e25af242ba1b79877bc870f77063af69ee20333a836bfb2e618d578a70
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "인플루엔자"
  - "바이러스성 폐렴"
  - "뉴라미니다제 억제제"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
  - MDIg7Zi47Z2h6riwL-u5hOygle2YlSDtj5DroLQgKEF0eXBpY2FsIFBuZXVtb25pYSkubWQ
question_type: mechanism
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvT3NlbHRhbWl2aXIubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

83세 여성이 24시간 동안 지속된 발열, 권태감과 기침으로 응급실에 왔다. 요양시설에 거주하며 이웃 몇 명도 비슷한 증상을 앓았다. 과거력으로 리시노프릴로 치료 중인 고혈압이 있다. 체온은 38.9°C (102.2°F), 맥박은 분당 105회, 호흡수는 분당 22회, 혈압은 112/62 mm Hg이다. 실내 공기에서 산소포화도는 88%이다. 백혈구 수는 10,500/mm3, 혈청 크레아티닌은 0.9 mg/dL이다. 흉부 X선에서 양쪽 하엽에 망상결절성 음영이 보인다. 혈청 프로칼시토닌은 0.06 μg/L (정상 < 0.06 μg/L)이다. 이 환자 상태를 관리하기 위한 다음 단계로 적절한 약물의 작용기전은 무엇인가?

## 선택지

A. DNA 중합효소 억제
B. 뉴라미니다제 억제
C. 뉴클레오시드 역전사효소 억제
D. 프로테아제 억제

## 해설

시설 내 집단 발병과 급성 발열·근육통 양상의 호흡기 질환은 인플루엔자를 의심하게 한다. 저산소혈증을 보이는 고위험 고령 환자에서는 인플루엔자 검사와 함께 신속한 항바이러스 치료를 고려하며, 보기 중 오셀타미비르 등의 뉴라미니다제 억제(B)가 해당한다. 뉴라미니다제 억제는 새 바이러스 입자의 방출과 확산을 방해한다.

현재 검사만으로 인플루엔자가 확진된 것은 아니며 낮은 프로칼시토닌만으로 세균성 동시감염을 배제하지 않는다. 저산소혈증 평가·산소치료와 다른 호흡기감염 감별도 병행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 고위험 인플루엔자 의심의 초기 항바이러스 치료를 공식 CDC로 확인하고 뉴라미니다제의 바이러스 방출 기전 명료화.
- https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004471
