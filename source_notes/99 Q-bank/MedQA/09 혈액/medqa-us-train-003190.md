---
type: qbank
schema_version: 1
id: medqa-us-train-003190
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:24b8d17e441020468825152b6748098e52a9e7be47db305009c5b05dd5dcae7d
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "thrombotic thrombocytopenic purpura"
  - "TTP pentad"
  - "schistocytes"
  - "SLE association"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyghOyEsSDtmIjshoztjJDqsJDshowg7J6Q7IOJ67CYIChUaHJvbWJvdGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgVFRQKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
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

49세 여성이 일주일 동안 관절통, 두통, 졸림이 증가해 딸과 함께 응급실에 왔다. 주요 장기 침범이 없는 전신홍반루푸스 병력이 있고 2개월 전까지 저용량 글루코코르티코이드를 복용했다. 체온 38.6°C, 맥박 80회/분, 호흡수 21회/분, 혈압 129/80 mmHg이며 혼란스럽고 지남력이 떨어진다. 공막 황달과 몸통·다리의 멍이 있고 혈소판 25,000/mm³, 총 빌리루빈 4.9 mg/dL(직접 0.5), 응고검사는 거의 정상이며 말초도말에 분열적혈구가 많고 소변에 혈뇨와 단백뇨가 있다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 면역성 혈소판감소성 자반증
B. 파종성 혈관내 응고
C. 혈전성 혈소판감소성 자반증
D. 글란즈만 혈소판무력증

## 해설


혈소판감소와 schistocyte를 동반한 미세혈관병성 용혈, 의식변화 및 발열에 응고검사가 비교적 보존된 양상은 TTP C를 가장 지지한다. 고전적 5징후는 혈소판감소, 미세혈관병성 용혈성 빈혈, 신경증상, 신장기능 이상과 발열이며 발진이 아니다. 실제로 다섯 소견이 모두 있어야 진단하는 것은 아니고 ADAMTS13 결핍 평가와 긴급 처치가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003190 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: TTP 고전 5징후의 발열을 발진으로 잘못 적은 부분과 미세혈관병성 용혈 용어를 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13470878/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003190
