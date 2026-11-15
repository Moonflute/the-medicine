---
type: qbank
schema_version: 1
id: medqa-us-train-005697
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b13fea78be0bf8da974c38a98832472aa035c7fa76cb579499b60f51eb8b5d01
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "급성 부신위기"
  - "수술 후 부신기능부전"
  - "저혈압과 복통"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOyLoCDquLDriqXsoIDtlZjspp0gKEFkcmVuYWwgSW5zdWZmaWNpZW5jeSkubWQ
question_type: management
difficulty: standard
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

장기간 프레드니솔론을 복용하다 최근 중단한 69세 여성이 무릎 수술 뒤 구토·혼돈을 보인다. 초기 수액을 줘도 혈압이 65/38 mmHg이고 혈당은 54 mg/dL다. 출혈·감염도 평가 중이다. 부신위기가 의심될 때 검사 결과를 기다리지 않고 투여할 약은?

## 선택지

A. 정맥 하이드로코르티손
B. 경구 플루드로코르티손 단독
C. 정맥 푸로세미드
D. 경구 레보티록신

## 해설

최근 장기간 스테로이드 사용력이 있고 수술 뒤 쇼크·저혈당이 발생하면 부신위기를 의심한다. 가능하면 치료 지연 없이 혈액을 채취하고 바로 정맥 하이드로코르티손을 투여한다. 등장성 수액, 저혈당 교정과 다른 쇼크 원인 치료를 병행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수술후 쇼크의 부신위기 의심 A를 임상확진으로 단정하지 않고 소생·다른 쇼크감별 병행 명시.
- https://www.endocrine.org/-/media/endocrine/files/cpg/primary-adrenal-insufficiency-cpg-resource-page-13feb18.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005697
- https://www.endocrine.org/clinical-practice-guidelines/glucocorticoid-induced-adrenal-insufficiency
