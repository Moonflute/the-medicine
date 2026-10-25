---
type: qbank
schema_version: 1
id: medqa-us-validation-001143
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:99396d34543dd1ffa52dddf9e59b1e2d2e734c60bb5caca215a1268da8049bec
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "혼합결합조직병"
  - "폐동맥고혈압"
  - "레이노 현상"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqzoO2YiOyVlSAoUHVsbW9uYXJ5IEh5cGVydGVuc2lvbikubWQ
question_type: investigation
difficulty: complex
answer: A
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
---

# MedQA US 임상문제

## 문제

32세 여성이 6개월간 손가락의 통증, 저림과 변색으로 진료를 받으러 왔다. 추위에 노출되면 손가락 끝이 하얗거나 파랗게 변한다. 얼굴에 창백한 나비 모양 발진과 경부·액와 림프절병증, 반짝이는 경피증성 손가락이 있고 항핵항체와 항U1 리보핵단백 항체가 양성이다. 혼합결합조직병으로 진단되었다. 가장 적절한 다음 처치는?

## 선택지

A. 심초음파
B. 관절천자
C. 골수이식
D. 상부위장관 조영술

## 해설


MCTD는 전신경화증과 같지 않지만 Raynaud와 sclerodactyly 같은 scleroderma spectrum 특징이 있으면 PAH 위험을 평가한다. 보기 중 transthoracic echocardiography A가 비침습적 평가로 적절하며 PFT/DLCO와 BNP 등도 함께 고려한다. Echo는 폐고혈압 가능성을 추정하는 검사이고 필요 시 우심도자검사로 혈역학적 확진을 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001143 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MCTD=SSc 동일시와 echo가확진·항상최민감이라는 오류 교정. scleroderma spectrum PAH 평가 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pubmed.ncbi.nlm.nih.gov/24022584/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001143
