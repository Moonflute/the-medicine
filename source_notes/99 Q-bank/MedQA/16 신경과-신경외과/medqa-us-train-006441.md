---
type: qbank
schema_version: 1
id: medqa-us-train-006441
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bdcd5bc902a539a0f74a8c67384a6c2a8a466f96c2a49b9430206b6e51b82221
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "고혈압성 뇌내출혈"
  - "관통동맥 파열"
  - "기저핵 출혈"
question_type: mechanism
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_stpztmIjshLEg64eM7KG47KSRIChIZW1vcnJoYWdpYyBTdHJva2UpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 남성이 한 시간 동안 지속된 심한 두통으로 응급실에 내원했다. 오심과 피가 섞이지 않은 구토 한 차례도 있었다. 고혈압과 제2형 당뇨병 병력이 있다. 흡연과 음주는 하지 않는다. 에날라프릴과 메트포르민을 복용하지만 규칙적으로 복용하지 않는다고 한다. 체온은 37°C(98.6°F), 맥박은 분당 80회, 혈압은 190/110 mm Hg이다. 사람은 알아보지만 장소와 시간은 인지하지 못한다. 신체진찰에서 오른쪽 다리와 팔의 근력이 감소되어 있고 오른쪽 상지와 하지의 심부건반사는 3+이다. 비조영 두부 CT에서 왼쪽 대뇌반구에 저음영 부종으로 둘러싸인 단일 고음영 병변이 보인다. 다음 중 이 증상의 기저 원인으로 가장 가능성 높은 것은?

## 선택지

A. 작은 관통동맥의 파열
B. 교량정맥의 파열
C. 낭상 동맥류의 파열
D. 동정맥기형의 파열

## 해설

심한 고혈압과 급성 국소 신경학적 결손, CT의 뇌실질 내 고밀도 병변은 뇌내출혈에 맞는다. 제시된 선택지 중 만성 고혈압과 관련된 작은 관통동맥 파열(A)이 가장 가능성이 높다. 가교정맥 파열은 경막하출혈, 낭성 동맥류 파열은 주로 지주막하출혈과 연결된다. 모든 반구 출혈이 고혈압 때문인 것은 아니므로 비전형적 위치나 임상상에서는 혈관병변 등 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고혈압성 뇌실질출혈 A 유지. 본문에 없는 고혈당 및 비의학적 '리틀 브레인' 표현 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006441
