---
type: qbank
schema_version: 1
id: medqa-us-train-001331
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:66e21741cb79e5bdba282781da35a534567da788c94c6bcc5cbaf6eb09eb9a07
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "preeclampsia"
  - "preterm premature rupture of membranes"
  - "fetal growth restriction"
question_type: prognosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA
  - MTIg7IKw6rO8L-yhsOq4sCDslpHrp4kg7YyM7IiYIChQcmVtYXR1cmUgUnVwdHVyZSBvZiBNZW1icmFuZXMpLm1k
  - MTIg7IKw6rO8L-2DnOyVhCDshLHsnqUg7KeA7JewIChGZXRhbCBHcm93dGggUmVzdHJpY3Rpb24pLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 33주인 36세 아프리카계 미국인 여성(G1P0)이 ‘양수가 터졌다’며 응급실에 내원했다. 산전 진료에서 임신 3기에 고혈압 없이 단백뇨가 확인된 병력이 있다. 흡연, 음주, 아픈 사람과의 접촉, 복통, 발열, 오심, 구토 또는 설사는 부인한다. 체온은 98.6°F (37°C), 혈압은 150/90 mmHg, 맥박은 120회/분, 호흡수는 26회/분이다. 당직 산과의가 응급실로 오는 동안 시행한 검사에서 헤모글로빈 11 g/dL, 헤마토크릿 35%, 백혈구 9,800/mm3(감별 정상), 혈소판 400,000/mm3, 혈청 Na+ 137 mEq/L, Cl− 99 mEq/L, K+ 3.9 mEq/L, HCO3− 22 mEq/L, BUN 35 mg/dL, 포도당 128 mg/dL, 크레아티닌 1.2 mg/dL, 소변 상피세포 소량, 단백질 2+, 포도당 1+, 백혈구 2/hpf, 세균 없음이 확인되었다. 분만 후 신생아에게서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 성장 지연
B. 태변 흡인
C. 소두증
D. 사산

## 해설

과거에는 단백뇨만 있었지만 현재 혈압은 150/90이며 단백뇨·크레아티닌 상승이 동반되어 전자간증 평가가 필요하다. 태반 혈류 저하가 태아 성장제한(A)과 연관된다. 양막파수 자체나 고혈압이 없다는 설명으로 성장제한을 정당화하지 않는다. 임상적으로 혈압 재측정과 중증도 평가를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 현재 고혈압이 없다는 해설은 150/90과 모순되므로 전자간증·태반 기능 저하 기전으로 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001331
