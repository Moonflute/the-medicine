---
type: qbank
schema_version: 1
id: medqa-us-train-004850
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:21a4fdbc427a3a22de642867ec491faeed4809cfbe420d8e2ceeec340ed320cf
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "암로디핀 유발 말초부종"
  - "칼슘통로차단제"
  - "ACE 억제제 병용"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: adverse_effect
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 여자가 암로디핀을 시작한 뒤 양쪽 발에 부종이 생겼다. 제2형 당뇨병으로 메트포르민과 리나글립틴을 복용 중이며 혈압은 약 130/90 mmHg이다. 다음 중 부종 발생 위험을 줄이는 방법은?

## 선택지

A. 에날라프릴 추가
B. 푸로세미드 추가
C. 압박 스타킹 착용
D. 니페디핀으로 변경

## 해설

Amlodipine의 세동맥 확장이 정맥측 확장보다 커지면 모세혈관압이 올라 발목부종이 생길 수 있다. A의 enalapril 병용은 이러한 부종을 완화할 수 있다. 용량 감량·약제 교체도 임상 상황에 따른 대안이다. 단순 체액과부하와 달라 loop 이뇨제가 기전을 직접 해결하지 않으며 압박스타킹이 항상 부종을 악화시킨다는 설명도 잘못이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Amlodipine 부종의 전모세혈관 확장과 ACE억제제 병용 효과를 설명하고 압박치료가 악화시킨다는 오류 제거.
- https://pubmed.ncbi.nlm.nih.gov/10679507/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004850
