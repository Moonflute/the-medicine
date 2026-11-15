---
type: qbank
schema_version: 1
id: medqa-us-train-009393
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e1d3e00cb23ebdde643ee3a223bc10ec411c3dda57a2cc8ec474278bf73e8277
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "pulmonary tuberculosis"
  - "폐결핵"
  - "tuberculous pleural effusion"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqysO2VtSAoUHVsbW9uYXJ5IFR1YmVyY3Vsb3NpcykubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQWRlbm9zaW5lLm1k
---

# MedQA US 임상문제

## 문제

수 주째 미열과 야간발한이 있는 환자에서 한쪽 흉수가 확인됐다. 흉수는 림프구 우세 삼출액이고 ADA가 75U/L다. 뚜렷한 폐 종괴는 없으며 아직 결핵균 검사와 세포검사 결과는 나오지 않았다. 우선 의심할 원인은?

## 선택지

A. 심부전 흉수
B. 바이러스성 상기도감염
C. 간경변에 의한 흉수
D. 결핵성 흉막염

## 해설


림프구 우세 삼출액과 높은 ADA는 결핵성 흉막염을 뒷받침하지만 단독 확진 소견은 아니다. 필요하면 흉수·흉막 조직의 미생물검사와 조직검사를 통해 다른 원인과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009393 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HIV·노숙시설 노출·야간발한과 림프구 우세 고ADA 삼출성 흉수는 결핵성 흉막염/폐결핵 D에 가장 부합. ADA만의 단독 확진으로 해석하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009393
- https://www.kdca.go.kr/bbs/kdca/55/259948/download.do
- https://thorax.bmj.com/content/78/Suppl_3/s1
