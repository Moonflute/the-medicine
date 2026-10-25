---
type: qbank
schema_version: 1
id: medqa-us-train-001782
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4ca7bd056e4186258ab1e8573426419dcddfaa5a06a37de0d48969b36074f880
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "subclavian steal syndrome"
  - "vertebrobasilar insufficiency"
  - "reversed vertebral artery flow"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
question_type: mechanism
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 여성이 2개월 동안 간헐적으로 오른팔이 무겁고 감각이상 때문에 내원했다. 2주 전부터 벽화를 그릴 때 여러 차례 어지러움이 있었고 메스꺼움과 흐린 시야가 동반되었다. 주스를 마시면 증상이 호전되었다. 고혈압, 제2형 당뇨병 및 고콜레스테롤혈증이 있으며 metformin, glipizide, enalapril 및 atorvastatin을 복용한다. 불안해 보인다. 오른쪽 상지의 요골맥박과 상완맥박이 감소하고 오른쪽 팔 피부가 왼쪽보다 차갑다. 심폐 및 신경학적 검사는 정상이다. 증상의 가장 가능성 높은 근본 원인은 무엇인가?

## 선택지

A. 약물의 이상반응
B. 오른쪽 척추동맥의 역행성 혈류
C. 목의 신경혈관 구조물 압박
D. 중대뇌동맥 경색

## 해설

정답은 B이다. 우측 쇄골하동맥의 척추동맥 기시부보다 근위 협착이 있으면 팔운동 때 척추동맥 혈류가 역전되어 팔로 흐를 수 있다. 팔맥박 감소·차가움과 동반 척추기저동맥계 증상은 subclavian steal에 합당하다. 역류하는 혈관을 견갑동맥이라고 설명하지 않는다. 주스 뒤 호전만으로 저혈당이라고 확정하면 객관적인 편측 혈관소견을 놓친다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 견갑동맥 역류를 쇄골하동맥 근위협착에 따른 척추동맥 역류로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001782
