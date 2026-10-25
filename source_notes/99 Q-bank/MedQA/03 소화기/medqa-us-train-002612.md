---
type: qbank
schema_version: 1
id: medqa-us-train-002612
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e99bfd68f8e8486a6c0427b3340ef96f3ec53a3aeee834543fa14b63a7f711b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Zenker diverticulum"
  - "cricopharyngeal dysfunction"
  - "oropharyngeal dysphagia"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6QgKERpdmVydGljdWx1bSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtazsnbjrkZAg7IK87YK06rOk656AIChPcm9waGFyeW5nZWFsIER5c3BoYWdpYSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_soKDsu6Qg6rKM7IukIChaZW5rZXIncyBEaXZlcnRpY3VsdW0pLm1k
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 남성이 6개월간의 연하곤란으로 내원했다. 때때로 소화되지 않은 음식물을 기침으로 뱉고 체중 감소나 발열은 없다. 4주 전 인후통이 있었지만 자연히 호전되었다. 구취와 오른쪽 목의 변동성 종괴가 있다. 다음 중 증상 발생에 가장 관련된 병태생리는?

## 선택지

A. 심부 경부 공간 감염
B. 식도벽 신경세포의 퇴행
C. 세포 이형성
D. 비정상적인 식도 운동 기능

## 해설


연하곤란, 구취, 목의 변동성 종괴는 식도 상부에 위치한 조임근(크리코인두근) 기능장애로 인해 식도 내용물이 역류하고 식도 팽창이 발생하는 경우와 일치한다. 이는 비정상적인 식도 운동 기능, 즉 크리코인두근 이완 장애가 원인이다. 따라서 증상 발생에 가장 관련된 병태생리는 비정상적인 식도 운동 기능이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 연하곤란·미소화 음식 역류·구취·경부 종괴는 Zenker 게실; 윤상인두근 이완장애 D.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002612
