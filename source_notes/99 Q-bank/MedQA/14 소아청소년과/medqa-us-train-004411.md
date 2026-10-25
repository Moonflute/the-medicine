---
type: qbank
schema_version: 1
id: medqa-us-train-004411
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2cfdf5c73d46ebdb395ad27c8df6a1044c4ef24e807c0a1c1d7c8fc54ed7215c
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "2세 발달 이정표"
  - "표현 언어 지연"
  - "소아 발달 평가"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 여아가 정기 영유아 건강검진을 위해 어머니와 소아과에 왔다. 어머니는 아이가 편식하고 채소를 먹지 않으려 한다고 걱정한다. 식사 때 우유를 마시고 주스는 조금만 마신다. 밤에는 쉽게 잠들고 보통 11~12시간 잔다. 낮잠을 잘 때는 잠들기 어려워하지만 일주일에 몇 번 1~2시간 낮잠을 잔다. 어린이집 생활을 잘하고 다른 아이들과 평행놀이를 즐긴다. 어머니의 말에 따르면 계단을 내려갈 때 양발을 각 계단에 함께 놓으며 내려온다. 한 단어 명령 형태로 사용하는 단어가 10~25개 있다. 키는 42백분위수, 체중은 48백분위수로 성장곡선에 부합한다. 신체검사에서 영양 상태는 좋아 보인다. 선을 따라 그릴 수 있고 공을 던질 수 있다. '공을 주고 문을 닫아'라는 지시를 따른다. 이 아이가 발달 이정표를 충족하지 못하는 영역은 무엇인가?

## 선택지

A. 미세운동 기술
B. 표현 언어 기술
C. 사회성 및 수용 언어 기술
D. 이 아이의 발달은 정상이다

## 해설

두 단계를 이해해 수행하고 평행놀이·운동 기능은 연령에 부합하지만, 표현 어휘가 10~25개이고 한 단어만 사용하는 점이 표현언어(B)의 우려다. CDC의 2세 이정표에는 적어도 두 단어를 연결해 말하기가 포함된다. 모든 2세에게 정확히 50~100개 단어·3단어 문장을 필수 진단 역치로 강제하거나 이정표 체크리스트만으로 확진해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 2세에서 반드시 50~100단어/2~3단어 문장을 사용해야 한다는 단일 숫자 기준 대신 CDC의 두 단어 연결 이정표로 표현언어 지연 근거를 명확히 했다.
- https://www.cdc.gov/act-early/milestones/2-years.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004411
