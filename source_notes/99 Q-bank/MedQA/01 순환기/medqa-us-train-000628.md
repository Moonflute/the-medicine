---
type: qbank
schema_version: 1
id: medqa-us-train-000628
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8093b3c650e36d90122a5e7edfb19da6a6d061537e5ac4b41bdafea294b7451f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "chest pain"
  - "hypertension"
  - "type 2 diabetes mellitus"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: mechanism
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 2주 전부터 시작된 흉통으로 내원하였다. 흉통은 빠른 걸음으로 2블록을 걸은 후 시작된다. 통증은 어디로도 방사되지 않으며 위치를 특정하기 어렵다. 환자는 지난 6개월 동안 유사한 증상을 겪었으며 설하 니트로글리세린(sublingual nitroglycerin)을 처방받았고, 이는 통증 완화에 도움이 되었다. 환자는 고혈압과 제2형 당뇨병이 있다. 매일 리시노프릴(lisinopril)과 메트포르민(metformin)을 복용한다. 환자의 상태는 양호해 보인다. 체온은 37°C, 맥박은 분당 75회, 혈압은 145/90 mm Hg이다. 진찰상 심장 박동은 규칙적이다. S1과 S2는 정상이다. 폐 청진상 깨끗하다. 말초 부종은 없다. 이 환자의 흉통이 호전되는 기전으로 가장 가능성이 높은 것은 무엇인가?

## 선택지

A. 말초 정맥 내 혈액 저류(venous pooling) 감소
B. 관상동맥 혈관 확장
C. 죽상경화반 안정성 증가
D. 이완기말 압력 감소

## 해설

안정형 운동유발 협심증에서 니트로글리세린은 주로 정맥 용량혈관을 확장하여 말초 정맥 내 혈액 저류를 늘리고 정맥환류를 줄인다. 이로써 좌심실 이완기말 압력/전부하(D)와 벽장력이 감소하여 심근 산소 요구량이 줄어든다. 관상동맥 확장도 가능하지만 이 사례의 주된 완화 기전은 전부하 감소다. 선지 A는 말초 정맥 혈액 저류의 '감소'이므로 실제 작용과 반대다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. B 관상동맥확장만 설명한 해설을 정맥 용량혈관 확장→전부하/LVEDP 감소로 교체. A venous pooling을 울혈로 오역하여 의미가 바뀐 선지도 원뜻으로 교정.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fa789d65-9407-4965-bd06-4457444b42be&version=10

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000628
