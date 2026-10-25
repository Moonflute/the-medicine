---
type: qbank
schema_version: 1
id: medqa-us-train-005831
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3449ba06df1241350523271d67963d1cb3bda2f5f6eea0b1196cd07af70eb86e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "관상동맥 혈류 훔침"
  - "디피리다몰"
  - "허혈성 흉통"
  - "Coronary artery steal syndrome"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: mechanism
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlweXJpZGFtb2xlLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

당뇨병과 고혈압 병력이 있는 55세 남성이 쥐어짜는 듯한 흉골하 흉통으로 응급실에 왔다. 오는 길에 아스피린과 니트로글리세린을 투여받아 현재 통증은 10점 만점에 2점이다. 초기 심전도는 정상이고 첫 심장 트로포닌은 0.10 ng/mL(참고치 <0.10)이다. 관찰실로 보냈고 디피리다몰을 투여하자 흉통이 재발했다. 다음 중 현재 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 심장 사르코이드증
B. 관상동맥 혈류 훔침
C. 스트레스 유발 심근병증
D. 혈관연축성 관상동맥질환

## 해설

Dipyridamole은 정상 관상동맥 저항혈관을 확장하여 이미 최대확장된 협착 의존 영역과의 상대적 관류 차이/steal을 유발할 수 있어 B이다. 단순히 심장 혈류가 전신 말초혈관으로 빠져나가는 기전이 아니다. 급성흉통과 경계 troponin 환자에서 ACS 배제 전 약물부하가 안전하다고 권고하는 문항도 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Coronary steal B를 관상동맥에서 전신말초로 혈류이동한다고 설명한 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005831
