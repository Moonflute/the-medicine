---
type: qbank
schema_version: 1
id: medqa-us-test-000168
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:d3e127eed35dd322b5ab79af4557c365bc23947203f6a9fbf71ebdc3102ccaea
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "타코츠보 심근병증"
  - "스트레스 심근병증"
  - "급성 심부전"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrtoDsoIQgKEFjdXRlIEhlYXJ0IEZhaWx1cmUpLm1k
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여성이 가까운 가족의 갑작스러운 사망 직후 심한 흉통으로 내원했다. 트로포닌이 상승했으나 응급 관상동맥조영에 원인 폐색은 없었다. 심초음파에서 여러 관상동맥 영역에 걸친 심첨부 무운동과 기저부 과수축이 있었고, 수 주 후 기능은 회복됐다. 가장 가능성 높은 진단은?

## 선택지

A. 확장성 심근병증
B. 수축성 심낭염
C. 타코츠보 심근병증
D. 비후성 심근병증

## 해설

급성 스트레스 뒤 한 관상동맥 영역에 국한되지 않는 일시적 심실 벽운동 이상과 이후 회복은 타코츠보 심근병증을 지지한다. 흉통 초기에는 급성 관상동맥증후군과 감별해야 하며 스트레스 병력만으로 진단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: UGIB 해설이 타코츠보 케이스에 오연결되어 교체. 원정답 C 유지; 심방·심실 확장만으로 확진하거나 정상 ECG로 ACS를 배제하지 않도록 한계 명시.
- https://academic.oup.com/eurheartj/article/39/22/2032/5025412

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000168
- 타코츠보 심근병증 국제 전문가 합의: https://pmc.ncbi.nlm.nih.gov/articles/PMC11589216/
