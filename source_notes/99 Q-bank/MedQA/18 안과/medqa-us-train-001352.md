---
type: qbank
schema_version: 1
id: medqa-us-train-001352
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea9def02d5b99a0071b5e6e8b62b45e86c4f5c75a734f4da6143f72c7bc616a2
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "acute angle-closure glaucoma"
  - "increased intraocular pressure"
  - "Acute angle-closure glaucoma"
question_type: investigation
related_disease_slugs:
  - MTgg7JWI6rO8L-uFueuCtOyepSAoZ2xhdWNvbWEpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 여성이 4시간 동안 지속된 오른쪽 눈 주위의 심한 통증, 같은 눈의 시야 흐림 및 두통으로 응급실에 내원했다. 오심은 있으나 구토는 하지 않았다. 광원을 볼 때 색이 있는 밝은 원을 볼 수 있다. 현재 트리메토프림-설파메톡사졸로 요로감염을 치료 중이다. 불편해 보인다. 활력징후는 정상이다. 시력은 왼쪽 눈 20/20, 오른쪽 눈은 5피트 거리에서 손가락 세기만 가능하다. 오른쪽 눈의 결막 충혈과 각막 부종, 동공 확장 및 고정이 보인다. 정맥 진통제와 항구토제를 투여했다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 초음파 생체현미경검사
B. 전방각경검사
C. 안저검사
D. 국소 스테로이드 투여

## 해설

심한 안통, 무지개빛 달무리, 시력저하, 각막 부종과 고정된 산동은 급성 폐쇄각 발작을 시사한다. 전방각 폐쇄로 방수 배출이 막혀 안압이 상승할 수 있으며, B, 전방각경검사는 각 구조와 폐쇄 여부를 확인하는 핵심 검사이다. 동시에 즉각적인 안과 평가와 안압 확인·신속한 안압 하강 치료가 필요하다. 각막 부종 때문에 관찰이 어려울 수 있어 검사를 완벽하게 마칠 때까지 치료를 미루라는 뜻은 아니다. 약물 연관 이차성 폐쇄각 가능성도 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전방각 폐쇄와 안압 상승의 인과를 교정하고 gonioscopy B가 응급 안압 치료 지연을 의미하지 않음을 명시.
- 공식/학회 근거: https://www.aao.org/education/preferred-practice-pattern/primary-angle-closure-disease-ppp

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001352
