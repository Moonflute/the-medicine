---
type: qbank
schema_version: 1
id: medqa-us-train-002762
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e04f69aaf06ca6b535760806a91f35d20bfc8e979f28e0008143c86adcb99f37
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "inflammatory breast cancer"
  - "peau d'orange"
  - "breast mass"
  - "axillary lymphadenopathy"
related_disease_slugs:
  - MTMg67aA7J246rO8L-yXvOymneyEsSDsnKDrsKnslZQgKEluZmxhbW1hdG9yeSBCcmVhc3QgQ2FuY2VyKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
---

# MedQA US 임상문제

## 문제

임신 3회, 출산 3회인 56세 여성이 지난 2개월 동안 왼쪽 유방이 커지고 뜨거우며 가려워져 내원했다. 1년 전 왼쪽 유방에서 작은 덩이를 느꼈지만 당시 진료를 받지 않았다. 고혈압과 고지혈증이 있다. 초경은 11세, 폐경은 46세였다. 어머니는 45세에 유방암으로 사망했다. 흡연과 음주는 하지 않는다. 현재 라베타롤, 심바스타틴, 매일 저용량 아스피린을 복용한다. 신체검사에서 크고 치밀한 유방이 보이며, 왼쪽 유방 종괴 위로 광범위한 홍반과 부종성 피부판이 있다. 왼쪽 유방은 압통이 있고 왼쪽 액와 림프절병증이 관찰된다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 유방 파제트병
B. 유방염
C. 유방 농양
D. 염증성 유방암

## 해설


비수유기 여성에서 유방이 빠르게 커지고 넓은 홍반·부종과 종괴, 액와 림프절병증이 동반되어 염증성 유방암(D)을 의심한다. 진피 림프관 내 종양세포 침범이 피부 부종과 오렌지껍질 양상을 일으킬 수 있다. Paget병은 주로 유두-유륜의 습진성 병변이며 양성 감염·농양이 아니다. 유방염·농양은 감별해야 하지만 이 환자의 장기간 종괴와 광범위 피부변화는 악성 원인을 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002762 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Paget병을 감염/농양에 포함한 비교와 유두주위에만 국한한 설명을 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002762
