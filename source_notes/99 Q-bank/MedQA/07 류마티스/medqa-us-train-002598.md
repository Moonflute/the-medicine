---
type: qbank
schema_version: 1
id: medqa-us-train-002598
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:20ea11737ae84123f9dda20ae4a5b27c4376782d47aa7f0e8177f1eba2cd3ef2
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "systemic lupus erythematosus"
  - "anti-dsDNA antibody"
  - "disease activity monitoring"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
question_type: investigation
difficulty: complex
answer: B
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
---

# MedQA US 임상문제

## 문제

45세 여성이 전신홍반루푸스로 정기검진을 받는다. 27세에 진단받았고 하이드록시클로로퀸과 저용량 프레드니손을 복용하며 최근 악화는 없다. 항카디오리핀과 항β2 당단백질-1 항체는 음성이고 혈전이나 색전 병력도 없다. 무릎에 경한 압통과 부종 외에는 정상이며 크레아티닌과 GFR도 정상이다. 다음 중 질병 활성도를 모니터링하기 위한 가장 적절한 다음 단계는?

## 선택지

A. 요검사와 신장 생검
B. 항이중가닥 DNA 항체 수치
C. 항-Smith 항체 수치
D. 관절천자와 활액 분석

## 해설


선택지 중 anti-dsDNA 항체(B)는 SLE 활성도 추적에 도움이 되며 anti-Smith는 진단 특이도가 높지만 활성도 추적에는 덜 유용하다. 그러나 anti-dsDNA 단독의 민감도·특이도는 제한적이므로 증상·진찰, 보체 C3/C4, 혈구검사, 요단백/요침사와 신기능을 함께 평가한다. 현재 신장 침범 근거 없이 추적을 위해 곧바로 신장 생검을 시행하지 않는다. 정상 크레아티닌만으로 조기 신염을 배제할 수 없으므로 요검사는 계속 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002598 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: anti-dsDNA가 가장 민감하게 모든 활성도를 반영한다는 단정을 다중 임상·혈청·요검사 평가로 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1093/rheumatology/keag223
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.25528

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002598
