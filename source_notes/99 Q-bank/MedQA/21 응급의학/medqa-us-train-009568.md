---
type: qbank
schema_version: 1
id: medqa-us-train-009568
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a438ea272df3d675440d9dc08141b3538e7d381f57a0df87f08f656ce1c57b2
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "organophosphate poisoning"
  - "유기인계 중독"
  - "cholinergic toxidrome"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
  - MjEg7J2R6riJ7J2Y7ZWZL-ycoOq4sOyduOqzhCDspJHrj4UgKE9yZ2Fub3Bob3NwaGF0ZSBQb2lzb25pbmcpLm1k
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남자가 여자친구와 함께 응급실에 왔다. 계절 농장 노동자로 나무 아래 누워 거의 반응이 없는 상태로 발견되었다. 정맥주사 약물, 대마, 알코올 사용력이 있고 이부프로펜을 복용한다. 체온 98.2°F(36.8°C), 혈압 100/55 mmHg, 맥박 60회/분, 호흡수 15회/분, 산소포화도 98%이다. 사지가 씰룩거리고 옷이 소변에 젖어 일부 벗겨져 있으며 침을 흘리고 기침을 자주 한다. 다음 중 가장 적절한 처치는 무엇인가?

## 선택지

A. 아트로핀
B. 뇌파검사
C. 지지요법 및 모니터링
D. 소변 독성검사

## 해설

농장 작업자에게 침 흘림, 기침·분비물 증가, 배뇨와 근육 씰룩거림이 함께 나타나면 유기인계 등 콜린에스터레이스 억제제 노출을 의심한다. 아트로핀(A)은 무스카린 수용체를 차단하여 기관지 분비와 기관지수축 등 생명위협 증상을 치료한다. 근섬유다발수축은 니코틴성 증상으로 아트로핀만으로 직접 역전되지 않는다. 안전한 제독과 환기 평가를 병행하고, 유기인계 중독에서는 프랄리독심 등 추가 치료도 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 콜린성 독성에서 아트로핀 A는 유지하되 근섬유다발수축을 무스카린성으로 묶은 오류를 교정한다.
- 공식/학회 근거: https://cdn.who.int/media/docs/default-source/chemical-safety/intox/soundmanagementpesticides_resourcetool.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009568
