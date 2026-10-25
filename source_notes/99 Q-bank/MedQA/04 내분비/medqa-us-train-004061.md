---
type: qbank
schema_version: 1
id: medqa-us-train-004061
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6fd1f7de31aea2d6b8bdd093d461fddfe0758d3c3a26bd0d9bdf0237c92028a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 케톤산증"
  - "뇌부종"
  - "시신경유두부종"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: 임상증례 객관식
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

제1형 당뇨병 병력이 있는 19세 남자가 혈당 492 mg/dL 평가를 위해 응급실에 왔다. 혈청 중탄산염 13 mEq/L, 혈청 나트륨 122 mEq/L, 케톤뇨가 확인되었고 동맥혈가스 pH는 6.9였다. 입원하여 중탄산염을 투여한 후 인슐린 지속주입과 정맥 수액을 시작했다. 7시간 후 간호사가 회진 중 환자가 혼란스러워하며 심한 두통을 호소하는 것을 발견했다. 나트륨 수치는 변하지 않았지만 혈당은 호전되었다. 체온 36.6°C, 맥박 50회/분, 호흡수 13회/분으로 불규칙하고 혈압 177/95 mmHg이다. 이 환자에서 예상되는 추가 검사 소견은 무엇인가?

## 선택지

A. 동공 수축
B. 췌장염
C. 시신경유두부종
D. 말초부종

## 해설

새 심한두통·혼란·서맥·고혈압·불규칙호흡은 DKA 관련 뇌부종/뇌손상과 두개내압 상승의 응급 경고이다. 선택지 중 papilledema C가 가능하지만 초기에는 없을 수 있다. 즉시 임상적으로 대응하며 안저/영상확인을 기다려 치료를 지연해서는 안 된다. Bicarbonate와 급격한 삼투변화의 위험도 검토하며 일률적인 bicarbonate 사용을 정당화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DKA치료 후 뇌손상/Cushing반응 C는 유지. 유두부종 확인을 기다리며 처치를 지연하지 않도록 보완.
- https://diabetesjournals.org/care/article/47/8/1257/156811/Hyperglycemic-Crises-in-Adults-With-Diabetes-A

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004061
