---
type: qbank
schema_version: 1
id: medqa-us-train-009140
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f04e5c0687599deec0f1b248ff56029a4f0b4442560dfa39b78ee80a20c1038e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acetaminophen toxicity"
  - "아세트아미노펜 독성"
  - "acute liver failure"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_soITqsqnshLEg6rCE7Je8IChGdWxtaW5hbnQgSGVwYXRpdGlzKS5tZA
  - MjEg7J2R6riJ7J2Y7ZWZL-yVhOyEuO2KuOyVhOuvuOuFuO2OnCDspJHrj4UgKEFjZXRhbWlub3BoZW4gUG9pc29uaW5nKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
---

# MedQA US 임상문제

## 문제

57세 남자가 피로로 응급실에 내원했다. 증상은 어제 시작되어 계속 악화되고 있다. 지난주에 7파운드의 체중이 줄었고 전신이 가렵다고 한다. 과거력으로 알코올 사용장애, 비만, 천식, 정맥주사 약물 사용이 있다. 현재 메트포르민, 아토르바스타틴, 알부테롤, 플루티카손을 복용한다. 최근 스트레스 때문에 평소보다 담배와 술을 더 많이 피우고 마신다고 한다. 체온 98.7°F(37.1°C), 혈압 130/75 mmHg, 맥박 90회/분, 호흡수 15회/분, 실내 공기 산소포화도 98%이다. 아픈 모습이며 피부가 노랗다. 복부 진찰에서 우상복부 압통이 있다. 심폐 진찰은 정상이다. 검사에서 혈색소 14 g/dL, 헤마토크릿 42%, 백혈구 5,500/mm³(감별 정상), 혈소판 70,000/mm³, PTT 92초, PT 42초, AST 1110 U/L, ALT 990 U/L이다. 이 환자의 병력에서 가장 가능성이 높은 내용은 무엇인가?

## 선택지

A. 심부정맥혈전증에 대한 적절한 급성 치료
B. 적절한 수술 후 관리를 받는 인공판막
C. 최근 겐타마이신 치료
D. 아세트아미노펜으로 치료한 심한 편두통

## 해설


정답 D. 선택지 중 acetaminophen은 과량 복용 시 심한 간세포 손상과 응고장애를 일으킬 수 있다. 따라서 편두통에 복용한 약이 이 약일 가능성을 묻는 출제 의도에 부합한다. 다만 복용량·시점·약물 농도가 없어 acetaminophen 중독이 확진된 것은 아니며, 바이러스성 간염 등도 평가해야 한다. PT 연장은 중증 간손상 신호이나 간성뇌병증이 제시되지 않아 이 정보만으로 급성간부전을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009140 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 약물 선택지에서 acetaminophen이 가능한 간독성 노출이지만 복용량·농도·뇌병증 없이 독성 또는 급성간부전 확진하지 않도록 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.aasld.org/sites/default/files/2022-07/AcuteLiverFailureUpdate201journalformat1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009140
