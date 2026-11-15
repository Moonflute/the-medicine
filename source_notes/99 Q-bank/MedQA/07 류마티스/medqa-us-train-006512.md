---
type: qbank
schema_version: 1
id: medqa-us-train-006512
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8fe06c12de35801b803ef8e54058429492749008a1288d0d195d094a00ccfb94
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스성 다발근통"
  - "근위부 근육통"
  - "적혈구침강속도 상승"
  - "Polymyalgia rheumatica"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
---

# MedQA US 임상문제

## 문제

70세 여성이 양쪽 어깨와 골반대에 쑤시는 통증과 1시간 이상 지속되는 아침 강직이 있다. 근력과 CK는 정상이고 CRP가 높다. 다른 원인을 평가한 뒤 류마티스성 다발근통으로 진단했다. 두통·턱 파행·시각 증상은 없다. 초기 치료는?

## 선택지

A. 고용량 정맥 메틸프레드니솔론 펄스
B. 중간 용량의 경구 프레드니솔론을 시작하고 반응에 따라 감량
C. 항생제와 항진균제 병용
D. 콜히친 단독

## 해설


거대세포동맥염이 의심되지 않는 류마티스성 다발근통은 경구 글루코코르티코이드를 시작한다. 증상과 염증수치, 약제 부작용을 추적하며 감량한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006512 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ESR 단독으로 PMR을 확진한다는 표현과 EMG 역할의 잘못된 제한을 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006512
- https://pubmed.ncbi.nlm.nih.gov/42481270/
