---
type: qbank
schema_version: 1
id: medqa-us-train-006349
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55382e8f657bd97046d8ea349aebcda6d6015d318a35b74f40dfe5fe13766de7
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "비알코올성 지방간염"
  - "대사이상 관련 지방간질환"
  - "간세포 풍선변성"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_ruYTslYzsvZTsmKzshLEg7KeA67Cp6rCE7Je8IChOb24tYWxjb2hvbGljIFN0ZWF0b2hlcGF0aXRpcykubWQ
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 정기 건강검진을 위해 내원했다. 특별한 증상은 없다. 제2형 당뇨병이 있으며 심각한 질환의 가족력은 없다. 지역 회사에서 엔지니어로 일한다. 흡연은 하지 않고 이틀에 한 번 레드와인 한 잔을 마신다. 불법 약물은 사용하지 않는다. 유일하게 복용하는 약은 메트포르민이다. 키는 180cm(5ft 11in), 체중은 100kg(220lb), 체질량지수는 31kg/m²이다. 활력징후는 정상이다. 복부는 부드럽고 압통이 없으며 간이 오른쪽 늑골 아래 2~3cm까지 만져진다. 검사에서 AST 100 U/L, ALT 130 U/L이다. 간 생검에서 간세포 풍선변성과 림프구, 호중구 및 쿠퍼세포가 산재한 염증성 침윤이 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 원발성 담즙성 간경변
B. 바이러스성 간염
C. 비알코올성 지방간염
D. 자가면역성 간염

## 해설

비만·당뇨와 간세포 풍선변성·염증은 제시 중 NASH C를 지지한다. NASH는 지방간질환 전체인 NAFLD와 동의어가 아니라 염증/간세포손상을 동반하는 형태다. 이 문항에 고지혈증 수치가 제공된 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: NASH를 NAFLD와 동일시하고 제시되지 않은 고지혈증을 추가한 해설 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006349
