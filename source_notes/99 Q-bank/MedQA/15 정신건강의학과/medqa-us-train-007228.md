---
type: qbank
schema_version: 1
id: medqa-us-train-007228
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:71c9766d41e83b2f947ab33bf3d452908ecf4075403106e53629a7c2d15af73a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "말기 알츠하이머병"
  - "치매 진행"
  - "가정 호스피스"
  - "연명의료 목표"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-y5mOunpCAoRGVtZW50aWEpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PeHljb2RvbmUubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

76세 여자가 진행성 인지기능 저하와 1년간의 요실금 평가를 위해 딸과 함께 내원했다. 5년 전 알츠하이머형 치매를 진단받았다. 딸은 지난 2년 동안 단어를 찾기 어려워하고 건망증이 심해졌다고 한다. 이전에는 독립적으로 생활했지만 현재는 딸과 함께 살며 일상생활의 모든 활동에 도움이 필요하다. 지난 1년 동안 식욕과 경구 섭취가 감소했고 때때로 음식을 역류시켰다. 이 기간 동안 체중이 12kg(26lb) 감소했다. 흡인성 폐렴으로 두 번 치료받았고 현재 식사는 주로 으깬 음식이다. 사전의료지시서는 없지만, 독립적이었을 때 소생술이나 생명유지치료를 원하지 않는다고 말한 적이 있다. 딸은 계속 돌보고 싶지만 자신의 능력을 걱정한다. 고혈압과 고지혈증이 있으며 암로디핀과 아토르바스타틴을 복용한다. 활력징후는 정상이다. 영양실조로 보이지만 몸단장은 잘 되어 있다. 자신이 누구인지는 알고 딸의 이름을 말할 수 있으나 장소와 연도는 모른다. 간이정신상태검사는 17/30점이다. 신체 및 신경학적 검사는 다른 이상이 없다. 전혈구검사, 크레아티닌, BUN, TSH, 비타민 B12는 정상이며 혈청 알부민은 3 g/dL이다. 소변검사는 정상이다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 옥시코돈 처방
B. 가정 호스피스 돌봄
C. 대체 영양공급 방법 평가
D. 입원 완화의료

## 해설

진행성 치매와 일상생활 전반의 의존, 심한 체중 감소·연하 문제·반복 흡인성 폐렴이 있고 환자가 이전에 연명치료를 원하지 않았다는 가치가 중요하다. 제시된 선택지 중 가정 호스피스 돌봄을 평가·연계하며 가족의 부담과 돌봄 지원을 논의하는 것이 적절하다. MMSE 점수만으로 말기나 호스피스 적격을 자동 판정하지 않고 예후·기능·목표를 함께 확인한다. 모든 영양 지원을 중단한다는 의미도 아니며 편안함을 위한 손수 먹이기와 구강 관리 등을 포함한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007228

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 가정 호스피스 원정답 유지. MMSE/섭취 저하만으로 자동 말기·급여 적격 확정 대신 환자 목표와 예후 평가에 따른 가정 완화·호스피스 연계로 한정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
