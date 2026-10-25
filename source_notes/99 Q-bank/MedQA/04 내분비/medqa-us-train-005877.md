---
type: qbank
schema_version: 1
id: medqa-us-train-005877
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dee906b361b7001a34dea479590b9c7c5e3255ef56b7a2ac1b0dc2e5a53d7001
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "선천성 부신과형성"
  - "21-수산화효소 결핍"
  - "신생아 염분소실"
  - "congenital adrenal hyperplasia"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISg7LKc7ISxIOu2gOyLoCDqs7ztmJXshLHspp0gKENvbmdlbml0YWwgQWRyZW5hbCBIeXBlcnBsYXNpYSkubWQ
question_type: management
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9GbHVkcm9jb3J0aXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

체중 3,500g(7.7lb)의 여아가 임신 39주에 27세 G2P1 산모에게서 태어났다. 아프가 점수는 1분 8점, 5분 9점이다. 산모는 임신 내내 정기적인 산전진료를 받았고 흡연과 음주를 하지 않았으며 의사가 처방한 종합비타민을 복용했다. 신생아는 활발해 보인다. 체온은 37°C(98.6°F), 맥박은 분당 120회, 혈압은 55/35 mmHg이다. 분만실 검사에서 음핵비대가 보인다. 다음 날 검사에서 혈색소 12.8 g/dL, 백혈구 6,000/mm³, 혈소판 240,000/mm³, 혈청 Na⁺ 133 mEq/L, K⁺ 5.2 mEq/L, Cl⁻ 101 mEq/L, HCO₃⁻ 21 mEq/L, 요소질소 15 mg/dL, 크레아티닌 0.8 mg/dL이다. 복부와 골반 초음파에서 자궁과 난소는 정상이다. 다음 중 이 신생아 관리의 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 하이드로코르티손과 플루드로코르티손 치료
B. 에스트로겐 대체요법
C. 덱사메타손 치료
D. 스피로놀락톤 치료

## 해설

음핵비대·정상 자궁/난소와 Na저하/K상승 경향은 고전형21-hydroxylase 결핍을 시사한다. 선택지 A의 hydrocortisone·fludrocortisone 대체가 적절하며 영아에서는 Na보충과 혈압/전해질·성장 모니터링도 필요하다. 단순히 어떤 steroid라도 투여하면 된다는 뜻은 아니며 진단검사와 응급 안정화를 병행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 신생아 CAH A의 steroid를 glucocorticoid/mineralocorticoid 대체와 Na관리로 구체화.
- https://doi.org/10.1210/jc.2018-01865

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005877
