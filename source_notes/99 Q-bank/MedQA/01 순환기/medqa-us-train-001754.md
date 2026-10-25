---
type: qbank
schema_version: 1
id: medqa-us-train-001754
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f468f0efd81cfd90d424073a2acd4755848f476209ca110bf90b2a09d379cf4
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "aortic dissection"
  - "hypertension"
  - "widened mediastinum"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: risk_factor
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 1시간 전부터 시작된 심한 흉통으로 응급실에 왔다. 통증은 가슴 중앙에 있고 찢어지는 듯하며 등으로 방사된다. 고혈압, 고지혈증 및 제2형 당뇨병 병력이 있다. 지난 30년 동안 하루 한 갑의 담배를 피웠고 매일 맥주 2–3병을 마신다. 30대에 코카인을 사용했지만 지난 15년간 불법 약물은 사용하지 않았다. enalapril, atorvastatin 및 metformin을 복용하나 규칙적으로 먹지 않았다고 한다. 키 174 cm (5 ft 9 in), 체중 98 kg (216 lb), BMI 32 kg/m2이다. 맥박 80/min, 오른팔 혈압 150/90 mm Hg, 왼팔 혈압 180/100 mm Hg이다. 심장검사에서 고음의 거친 감쇠성 초기 이완기 잡음이 들린다. ECG는 정상이다. 흉부 X선에서 종격동 확장이 보인다. 다음 중 이 환자의 상태를 유발하는 가장 강력한 소인 요인은 무엇인가?

## 선택지

A. 당뇨병
B. 연령
C. 고혈압
D. 흡연력

## 해설

정답은 C이다. 급성 찢어지는 흉통·등방사, 양팔혈압차, 새 AR잡음과 종격동확장은 대동맥박리를 시사한다. 제시된 소인 중 오래 조절되지 않은 고혈압이 가장 중요한 위험인자이다. 흡연도 혈관위험을 높이지만 이 문항에서 HTN 대신 D를 정답처럼 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정답 C HTN과 반대인 흡연력 중심 해설 교체.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001754
