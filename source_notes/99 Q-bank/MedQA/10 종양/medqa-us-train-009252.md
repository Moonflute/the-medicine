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
answer: D
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

55세 여성에게 단단한 유방 종괴가 만져진다. 유방촬영에서 기름낭종이 보이고, 중심침생검은 지방괴사로 확인됐다. 영상·촉진·병리 소견이 일치하고 증상이 없다. 다음 계획은?

## 선택지

A. 즉시 광범위 절제
B. 반드시 다른 부위에서 중심침생검 반복
C. 유방암에 준해 MRI로 병기 평가
D. 양성임을 설명하고 일반 검진으로 복귀

## 해설


영상과 조직검사가 서로 맞는 무증상 지방괴사는 절제가 필요하지 않다. 병리·영상이 일치하지 않거나 새로 커지면 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009252 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 병리로 지방괴사가 확인된 정답 B와 달리 D 절제를 권하던 해설 오연결 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.org/cancer/types/breast-cancer/non-cancerous-breast-conditions/fat-necrosis-and-oil-cysts-in-the-breast.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009252
- https://www.breastsurgeons.org/docs/statements/asbrs-ccs-concordance.pdf
