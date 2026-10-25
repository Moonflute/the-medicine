---
type: qbank
schema_version: 1
id: medqa-us-train-008390
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5655e01cbb7555b9ee765e6dbfd126491e5c5d44d7d5430d1675e25abdede73f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "rabies"
  - "rabies postexposure prophylaxis"
  - "animal bite"
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzteyImOuzkSAoUmFiaWVzKS5tZA
  - MTEg7Jm46rO8L-uPmeusvCDrrLzrprwgKEFuaW1hbCBCaXRlKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

20세 남성이 동물에게 물린 일을 평가받기 위해 응급실로 이송되었다. 이날 오전 하이킹 중 라쿤(아메리카너구리)에게 물렸으며, 공격은 아무런 자극 없이 일어났고 동물은 도망갔다고 한다. 11세 때 떠돌이 개에게 물려 당시 광견병 노출 후 예방요법을 받았다. 예방접종은 최신 상태이다. 예방접종 기록상 어릴 때 디프테리아-파상풍-무세포 백일해 백신을 3회 맞았고, 16세에 파상풍-디프테리아-무세포 백일해 백신을 접종했다. 겉보기에 고통스러워 보이지는 않는다. 체온 36.9°C, 맥박 72회/분, 호흡수 18회/분, 혈압 124/75mmHg이다. 왼쪽 하지에 물린 상처가 있고 천자 부위에서 활발한 출혈이 보인다. 상처를 생리식염수로 충분히 세척하고 소독한 뒤 붕대를 감았다. 다음 중 가장 적절한 처치는 무엇인가?

## 선택지

A. 필요한 조치 없음
B. 광견병 면역글로불린과 백신 투여
C. 파상풍 추가 접종
D. 광견병 백신 접종

## 해설

확인할 수 없는 야생 라쿤의 이유 없는 교상은 공중보건 당국과 광견병 노출 후 예방을 평가해야 하는 상황이다. 과거 적절한 광견병 예방접종을 완료한 환자라면 백신을 0일과 3일에 2회 접종하며(D), 광견병 면역글로불린은 투여하지 않는다. 상처 세척만으로 예방접종을 대신할 수는 없다. 파상풍 기초접종이 완료되어 있고 마지막 접종 후 4년이므로 이 오염 상처 때문에 파상풍 추가 접종을 할 필요는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 도망간 야생 라쿤 교상을 저위험·추가 조치 불필요로 설명한 모순을 교정한다. 과거 접종 완료자 PEP 백신 D와 HRIG 제외를 확인한다.
- 공식/학회 근거: https://www.cdc.gov/rabies/hcp/clinical-care/post-exposure-prophylaxis.html
- 공식/학회 근거: https://www.cdc.gov/tetanus/hcp/clinical-guidance/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008390
