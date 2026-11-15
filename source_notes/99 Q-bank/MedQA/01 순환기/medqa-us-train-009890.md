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

25세 남성이 대동맥판 감염성 심내막염으로 정맥 항생제를 투여받고 있다. 새로 심한 호흡곤란과 양측 수포음이 생겼다. 심초음파에서 판엽이 파괴되어 급성 중증 대동맥판 역류가 발생했고 흉부 X선에서 폐부종이 보인다. 항생제와 호흡·순환 지원에 더해 필요한 조치는?

## 선택지

A. 항생제 종료 후 외래에서 수술 여부를 평가한다
B. 심장혈관외과에 즉시 의뢰해 응급 판막수술을 평가한다
C. 경피적 대동맥판 풍선확장술을 시행한다
D. 혈액배양이 음전될 때까지 수술을 미룬다

## 해설

심내막염의 급성 중증 판막 역류로 폐부종이 생기면 응급 수술을 평가한다. 항생제 치료를 다 마칠 때까지 기다리지 않는다. 기계판막과 조직판막 중 무엇을 택할지는 별도 결정이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 감염성 ‘대동맥판 폐쇄성’ 오역을 역류와 심부전으로 교정하고 판막 종류 선택의 개별화를 명시.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009890
- ESC 감염성 심내막염 진료지침(2023): https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/endocarditis
