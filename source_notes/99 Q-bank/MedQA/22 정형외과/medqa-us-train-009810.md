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

63세 여성이 활동할수록 심해지는 양쪽 고관절 통증을 호소한다. 아침 강직은 짧고, 평가에서 고관절 골관절염으로 확인됐다. 운동·체중 관리와 아세트아미노펜으로 충분히 조절되지 않고 경구 NSAID 금기는 없다. 다음 약물 선택은?

## 선택지

A. 아세트아미노펜을 경구 NSAID로 변경
B. 경구 메틸프레드니솔론 장기 투여
C. 글루코사민 보충제만 추가
D. 아세트아미노펜을 하루 6 g으로 증량

## 해설

증상성 고관절 골관절염에서 경구 NSAID를 사용할 수 있다. 처방 전 신장기능, 위장관 출혈, 심혈관 위험과 병용약을 확인하고 최소 유효용량을 가능한 짧게 사용한다. 고용량 아세트아미노펜은 간독성 위험이 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문의 본문·선지·정답 및 한국어 해설을 개별 대조하였다. 원정답과 케이스를 유지하고 잘못 연결된 해설을 교체하였다.
- 영어 원문은 고관절 X선 영상을 언급하지만 현재 자료에는 영상이 없다. 영상 소견을 만들어 기술하지 않았다. 본문의 만성 기계적 통증·짧은 아침 강직·비만 및 제시된 네 치료 선택지만으로 원래 치료 답 A를 판단할 수 있어, 영상 단어만을 이유로 보류하지 않았다.
- 공식/학회 근거: https://www.aaos.org/globalassets/quality-and-practice-resources/osteoarthritis-of-the-hip/oah-cpg.pdf
- 공식/학회 근거: https://www.arthritis.org/getmedia/d57cf9f5-e096-43a2-832d-dbc174065a58/Kolasinski-2020-american-college-of-rheumatology-a.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009810
