---
type: qbank
schema_version: 1
id: medqa-us-train-007932
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a5ee392af8959a69ea47fc1c2df667a44578043ab2161dc6183c96009ab8370
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Ebola virus disease"
  - "viral hemorrhagic fever"
  - "supportive fluid resuscitation"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uwlOydtOufrOyKpC5tZA
question_type: management
difficulty: complex
answer: B
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
---

# MedQA US 임상문제

## 문제

30세 산림 조경 전문가가 토혈과 혼돈으로 응급실에 왔다. 일주일 전 발열, 심한 두통, 근육통, 엉덩이와 어깨 통증, 반구진 발진으로 인플루엔자 진단을 받았다. 하루 동안 호전된 후 복통, 구토, 설사가 발생했고 내원 전 토혈이 한 번 있었다. 2주 전 서아프리카 열대우림과 동굴을 방문해 유인원을 포함한 동물과 직접 접촉했다. 중대한 질환이나 약물 사용력은 없다. 안절부절못하며 체온 38.0℃(100.4℉), 맥박 95회/분, 호흡수 20회/분, 누운 자세 혈압 130/70 mm Hg, 기립 혈압 100/65 mm Hg이다. 결막 충혈과 하지의 반상출혈이 있고 정맥주사 부위에서 출혈한다. 말초혈액도말에서 병원체는 보이지 않지만 역전사 PCR에서 필로바이러스 유전체가 검출되었다. 헤모글로빈 10 g/dL, 백혈구 1,000/mm³, 혈소판 50,000/mm³, aPTT 60초, PT 25초, 피브린 분해산물 양성, ALT 85 U/L, AST 120 U/L, GGT 83 U/L, 크레아티닌 2 mg/dL이다. 다음 중 가장 적절한 즉시 처치는?

## 선택지

A. 식도위십이지장내시경
B. 정맥 수액과 전해질
C. 비경구 아르테수네이트와 설파독신/피리메타민
D. N95 마스크 사용

## 해설


구토·설사·출혈과 기립 혈압저하는 체액 손실을 시사하므로 B의 정주 수액·전해질을 임상 반응에 맞춰 보충한다. Filovirus 의심/확진 환자는 동시에 적절한 격리·전신 PPE·공중보건 대응이 필요하고 N95 하나만으로 전체 보호조치를 대체하지 않는다. 바이러스 종에 따라 승인된 특정 치료 가능성도 확인하며 지지요법이 유일하다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007932 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Filovirus 감염의 수액/전해질 B 유지; 격리·PPE와 동시 시행하며 모든 종에 특정치료 없다는 해석 방지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.who.int/publications/i/item/9789241515894

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007932
