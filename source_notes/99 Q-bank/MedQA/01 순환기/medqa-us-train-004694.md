---
type: qbank
schema_version: 1
id: medqa-us-train-004694
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5a4de13bd7000197f8773ec7f364c03c8c8eb27f613152435b53dcbba75ffa27
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 비대상성 심부전"
  - "체액 과다"
  - "박출률 감소 심부전"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-unjOyEsSDsi6zrtoDsoIQgKOuwley2nOuloCDqsJDshowpIChDaHJvbmljIEhlYXJ0IEZhaWx1cmUgd2l0aCBSZWR1Y2VkIEVqZWN0aW9uIEZyYWN0aW9uIChIRnJFRikpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 남성이 박출률이 감소된 심부전으로 치료 중이다. 최근 1주일 사이 체중이 3 kg 늘고, 누우면 숨이 차며 양쪽 다리가 붓는다. 혈압 145/90 mmHg이고 사지는 따뜻하다. 진찰에서 경정맥 팽창과 폐기저부 수포음이 있다. 울혈을 줄이기 위한 초기 약물은?

## 선택지

A. 정맥 푸로세미드
B. 카르베딜롤 즉시 증량
C. 도파민 정맥 주입
D. 밀리논 정맥 주입

## 해설

뚜렷한 울혈이 있고 말초 관류는 유지되는 급성 심부전 악화다. 정맥 루프 이뇨제로 울혈을 줄이고 소변량, 신장기능, 전해질을 확인한다. 저관류가 없으므로 강심제를 기본으로 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Bumetanide를 ARNI로 분류한 오류를 loop 이뇨제로 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004694
- 대한심부전학회 급성 심부전 진료지침: https://e-kcj.org/DOIx.php?id=10.4070%2Fkcj.2023.0115
