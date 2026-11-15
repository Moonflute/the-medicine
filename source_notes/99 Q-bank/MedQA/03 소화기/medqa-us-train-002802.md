---
type: qbank
schema_version: 1
id: medqa-us-train-002802
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7bbb5a843e4c17153a061c458f2bc1a6f7c9ed0bdbf01b183ac5560d3bacbbdb
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute colonic pseudo-obstruction"
  - "Ogilvie syndrome"
  - "cecal dilation"
  - "peritonitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQubWQ
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

심장수술 뒤 복부팽만이 생겼다. CT에서 맹장 직경은 11 cm이고 기계적 폐색이나 허혈·천공이 없다. 활력은 안정적이고 복막 자극 징후는 없다. 금식, 감압, 전해질 교정을 72시간 했는데도 대장이 줄지 않았다. 다음 처치는?

## 선택지

A. 경구 자극성 하제 증량
B. 즉시 우측 결장절제술
C. 심전도 감시하 정맥 네오스티그민
D. 아무 치료 없이 즉시 식사 재개

## 해설

합병증 없는 급성 대장 가성폐색이 보존치료로 풀리지 않으면 네오스티그민으로 감압을 시도할 수 있다. 서맥에 대비해 심전도를 감시하고 아트로핀을 준비한다. 약이 금기이거나 실패하면 내시경 감압을 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Ogilvie에서 수술 D의 결정적 근거를 단순14cm가 아니라 고열·반발통/방어의 허혈·천공 의심으로 명시.
- https://www.asge.org/home/resources/publications/guidelines/american-society-for-gastrointestinal-endoscopy-guideline-on-the-role-of-endoscopy-in-the-management-of-acute-colonic-pseudo-obstruction-and-colonic-volvulus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002802
- https://doi.org/10.1097/DCR.0000000000002159
