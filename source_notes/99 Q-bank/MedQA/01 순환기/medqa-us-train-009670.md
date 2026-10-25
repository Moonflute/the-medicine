---
type: qbank
schema_version: 1
id: medqa-us-train-009670
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d585a13e160c50921a1ce06d55ea39f6974eed17b57b4bf8ad332dcd8b46a116
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "atrial myxoma"
  - "심방 점액종"
  - "tumor plop"
  - "Atrial myxoma"
related_disease_slugs: []
question_type: diagnosis
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
  - ZHJ1ZzowMyDshoztmZTquLAvUmFuaXRpZGluZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

74세 히스패닉 남자가 3주 동안 서 있을 때 어지럽고 1시간 전 잠시 의식을 잃어 내원했다. 아침에 화장실에 가다가 갑자기 쓰러졌지만 다치지는 않았다. 위식도 역류병, 양성 전립선비대증, 통풍이 있고 라니티딘, 두타스테리드, 탐스로신, 알로푸리놀을 복용한다. 체온 36.7°C, 맥박 83회/분, 누운 혈압 125/80 mmHg에서 기립 1분 후 100/70 mmHg로 떨어지며 맥박 변화는 없다. 창백하고 청진에서 ‘툭’ 하는 소리 직후 심첨부 저음의 중간 이완기 잡음이 들린다. 심전도는 규칙적 동성 리듬이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 심장 점액종
B. 대동맥판막 협착
C. 약물 유발 저혈압
D. 대발작

## 해설

심첨부의 종양성 개방음(tumor plop)과 이완기 잡음은 좌심방 점액종(A)을 시사하며, 이동성 종양의 간헐적 승모판 유입 폐쇄가 체위 관련 증상을 일으킬 수 있다. 심초음파로 확인해야 한다. 실제 기립 혈압 저하도 있고 탐스로신과 음주가 기여할 수 있으므로, 약물 유발 저혈압을 모든 면에서 배제하는 설명은 부적절하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 종양성 개방음 단서의 A는 유지하되 실제 기립성 저혈압과 탐스로신 기여를 무조건 배제하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009670
