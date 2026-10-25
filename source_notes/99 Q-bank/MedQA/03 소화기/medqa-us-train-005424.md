---
type: qbank
schema_version: 1
id: medqa-us-train-005424
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bc1c9a77b02e969648aa577bb072a7f568f04e1c8e041d4eb73e3b4590f16f38
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "독성 거대결장"
  - "중증 궤양성 대장염"
  - "정맥 코르티코스테로이드"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
question_type: management
difficulty: standard
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
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

궤양성 대장염 병력이 있는 53세 여자가 심한 악화로 응급실에 왔다. 혈성 설사, 발열, 심한 복부팽만과 고막음이 있고 KUB에서 결장이 현저히 확장되어 있으며 CT에서 하행결장과 S상결장이 확장되었지만 천공은 없다. 다음 중 가장 적절한 처치는?

## 선택지

A. 경구 프레드니손
B. 정맥 하이드로코르티손
C. 정맥 메토클로프라미드
D. 정맥 온단세트론

## 해설

전신독성과 현저한 결장확장의 UC 악화는 독성거대결장을 의심해 입원·관찰과 IV hydrocortisone B 등을 시행한다. 정상 혈압으로 배제되지 않는다. 감염평가·수액/전해질관리·조기 외과협진이 필요하며 악화/천공/불응시 수술평가를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 독성거대결장 B IV steroid는 유지하되 쇼크가 필수라는 설명과 단독치료 축소 교정.
- https://doi.org/10.14309/ajg.0000000000003463

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005424
