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
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
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


심부전 환자에서 ACE 억제제는 사망률과 입원율을 감소시키는 근거가 확립된 치료이다. 환자는 저혈압과 서맥을 보이지만, 장기 예후 개선을 위해 에날라프릴과 같은 ACE 억제제가 가장 적절하다. 따라서 예후를 개선할 약물은 에날라프릴이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009212
