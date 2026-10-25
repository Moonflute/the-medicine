---
type: qbank
schema_version: 1
id: medqa-us-train-001406
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b38753042c001258e166e40cffdb3918c415d1a322f2c562e8b766672f1163a3
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "ischemic hepatitis"
  - "acetaminophen toxicity"
  - "shock liver"
question_type: mechanism
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
  - MjEg7J2R6riJ7J2Y7ZWZL-yVhOyEuO2KuOyVhOuvuOuFuO2OnCDspJHrj4UgKEFjZXRhbWlub3BoZW4gUG9pc29uaW5nKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWNldHlsY3lzdGVpbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 의식 소실로 응급실에 내원했다. 20분 전 노숙인 보호소 관리자가 아세트아미노펜 병 옆에 쓰러져 있는 것을 발견해 데려왔다. HIV, C형간염, 정맥주사 약물남용, 알코올남용, 자살 시도 및 변비 병력이 있다. 매일 메타돈을 복용하지만 항레트로바이러스 치료는 잘 따르지 않는다. 체온은 104°F (40°C), 혈압은 85/40 mmHg, 맥박은 180회/분, 호흡수는 18회/분, 산소포화도는 실내 공기에서 90%이다. 정맥 수액, N-아세틸시스테인 및 100% 산소를 시작했다. 혈액배양을 채취하고 검사실 검사를 보냈다. 광범위 항생제와 노르에피네프린을 투여했으나 저혈압과 빈맥이 지속되었다. 독성검사에서 알코올 양성이었다. 내과 병동으로 옮겨 추가 치료했고 이틀 후 활력징후가 호전되었다. 재검사 결과 헤모글로빈 11 g/dL, 헤마토크릿 30%, 백혈구 6,500/mm3(감별 정상), 혈소판 245,000/mm3, Na+ 138 mEq/L, Cl− 100 mEq/L, K+ 4.1 mEq/L, HCO3− 22 mEq/L, BUN 30 mg/dL, 포도당 145 mg/dL, 크레아티닌 1.4 mg/dL, Ca2+ 9.6 mg/dL, AST 1,440 U/L, ALT 1,350 U/L이다. 다음 중 검사실 이상을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 항생제 사용
B. 만성 바이러스 감염
C. 이전 저혈압
D. 독성 간 대사산물

## 해설

장시간 심한 저혈압·쇼크 후 이틀 내 AST/ALT가 1,000 U/L 이상으로 크게 오른 경과는 저관류성/허혈성 간염(C)에 합당하다. 만성 HCV 감염만으로 급성 급상승을 설명하기는 어렵다. 다만 아세트아미노펜 병 옆에서 발견된 노출력도 있어 실제 혈중 농도·섭취 시점·INR·LDH 및 효소 추세를 확인해야 한다. NAC 투여 사실이나 알코올 양성만으로 아세트아미노펜 독성을 배제하지 않으며, 여기서는 심한 선행 쇼크를 근거로 한 가장 가능성 높은 원인 선택이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 저관류 후 AST/ALT 급증은 허혈성 간손상 C를 지지하지만 옆에 있던 아세트아미노펜 병력만으로 독성 가능성을 확정 배제할 수 없음을 명시했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001406
