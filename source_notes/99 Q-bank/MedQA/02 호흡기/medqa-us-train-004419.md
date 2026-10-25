---
type: qbank
schema_version: 1
id: medqa-us-train-004419
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3c80890c01a05248149516d135fe9e7b5e88ad12bba9e01ffaf0593874e53cf9
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐농양"
  - "흡인성 폐렴"
  - "혐기성 세균 감염"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDrho3slpEgKEx1bmcgQWJzY2VzcykubWQ
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

40세 남성이 6주 동안 점점 심해지는 호흡곤란, 피로 및 발열로 내원했다. 4주 동안 악취 나는 가래를 동반한 기침이 있었다. 지난 6개월 동안 알코올 중독으로 두 번 입원했다. 고혈압과 우울증이 있고, 20년 동안 매일 담배 한 갑을 피웠으며 매일 알코올음료 6잔을 마신다. 현재 라미프릴과 플루옥세틴을 복용한다. 영양실조로 보인다. 키는 185cm (6피트 1인치), 체중은 65.7kg (145lb), BMI는 19.1kg/m2이다. 체온은 38.3°C (100.9°F), 맥박은 분당 118회, 호흡수는 분당 24회, 혈압은 147/96 mm Hg이다. 실내 공기에서 산소포화도는 94%이다. 흉부 진찰에서 오른쪽 상폐야의 타진음이 둔하다. 흉부 X선에서 오른쪽 상엽에 공기-액체 층이 있는 폐강과 주변 침윤이 보인다. 다음 중 관리에서 가장 적절한 단계는 무엇인가?

## 선택지

A. 기관지경검사와 병변 배액
B. 객담 배양
C. 메트로니다졸 치료
D. 클린다마이신 치료

## 해설

음주/흡인위험, 악취객담·공기액체층의 폐농양은 구강세균을 포함한 혼합감염을 시사한다. 선택지 중 clindamycin D는 혐기균과 구강연쇄상구균을 포괄하는 치료대안이나 C.difficile 위험 등으로 βlactam/βlactamase inhibitor가 흔히 선호된다. Klebsiella는 혐기균도 아니고 clindamycin으로 적절히 치료되는 균도 아니다. Metronidazole 단독은 혼합 구강균을 충분히 덮지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Klebsiella를 clindamycin민감 혐기균으로 쓴 오류. D는 선택지상 대안이며 현행 일률1차 아님.
- https://thorax.bmj.com/content/78/Suppl_1/s3

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004419
