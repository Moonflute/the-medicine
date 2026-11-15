---
type: qbank
schema_version: 1
id: medqa-us-train-002634
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86815060d7d7008704a1cbf27f3b8715e4a659e8850731272863e4da422b0744
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "severe aortic regurgitation"
  - "bicuspid aortic valve"
  - "left ventricular dysfunction"
  - "aortic valve replacement"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDsl63rpZggKEFvcnRpYyBSZWd1cmdpdGF0aW9uKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 정기검진에서 초기 이완기 잡음을 보였다. 일상생활에서 호흡곤란은 없다. 심초음파에서 이첨 대동맥판막의 중증 만성 대동맥판 역류, 좌심실 확장 및 박출률 45%가 확인됐다. 적절한 다음 조치는?

## 선택지

A. 증상이 생길 때까지 정기 심초음파만 시행한다
B. 이뇨제만 시작하고 추적한다
C. 혈압 조절만 하면 판막 치료는 필요 없다
D. 증상이 없어도 대동맥판 수술을 위해 심장팀에 의뢰한다

## 해설


중증 만성 대동맥판 역류에서는 증상이 없어도 좌심실 기능이 떨어지면 수술을 권고하는 기준에 해당할 수 있다. 박출률 45%와 좌심실 확장이 있는 이 환자는 관찰만 하지 않고 수술 적합성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 중증 AR에서 EF45%의 좌심실 수축기능 저하로 판막 수술 D; 단순 혈관확장제·관찰 대체 불가.
- https://www.escardio.org/static-file/Escardio/Guidelines/Products/Slide%20sets/2025/2025%20official%20slides_VHD.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002634
- https://academic.oup.com/eurheartj/article/46/44/4635/8234488
