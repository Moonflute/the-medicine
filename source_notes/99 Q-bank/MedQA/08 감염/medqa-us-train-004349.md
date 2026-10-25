---
type: qbank
schema_version: 1
id: medqa-us-train-004349
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:63a3de6f8d17e44cdac75a363584e9a1696c2b727aa0251aec57a8f1085fe56a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "거대세포바이러스 폐렴"
  - "골수이식 후 감염"
  - "간시클로버"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOuMgOyEuO2PrOuwlOydtOufrOyKpCDqsJDsl7wgKENNVikgKEN5dG9tZWdhbG92aXJ1cyBJbmZlY3Rpb24gKENNVikpLm1k
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvR2FuY2ljbG92aXIubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
---

# MedQA US 임상문제

## 문제

56세 남자가 2일간 점점 심해지는 호흡곤란과 발열로 응급실에 왔다. 마른기침이 있고 흉통이나 두통은 없다. 만성 골수성 백혈병으로 3개월 전 골수이식을 받았으며 부설판, 미코페놀레이트 모페틸, 타크로리무스, 메틸프레드니솔론을 복용한다. 체온 38.1°C, 맥박 103회/분, 호흡수 26회/분, 혈압 130/70 mmHg, 산소포화도 93%이다. 양측 폐에 미만성 수포음이 들리고 비장 끝이 왼쪽 늑골연 아래 4cm에서 만져진다. 헤모글로빈 10.3 g/dL, 백혈구 4,400/mm³, 혈소판 160,000/mm³, 크레아티닌 2.1 mg/dL, pp65 항원 양성, 갈락토만난 항원 음성이다. 흉부 X선에서 양측 간질성 침윤이 보인다. 가장 적절한 약물치료는 무엇인가?

## 선택지

A. 레보플록사신
B. 아시클로버
C. 간시클로버
D. 아지트로마이신

## 해설


조혈모세포이식3개월 뒤 면역억제 상태에서 간질성 폐렴과 pp65 항원 양성은 CMV 관련 질환을 의심하게 하며 선택지 C ganciclovir가 항CMV 치료에 해당한다. 항원혈증 하나만으로 폐실질 침범이 확진되는 것은 아니므로 하기도 검사와 다른 원인 감별을 함께 한다. Creatinine2.1mg/dL로 신기능에 맞춘 용량과 골수억제 감시가 필요하다. Acyclovir를 같은 항CMV 치료로 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004349 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 가스톤이라는 잘못된 CMV 용어 제거; 이식 후 CMV 의심 ganciclovir C와 확진·신기능 주의 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cytomegalovirus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004349
