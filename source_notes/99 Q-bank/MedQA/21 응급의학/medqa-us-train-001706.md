---
type: qbank
schema_version: 1
id: medqa-us-train-001706
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:34107952927afb2da58b2472222688fd801c02a629aa717b9fceea168457bb7b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "cyanide poisoning"
  - "smoke inhalation"
  - "hydroxocobalamin"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KSR64-FIChQb2lzb25pbmcpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

의식 수준이 변동하는 36세 남성이 집 화재 후 구급차로 응급실에 이송되었다. 목소리에 눈을 뜨고 통증을 국소화하며 질문에 반응하지만 지남력이 없고 명령을 따르지 못한다. 체온은 99°F (37.2°C), 혈압은 86/52 mmHg, 맥박은 88회/분, 호흡수는 14회/분, 실내 공기 산소포화도는 97%이다. 코와 입 주변에 그을음이 있으나 화상, 기도폐색 및 보조근 사용은 없다. 혈중 젖산은 14 mmol/L이다. 정맥 수액을 시작했다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 고압산소치료
B. 에피네프린 정맥주사
C. 티오황산나트륨과 아질산나트륨
D. 100% 산소, 하이드록소코발라민 및 티오황산나트륨

## 해설

밀폐 화재, 그을음, 의식장애·저혈압과 젖산14 mmol/L는 시안화물 중독을 강하게 의심하게 한다. 시안 이온은 미토콘드리아 cytochrome c oxidase를 억제해 세포 산소이용을 방해한다. 선지 D의 100% 산소와 하이드록소코발라민이 적절하며 티오황산나트륨은 황 공여체로서 시안이 티오시안산으로 전환되도록 도울 수 있다. 이 조합을 모든 환자에서 반드시 동시에 같은 주입선으로 투여해야 한다는 뜻은 아니고 약물 적합성과 전문 지침을 확인한다. 아질산염은 메트헤모글로빈을 만들어 화재의 동반 CO 노출·저산소증을 악화시킬 우려가 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 시안화물 독성과 하이드록소코발라민·티오황산의 작용을 교정하고 병용이 언제나 필수는 아니라는 점을 명시했다. 강한 임상 의심 상황에서 선지 D를 유지한다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d56fcc8d-bd64-46ab-b0c0-2124bd745a6b

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001706
