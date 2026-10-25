---
type: qbank
schema_version: 1
id: medqa-us-train-004797
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6b6ef31e90a9d8574d17999a75806d7d7797e020f828571c17a92c52243e5c1
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "서혜부 탈장"
  - "간접 서혜부 탈장"
  - "발살바 수기 돌출"
  - "indirect inguinal hernia"
related_disease_slugs:
  - MTEg7Jm46rO8L-yDheq1tCDtg4jsnqUgKEluZ3VpbmFsIEhlcm5pYSkubWQ
question_type: diagnosis
difficulty: standard
answer: B
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

37세 여성이 8주 동안 지속된 오른쪽 서혜부 통증으로 내원했다. 걷거나 서 있을 때 통증이 더 심해졌다. 오심, 구토와 발열은 없다. 체온은 36.8°C (98.2°F), 맥박은 분당 73회, 혈압은 132/80 mm Hg이다. 복부는 부드럽고 압통이 없다. 오른쪽 서혜인대 위로 보이고 만져지는 서혜부 돌출이 있으며 발살바 수기에서 돌출이 느껴진다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 지방종
B. 간접 서혜부 탈장
C. 서혜부 림프절병증
D. 교액성 탈장

## 해설


서혜인대 위 돌출이 Valsalva에서 증가하면 서혜부 탈장을 지지한다. 선택지 중 B가 가장 적절하다. 간접 탈장은 하복벽혈관 가쪽의 깊은서혜고리를 통해 서혜관을 지나며, 여성에서는 자궁원인대를 따라 진행할 수 있다. 여성에게 고환관을 따른다고 설명하지 않는다. 정확한 직접/간접 구분은 촉진 서술만으로 확정하기 어려울 수 있으나 지방종·림프절병증보다 기침/복압에 따른 돌출이 탈장에 맞고 교액을 시사하는 급성 폐색·전신 소견은 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004797 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 여성의 간접 서혜부 탈장을 고환관으로 설명한 해부학 오류를 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004797
