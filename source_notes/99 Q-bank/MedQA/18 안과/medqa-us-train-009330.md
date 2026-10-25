---
type: qbank
schema_version: 1
id: medqa-us-train-009330
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:acf9605f20198974550470422ca701e953c7a13fa2a83f0223356ec2ddaeebac
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "cavernous sinus thrombosis"
  - "해면정맥동 혈전증"
  - "orbital infection"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 여성이 1시간 전부터 발생한 심한 오른쪽 측두부 두통, 결막 부종, 왼쪽 눈의 전방 돌출로 응급실에 왔다. 지난 2일간 오른쪽 화농성 콧물과 코막힘이 있었다. 체온 40°C, 맥박 105회/분, 혈압 125/80 mmHg이다. 양측 안검하수가 있고 동공은 동일하며 빛에 반응하지만 왼쪽 외측 주시가 제한된다. 왼쪽 눈에 안와주위 부종과 결막부종이 있다. 가장 적절한 치료는 무엇인가?

## 선택지

A. 비강 내 수마트립탄
B. 수술적 변연절제
C. 반코마이신, 세프트리악손, 메트로니다졸 정맥 투여
D. 디히드로에르고타민 정맥 투여

## 해설

급성 화농성 비부비동염 후 고열, 심한 두통, 안구돌출·결막부종과 양측 뇌신경 관련 소견은 감염성 해면정맥동 혈전증을 강하게 의심하게 한다. 제시된 선지 중 C, 정맥 vancomycin·ceftriaxone·metronidazole의 광범위 항균 범위가 적절하다. Vancomycin은 beta-lactam이 아니라 glycopeptide로 MRSA 등 그람양성균을, ceftriaxone은 주요 세균을, metronidazole은 부비동 기원 혐기성균을 겨냥한다. 긴급 영상·전문과 협진과 원인 감염 배액 여부 평가를 병행하며 배양과 지역 내성에 따라 치료를 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 패혈성 해면정맥동 혈전증의 경험적 전신 항균 치료 C를 유지하며 동맥정맥 감염이라는 부정확한 표현과 vancomycin의 계열 혼동 교정.
- 공식/학회 근거: https://eyewiki.aao.org/Superior_Ophthalmic_Vein_Thrombosis
- 공식/학회 근거: https://admin.rightdecisions.scot.nhs.uk/ggc-clinical-guidelines/paediatrics/neurology-paediatric/cerebral-venous-sinus-thrombosis-paediatrics-1231/
- 공식/학회 근거: https://pubmed.ncbi.nlm.nih.gov/38654412/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009330
