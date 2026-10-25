---
type: qbank
schema_version: 1
id: medqa-us-train-001345
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7f144197dc6e292080ea438fd82635eabace987dae9f0e8ad770410d26bba7c6
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "ureteral stone"
  - "renal colic"
  - "nephrolithiasis"
  - "Ureteral stone"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOyEnSAoVXJpbmFyeSB0cmFjdCBzdG9uZSkubWQ
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
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남성이 급성으로 발생한 오른쪽 옆구리 통증으로 내원했다. 6시간 전 갑자기 시작되어 호전되지 않았다. 통증은 심하고 산통성으로 ‘파도처럼’ 온다고 표현한다. 오른쪽 옆구리에 국한되며 사타구니로 방사된다. 오심이 동반된다. 발열, 오한, 배뇨곤란 또는 혈뇨는 없다. 9개월 전 직립 복부 X선에서 무증상 신결석이 진단되었으나 아직 치료받지 않았다. 활력징후는 체온 37.0°C (98.6°F), 혈압 145/90 mm Hg, 맥박 119회/분, 호흡수 21회/분이다. 지속적으로 움직이고 통증으로 몸부림치며 오른쪽 늑골척추각에 심한 압통이 있다. 소변 시험지에서 혈액 2+가 보인다. 비조영 복부·골반 CT에서 오른쪽 요관신우 접합부에 직경 4 mm 방사선불투과성 결석이 보이고 왼쪽 신장에도 폐쇄되지 않은 작은 결석이 여러 개 있다. 오른쪽 신장에 경미한 수신증이 있다. 정맥 수액을 시작하고 온단세트론을 투여했다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 응급 경피적 신루 설치
B. 하이드로코돈과 인도메타신
C. 24시간 소변 화학검사
D. 쇄석술

## 해설

감염이나 신기능 악화가 없는 작은 요관 결석에서는 우선 통증을 조절하며 자연 배출 가능성을 관찰할 수 있다. 제시된 B의 indomethacin 같은 NSAID가 우선 진통제이며, opioid는 금기·불충분한 효과 등에서 추가적으로 고려한다. 필요한 수분 상태를 교정하되 수액을 많이 밀어 넣어 결석을 강제 배출하는 것은 목적이 아니다. 통증이 조절되지 않거나 감염·신기능 저하가 생기면 적극적 배액/제거가 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 4 mm 무감염 결석의 진통 관리 B를 유지하며 NSAID 우선·opioid 구제 및 수액 강제 배출 오해를 정리.
- 공식/학회 근거: https://uroweb.org/guidelines/urolithiasis/chapter/guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001345
