---
type: qbank
schema_version: 1
id: medqa-us-train-003140
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:64046b6b3592e9042b621f00b06246206bcdccd5cb8739fe1ec2dbfc7e617990
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Pringle maneuver"
  - "liver trauma"
  - "hepatoduodenal ligament"
  - "portal triad clamping"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

18세 남성이 교통사고 후 응급실에 왔다. 내원 후 활력징후가 크게 저하되었고 복부가 약간 팽창되어 있으며 오른쪽 갈비뼈가 압통과 골절 소견을 보이고 오른쪽 폐기저부 호흡음이 감소되어 있다. 복부 초음파에서 복강 내 액체와 간 손상이 보였고 흉부 X선에서 갈비뼈 골절과 우측 흉수도 확인되었다. 외과의는 즉시 수술을 권고했고 개복하니 대량 출혈이 관찰되었다. 출혈을 줄이기 위해 프링글 수기를 시행했다. 이때 무엇을 겸자로 잡았는가?

## 선택지

A. 복강동맥 위쪽 대동맥
B. 간정맥만
C. 간십이지장인대
D. 비장동맥만

## 해설


프링글 수기(Pringle maneuver)는 간문맥 삼위(간동맥, 문맥, 담관)를 포함하는 간십이지장인대를 클램프한다. 출혈을 감소시키기 위해 반드시 이 인대를 잡는다. 따라서 정답은 C이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Pringle 수기는 portal triad를 포함한 hepatoduodenal ligament C를 압박해 간 유입혈류를 차단하는 해부 문항.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003140
