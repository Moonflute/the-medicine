---
type: qbank
schema_version: 1
id: medqa-us-train-003538
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bc779c4238838db5bf07afe68b2e4a4da526fdcabb42abc60269509251c59617
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "sigmoid volvulus"
  - "bowel obstruction"
  - "peritonitis or ischemia"
  - "emergency laparotomy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtazrtojssL3snpAg6rys7J6EIChTaWdtb2lkIFZvbHZ1bHVzKS5tZA
  - MTEg7Jm46rO8L-yepSDtj5Dsg4kgKEJvd2VsIE9ic3RydWN0aW9uKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

76세 여성이 배가 심하게 부풀고 변과 가스가 나오지 않아 왔다. CT에서 구불결장 염전이 확인됐다. 혈압과 관류는 안정적이며 복막 자극, 장허혈 또는 천공 소견은 없다. 첫 감압 방법은?

## 선택지

A. 경구 하제 투여
B. 즉시 전결장절제술
C. 비위관 삽입만 시행
D. 굴곡 내시경으로 염전 정복과 감압

## 해설

허혈이나 천공이 없는 구불결장 염전은 내시경으로 먼저 풀어 감압한다. 정복에 실패하거나 괴사·천공이 있으면 응급 수술이 필요하다. 정복에 성공해도 재발 위험 때문에 같은 입원 중 근본 수술을 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 회전성 결장염이라는 잘못된 진단명을 장염전/허혈로 교정; 영상누락에도 진행쇼크·젖산산증은 수술평가 B 근거.
- https://www.asge.org/home/resources/publications/guidelines/american-society-for-gastrointestinal-endoscopy-guideline-on-the-role-of-endoscopy-in-the-management-of-acute-colonic-pseudo-obstruction-and-colonic-volvulus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003538
- https://doi.org/10.1186/s13017-023-00502-x
