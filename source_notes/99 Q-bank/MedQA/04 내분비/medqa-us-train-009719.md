---
type: qbank
schema_version: 1
id: medqa-us-train-009719
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3fd2c00e6a3ff25ab7580dce09dc217bf9c4876041d693c54f30ade37ce674e5
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Hashimoto thyroiditis"
  - "하시모토 갑상선염"
  - "anti-TPO antibody"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VmOyLnOuqqO2GoCDqsJHsg4Hsg5jsl7wgKEhhc2hpbW90bydzIFRoeXJvaWRpdGlzKS5tZA
question_type: investigation
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
---

# MedQA US 임상문제

## 문제

57세 여성이 항상 피곤하다고 호소하며 내원했다. 남편이 자살한 시기에 증상이 시작되었고 남편을 따라 죽고 싶은 생각이 있다. 심한 쇠약감과 지난달 15파운드 체중 증가, 관절통, 최근 호전된 피부 발진, 폐쇄성 수면무호흡증, 대사증후군이 있다. 피부가 매우 건조하고 팽팽하며 모발이 거칠다. TSH 5.3 µU/mL이고 그 외 혈액검사는 정상이다. 다음 중 가장 가능성 높은 비정상 검사 결과는 무엇인가?

## 선택지

A. 항DNA 토포이소머레이스 항체
B. 항핵항체
C. 항히스티딜-tRNA 합성효소 항체
D. 항갑상선 과산화효소 항체

## 해설


정답 D. 피로·체중증가·건조한 피부·거친 모발과 TSH의 경도 상승은 자가면역 갑상선염 가능성을 고려하게 하며 anti-TPO가 양성일 수 있다. Free T4 없이 명백/불현성 기능저하를 확정하지 않으며 본문에는 탈모가 명시되지 않았다. 갑상선 평가만으로 우울증과 자살사고를 설명하거나 그 안전 평가를 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009719 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 경도 TSH상승만으로 명백저하 확진하지 않고 TPO D 연관성 설명; 본문 탈모 추가 제거, 자살사고는 별도 긴급 평가 필요.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009719
