---
type: qbank
schema_version: 1
id: medqa-us-test-000288
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ad1d5e13d4d4c674a156a49174cdf17cd2959a34fab5a50cf40641a11d32b240
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환 급성 악화"
  - "세균성 기관지염"
  - "COPD"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

COPD로 치료 중인 53세 남성이 3일 사이 평소보다 숨이 차고 가래량이 많아졌다. 맑던 가래가 뚜렷하게 농성으로 바뀌었다. 흉부 X선에 새 폐침윤은 없다. 속효성 기관지확장제와 전신 스테로이드 외에 추가할 치료는?

## 선택지

A. 환자 위험인자와 지역 내성을 고려해 항생제를 투여한다
B. 객담 색으로 녹농균을 확진하고 모든 환자에게 광범위 정맥 항생제를 투여한다
C. 바이러스가 확인될 때까지 전신 항진균제를 투여한다
D. 발열이 없으면 다른 소견과 무관하게 항생제를 사용하지 않는다

## 해설

COPD 악화에서 호흡곤란, 가래량과 가래 농성이 함께 증가하면 항생제 적응증에 해당한다. 약제는 과거 배양, 최근 항생제, 위험인자와 중증도에 따라 고른다. 농성 객담의 색만으로 특정 균을 진단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 농성 객담을 녹농균의 증거로 설명한 오류를 교정하고 COPD 악화의 항생제 적응증을 명시.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10066569/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000288
- https://new.lungkorea.org/board/guide/view/13792
