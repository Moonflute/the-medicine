---
type: qbank
schema_version: 1
id: medqa-us-train-007661
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e5e1e81838f955d11c522d2d54ab5770e0bbc5e9c07e739a0616e4435b5f4925
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "aortic dissection"
  - "cardiac tamponade"
  - "Beck triad"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
question_type: prognosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 남자가 갑자기 발생한 심한 흉통으로 응급실에 왔다. 통증은 찢어지는 양상이며 턱으로 방사되고, 땀을 많이 흘린다. 5년 전 고혈압을 진단받았고 3년 전 만성 기관지염을 진단받았다. 지난 33년간 매일 담배 한 갑을 피웠다. 현재 에날라프릴과 포르모테롤을 복용한다. 환자는 초조해 보인다. 맥박은 104회/분, 호흡수는 26회/분이며 혈압은 우측 팔 154/98 mm Hg, 좌측 팔 186/108 mm Hg이다. 흉부 X선에서 중등도 과팽창과 9 cm로 넓어진 종격동이 보인다. 심전도는 정상이다. 이 환자에게 다음 중 어떤 합병증이 발생할 위험이 증가하는가?

## 선택지

A. 목에서 촉지되는 염발음
B. 심음의 약화
C. 초기 이완기 타격음
D. 우측 폐기저부의 호흡음 감소

## 해설

갑자기 발생한 찢어지는 흉통, 양팔의 현저한 혈압 차이와 종격동 확장은 급성 대동맥박리를 시사한다. 상행대동맥 박리는 심낭 안으로 파열되어 혈심낭과 심장압전을 유발할 수 있으며, 이때 B, 심음의 약화가 나타날 수 있다.

이는 현재 이미 압전이 있다는 뜻이 아니라 위험한 합병증을 묻는 문항이다. 초기 이완기 타격음은 수축성 심낭염의 소견에 가깝고, 목의 염발음은 피하기종 등에서 나타나며 이 사례의 전형적인 합병증이 아니다. 정상 심전도만으로 대동맥박리를 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AF 항응고 해설을 대동맥박리 파열에 의한 혈심낭/심장압전과 심음 감소 설명으로 교체. 원정답 B 유지.
- https://www.jacc.org/doi/10.1016/j.jacc.2022.08.004

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007661
