---
type: qbank
schema_version: 1
id: medqa-us-train-009890
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:de830aa6facca0725d5f3a449a8a7128967c356845ecfd0a86653589d6a79a77
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "감염성 심내막염"
  - "대동맥판 역류"
  - "대동맥판막 치환술"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDsl63rpZggKEFvcnRpYyBSZWd1cmdpdGF0aW9uKS5tZA
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남성이 6일간 지속된 발열과 오한으로 응급실에 내원했다. 그동안 전신 쇠약, 흉통, 야간 발한이 있었다. 이첨판 대동맥판이 있고 반복적인 편두통 발작을 앓는다. 5년 동안 매일 담배 한 갑을 피웠고 술은 마시지 않는다. 과거 정맥주사 약물을 사용한 적이 있지만 지난 2개월 동안 불법 약물은 사용하지 않았다. 현재 프로프라놀롤과 종합비타민을 복용한다. 아파 보인다. 체온 39°C, 맥박 분당 108회, 호흡수 분당 14회, 혈압 150/50 mmHg이다. 미만성 수포음이 들리고, 좌측 흉골연에서 3/6등급의 고음성 초기 이완기 감소형 잡음이 가장 잘 들린다. S3 갤럽도 들린다. 혈액배양 3세트를 보냈고 경흉부 심초음파에서 진단을 확인했다. 항생제 치료 외에 다음 중 가장 적절한 처치는?

## 선택지

A. 4주 후 심초음파 반복
B. 대동맥판 기계판막 치환술
C. 대동맥판 돼지판막 치환술
D. 심장 MRI

## 해설

발열과 심초음파로 확인된 심내막염에 새 대동맥판 역류와 폐울혈이 동반되어 조기 수술 평가가 필요하다. 젊은 환자에서는 내구성이 높은 기계판막(B)이 선택될 수 있다. 다만 감염만으로 판막 종류가 자동 결정되는 것은 아니며, 항응고 가능성, 재수술 위험과 환자 선호를 함께 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 감염성 ‘대동맥판 폐쇄성’ 오역을 역류와 심부전으로 교정하고 판막 종류 선택의 개별화를 명시.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009890
