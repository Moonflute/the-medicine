---
type: qbank
schema_version: 1
id: medqa-us-train-001995
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fa60a3c6e31f35290bd8407a14fcd996c723a38d877bdb40845832d37b2e98bd
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "diverticular bleeding"
  - "painless hematochezia"
  - "lower gastrointestinal bleeding"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6Qg7Lac7ZiIIChEaXZlcnRpY3VsYXIgQmxlZWRpbmcpLm1k
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 통증 없이 변기에 많은 선홍색 피가 보여 응급실에 왔다. 당뇨병, 비만, 고혈압, 당뇨신병증 등 병력이 있고 활력징후는 안정적이며 복부는 비만하지만 압통이 없다. 다음 중 적절한 치료는 무엇인가?

## 선택지

A. 동정맥기형 소작
B. 정맥 수액과 금식
C. 금식, ciprofloxacin과 metronidazole
D. 저분화 조직의 수술적 절제

## 해설

고령 환자에서 통증 없이 발생한 다량의 선홍색 혈변은 게실출혈 등 하부 위장관 출혈을 의심하게 한다. 보기 중 초기 관리로 적절한 것은 B, 정맥 수액과 금식이며 출혈량과 혈역학을 평가하면서 필요량에 맞추어 소생한다. 활력징후가 안정적이어도 출혈 경과와 혈색소 등을 관찰하고 원인 검사를 진행해야 한다.

게실출혈은 염증성 게실염과 다르므로 발열·복통 등 감염 단서 없이 시프로플록사신과 메트로니다졸을 일률적으로 투여하지 않는다. 혈관이형성 병변 소작이나 수술은 해당 원인과 적응증이 확인된 뒤 선택하며, 초기 수액·금식이 원인 검사와 지혈을 대체하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: B 정답인데 게실출혈에 항생제를 권한 모순을 교정. 원정답 B 유지, 초기 안정화와 원인 규명/지혈의 후속 단계 구별.
- https://www.giejournal.org/article/S0016-5107%2826%2906857-4/fulltext
- https://gi.org/patients/topics/lower-gi-bleeding/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001995
