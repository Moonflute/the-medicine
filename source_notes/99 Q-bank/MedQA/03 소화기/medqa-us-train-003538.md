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
answer: B
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

76세 여성이 요양시설 방에서 반응 없이 발견되어 응급실로 이송되었다. 복부가 심하게 팽창되어 있고 타진에서 고막음이 났으며 젖산산증이 있었다. 정맥 수액과 비위관 감압을 시작했지만 1시간 후 혈압은 75/44 mmHg, 맥박은 140회/분으로 악화되었다. 기도 확보를 위해 삽관한 상태이다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 레보플록사신과 메트로니다졸 치료
B. 즉시 개복술과 수술적 치료
C. 공기 관장
D. S상결장경으로 정복을 시도하고 직장관을 삽입

## 해설

심한 복부팽만과 젖산산증에 소생 후에도 악화되는 쇼크는 장폐색에 동반한 허혈·괴사/천공 등 수술적 응급을 의심하게 하므로 즉각적 개복술·외과적 치료 B가 적절하다. 영상이 없어 구체적 염전 위치를 확정할 수는 없으나 불안정한 환자에서 단순 내시경 정복이나 관장으로 지연하지 않는다. 회전성 결장염은 올바른 진단명이 아니며 장염전과 구분해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 회전성 결장염이라는 잘못된 진단명을 장염전/허혈로 교정; 영상누락에도 진행쇼크·젖산산증은 수술평가 B 근거.
- https://www.asge.org/home/resources/publications/guidelines/american-society-for-gastrointestinal-endoscopy-guideline-on-the-role-of-endoscopy-in-the-management-of-acute-colonic-pseudo-obstruction-and-colonic-volvulus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003538
