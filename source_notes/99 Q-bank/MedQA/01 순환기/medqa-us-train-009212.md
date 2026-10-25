---
type: qbank
schema_version: 1
id: medqa-us-train-009212
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:114ba2f82f8021bb5da3a3c541f8cecc1ed78a28a6fa49610e4b4b5b8b407671
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "heart failure with reduced ejection fraction"
  - "박출률 감소 심부전"
  - "ACE inhibitor"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-unjOyEsSDsi6zrtoDsoIQgKOuwley2nOuloCDqsJDshowpIChDaHJvbmljIEhlYXJ0IEZhaWx1cmUgd2l0aCBSZWR1Y2VkIEVqZWN0aW9uIEZyYWN0aW9uIChIRnJFRikpLm1k
question_type: prognosis
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남자가 의식 소실 후 응급실에 왔다. 정맥 수액을 시작하고 활력징후를 측정했더니 혈압 85/50 mmHg, 맥박 50회/분, 호흡수 10회/분이다. 과거 심장질환으로 입원한 적이 있다. 아내는 질환명을 기억하지 못하지만 악화될 경우 복용하도록 의사가 권한 약이 있었다고 한다. 최근 몇 달간의 검사 보고서를 가져왔다. 아내는 그가 자주 호흡곤란을 겪고 밤에 숨이 차지 않도록 베개 세 개를 사용하며, 수 km만 걸어도 멈춰 쉬어야 한다고 한다. 때때로 분홍색 가래를 동반한 심한 기침 발작도 있었다. 30년간 술을 마셨다. 이 환자의 예후를 개선할 약물은 무엇인가?

## 선택지

A. 에날라프릴
B. 디곡신
C. 아미오다론
D. 암로디핀

## 해설

기좌호흡과 분홍색 가래 등은 심부전을 시사하며, 수축기 기능저하 심부전에서 ACE억제제인 에날라프릴(A)은 장기 예후 개선 약물이다. 그러나 현재 혈압 85/50 mmHg, 서맥과 의식소실은 먼저 안정화하고 원인을 평가해야 한다. 이 상태에서 바로 투여하라는 뜻은 아니며, EF와 신기능·칼륨·혈역학적 안정성을 확인한 뒤 적절한 기본치료를 구성한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 장기 예후 문항의 에날라프릴 A를 저혈압·의식소실 상태에서 즉시 시작하도록 오용하지 않음.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009212
