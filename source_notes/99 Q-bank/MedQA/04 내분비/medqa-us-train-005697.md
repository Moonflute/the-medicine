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

우측 슬관절 전치환술 직후 69세 여성이 심한 복통, 피가 섞이지 않은 구토 및 혼돈을 보인다. 하시모토 갑상선염이 있으나 레보티록신으로 잘 조절되고, 고지혈증은 식이로 조절된다. 10년 전 우측 발의 무지외반증 제거 수술을 받았다. 체온은 39°C(102.2°F), 맥박은 분당 120회, 혈압은 60/30 mmHg이다. 복부는 전반적으로 압통이 있으나 장음은 정상이다. 환자는 혼돈 상태로 사람은 알아보지만 장소와 시간은 모른다. 검사 결과를 기다리는 중이다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 고용량 하이드로코르티손
B. 조영제를 사용하지 않는 뇌 CT
C. 정맥 내 저장성 생리식염수 주입
D. 복부 CT 혈관조영술

## 해설

심한 저혈압·복통·구토·혼돈과 자가면역 병력에서는 부신위기를 의심해 hydrocortisone A를 검사결과 전에 투여할 수 있다. 이것만으로 확진되는 것은 아니며 수술출혈·패혈증 등 다른 쇼크원인도 즉시 평가한다. 기도/순환 소생과 등장성 수액 등 처치를 병행하고 steroid만 투여해 관찰하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수술후 쇼크의 부신위기 의심 A를 임상확진으로 단정하지 않고 소생·다른 쇼크감별 병행 명시.
- https://www.endocrine.org/-/media/endocrine/files/cpg/primary-adrenal-insufficiency-cpg-resource-page-13feb18.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005697
