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

72세 남성이 일주일째 발열과 오른쪽 아랫배 통증으로 왔다. CT에서 천공된 충수 옆에 접근 가능한 5 cm 농양이 있다. 범복막염은 없고 혈역학적으로 안정적이지만 현재 수술 위험이 높아 초기 비수술 치료를 선택했다. 가장 적절한 처치는?

## 선택지

A. 정맥 항생제와 영상 유도 경피 배액
B. 항생제 없이 경피 배액만 시행
C. 일단 귀가시킨 뒤 증상이 지속될 때만 재평가
D. 즉시 대장내시경으로 농양 확인

## 해설

국소 충수주위 농양을 비수술적으로 관리하기로 했을 때 항생제와 배액을 시행할 수 있다. 악화하면 수술 여부를 재평가하고, 고령에서는 호전 뒤에도 충수나 대장의 종양이 가려져 있지 않은지 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정적 국소 충수농양 A는 가능. 전해제 오기 제거와 고령의 추적 종양평가/interval 치료 필요성 명시.
- https://doi.org/10.1001/jamasurg.2025.6218

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003838
