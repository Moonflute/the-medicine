---
type: qbank
schema_version: 1
id: medqa-us-train-000996
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f4efbf9058c052f6cddf36cd6dc367200448107ed33d4e6bf8e9347733ec6137
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "serum sickness"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOyyreuzkSAoU2VydW0gU2lja25lc3MpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

51세 남성이 살무사(cottonmouth viper)에게 물린 후 양 유래 고면역 Fab 항독소(sheep hyperimmune Fab antivenom)로 성공적으로 치료받았습니다. 3일 후, 환자에게 복부 가려움증을 동반한 발진이 발생하여 응급실에 다시 내원하였습니다. 과거력상 통풍, 고혈압, 고콜레스테롤혈증, 제2형 당뇨병, 그리고 얼굴과 목에 다수의 기저세포암이 있습니다. 현재 하루에 담배 1갑을 피우고 맥주 6캔을 마시며, 현재 불법 약물 사용은 부인합니다. 활력징후는 체온 40.0°C, 혈압 126/74 mm Hg, 심박수 111회/분, 호흡수 23회/분입니다. 신체 검진상 전신 관절통으로 인해 보행이 제한되며, 폐음은 양측 모두 깨끗하고 심음은 정상입니다. 환자는 배꼽 주위의 가려움증을 동반한 구불구불한(serpiginous) 반점상 발진이 있으며, 이는 등, 상부 몸통, 사지로 퍼졌습니다. 다음 중 환자 관리의 다음 단계로 가장 적절한 것은 무엇입니까?

## 선택지

A. 항히스타민제와 함께 글루코코르티코이드 점진적 감량
B. 항히스타민제
C. NSAIDs
D. 혈장교환술(plasmapheresis)

## 해설


항독소라는 이종 단백 노출 뒤 발열, 전신 발진과 다발관절통이 나타나 혈청병을 의심한다. 40°C 고열과 보행을 제한하는 관절통은 경증으로 볼 수 없으며, 중증 증상에는 항히스타민제와 전신 glucocorticoid를 고려할 수 있어 A가 보기 중 적절하다. 첫 노출 후 전형적 발현은 1–2주로, 본문의 3일은 비전형적으로 빠르며 재노출 여부 및 감염 등 다른 원인도 평가해야 한다. 호흡기·순환기 이상이 없다는 이유만으로 전신 증상의 중증도를 낮추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000996 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 40°C 고열·보행제한 관절통을 경증으로 설명한 오류 교정; 원문의 3일 발현은 전형적 첫 노출보다 빠름을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.rch.org.au/clinicalguide/guideline_index/Serum_Sickness_and_Serum_Sickness_like_reactions_%28SSLRs%29/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000996
