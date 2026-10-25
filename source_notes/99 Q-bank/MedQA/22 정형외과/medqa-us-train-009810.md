---
type: qbank
schema_version: 1
id: medqa-us-train-009810
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:42b9ea75801b794e05f0a16f2cf16312d69422420ef080d27d904b644df53fdc
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "고관절 골관절염"
  - "골관절염"
  - "멜록시캄"
question_type: management
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qzqOq0gOygiOyXvCAoT3N0ZW9hcnRocml0aXMpLm1k
difficulty: complex
answer: A
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
---

# MedQA US 임상문제

## 문제

63세 여성이 고관절 통증으로 내원했다. 양쪽 고관절 통증이 거의 5년간 지속되었고 시간이 지나며 악화되었다. 하루가 진행될수록 통증이 심해져 저녁에 작은 개를 산책시키기 어렵다고 한다. 아침에 약간 뻣뻣하지만 걷기 시작하면 곧 호전된다. 지난주 통증이 더 심해졌다. 과거력으로 고혈압, 고지혈증, 경도의 갑상선기능저하증이 있다. 캅토프릴, 아토르바스타틴, 레보티록신을 복용한다. 거의 매일 아세트아미노펜을 복용했고 용량을 4,000mg까지 늘렸지만 통증은 유의하게 줄지 않았다. 양쪽 부모는 80대에 사망했다. 혈압 135/85 mmHg, 심박수 분당 74회, 호흡수 분당 12회, 체온 37.0°C, BMI 35kg/m²이다. 양쪽 다리 근력은 정상이고 상하지 신경학적 진찰도 정상이다. 통증 때문에 보행 평가는 어려웠다. 아래 사진에 왼쪽 고관절 방사선 사진이 제시되어 있다. 이 환자 상태에 대한 가장 적절한 치료는?

## 선택지

A. 아세트아미노펜을 멜록시캄으로 변경
B. 아세트아미노펜을 경구 메틸프레드니솔론으로 변경
C. 글루코사민 보충제 추가
D. 아세트아미노펜을 하루 6,000mg으로 증량

## 해설

정답은 A, 아세트아미노펜을 멜록시캄으로 변경하는 것이다. 오랜 기간 진행된 고관절 통증이 활동과 하루 경과에 따라 악화되고 아침 강직은 짧아 골관절염을 시사한다. 아세트아미노펜으로 충분히 조절되지 않는 증상성 고관절 골관절염에서는 금기가 없다면 경구 NSAID가 적절한 선택이다. 처방 전 신장기능, 위장관 출혈 및 심혈관 위험을 확인하고, 캅토프릴과 병용할 때의 신장기능·혈압 영향도 고려하며 최소 유효용량을 가능한 짧게 사용한다. 경구 전신 스테로이드나 글루코사민은 이 케이스의 권장 대안이 아니고, 아세트아미노펜 6,000 mg/일은 간독성 위험 때문에 선택하면 안 된다. 멜록시캄이 모든 NSAID보다 우월하다는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문의 본문·선지·정답 및 한국어 해설을 개별 대조하였다. 원정답과 케이스를 유지하고 잘못 연결된 해설을 교체하였다.
- 영어 원문은 고관절 X선 영상을 언급하지만 현재 자료에는 영상이 없다. 영상 소견을 만들어 기술하지 않았다. 본문의 만성 기계적 통증·짧은 아침 강직·비만 및 제시된 네 치료 선택지만으로 원래 치료 답 A를 판단할 수 있어, 영상 단어만을 이유로 보류하지 않았다.
- 공식/학회 근거: https://www.aaos.org/globalassets/quality-and-practice-resources/osteoarthritis-of-the-hip/oah-cpg.pdf
- 공식/학회 근거: https://www.arthritis.org/getmedia/d57cf9f5-e096-43a2-832d-dbc174065a58/Kolasinski-2020-american-college-of-rheumatology-a.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009810
