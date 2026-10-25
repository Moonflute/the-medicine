---
type: qbank
schema_version: 1
id: medqa-us-train-004439
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e1e6cd73e081d13673a04b5f80393cf2c3a21d1a69c5ec37261c0ce0cf01aa9d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "구강 칸디다증"
  - "식도 칸디다증"
  - "HIV 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-y5uOuUlOuLpOymnSAoQ2FuZGlkaWFzaXMpLm1k
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: investigation
difficulty: simple
answer: C
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

66세 여성이 특별한 내과적, 수술력 또는 가족력 없이 새로 발생한 흉통, 구강 발진 및 연하통으로 내원했다. 몇 달 전 남편을 잃고 노인 보조생활 공동체로 이사했다. 증상은 몇 주 전부터 시작되었다. 신체검사에서 볼점막과 혀에 수많은 흰색 플라크가 보인다. 환자 관리에서 다음 단계는 무엇인가?

## 선택지

A. 황산바륨을 이용한 단일 조영 식도조영술
B. 의치 적합성 평가
C. CD4 세포 수 측정
D. 수용성 요오드 조영제를 이용한 단일 조영 식도조영술

## 해설


구강 백색 플라크에 연하통이 동반되면 구강/식도 칸디다증 및 면역저하를 평가한다. 선택지 중 CD4 C가 면역상태 평가에 가장 관련되지만 HIV는 별도의 항원/항체 및 필요시 핵산 검사로 진단해야 한다. 나이·보조생활시설 거주만으로 성생활이나 HIV 감염을 가정하지 않으며 다른 면역저하·약물 원인도 확인한다. 이 검사가 식도 진료/항진균 치료를 대신하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004439 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 면역결핍 평가 CD4 C 유지하되 구강 백색병변만으로 HIV 확진 및 CD4 검사를 HIV 진단검사로 혼동한 설명 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004439
