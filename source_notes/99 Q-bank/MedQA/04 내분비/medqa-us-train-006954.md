---
type: qbank
schema_version: 1
id: medqa-us-train-006954
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:baf93d17f26b665dcbb57d9f4d4e881e3986f53c689321af3c39f9a275cf849a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "에스트로겐"
  - "티록신 결합 글로불린"
  - "총 T4 증가"
  - "경구피임약"
related_disease_slugs:
  - MTMg67aA7J246rO8L-qyveq1rO2UvOyehOyVvSAoT3JhbCBDb250cmFjZXB0aXZlcykubWQ
question_type: mechanism
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
---

# MedQA US 임상문제

## 문제

18세 여자가 자신의 체중이 걱정되어 내원했다. 학교 치어리딩 팀에 속해 있는데, 건강한 식사를 하는데도 팀에서 자신이 가장 뚱뚱한 여자라고 느껴 속상하다고 한다. 연습을 시작한 지난 2주 동안 체중이 2파운드 감소했다. 제1형 양극성 장애가 있으며 리튬과 복합 경구피임약을 복용한다. 경구피임약은 ‘다들 복용한다’는 이유로 산부인과 의사가 최근 처방했다. 어머니는 갑상선기능저하증으로 레보티록신을 복용 중이다. 환자의 BMI는 23.2 kg/m²이다. 갑상선 기능검사 결과는 다음과 같다.

갑상선자극호르몬(TSH): 4.0 mIU/L
혈청 티록신(T4): 18 µg/dL
유리 티록신(유리 T4): 1.4 ng/dL(정상 범위: 0.7–1.9 ng/dL)
혈청 트리요오드티로닌(T3): 210 ng/dL
유리 트리요오드티로닌(유리 T3): 6.0 pg/mL(정상 범위: 3.0–7.0 pg/mL)

이 환자의 비정상적인 검사 결과를 일으킨 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 가족성 갑상선기능항진증
B. 저콜레스테롤혈증
C. 리튬
D. 경구피임약에 의한 변화

## 해설


경구피임약은 에스트로겐 함량이 높아 혈청 총 T4와 티록신 결합 글로불린(TBG) 농도를 증가시켜 총 T4는 상승하지만 자유 T4와 자유 T3는 정상 범위에 머문다. 이는 질문에 제시된 검사 결과와 일치한다. 따라서 정답은 D이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006954
