---
type: qbank
schema_version: 1
id: medqa-us-train-003041
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:58d62258b7892b9f89958b7ec63891997f4816e3279f62717c22e46e3a818279
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute myocardial infarction"
  - "cardiogenic shock"
  - "postoperative opioid overdose differential"
  - "new left bundle branch block"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
question_type: investigation
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
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

대퇴동맥 색전절제술 12시간 후 84세 남성이 병상 바닥에서 의식 없이 발견되었다. 수술 후 환자조절 진통펌프를 사용했고 과거 2년과 6년 전에 관상동맥우회술을 두 번 받았다. 관상동맥질환, 고혈압, 고콜레스테롤혈증, 위식도역류질환, 제2형 당뇨병이 있다. 창백하고 체온 36.1°C, 맥박 120회/분, 호흡수 24회/분, 혈압 88/60 mmHg, 산소포화도 85%이다. 명령에 반응하지 않지만 통증에는 사지를 움츠리고 동공은 양측 축소되어 있다. 차갑고 축축한 피부, 경정맥 팽창, 오른쪽 관자놀이와 상악의 멍, 양측 폐기저부 수포음, 심첨부 새 2/6 수축기 잡음이 있다. 삽관하고 기계환기를 시행했다. 추가 평가에서 다음 중 가장 가능성 높은 소견은?

## 선택지

A. 심전도에서 새로운 좌각차단
B. 배꼽 높이에서 박동성 복부 종괴
C. 프로칼시토닌과 인터루킨-6 양성
D. 날록손 투여 후 의식 호전

## 해설

수술 후 저혈압·차갑고 축축한 피부·JVD·폐수포음·새 심첨부 잡음은 급성 심장성 쇼크/허혈과 급성 MR 가능성을 시사한다. 선택지 중 새 LBBB A가 이에 동반될 수 있다. 그러나 LBBB가 급성 MI의 필수적이거나 가장 흔한 ECG 소견은 아니고 단독으로 STEMI를 확진하지도 않는다. 실제로 ECG·연속 troponin·심초음파로 평가하며 축동만으로 opioid 호흡억제를 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 쇼크·폐울혈·새 MR 잡음은 심장성 원인; new LBBB A가 선택지상 가능하나 흔함/단독 MI 확진으로 설명하지 않음.
- https://www.ahajournals.org/hyp/doi/pdf/10.1161/CIR.0000000000001309

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003041
