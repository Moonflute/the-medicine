---
type: qbank
schema_version: 1
id: medqa-us-train-009252
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:76acbc764092900a0f24a4f5e7ce576f658b144d58f7169f950c6dbd26faa047
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "fat necrosis of breast"
  - "유방 지방괴사"
  - "oil cyst"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

55세 여성이 목욕 중 왼쪽 유방에 종괴를 발견한 지 10일 후 내원했다. 3년 전 61세에 언니가 유방암을 진단받아 유방암을 걱정한다. 6개월 전 폐경이 되었고 30년 동안 하루 담배 두 갑을 피웠다. 20년간 경구피임약을 복용했으며 현재 호르몬대체요법과 칼슘 보충제를 복용한다. 진찰에서 왼쪽 유방 상외측에 2.5 cm 크기의 단단하고 압통 없는 종괴가 만져지며 피부가 종괴에 당겨져 있다. 오른쪽 유방과 양쪽 겨드랑이는 정상이다. 유방촬영술에서 미세석회화와 기름낭종을 동반한 불규칙 종괴가 보인다. 중심부 생검에서 거품세포와 다핵 거대세포가 보인다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 선행 화학요법
B. 안심시키고 관찰
C. 변형 근치적 유방절제술
D. 종괴 광범위 절제

## 해설


기름낭종과 거품세포·다핵거대세포는 유방 지방괴사에 합당하다. 영상·진찰과 코어 생검 결과가 일치하는 양성 지방괴사라면 설명과 안심 B가 적절하며 일률적인 광범위 절제나 항암치료는 필요하지 않다. 다만 병리-영상 불일치, 증가하는 종괴, 지속되는 통증 등은 재평가 또는 절제의 이유가 된다. 악성을 흉내 낼 수 있다는 사실만으로 양성 일치 생검 후에도 반드시 절제하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009252 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 병리로 지방괴사가 확인된 정답 B와 달리 D 절제를 권하던 해설 오연결 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.org/cancer/types/breast-cancer/non-cancerous-breast-conditions/fat-necrosis-and-oil-cysts-in-the-breast.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009252
