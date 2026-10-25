---
type: qbank
schema_version: 1
id: medqa-us-train-004648
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e2f68c219adfbae8f19205f9df6833b8edc66da34b7dcfb6e39e98cd78cafe8d
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "후두암"
  - "상기도 폐쇄"
  - "흡기성 협착음"
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-2bhOuRkOyVlCAoTGFyeW5nZWFsIENhbmNlcikubWQ
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

비만인 52세 남성이 8시간 동안 점점 심해지는 호흡곤란으로 응급실에 왔다. 2개월 전 목 오른쪽에 종괴가 생겨 후두암 진단을 받았다. 27년 동안 하루에 담배 두 갑을 피웠고 매일 럼주 2파인트를 마신다. 아파 보이지만 사람, 장소와 시간에 대한 지남력은 정상이다. 체온은 37°C (98.6°F), 맥박은 분당 111회, 호흡수는 분당 34회, 혈압은 140/90 mm Hg, 실내 공기 산소포화도는 89%이다. 진찰에서 목 오른쪽에 9cm 크기의 압통성 단단한 성문하 종괴와 경부 림프절병증이 보인다. 호흡이 힘들고 들숨 시 협착음이 들리지만 질문에는 대답할 수 있다. 폐 청진은 깨끗하다. 동맥혈가스는 pH 7.36, PCO2 45 mm Hg, PO2 74 mm Hg, HCO3− 25 mEq/L이다. 사전의료지시서는 없다. 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 기관 스텐트 삽입
B. 기관절개술
C. 근육 내 에피네프린
D. 윤상갑상막절개술

## 해설

진행성 종양성 상기도 폐쇄와 저산소증이 있으나 아직 의식과 자발호흡이 유지되어, 숙련된 기도팀이 자발호흡을 보존하며 시행하는 기관절개 B가 선택지 중 적절하다. 해부학적 폐쇄 위치와 삽관/환기 가능성을 즉시 평가한다. 모든 기도응급에서 기관절개가 우선이라는 뜻은 아니며 환기 불가능 시 응급 전경부 기도확보 전략이 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 후두암 진행성 폐쇄에서 기관절개 B를 지지하되 모든 기도응급의 획일적 처치로 확대하지 않도록 한정.
- https://doi.org/10.1097/ALN.0000000000004002

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004648
