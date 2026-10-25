---
type: qbank
schema_version: 1
id: medqa-us-train-006442
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b6736f3e67d5ee260af8e70fc29fcf41aea4402fa7200b5d7d3b913ebb346b28
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "경동맥동 과민증"
  - "반사성 실신"
  - "유발성 실신"
  - "Carotid sinus hypersensitivity"
related_disease_slugs: []
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 의식을 잃은 지 1시간 후 응급실에 내원했다. 아내는 넥타이를 조정하던 중 갑자기 실신했다고 한다. 30초 이내에 의식을 회복했고 완전히 깨어 지남력이 정상이었다. 지난 1년 동안 비슷한 일이 두 번 있었다. 불안장애가 있어 필요할 때 알프라졸람을 복용한다. 하루 반 갑을 피우고 매일 저녁 와인 두 잔을 마신다. 체온은 37.2°C(98.9°F), 맥박은 규칙적으로 분당 70회이다. 혈압은 누워서 130/82 mm Hg, 서서 122/80 mm Hg이다. 심폐 진찰은 정상이고 신경학적 진찰에서 국소 소견은 없다. 전혈구검사도 정상이다. 침상 심장 모니터링에서 드문 심실 조기수축과 II, III 유도에서 5mm 미만의 QRS 전압이 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 구조적 심장 이상
B. 기립성 실신
C. 경동맥동 과민증
D. 공황발작

## 해설

넥타이 조작 유발의 짧은 실신과 빠른회복은 경동맥동 과민반사 C를 시사한다. 사건 중 서맥/무수축 또는 혈관확장성 혈압저하가 생길 수 있으며 평상시 정상 기립혈압이 이를 배제하지 않는다. 드문PVC/저전압이 이 진단의 특이 소견은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 경동맥동 반사의 실신 C를 혈압변화가 거의 없다는 잘못된 기전에서 서맥/혈압저하로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006442
