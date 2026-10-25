---
type: qbank
schema_version: 1
id: medqa-us-train-009311
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16f060a657cb3d3159f18e7387224d98a564af6e609628961ddab64157342901
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "ureteral stone"
  - "요관결석"
  - "renal colic"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOyEnSAoVXJpbmFyeSB0cmFjdCBzdG9uZSkubWQ
question_type: investigation
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

신장결석 병력이 있는 48세 남자가 급성으로 시작된 왼쪽 옆구리 통증으로 내원했다. 4시간 전 갑자기 시작되어 점점 악화되었고 매우 심하고 날카롭게 왼쪽 옆구리에 국한되어 있다. 발열, 오한, 오심, 구토, 배뇨곤란은 없다. 4년 전 신장결석을 진단받아 체외충격파 쇄석술을 받았다. 통증약에 알레르기가 많지만 이 통증이 있을 때마다 받는 약이 하나 있고 ‘D’로 시작한다고 한다. 열은 없고 활력징후는 안정적이다. 몸부림치며 신음하고 왼쪽 늑골척추각에 심한 압통이 있다. 소변검사를 포함한 검사실 결과는 정상이다. 정맥 수액을 투여했다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 병동에 입원시켜 정맥 딜라우디드 환자조절진통
B. 통증 조절을 위해 이부프로펜과 아세트아미노펜 투여
C. 딜라우디드 처방 후 3개월 뒤 추적
D. 복부와 골반 비조영 CT

## 해설

급성 편측 옆구리 통증과 늑골척추각 압통, 결석 과거력은 요로결석을 의심하게 한다. 소변검사에 혈뇨가 없더라도 결석이 배제되지는 않는다. 제시된 보기 중 결석의 유무·위치·크기와 폐색 여부를 평가할 수 있는 검사는 D, 복부·골반 비조영 CT이다.

영상검사와 별개로 적절한 진통도 병행해야 한다. 특정 진통제를 요구한다는 사실만으로 꾀병이나 약물추구로 단정해서는 안 되며, 확인 없이 오피오이드만 처방하고 수개월 뒤 추적하는 것도 적절하지 않다. 플루오로퀴놀론 건병증은 이 사례의 옆구리 통증을 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 플루오로퀴놀론 건병증 해설을 급성 옆구리 통증의 요로결석 진단 영상으로 교체. 원정답 D 유지; 약물요구만으로 진단을 단정하거나 진통을 배제하지 않도록 수정.
- https://uroweb.org/guidelines/urolithiasis/chapter/guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009311
