---
type: qbank
schema_version: 1
id: medqa-us-train-006517
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ae64658ab486dd308ba23482318cb6d12b2531f38de9b0207b7f123a53eaae9d
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "유착태반"
  - "반복 제왕절개"
  - "태반 이상 부착"
  - "Placenta accreta"
question_type: prevention
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdXJveGltZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 여성(Gravida 4, Para 3)이 임신 20주 정기 산전 진찰을 위해 내원했다. 현재 증상은 없지만 임신 1분기에 급성 신우신염으로 입원하여 세푸록심 치료를 받았다. 과거 임신은 모두 의학적 적응증으로 제왕절개를 했다. 19세 때 체중 감소 후 무월경이 있었고 30세에 자궁경부 폴립 절제술을 받은 병력도 있다. 오늘 활력징후는 정상이고 신체진찰은 특이사항이 없다. 경복부 초음파에서 정상적으로 발달한 남아, 태반의 전치부 하부 자궁분절 부착, 태반 뒤 저에코 영역 소실 및 자궁근층 내 열공이 보인다. 다음 중 이 환자에게 발생한 상태의 위험인자는?

## 선택지

A. 임신 중 비뇨생식기 감염
B. 무월경 병력
C. 반복된 제왕절개
D. 임신 1분기 항생제 복용

## 해설

태반 뒤 저에코 영역 소실과 열공, 전방 하부 자궁 태반은 태반유착스펙트럼(PAS)을 의심하게 한다. 반복 제왕절개(C)는 흉터 부위 탈락막 결손과 연관된 중요한 위험인자이며, 태반 위치가 낮을 때 위험이 더 커진다. 항생제·요로감염·과거 체중감소성 무월경이 주된 원인은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 전치태반과 PAS를 혼용한 해설 정리.
- https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2018/12/placenta-accreta-spectrum

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006517
