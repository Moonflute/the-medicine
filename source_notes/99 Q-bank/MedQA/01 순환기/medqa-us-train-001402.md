---
type: qbank
schema_version: 1
id: medqa-us-train-001402
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:54796f9f646e15ecc079330699d59450d9f64e11b08888cb0adaf08c614a9b18
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "peripheral artery disease"
  - "revascularization"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2lsb3N0YXpvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남성이 발목–상완지수 0.70인 증상성 말초동맥질환으로 진료 중이다. 스타틴·항혈소판제를 복용하고 금연했으며, 감독하 운동치료를 3개월 마쳤다. 쉬면 통증이 없고 상처도 없지만 종아리 파행으로 아직 일을 하기 어렵다. 다음 단계는?

## 선택지

A. 급성 동맥 폐색으로 보고 정맥 헤파린을 시작한다
B. 동맥 병변을 평가하고 재개통술의 이득과 위험을 논의한다
C. 증상에 관계없이 절단을 계획한다
D. 더 걷지 않도록 장기간 침상 안정을 권한다

## 해설


약물과 구조화된 운동을 충분히 했는데도 파행이 일상생활을 제한하면 병변의 위치와 시술 위험을 평가해 재개통술을 고려한다. 갑작스러운 허혈이나 조직 손상이 없어 응급 재개통이나 항응고를 해야 할 상황은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 직업을 제한하는 PAD파행이 감독운동/약물에도 호전 없을 때 해부/위험 평가 후 재혈관화 B 고려. 급성색전용 heparin/절단과 구별.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001402
- https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/05/09/15/00/2024-guideline-for-lower-extremity-pad
