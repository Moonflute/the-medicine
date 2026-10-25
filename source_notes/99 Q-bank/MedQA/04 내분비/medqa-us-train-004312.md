---
type: qbank
schema_version: 1
id: medqa-us-train-004312
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f45d6d0f8cb20da94393c022f8d49a3b5366f3eff4df2e5a2e3c66242881abc2
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "일차성 부신기능저하증"
  - "애디슨병"
  - "부신 위기"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOyLoCDquLDriqXsoIDtlZjspp0gKEFkcmVuYWwgSW5zdWZmaWNpZW5jeSkubWQ
question_type: 임상증례 객관식
difficulty: complex
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 8세 남아가 6개월간 진행된 피로와 체중 감소로 내원했다. 기운이 없고 편식이 심해졌으며 묽은 변, 간헐적 복통과 오심이 있다. 7개월 전 다른 집으로 이사했다. 키 50백분위수, 체중 25백분위수이다. 체온 36.7°C, 맥박 116회/분, 혈압 85/46 mmHg이며 피부가 그을리고 잇몸이 청흑색이다. Na+ 134, K+ 5.4, Cl− 104, 중탄산염 21 mEq/L, BUN 16 mg/dL, 크레아티닌 0.9 mg/dL, 포도당 70 mg/dL이다. 정맥 수액 소생을 시작했다. 가장 적절한 초기 치료 단계는 무엇인가?

## 선택지

A. 레보티록신
B. 글루코코르티코이드
C. 고압산소
D. 데페록사민

## 해설

과색소침착·저혈압·저Na와 고K는 일차성 부신부전의 위기를 의심하게 한다. 수액소생과 함께 지연 없이 glucocorticoid B를 투여한다. 실제 K는5.4로 저칼륨혈증이 아니며 포도당70만으로 심한저혈당이라고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저K와 고K를 동시에 나열한 오류; 실제K5.4·저혈압/색소침착의 부신위기 B.
- https://www.endocrine.org/-/media/endocrine/files/cpg/primary-adrenal-insufficiency-cpg-resource-page-13feb18.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004312
