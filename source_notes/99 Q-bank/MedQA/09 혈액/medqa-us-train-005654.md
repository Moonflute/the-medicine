---
type: qbank
schema_version: 1
id: medqa-us-train-005654
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7b0eb8afd82167e031f1371bfe083f035ec871bf42eece9ab30264bb0ead7a2b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "유전구형적혈구증"
  - "스펙트린 결함"
  - "혈관외 용혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghCDqtaztmIjsoIHtmIjqtazspp0gKEhlcmVkaXRhcnkgU3BoZXJvY3l0b3NpcykubWQ
  - MDkg7ZiI7JWhL-2YiOq0gCDsmbgg7Jqp7ZiIIChFeHRyYXZhc2N1bGFyIEhlbW9seXNpcykubWQ
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

4세 남아가 5일 동안 지속된 눈과 피부의 황색 변색으로 내원했다. 지난 2개월 동안 전신 피로와 경미한 호흡곤란이 있었다. 2주 전 요로감염으로 항생제 치료를 받았다. 아버지는 어릴 때 비장절제술을 받았다. 신체검사에서 결막이 창백하고 황달이 있다. 복부는 부드럽고 압통이 없으며 비장이 좌측 늑골연 아래 4~5cm에서 만져진다. 검사에서 혈색소 9.9 g/dL, 평균 적혈구 용적 88 μm³, 평균 적혈구 혈색소 31.7 pg/cell, 평균 적혈구 혈색소 농도 37.0%, 백혈구 6,600/mm³, 혈소판 233,000/mm³, 적혈구분포폭 24.3%(정상 13~15%)가 확인되었다. 혈청 총 빌리루빈은 12.3 mg/dL, 직접 빌리루빈은 1.8 mg/dL, 젖산탈수소효소는 401 U/L이다. 다음 중 이러한 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 혈색소 알파 사슬 합성 감소
B. 적혈구막 스펙트린 결함
C. 혈전성 미세혈관병증
D. 적혈구의 CD55 및 CD59 감소

## 해설


황달·비장비대·간접 bilirubin 증가와 MCHC 증가, 아버지의 비장절제 병력은 HS를 시사한다. Spectrin 같은 막 구조 결함 B로 표면적이 감소한 구형 적혈구가 비장에서 제거된다. MCV는 반드시 증가하지 않고 정상/감소일 수 있으며 높은 RDW·MCHC가 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005654 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HS를 적혈구 용적 증가로 설명한 오류 교정; 높은 MCHC와 막 결함 B 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005654
