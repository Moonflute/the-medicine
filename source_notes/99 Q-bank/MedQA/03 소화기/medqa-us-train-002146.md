---
type: qbank
schema_version: 1
id: medqa-us-train-002146
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3e81b81f7653284631a46a2933fa32ffd5c66e36b8e79cd2a2c9a29591927c58
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "small bowel obstruction"
  - "adhesive obstruction"
  - "nasogastric decompression"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shozsnqUg7Y-Q7IeEIChTbWFsbCBCb3dlbCBPYnN0cnVjdGlvbikubWQ
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvTGFjdHVsb3NlLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 복통 평가를 위해 응급실에 내원했다. 4일 전 시작된 통증은 현재 전반적인 경련성 통증으로 변했으며 강도는 10점 만점에 6점이다. 오심이 있고 오늘 두 차례 구토했다. 마지막 배변은 3일 전이었다. 고혈압과 반복적인 변비 병력이 있다. 5년 전 천공된 십이지장궤양으로 응급 개복술을 받았다. 아버지는 65세에 대장암으로 사망했다. 40년간 매일 담배 한 갑을 피웠다. 현재 리시노프릴과 락툴로오스를 복용한다. 체온 37.6°C, 맥박 89회/분, 혈압 120/80 mmHg이다. 복부가 팽창되어 있고 가벼운 압통이 있으나 경직이나 반발통은 없다. 장음은 고음이다. 직장수지검사는 정상이다. 복부 X선 사진이 제시되어 있다. 수액 소생과 함께 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 시프로플록사신과 메트로니다졸
B. 대장내시경
C. 비위관 삽입과 장 휴식
D. 수술적 장 감압

## 해설

과거 개복술, 구토·복부팽만·변비와 고음성 장음은 유착성 소장폐색을 시사한다. 제시된 안정적 상태에서 선택지 중 비위관 감압과 금식 C가 초기 접근에 부합하며 수액·전해질 보정과 외과 평가를 병행한다. 복막염·교액·허혈 또는 보존치료 실패 시에는 수술이 필요하다. 실제 제시되지 않은 영상의 공기-액체층을 관찰했다고 서술해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정적 유착성 장폐색의 초기 NG 감압·금식 C는 유지하되 보이지 않는 X선 소견을 지어내지 않음.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6006983/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002146
