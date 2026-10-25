---
type: qbank
schema_version: 1
id: medqa-us-train-001448
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cd2102c563e16ff8c1ba7834d568f7b005a96ea273424e8308fe10801b2ffb30
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "Horner syndrome"
  - "Pancoast tumor"
  - "ptosis miosis anhidrosis"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tmLjrpbTrhIgg7Kad7ZuE6rWwIChIb3JuZXIgU3luZHJvbWUpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

74세 남성이 오늘 아침부터 왼쪽 눈을 뜰 수 없어 가정의학과에 내원했다. 며칠 동안 왼팔의 간헐적 통증과 저림도 있다. 눈 통증, 연하곤란, 피로 또는 복시는 부인하며 증상은 변동 없이 지속된다. 제2형 당뇨병, 고혈압 및 고지혈증 병력이 있다. 4개월 동안 체중이 5.4 kg (12 lb) 감소했고 72갑년의 만성 흡연력이다. 혈압은 142/76 mm Hg, 맥박은 76회/분, 호흡수는 12회/분, 체온은 36.8°C (98.4°F), BMI는 18.2 kg/m2이다. 의식은 명료하고 사람·장소·시간을 인지한다. 왼쪽 눈꺼풀이 부분적으로 처져 있고 오른쪽은 정상이다. 왼쪽 동공은 1 mm, 오른쪽은 3 mm이다. 외안근 운동은 정상이다. 다음 중 추가로 나타날 가능성이 가장 높은 임상 소견은 무엇인가?

## 선택지

A. 안면 비대칭
B. 반측 안면 발한 소실
C. 혀가 왼쪽으로 편위
D. 요폐

## 해설


한쪽 눈의 ptosis와 miosis는 호른 증후군이며, 교감신경 차단에 의해 안면 땀 감소가 동반된다. 따라서 가장 흔히 동반되는 추가 소견은 반측 안면 발한 소실이다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-001448`와 직접 대조했다.
- 판정: 일측 축동·안검하수·상지 증상 및 흡연/체중감소로 Horner 맥락, 반측 안면 무한증 B와 해설 연결 유지. 종양 확진까지 검토한 것은 아님.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001448
