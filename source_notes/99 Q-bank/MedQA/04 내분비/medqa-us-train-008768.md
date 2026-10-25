---
type: qbank
schema_version: 1
id: medqa-us-train-008768
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:06b97e9d1b522908cf2d7b8481daac697553a455b66d6af924967a0dca57f154
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "insulin resistance"
  - "type 2 diabetes mellitus"
  - "obesity"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: mechanism
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
---

# MedQA US 임상문제

## 문제

43세 여성이 연례 건강유지검사를 위해 내원했다. 지난 한 달 동안 피로와 두통이 있었고, 몇 주 전 결혼반지가 손가락에 너무 작아져 사이즈를 늘려야 했다. 경증 지속성 천식과 불안장애가 있다. 매일 밤 레드와인 2~3잔을 마시고 16년 동안 하루 한 갑을 피웠다. 회계 사무직으로 일하며 회사 합병을 앞두고 최근 장시간 근무했다. 아버지에게 뇌하수체 선종 병력이 있다. 알프라졸람, 플루티카손 흡입제, 알부테롤 흡입제를 복용한다. BMI 32kg/m²이고 활력징후와 신체검사는 정상이다. 공복 혈당은 160mg/dL이다. 다음 중 이 환자 고혈당의 가장 가능성 높은 기전은 무엇인가?

## 선택지

A. 인슐린 생성 감소
B. 스트레스
C. ACTH 과다분비
D. 인슐린 저항성

## 해설


정답 D. 반지가 작아질 정도의 말단 크기 증가와 두통, 뇌하수체 종양 가족력은 말단비대증을 고려하게 한다. GH 과다는 말초 포도당 이용을 줄이고 간 포도당 생성을 늘려 insulin 저항성과 고혈당을 유발한다. 비만도 저항성에 기여할 수 있지만 본문에는 insulin 분비량이 측정되지 않았으므로 정상 분비라고 단정하지 않는다. ACTH/cortisol 과다도 지속 고혈당을 만들 수 있으나 제시 단서에는 GH 병태가 더 부합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008768 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 반지 크기 증가/두통을 무시한 일반 비만T2DM 해설을 GH과다–insulin저항성 D로 사례별 교체; 미측정 insulin정상 주장 삭제.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008768
