---
type: qbank
schema_version: 1
id: medqa-us-train-005613
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ece06614d64c92a21b6927a9ca8f92f42d626840dda972d5dc28c17811b4aa6e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "감염성 심내막염"
  - "패혈성 색전"
  - "Roth 반점"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: diagnosis
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

54세 남성이 3분간 지속된 의식 소실이 발생한 지 1시간 후 응급실에 왔다. 깨어난 뒤 왼팔과 왼다리에 힘이 빠지고 말이 어눌해졌다. 10일째 발열이 있었으며 구토나 두통은 없었다. 3주 전 세균성 부비동염으로 아목시실린-클라불란산을 투여받았다. 고혈압, 갑상선기능저하증, 고지혈증 및 제2형 당뇨병이 있다. 현재 암로디핀, 히드로클로로티아지드, 메트포르민, 심바스타틴, 아스피린 및 레보티록신을 복용 중이다. 체온은 38.6°C(101.4°F), 맥박은 분당 106회, 혈압은 160/90 mmHg이다. 의식은 명료하고 사람, 장소, 시간에 대한 지남력은 정상이다. 몸통에 여러 개의 점상출혈과 양쪽 손바닥에 통증 없는 반점이 있다. 심첨부에서 가장 크게 들리는 새로운 3/6등급 수축기 잡음이 들린다. 지시에 따르지만 말이 어눌하고 흔한 물건의 이름을 대기 어렵다. 좌측 안면 처짐이 있고, 좌측 상지와 하지의 근력은 4/5이다. 좌측 심부건반사는 3+, 우측은 2+이며 좌측 엄지발가락에서 신전 반응이 나타난다. 안저검사에서 중심이 흰 망막 출혈이 보인다. 검사 결과는 다음과 같다: 혈색소 15.3 g/dL, 백혈구 12,300/mm³, 혈청 Na⁺ 136 mEq/L, Cl⁻ 103 mEq/L, K⁺ 4.3 mEq/L, 포도당 108 mg/dL, 크레아티닌 1.1 mg/dL; 소변 단백 1+, 포도당 음성, 혈액 1+, 백혈구 1~2/HPF, 적혈구 7~10/HPF이다. 다음 중 이러한 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 낭상동맥류 파열
B. 측두엽 뇌염
C. 패혈성 색전
D. 감염의 인접 부위 전파

## 해설


지속 발열·새 심잡음·Janeway 의심 손바닥 병변과 중심이 흰 망막출혈(Roth 반점)은 감염성 심내막염을 시사한다. 갑작스러운 국소 신경결손은 좌심계 식생에서 떨어진 패혈성 색전 C로 설명할 수 있다. Roth 반점은 망막 소견이고 단순 피부 점상출혈의 이름이 아니다. 이 본문에는 Shigella 장염이나 비감염성 신생물성 심내막염을 뒷받침하는 내용이 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005613 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 실제 IE·뇌 색전 케이스에 Shigella 장출혈/신생물성 IE를 삽입한 오연결 해설 교체.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005613
