---
type: qbank
schema_version: 1
id: medqa-us-train-001810
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f973694a07b795f469a0fa3c3298a16fe6a47dd0a2d57c151eb48bd0207eba8
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "COPD exacerbation"
  - "pneumonia"
  - "chest radiography"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
  - MDIg7Zi47Z2h6riwL0NPUETsnZgg6riJ7ISxIOyVhe2ZlCAoQWN1dGUgRXhhY2VyYmF0aW9uIG9mIENPUEQpLm1k
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 평소 COPD로 치료받다가 갑자기 숨이 차고 열이 나서 내원했다. 체온은 38.6°C이며 새로 생긴 오른쪽 폐기저부 수포음이 들린다. 산소포화도와 혈압은 안정적이다. 단순 악화 외에 폐렴을 평가할 첫 영상은?

## 선택지

A. 흉부 X선
B. 흉부 MRI
C. 폐동맥 CT 혈관조영술
D. 흉부 영상 없이 폐활량검사만 시행

## 해설


COPD 환자라도 고열과 국소 청진 이상이 생기면 폐렴 등 다른 원인을 확인해야 한다. 흉부 X선이 초기 검사이며, 결과와 임상상에 따라 추가 영상을 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: COPD에서 고열·객담/국소폐음 악화는 폐렴 감별 필요. 초기 CXR A가 CT/기관지유발검사보다 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001810
- https://new.lungkorea.org/board/guide/view/13792
