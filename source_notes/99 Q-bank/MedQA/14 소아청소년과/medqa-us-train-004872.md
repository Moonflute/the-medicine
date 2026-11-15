---
type: qbank
schema_version: 1
id: medqa-us-train-004872
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:76b38af0b69bc05c659c343a974c5dcf4529f3a24567ccf7ae6484b4d7dc4113
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "태변성 장폐색"
  - "낭성섬유증"
  - "가스트로그라핀 관장"
question_type: management
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만삭 신생아가 생후 2일이 지나도 태변을 보지 못했고, 복부가 불러오며 녹색으로 토한다. 영상에서 말단 회장의 농축 태변과 작은 대장이 보인다. 천공·염전·복막염 소견은 없으며 위 감압과 정맥 수액을 시작했다. 다음 치료는?

## 선택지

A. 글리세린 좌약을 주고 수유를 재개한다
B. 대장내시경으로 태변을 제거한다
C. 합병증이 없어도 즉시 개복한다
D. 소아외과와 협의해 투시하 수용성 조영제 관장을 한다

## 해설

합병증 없는 태변성 장폐색에는 전문팀이 수용성 조영제 관장으로 정복을 시도할 수 있다. 실패하거나 천공·염전 등이 있으면 수술을 검토하고, 안정화 뒤 낭성섬유증도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 태변성 장폐색을 메가돌린으로 오역한 해설을 교체.
- https://gravitas.acr.org/PPTS/DownloadPreviewDocument?DocId=181
- https://www.rch.org.au/uploadedfiles/main/content/respmed/handbook.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004872
- https://pubmed.ncbi.nlm.nih.gov/42372757/
