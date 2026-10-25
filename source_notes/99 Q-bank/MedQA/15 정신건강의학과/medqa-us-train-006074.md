---
type: qbank
schema_version: 1
id: medqa-us-train-006074
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:209855ad094dcba8b7cb5d53599d6fc82ce883a3d5986260374b0dcbfc472552
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "급성 근긴장이상 반응"
  - "항정신병약물 부작용"
  - "디펜히드라민"
  - "Acute dystonic reaction"
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 남성이 2시간 동안 지속된 안면 경련과 말할 수 없음으로 응급실에 왔다. 의식 소실이나 리듬성 움직임은 없고 난치성 조현병으로 최근 클로자핀을 시작했다. 주변을 인지하고 있으며 혈압은 135/85 mmHg, 맥박은 분당 86회, 호흡수는 분당 16회, 체온은 36.7°C(98.1°F)이다. 양쪽 눈이 우측 위로 편위되고 개구장애와 목 근육 경련, 머리가 좌측으로 돌아가는 소견이 있다. 지시에 즉시 따르고 그 외 검사는 정상이다. 다음 중 투여해야 할 약물은 무엇인가?

## 선택지

A. 칼슘 글루콘산
B. 디펜히드라민
C. 라베타롤
D. 모르핀

## 해설

안구의 강직성 편위·개구장애·사경은 약물 유발 급성 근긴장이상반응을 시사한다. 의식과 체온이 보존되어 있으며 이를 신경이완제 악성증후군과 동일시하지 않는다. 제시된 약물 중 항콜린성 작용이 있는 디펜히드라민이 적절하다. 클로자핀은 추체외로 부작용 위험이 상대적으로 낮지만 약물 노출과 다른 원인을 함께 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006074

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 급성 근긴장이상과 NMS를 동일시한 반복 오류 교정. 디펜히드라민의 항콜린성 작용과 국소 근수축 소견에 근거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.health.ny.gov/diseases/conditions/mimds/diagnosis.htm
