---
type: qbank
schema_version: 1
id: medqa-us-train-009353
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:29aed2b999bef832b6cfa4367ba7c4a60c4a989dcc1370e600da8c0c46857388
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "antiphospholipid syndrome"
  - "항인지질증후군"
  - "false-positive VDRL"
question_type: diagnosis
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2VreyduOyngOyniCDspp3tm4TqtbAgKEFudGlwaG9zcGhvbGlwaWQgU3luZHJvbWUpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvTWlub2N5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 G6P1050 여성이 불임 평가를 위해 내원했다. 남편과 3년 동안 임신을 시도했으며 그 기간에 다섯 번의 유산을 겪었다. 빈혈, 양극성장애, 첫 임신 중 발생한 오른쪽 하지 혈전 병력이 있다. 피로를 느끼고 지난 2개월 동안 최소 10파운드가 증가했다. 유산을 생각하면 자주 울고 밤에 잠들기 어렵다. 첫 아이 임신 중 금연했지만 출산 한 달 후 다시 피우기 시작했으며 현재 하루 반 갑을 피운다. 전신 관절 불편감도 있다. 현재 미노사이클린과 산전비타민을 복용한다. 백혈구 6,500/mm³, 혈소판 210,000/mm³, 혈색소 11.0 g/dL, PT 12초, aPTT 43초, INR 1.1이다. 이 환자의 불임과 관련된 소견은 무엇인가?

## 선택지

A. TSH 상승
B. 인자 V의 상염색체 우성 돌연변이
C. VDRL 양성
D. 항히스톤 항체 양성

## 해설

반복 임신 소실, 혈전증과 연장된 aPTT는 항인지질증후군을 의심하게 한다. 항카디오리핀 등과 관련해 비트레포네마 검사인 VDRL에서 생물학적 가양성이 생길 수 있으므로 C가 연관 소견이다. 하지만 본문에는 항인지질항체 검사 결과가 없어 양성이라고 만들어 넣으면 안 된다. VDRL 양성이 항상 가양성이거나 APS 확진을 뜻하지 않으며 매독 확인검사와 적절한 항체 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 측정되지않은항인지질항체양성창작삭제. 혈전/반복유산·aPTT와VDRL가양성연관C,APS확진아님.
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7301a1.htm
- https://www.cdc.gov/std/treatment-guidelines/syphilis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009353
