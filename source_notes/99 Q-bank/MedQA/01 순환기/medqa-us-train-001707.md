---
type: qbank
schema_version: 1
id: medqa-us-train-001707
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a42cfcf6bfce7224f2f36a2e21cc8efb8995e59cb3a1b3739f0c12d82bcb4e34
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "critical limb ischemia"
  - "peripheral artery disease"
  - "revascularization"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

75세 남성이 3개월 동안 지속된 왼쪽 허벅지와 종아리 통증으로 응급실에 내원했다. 통증은 안정 시에도 있고 걸으면 심해지며 발을 침대 아래로 늘어뜨리면 약간 호전된다. 25년 동안 고혈압, 30년 동안 제2형 당뇨병이 있고 45년 동안 하루 30–40개비를 피웠다. 양측 대퇴·오금·발등동맥 맥박은 약하고 발목-상완지수는 0.30이다. 항혈소판제와 위험인자 교정을 시작했다. 다음 중 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 헤파린 전신 항응고
B. 혈관재개통술 긴급 평가
C. 운동치료
D. 절단술

## 해설


심각한 말초동맥 폐색으로 발목-상완지수가 0.30인 경우, 조직 손상이 진행 중이므로 혈관 재개통(혈관우회술·혈관성형) 평가가 급선무이다. 항응고만으로는 충분하지 않다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 3개월 허혈성 안정통·dependency호전과 ABI0.3은 CLTI 의심. 운동만 권하기보다 재혈관화 긴급평가 B가 적합.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001707
