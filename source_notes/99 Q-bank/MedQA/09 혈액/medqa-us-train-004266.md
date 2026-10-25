---
type: qbank
schema_version: 1
id: medqa-us-train-004266
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aeab958148bd9bb89f033f9ccfbd6f4f3146975364b219c903e1725afe6727f1
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "혈우병 A"
  - "혈관절증"
  - "응고인자 VIII 결핍"
  - "Hemophilia A"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyasOuzkSAoSGVtb3BoaWxpYSkubWQ
question_type: 임상증례 객관식
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

22세 남자가 6개월 동안 통증 없는 혈뇨가 여러 차례 발생해 내원했다. 운동과 관련은 없고 어린 시절부터 코피가 자주 났으며 1년 전 치아를 뽑은 후 심한 출혈이 있었다. 하루 한 갑을 피우고 사회적 상황에서 맥주 1~2잔을 마신다. 창백해 보이고 팔과 다리에 치유 단계가 다른 작은 혈종이 여러 개 있다. 양쪽 발목의 수동 운동범위가 감소하고 염발음이 있다. 혈색소 9.5 g/dL, 백혈구 5,000/mm³, 혈소판 240,000/mm³, 출혈시간 5분, PT 14초, PTT 68초이다. 소변 적혈구 30~40/고배율시야, 적혈구 원주 음성, 백혈구 없음, 단백질 음성이다. 골반 X선은 정상이다. 추가 평가에서 예상되는 소견은 무엇인가?

## 선택지

A. 혈종에 대해 질문하면 회피하는 행동
B. 왼쪽 늑골연 아래에서 만져지는 비장
C. 관절 내 철 침착
D. 헤모시데린이 찬 폐포 대식세포

## 해설


혈소판·출혈시간·PT가 정상이고 aPTT만 연장되며 반복 관절 손상 소견이 있어 내인성 응고인자 결핍성 혈우병을 시사한다. 반복 혈관절증으로 관절 내 철/hemosiderin 침착 C가 생기고 만성 활막염·관절병증을 유발한다. VIII과 IX 결핍은 추가 인자검사로 구분하며 이 자료만으로 반드시 A형이라고 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004266 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈색소9.5mg/dL의 명백한 농도 단위 오류를 g/dL로 바로잡고 혈우병성 관절 출혈의 철침착 C 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004266
