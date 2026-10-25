---
type: qbank
schema_version: 1
id: medqa-us-train-009017
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ebf99d16aab70121939075da00acbc9c767d349083a584360b856e3b297174f7
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute acalculous cholecystitis"
  - "critically ill patient"
  - "percutaneous cholecystostomy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

관상동맥우회술 3일 후 72세 남성이 심한 오른쪽 상복부 통증, 발열, 오심, 구토로 내원했다. 제2형 당뇨병, 양성 전립선비대증, 말초혈관질환, 만성 장간막 허혈이 있고 30년간 하루 한 갑을 피웠으나 10년 전 금연했다. 일주일에 맥주 8캔을 마신다. 수술 전 메트포르민, 아스피린, 심바스타틴, 피나스테리드를 복용했다. 체온 38.9°C(102°F), 맥박 102회/분, 호흡수 18회/분, 혈압 110/60mmHg이다. 양측 폐에서 흡기 수포음이 들리고 심장검사는 정상이다. 복부는 부드럽지만 오른쪽 상복부 압통과 흡기 시 갑작스러운 호흡 정지가 있다. 백혈구 15,700/mm³, AST 40U/L, ALT 100U/L, ALP 85U/L, 총 빌리루빈 1.5mg/dL, 직접 빌리루빈 0.9mg/dL, 아밀라아제 90U/L이다. 복부 초음파에서 담석 없이 팽창된 담낭, 두꺼워진 담낭벽, 담낭 주위 액체가 보인다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 정맥 헤파린 후 색전제거술
B. 연속 복부검사를 하며 주의 깊게 관찰
C. 즉시 담낭절제술
D. 정맥 피페라실린-타조박탐과 경피적 담낭배액술

## 해설


큰 수술 후 고열·Murphy 징후와 담석 없는 담낭벽 비후·주위 액체는 급성 무결석성 담낭염을 시사한다. 최근 CABG와 동반질환으로 재수술 위험이 큰 상황에서 항균제와 경피적 담낭배액(D)이 적절하다. 본문 혈압은110/60으로 이미 쇼크라고 단정하지 않는다. 실제 수술 적합성에 따라 담낭절제나 내시경 배액 등을 판단하며 고령만으로 모든 수술을 무조건 연기하는 원칙은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009017 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CABG직후 무결석성 담낭염의 항균제+경피배액 D 유지. 실제 BP110/60을 이미 쇼크라고 만들지 않고 최근 심장수술·수술적합성을 근거로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/10.1002/jhbp.504

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009017
