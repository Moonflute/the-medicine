---
type: qbank
schema_version: 1
id: medqa-us-train-004686
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b341f1595cf6295d8c896b50a3de84acbacc240f47ffe2981b531d88ffe36503
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "불안정 협심증 감별"
  - "수술 후 심근허혈"
  - "심장 약물부하검사"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-u2iOyViOyglSDtmJHsi6zspp0gKFVuc3RhYmxlIEFuZ2luYSkubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQWRlbm9zaW5lLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

양측 서혜부 탈장 개방수술 3일 후, 66세 남성에게 걸을 때 악화되는 간헐적인 상복부 불편감이 새로 생겼다. 휴식하면 호전되는 새로운 호흡곤란도 있다. 수술 중이나 직후에는 합병증이 없었고 수술 다음 날부터 보행을 재개했다. 제2형 당뇨병, 고콜레스테롤혈증과 고혈압이 있으며 25갑년 흡연력이다. 입원 전 메트포르민, 심바스타틴과 리시노프릴을 복용했다. 체온은 37°C (98.6°F), 맥박은 분당 80회, 호흡수는 분당 16회, 혈압은 129/80 mm Hg, 실내 공기 산소포화도는 98%이다. 복부는 부드럽고 치유 중인 수술 흉터 두 개에 중등도의 장액성 분비물이 있다. 심폐검사는 정상이고 안정 시 심전도와 심장효소도 정상이다. 흉부 X선과 복부 초음파도 정상이다. 진단을 위한 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 복부 자기공명영상
B. 수술 부위 배양 면봉검사
C. 관상동맥조영술
D. 약물 부하 심장검사

## 해설

운동이 제한된 수술 후 환자에서 급성 관상동맥증후군을 배제하고 안정 상태라면 D의 약물부하 검사가 허혈 평가에 가능하다. 단 한 차례 정상 ECG/troponin만으로 진행 중 ACS가 배제되지는 않는다. 약물부하는 dobutamine 또는 적절한 혈관확장제를 이용하며 dopamine을 표준 약물부하 약제로 설명한 것은 오류다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 약물부하검사의 dopamine 오역을 dobutamine으로 교정하고 급성허혈 배제 전 검사로 오용되지 않도록 명시.
- https://www.jacc.org/doi/10.1016/j.jacc.2021.07.053
- https://www.journalofnuclearcardiology.org/article/S1071-3581%2826%2900351-X/fulltext

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004686
