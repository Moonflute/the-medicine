---
type: qbank
schema_version: 1
id: medqa-us-train-005710
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fc767e14ffc9d86297cb062e68f8f71df8ff0a72862e41260d098ec418c5c8c3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "내경동맥 박리"
  - "일과성 허혈발작"
  - "동측 호너 증후군"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
difficulty: complex
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BbHRlcGxhc2UubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 여성이 갑자기 시작된 왼쪽 목 통증과 두통으로 내원했다. 왼쪽 눈꺼풀이 약간 처지고 동공이 작다. 잠시 왼쪽 눈이 안 보이고 오른팔 힘이 빠졌다가 회복됐다. 의심되는 혈관 병변을 확인할 우선 검사는?

## 선택지

A. 경두개 도플러 단독
B. 경부 단순 X선
C. 머리·목 CT 혈관조영술
D. 뇌파검사

## 해설

편측 두경부 통증, 같은 쪽 부분 호르너 증후군, 일과성 망막·대뇌 허혈은 경부 내경동맥 박리의 단서다. CT 혈관조영술이나 MR 혈관조영술로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 두경부 통증·Horner와 일과성 동측 단안 시력소실/반대측 위약을 경동맥 박리로 연결하고 모든 급성 경동맥 폐색에 헤파린이1차라는 오류를 수정했다.
- 공식/학회 근거: https://www.ahajournals.org/doi/epdf/10.1161/STR.0000000000000457

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005710
- https://pubmed.ncbi.nlm.nih.gov/38299330/
