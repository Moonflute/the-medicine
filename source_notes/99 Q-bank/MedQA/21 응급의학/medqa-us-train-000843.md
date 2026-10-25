---
type: qbank
schema_version: 1
id: medqa-us-train-000843
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cc567bdc988b60f43b25ffc24911bd006ef5c328eff96be89faf098c49dd5af1
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "orbital cellulitis"
  - "sinusitis"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-yXsOyhsOyngeyXvCAoQ2VsbHVsaXRpcykubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67aA67mE64-Z7Je8IChTaW51c2l0aXMpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGhlb3BoeWxsaW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여성이 1일 전부터 시작된 복시와 급격히 악화되는 우측 눈의 통증 및 부종으로 응급실에 내원했다. 환자는 1주일 전 상기도 감염을 앓은 후 코막힘, 재발성 두통, 화농성 콧물이 있었다. 호흡기 감염으로 항생제를 복용했으나 끝까지 복용하지 않았다. 환자는 테오필린(theophylline), 흡입형 β-아드레날린 작용제, 코르티코스테로이드로 치료 중인 천식이 있다. 환자는 심한 고통을 겪고 있는 것으로 보인다. 체온은 38.5°C, 맥박은 100회/분, 혈압은 130/80 mmHg이다. 우측 눈의 안과적 검사에서 안구 돌출과 눈꺼풀의 미만성 부종, 홍반, 압통이 관찰된다. 우측 눈의 움직임은 모든 방향에서 제한적이며 통증이 있다. 동공은 양측이 동일하며 빛에 반응한다. 우측 뺨의 압통과 우측 비강 내 화농성 콧물이 관찰된다. 좌측 눈은 이상이 없다. 검사실 검사에서 백혈구 수는 12,000/mm3이다. 이 환자에게 정맥 항생제를 투여해야 하는 가장 강력한 근거는 무엇인가?

## 선택지

A. 안구 통증의 악화
B. 백혈구 증가증
C. 안구 운동 시 통증
D. 화농성 콧물 및 우측 뺨의 압통

## 해설

안구운동 시 통증과 운동제한(C), 안구돌출·복시·발열은 단순 격막앞 눈꺼풀 감염보다 안와 봉와직염(격막뒤 감염)을 시사한다. 시력 상실·두개내 파급 위험이 있어 입원, 정맥 항생제와 긴급 안과·이비인후과 평가가 필요하다. 안와농양은 동반 합병증으로 영상 등으로 확인하는 것이며 봉와직염과 같은 말이 아니다. 백혈구 증가나 부비동염 소견만보다 안구운동 통증이 안와 침범의 직접적 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. orbital cellulitis를 안와농양과 동의어로 쓴 오류를 교정했다. 안구운동 통증 C는 격막뒤 감염을 시사하는 정맥 항생제 적응증이다.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/Periorbital_and_orbital_cellulitis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000843
