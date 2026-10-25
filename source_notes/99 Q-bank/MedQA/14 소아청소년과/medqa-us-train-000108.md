---
type: qbank
schema_version: 1
id: medqa-us-train-000108
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:29df966876093e1ce839035c5953e2c8bd9443bc0164a597b6af00e950deb536
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "DiGeorge syndrome"
  - "truncus arteriosus"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCA7Iq07IOYIOustO2YleyEseymnSAoRGlHZW9yZ2UgU3luZHJvbWUpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 24시간 된 신생아 남아가 청색증으로 신생아실에서 평가를 받고 있다. 환아는 임신 38주에 태아 곤란(fetal distress)으로 인한 제왕절개술을 통해 36세 산모(임신 3회)에게서 태어났다. 산모는 산전 진찰을 일관되게 받지 않았으며, 분만 과정은 합병증이 없었다. 아프가 점수(Apgar score) 평가에서 생후 1분과 5분 모두 말단 청색증(acrocyanosis)이 관찰되었다. 산모는 선천성 심장 질환의 가족력을 부인한다. 환아의 아버지는 고혈압 과거력이 있으며, 형제 중 한 명은 최근 자폐 스펙트럼 장애(autism spectrum disorder)를 진단받았다. 출생 체중은 3180g이었다. 신생아실에서 측정한 체온은 37.4°C, 혈압은 66/37 mmHg, 맥박은 179회/분, 호흡은 42회/분이다. 신체 검진상 환아는 중등도의 고통을 보이고 있다. 낮은 위치의 귀, 안와 격리증(orbital hypertelorism), 구개열이 관찰된다. 환아는 중심성 청색증을 보인다. 흉부 CT에서 흉선 형성 저하(thymic hypoplasia)가 확인되었다. 심장 초음파 검사 결과 우심실과 좌심실 모두에서 하나의 혈관이 나오는 것이 관찰된다. 이 환아에게서 긴급하게 평가해야 할 급성 합병증은 무엇인가?

## 선택지

A. 뇌부종
B. 저혈당
C. 신경근 과민성
D. QT 간격 단축

## 해설

흉선저형성·안면/구개 이상과 총동맥간은 22q11.2 결실 증후군을 시사한다. 부갑상선저형성으로 급성 저칼슘혈증·테타니/경련이 생길 수 있어 신경근 과민성(C)을 평가한다. 저칼슘혈증은 QT를 단축시키지 않고 연장시킬 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: DiGeorge의 저칼슘 신경근 과민성 C 유지. 단일 대동맥을 총동맥간으로 정확히 명명.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000108
