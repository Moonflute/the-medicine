---
type: qbank
schema_version: 1
id: medqa-us-train-009208
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4d14a15fb321ab0dae37e6f98b4b89737f246c67cdd700f0d2a0be008e51ddb0
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "iatrogenic dehydration"
  - "의인성 탈수"
  - "furosemide-induced hypovolemia"
  - "Dehydration"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug7IOd7JWEIOydvOyLnOyXtCAoTmVvbmF0YWwgVHJhbnNpZW50IEZldmVyKS5tZA
question_type: diagnosis
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

급성 비보상성 심부전으로 관상동맥치료실에서 응급치료를 받은 지 2일 된 68세 남자가 심계항진이 발생했다. 10년간 허혈성 심장질환과 울혈성 심부전이 있다. 푸로세미드 정맥주사와 카르베딜롤, 아스피린, 리시노프릴, 니트로글리세린, 모르핀을 복용 중이며 정맥 수액은 받지 않았다. 혈압 90/70 mmHg, 맥박 98회/분, 호흡수 18회/분, 체온 36.8°C이다. 불안해 보이고 폐 청진은 깨끗하다. 심장 진찰은 초기와 변화가 없으며 말초부종은 감소했다. 등이나 천골 부위 부종은 없고 소변량은 12시간에 1.5 L이다. 연속 심전도에서 동적 변화가 없다. BUN 46 mg/dL, 크레아티닌 1.9 mg/dL, Na⁺ 135, K⁺ 3.1 mEq/L이며 실내 공기 혈액가스 pH 7.50, PCO₂ 44, PO₂ 88, HCO₃⁻ 30 mmHg이다. 현재 상태를 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 심부전 악화
B. 과도한 베타 아드레날린 차단
C. 의인성 탈수
D. 과도한 진정

## 해설

울혈 호전 뒤 저혈압, 저칼륨혈증, 알칼리혈증과 높은 BUN/Cr 비율은 과도한 이뇨에 따른 혈관내 용적 감소(C)를 시사한다. 루프이뇨제는 염소와 칼륨 손실을 동반한 대사성 알칼리증을 일으킬 수 있다. 심부전 환자는 정맥 수액을 받지 않았다는 사실만으로 탈수인 것은 아니며, 체액 상태와 신기능을 재평가해 치료를 조정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 울혈 호전 후 이뇨제 관련 혈관내 용적 감소를 설명하되 단순히 IV 수액이 없었다는 이유로 탈수를 진단하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009208
