---
type: qbank
schema_version: 1
id: medqa-us-train-006827
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9de0adf3a15a6c0729b8fdca153cbc6e8fb94a7b49eed6e1cb9bba1062134869
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 췌장염"
  - "알코올성 췌장염"
  - "초기 수액 소생"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EYWJpZ2F0cmFuLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

46세 남성이 4시간 동안 지속된 심한 심와부 통증과 구토로 응급실에 내원했다. 통증은 지속적이고 등으로 방사되며 누우면 악화된다. 녹색 구토를 3~4회 했다. 2개월 전 헬리코박터 파일로리 감염으로 삼제요법을 받았다. 심방세동과 고혈압이 있으며 마을 외곽에서 증류주 공장을 운영하고 매일 술 4~5잔을 마신다. 다비가트란과 메토프롤롤을 복용한다. 체온은 37.8°C(100°F), 맥박은 분당 102회, 혈압은 138/86 mm Hg이다. 심한 심와부 압통과 방어성 긴장이 있지만 반발통은 없고 장음은 감소되어 있다. 혈액검사에서 헤마토크릿 53%, 백혈구 11,300/mm³, Na+ 133, Cl− 98, K+ 3.1 mEq/L, 칼슘 7.8 mg/dL, BUN 43 mg/dL, 포도당 271 mg/dL, 크레아티닌 2.0 mg/dL, GGT 88 U/L, 리파아제 900 U/L이다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 칼슘 글루콘산 치료
B. 포메피졸 치료
C. 개복술
D. 결정질 수액 주입

## 해설

췌장염의 탈수/혈액농축과AKI가 의심돼 D의 등장성결정질로 관류를 회복한다. 보통LR을 선호하며 혈압·소변량·BUN/Hct·호흡상태로 반복평가해 적정한다. 무제한공격수액은 과부하 위험이 있고 저K/증상성저Ca는 별도교정이 필요하다. 수액만으로 모든전해질장애가 해결되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 췌장염 D 수액을 무제한보충이 아닌 신기능/과부하 감시하 등장성결정질로 한정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13221274/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006827
