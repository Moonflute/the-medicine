---
type: qbank
schema_version: 1
id: medqa-us-train-009306
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d8574c0a67af197df25dd92ade4dda40bf26d8fd0b446e81fa13686af649dd8c
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "diffuse systemic sclerosis"
  - "미만성 전신경화증"
  - "anti-Scl-70 antibody"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDqsr3tmZTspp0gKFN5c3RlbWljIFNjbGVyb3NpcykubWQ
question_type: diagnosis
difficulty: complex
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcmFsYXppbmUubWQ
---

# MedQA US 임상문제

## 문제

35세 여성이 수개월간 지속된 관절통과 강직으로 내원했다. 손, 허리, 왼쪽 무릎에 증상이 있고 아침 강직이 활동하면서 하루 종일 호전된다. 추위에 노출되면 손가락 색이 변하고 얼굴 피부가 조여지며 입술이 얇아졌다고 한다. 하루 종일 피곤하고 일반 종합비타민을 복용했지만 호전이 없다. 흡연은 하지 않고 사회적으로 음주한다. 1년 전 고혈압을 진단받아 지난 1년간 하이드랄라진을 복용했다. 피부는 윤기가 나고 약간 두꺼워져 있으며 특히 얼굴과 손에서 두드러진다. 검사에서 혈색소 9.5 g/dL, 백혈구 5,500/mm³, 혈소판 150,000/mm³, ANA 양성, 항센트로미어 음성, 항Scl-70 양성, 항Jo-1 음성, 항히스톤 음성, 항dsDNA 음성이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 제한형 피부 전신경화증
B. 미만형 피부 전신경화증
C. 다발근육염
D. 전신홍반루푸스

## 해설


Raynaud 현상, 팽팽한 피부와 입술변화, ANA 및 anti-Scl-70은 systemic sclerosis를 지지한다. Anti-Scl-70은 diffuse cutaneous SSc와 더 연관되어 보기 중 B가 출제 의도에 부합한다. 다만 실제 limited/diffuse 구분은 손·얼굴 외 근위부 및 몸통의 피부경화 범위로 정하므로 항체 하나만으로 아형을 확정할 수 없다. Hydralazine 병력만으로 약물루푸스로 바꾸지 않는다. 기존 fluoroquinolone·발목 건통 설명은 무관하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009306 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전신경화증 질문에 fluoroquinolone 건병증 해설이 붙은 오류 교체. Scl70만으로 피부범위아형 확정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009306
