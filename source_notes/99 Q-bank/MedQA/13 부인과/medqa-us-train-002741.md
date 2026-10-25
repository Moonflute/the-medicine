---
type: qbank
schema_version: 1
id: medqa-us-train-002741
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:340753a521f6b62612d0a17dcddd1f737336da0a80cb76d6752bcbeed0a0e5c4
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "postdural puncture headache"
  - "epidural analgesia"
  - "postpartum headache"
  - "epidural blood patch"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: D
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

자연분만 2일 후 23세 여성이 점점 악화되는 후두부의 욱신거리는 두통으로 내원했다. 통증은 목과 어깨 부위로 퍼진다. 메스꺼움이 있고 맑은 구토를 한 차례 했다. 어둡고 조용한 방에 있고 싶어 한다. 화장실에 가려고 일어나면 증상이 악화되고 침상 안정을 하면 약간 호전된다. 임신은 합병증 없이 진행되었고 모든 산전 진료를 받았다. 분만 중 경막외 진통을 시행했으며 통증 조절은 충분했다. 산후 경과에는 산과적 합병증이 없었다. 활력징후는 정상이고 의식은 명료하다. 진찰에서 목 경직이 있으나 신경학적 진찰에는 다른 이상이 없다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 응고검사 패널을 시행한다
B. 뇌척수액 분석을 시행한다
C. 침상 안정을 계속한다
D. 경막외 혈액 주입술을 시행한다

## 해설

경막외 시술 후 체위성 두통·오심·목통증은 경막천자 후 두통을 시사한다. 악화되어 일상생활이 어려우므로 마취과 평가 후 경막외 혈액패치(D)를 고려한다. 발열·신경결손·비전형적 양상에서는 감염·혈전증·출혈 등을 재평가하고 항응고·응고 상태도 확인한다. 모든 환자에게 검사가 불필요하다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: PDPH혈액패치적응증과다른산후두통·응고안전성평가보강.
- https://rapm.bmj.com/content/49/7/471.full

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002741
