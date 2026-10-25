---
type: qbank
schema_version: 1
id: medqa-us-validation-000768
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6e1a001a458e8acb29081d025a443152a8af05840757bbe1e4b02ae7f9063bd2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경이완제 악성 증후군"
  - "도파민 차단"
  - "근육 경직"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveydtOyZhOygnCDslYXshLEg7Kad7ZuE6rWwIChOZXVyb2xlcHRpYyBNYWxpZ25hbnQgU3luZHJvbWUpLm1k
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 남성이 환각과 피해망상으로 정신과 입원 후 기존 약물에 부분 호전이 있었으나 새 약물을 추가한 뒤 운동장에서 운동하다 반응이 없고 사지가 수동운동에 저항하며 체온 40°C, 맥박 112회/분이 되었다. 가장 가능성 높은 원인 기전은?

## 선택지

A. 탈수
B. 도파민 수용체 차단
C. 증발성 냉각 부족
D. 감염

## 해설

항정신병약 변경 후 의식 저하·고열·강직성 저항이 발생하여 신경이완제 악성증후군을 의심하며, 제시된 원인 기전 중 도파민 수용체 차단이 적절하다. 반드시 과다복용해야 생기는 것이 아니고 치료 용량에서도 발생할 수 있다. 원인 약물 중단과 체온·신기능·CK·전해질 등 응급 평가·지지치료가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000768

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. NMS를 과다복용에만 연결한 오류와 질문-기전 불일치 수정. 새 약물 추가 후 운동 중 쓰러진 원문 경과 복원.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
