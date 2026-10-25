---
type: qbank
schema_version: 1
id: medqa-us-train-003865
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b9aa0695974a1862fa00f3eec8a66be405226879b9dda7214e6cd98728011537
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "aortic dissection"
  - "acute aortic regurgitation"
  - "pulse deficit"
  - "migrating chest pain"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDsl63rpZggKEFvcnRpYyBSZWd1cmdpdGF0aW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

55세 남성이 휴식 중 갑자기 발생한 앞가슴의 심한 이동성 흉통, 호흡곤란, 발한으로 내원했다. 오른쪽 흉골연에서 고음의 이완기 잡음이 들리고 양쪽 대퇴맥박이 감소했다. 가장 가능성 높은 진단은?

## 선택지

A. 폐색전증
B. 대동맥 박리
C. 자발성 기흉
D. 유두근 파열

## 해설


갑작스러운 이동성 흉통, 호흡곤란, 전신성 맥박 감소는 급성 대동맥 박리와 동반된 급성 대동맥 역류를 시사한다. 폐색전증은 호흡곤란을 일으키지만 흉통이 이동성이고 맥박 저하가 특징은 아니다. 따라서 가장 가능성 높은 진단은 대동맥 박리이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 갑작스러운 이동성 흉통·새 AR양상·대퇴맥박 저하는 대동맥박리 B.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003865
