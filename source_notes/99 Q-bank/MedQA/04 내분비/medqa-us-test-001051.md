---
type: qbank
schema_version: 1
id: medqa-us-test-001051
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7e915a5ebab5f8fe4ac1ae5267dde9a64de3365ac37dcd8ca1175c7b3873d83a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "콜레세벨람"
  - "담즙산 결합수지"
  - "약물 상호작용"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고콜레스테롤혈증, 고혈압, 갑상선기능항진증, 천식이 있는 40세 여성이 현재 hydrochlorothiazide, levothyroxine, albuterol, 경구피임약과 종합비타민을 복용하며 여러 스타틴에서 부작용을 경험해 콜레세벨람을 시작하기로 했다. 이 약을 시작할 때 우려할 점은?

## 선택지

A. 인지장애를 일으킬 수 있다
B. 담석증 위험을 높일 수 있다
C. 다른 약물과 복용 시간을 분리해야 한다
D. HDL을 크게 낮출 수 있다

## 해설

정답은 C이다. colesevelam은 장내에서 담즙산을 결합하고 일부 병용약의 흡수를 낮출 수 있다. 이 환자의 levothyroxine과 경구피임약 등은 특히 복용 시각 조정이 필요한 약물이므로 제품별 지침에 따라 분리한다. 모든 약이 동일한 상호작용을 보이는 것은 아니며 실제 약제 목록을 확인한다. HDL을 크게 낮추는 것이 대표 작용은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 약물 상호작용의 핵심인 원문의 복용약 목록을 복원하고 흡수 저하 기전을 설명.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87bf6310-cfc4-4cb4-966e-8561b3880e36

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001051
