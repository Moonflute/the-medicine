---
type: qbank
schema_version: 1
id: medqa-us-train-001569
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:696dc9ed91ac52c5267d7c279434bdd5d7e62cb27454e2488b362cfbdc47cb8b
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "poststernotomy mediastinitis"
  - "surgical site infection"
related_disease_slugs:
  - MTEg7Jm46rO8L-ywveyDgSDqsJDsl7wgKFdvdW5kIEluZmVjdGlvbikubWQ
question_type: management
difficulty: complex
answer: D
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

개방 심장수술 2주 뒤 78세 남성에게 발열과 새 흉골 뒤 통증이 생겼다. 흉골 상처에서 고름이 나오고 CT에서 흉골 아래 액체 저류가 보인다. 심부 흉골창 감염이 의심될 때 적절한 치료는?

## 선택지

A. 경구 항생제와 외래 관찰
B. 피부 드레싱만 교체
C. 열이 내릴 때까지 수술을 미루고 정맥 항생제만 투여
D. 배양을 확보하고 정맥 항생제와 수술적 배농·변연절제를 병행

## 해설


흉골절개 뒤 심부 감염이나 종격동염은 항생제만으로 감염원을 충분히 제어하기 어렵다. 조기에 수술팀과 배농 및 괴사 조직 제거를 하고 배양에 따라 항생제를 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001569 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 흉골하 감염을 중격염으로 오역한 것을 종격동염으로 바로잡았다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.jtcvs.org/article/S0022522316308728/pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001569
- https://pubmed.ncbi.nlm.nih.gov/27555340/
