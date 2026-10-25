---
type: qbank
schema_version: 1
id: medqa-us-train-006998
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:94f3c3c6b4eb54c33ffbdade397d97c3f559fbc1c87fcac9b6e1e7d598badd69
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "고혈압성 신경화증"
  - "양성 신경화증"
  - "박출률 보존 심부전"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-unjOyEsSDsi6zrtoDsoIQgKOuwley2nOuloCDrs7TsobQpIChDaHJvbmljIEhlYXJ0IEZhaWx1cmUgd2l0aCBQcmVzZXJ2ZWQgRWplY3Rpb24gRnJhY3Rpb24gKEhGcEVGKSkubWQ
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
question_type: mechanism
difficulty: standard
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
curation_status: "revised"
curation_reason: "심부전 자체가 신장 조직 소견을 확정한다는 해설을 만성 고혈압성 혈관 변화로 정리."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

60세 아프리카계 미국인 여자가 운동 시 호흡곤란으로 가정의학과에 내원했다. 밤에 잠자리에 들려고 누우면 숨이 차고 최근 발목이 부었다고 한다. 고혈압을 오랫동안 앓아 왔으며 암로디핀과 리시노프릴을 복용한다. 체온은 36.8°C(98.2°F), 심박수는 90회/분, 호흡수는 15회/분, 혈압은 135/80 mmHg이다. 신체검사에서 경정맥 팽창, 하지 함요부종, 외측으로 이동한 심첨박동, 좌심실 융기, 양측 폐 수포음, 제4심음이 관찰된다. 흉부 X선에서 폐혈관 울혈, 케를리 B선, 심비대가 보인다. 심초음파에서는 박출률이 보존되어 있다. 신장 생검에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. 내막 비후와 중막 비대
B. 내막과 중막의 얇아짐
C. 섬유소양 괴사
D. 양파껍질 모양 층판 형성

## 해설

오랜 고혈압은 신장 동맥의 내막 비후와 중막 변화·세동맥 유리질화를 동반할 수 있어 제시된 보기 중 A가 적합하다. 섬유소양 괴사·양파껍질형 증식은 중증 급성 고혈압성 손상 맥락에서 더 전형적이다. 이론적 예상 병리를 묻는 문항이지 이 환자에게 신장 생검이 실제로 반드시 필요하다는 뜻은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006998

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 심부전 자체가 신장 조직 소견을 확정한다는 해설을 만성 고혈압성 혈관 변화로 정리.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
