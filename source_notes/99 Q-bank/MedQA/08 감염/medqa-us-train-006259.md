---
type: qbank
schema_version: 1
id: medqa-us-train-006259
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6e052e48de0c609744e006f2d74f84012b5b225951d8c27c2b9ba1ad95567b14
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "구강 칸디다증"
  - "비호지킨 림프종"
  - "항암화학요법"
related_disease_slugs:
  - MDgg6rCQ7Je8L-y5uOuUlOuLpOymnSAoQ2FuZGlkaWFzaXMpLm1k
  - MDkg7ZiI7JWhL-u5hO2YuOyngO2CqCDrprztlITsooUgKE5vbi1Ib2Rna2luIEx5bXBob21hKS5tZA
question_type: management
difficulty: standard
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
---

# MedQA US 임상문제

## 문제

38세 남성이 4일 전부터 발생한 구강 내 백색 병변으로 내원했다. 음식을 씹을 때 심한 통증도 있다. 약 8개월 전 비호지킨 림프종을 진단받았고 현재 항암화학요법 4주기를 받고 있다. 4개월 전 입술 헤르페스로 아시클로버 치료를 받았다. 15년 동안 하루 반 갑씩 흡연했다. 전반적으로 건강해 보이며 활력징후는 정상이다. 경부 및 액와 림프절병증이 있다. 구강 진찰에서 혀와 협점막에 백색 플라크가 보이며 긁어내면 출혈한다. 그 외 진찰은 정상이다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 병변 배양검사
B. 국소 니스타틴
C. 병변 생검
D. 국소 코르티코스테로이드

## 해설


긁으면 제거되며 출혈하는 백색 플라크는 구강칸디다증에 합당하고, 선택지 중 국소 nystatin B는 경한 구강 국한 질환에서 사용할 수 있다. 모든 항암 환자의 칸디다증에 국소제만 충분하다는 뜻은 아니며 심한 통증/광범위 질환·섭취 장애 또는 식도 침범이 있으면 전신 fluconazole 등으로 평가·치료한다. 비전형/불응 병변은 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006259 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 국소 구강칸디다의 nystatin B 유지; 항암 환자 모두에 국소제가 보편 일차라는 과장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/candidiasis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006259
