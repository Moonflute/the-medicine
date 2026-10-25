---
type: qbank
schema_version: 1
id: medqa-us-train-002942
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:22cb02e33fd8162f946d32e39f9a37d6dcf90320229a7918a902db1ae20a6f40
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "warfarin-associated coagulopathy"
  - "bowel obstruction"
  - "elevated INR"
  - "preoperative reversal"
related_disease_slugs:
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

73세 여성이 복통, 오심, 구토로 응급실에 내원했다. 이틀 전까지 평소 건강했으나 복통이 시작된 뒤 경구 섭취를 못 했다. 고혈압, 울혈성 심부전, 심방세동, 골관절염이 있고 1년 전 난소 종괴로 탐색적 개복술을 받아 점액성 낭선종을 절제했다. 아스피린, 니페디핀, 리시노프릴, 메토프롤롤, 와파린, 필요 시 타이레놀을 복용한다. 아파 보이고 혼란스러우며 체온 37.9°C, 혈압 102/60 mmHg, 맥박 불규칙한 110회/분, 호흡수 16회/분이다. 복부는 전반적으로 압통이 있고 타진에서 고막음, 장음은 항진되어 있다. 혈색소 10.2 g/dL, 백혈구 14,000/mm³, 혈소판 130,000/mm³, PT 38초, INR 3.2, 크레아티닌 2.3 mg/dL, 젖산 2.8 mEq/L이다. 복부 X선에서 중앙에 가스가 찬 확장된 장 고리가 여러 개 보이고 횡격막 아래 자유공기는 없다. 비위관을 삽입하고 정맥 수액과 경험적 항생제를 시작했으며 응급 탐색적 개복술을 계획했다. 다음 중 관리에서 가장 적절한 다음 단계는?

## 선택지

A. 프로타민 황산염 투여
B. 신선동결혈장과 비타민 K 투여
C. 혈소판 농축액 투여
D. 재조합 활성화 제VII인자 투여

## 해설

응급 개복술을 앞둔 warfarin 복용자의 INR3.2는 신속한 역전이 필요하다. 현행 접근은 정맥 vitamin K와 4F-PCC가 우선이며, PCC를 이용할 수 없으면 FFP를 사용한다. 제시된 선택지 중에는 B가 적절하다. Vitamin K만으로 즉각 정상화되지는 않는다. Protamine은 주로 heparin을 역전하는 약물이지 항혈소판제의 길항제가 아니며 혈소판130,000만으로 혈소판 수혈을 선택하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 응급수술 VKA 역전의 선택지 B는 유지하되 4F-PCC 우선·대체 FFP 및 protamine/heparin 기전을 명확히.
- https://www.jacc.org/doi/10.1016/j.jacc.2020.04.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002942
