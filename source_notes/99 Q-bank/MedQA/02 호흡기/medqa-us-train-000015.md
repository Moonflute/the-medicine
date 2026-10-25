---
type: qbank
schema_version: 1
id: medqa-us-train-000015
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:83b43935db7ad14dfca13fa0ca7d5a94f2a975f0ee9881ba4ad934f4c13388e1
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성 기침"
  - "피로"
  - "호흡곤란"
  - "고혈압"
  - "고지혈증"
  - "흡연"
  - "천명음"
  - "나음"
  - "만성 폐쇄성 폐질환 (COPD)"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDquLDsuagubWQ
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: mechanism
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVub2ZpYnJhdGUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 여성이 지난 2년간 기침과 피로를 주소로 내원했습니다. 아침에는 흰색 가래가 동반된 기침을 합니다. 계단을 한 층 오를 때 숨이 차다고 합니다. 고혈압과 고지혈증이 있습니다. 최근 노숙자 쉼터에서 간호사로 일하다 은퇴했습니다. 40년간 매일 1갑의 담배를 피웠습니다. 현재 복용 중인 약물은 라미프릴과 페노피브레이트입니다. 체온은 36.5°C, 호흡수는 24회/분, 맥박은 85회/분, 혈압은 140/90 mmHg입니다. 양쪽 폐야 전반에서 산재된 천명음과 나음(rhonchi)이 들립니다. 심잡음, 마찰음, 분마음(gallop)은 없으나 심음은 멀리서 들립니다. 이 환자의 증상에 대한 가장 가능성 있는 기저 원인은 다음 중 무엇입니까?

## 선택지

A. 폐 유순도(compliance)의 만성적 감소
B. 키닌(kinins)의 국소적 축적
C. 호기 기류의 점진적 폐쇄
D. 기능적 잔기량(functional residual capacity)의 점진적 소실

## 해설


환자는 흡연력과 만성 기침, 호흡곤란, 전신 청진에서 천명음과 나음이 관찰되는 COPD 전형이다. COPD의 주요 병리 기전은 호기 시 기류의 점진적 폐쇄이며, 이는 기류 제한을 초래한다. 따라서 가장 가능성 있는 원인은 호기 기류의 점진적 폐쇄이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C/기류제한 해설 유지. gallop을 심실확장기성 잡음으로 옮긴 오역만 분마음으로 정정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000015
