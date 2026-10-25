---
type: qbank
schema_version: 1
id: medqa-us-train-007417
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3a62b7da737d834f3e60311139784683fcb1ed2f177806979909d35db5ac7d2a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "인플루엔자 예방접종"
  - "당뇨병 예방접종"
  - "여행 전 예방"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: prevention
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

62세 남자가 5월에 정기 건강검진을 위해 내원했다. 건강하며 6개월 전 오른쪽 서혜부 탈장 수술을 받았다. 고혈압과 제2형 당뇨병이 있어 메트포르민, 시타글립틴, 에날라프릴, 메토프롤롤을 복용한다. 1년 전 대상포진 백신을 맞았고 4년 전 PPSV23 백신을 맞았다. 7년 전 대장내시경은 정상이었다. 20년 동안 하루 담배 한 갑을 피웠으나 17년 전에 끊었다. 주말에 술 2~3잔을 마신다. 아목시실린 알레르기가 있다. 2주 후 결혼 25주년을 기념하기 위해 호주와 뉴질랜드를 방문할 예정이다. 건강해 보이고 활력징후는 정상이다. 심첨부에서 제4심음이 들리는 것 외에는 진찰에서 이상이 없다. 현재 가장 적절한 권고는 무엇인가?

## 선택지

A. 인플루엔자 백신
B. 폐렴구균 결합백신 13가
C. 복부 초음파
D. 대장내시경

## 해설


호주/뉴질랜드의5월은 남반구 influenza 시즌에 해당하므로 출국 전 적절한 flu 백신 A가 중요하다. 원문 PPSV23은4년 전이지1년 이내가 아니다. 현행 폐렴구균 접종은 과거력/연령·위험에 따라 PCV20/21 또는 적절한 PCV15 등으로 평가하며 PCV13만을 자동 선택하지 않는다. Flu 백신 필요성은 다른 정기 예방접종 검토를 없애지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007417 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 남반구5월 여행의 flu A 유지; PPSV23을1년 이내 접종했다는 원문 오독과 현행 PCV 선택 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/flu/travelersfacts/index.html
- https://www.cdc.gov/pneumococcal/hcp/vaccine-recommendations/risk-indications.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007417
