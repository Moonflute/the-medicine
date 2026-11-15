---
type: qbank
schema_version: 1
id: medqa-us-train-005445
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1ebc205c61d49f3d43a5850cf750adf48f551a03d28993d4c23dc85ed0f40e97
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "임신 중 승모판 협착"
  - "좌심방 압력 상승"
  - "루프 이뇨제"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDtmJHssKkgKE1pdHJhbCBTdGVub3NpcykubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 24주인 여성이 류마티스성 승모판 협착으로 베타차단제를 복용해 심박수가 조절된다. 그런데 기좌호흡이 지속되고 폐기저부에서 수포음이 들린다. 혈압은 안정적이다. 울혈을 줄이기 위해 추가할 약은?

## 선택지

A. 정맥 수액을 빠르게 투여
B. 저용량 루프 이뇨제를 신중히 투여
C. 도부타민을 정기적으로 주입
D. 디곡신을 고용량 투여

## 해설

임신 중 승모판 협착에서 심박수 조절 후에도 울혈이 지속되면 루프 이뇨제를 신중하게 사용한다. 과도한 혈량 감소를 피하고, 치료에 반응하지 않는 중증 환자는 전문팀에서 판막 중재를 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 임신 MS의 울혈완화 B는 유지하되 전체 초기전략을 이뇨제 단독으로 일반화하지 않음.
- https://academic.oup.com/eurheartj/article/46/43/4462/8234487

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005445
- ESC 임신 중 심혈관질환 진료지침(2025): https://www.escardio.org/static-file/Escardio/Guidelines/Products/Slide%20sets/2025/2025%20official%20slides_Pregnancy.pdf
