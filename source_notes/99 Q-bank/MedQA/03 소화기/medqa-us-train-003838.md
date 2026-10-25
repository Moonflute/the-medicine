---
type: qbank
schema_version: 1
id: medqa-us-train-003838
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2623b1965357103caada9f8e1b1107307c3d2a932501b60cee28200e150227ae
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "appendiceal abscess"
  - "perforated appendicitis"
  - "CT-guided drainage"
  - "interval appendectomy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_stqnsiJjsl7wgKEFwcGVuZGljaXRpcykubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 일주일간 악화된 발열과 오른쪽 아랫배 통증으로 내원했다. CT에서 대변석으로 충수경부가 막혀 있고 충수 끝에 불규칙한 벽의 국소 액체저류와 주변 지방 침윤이 보였다. 정맥 수액을 시작했다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 항생제와 CT 유도 배액
B. 항생제와 간격을 둔 충수절제술
C. 12시간 이내 충수절제술
D. 조기 수술적 배액과 간격 충수절제술

## 해설

국소화된 충수주위 농양에서 항생제와 접근 가능한 농양의 영상유도 배액 A는 합리적 초기 접근이다. 수술도 전문성·경과에 따라 선택할 수 있으며 악화/복막염 시 지연하지 않는다. 72세에서는 보존치료 후 충수/대장 종양 가능성을 평가하고 추적영상·대장평가 및 간격 충수절제 계획을 전문적으로 결정해야 한다. 단순히 모든 연령에서 추적 없이 선택적 치료만 한다는 뜻이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정적 국소 충수농양 A는 가능. 전해제 오기 제거와 고령의 추적 종양평가/interval 치료 필요성 명시.
- https://doi.org/10.1001/jamasurg.2025.6218

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003838
