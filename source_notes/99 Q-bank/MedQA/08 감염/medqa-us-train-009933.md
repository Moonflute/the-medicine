---
type: qbank
schema_version: 1
id: medqa-us-train-009933
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9b6cbce3ac6a2be51d4d9e7d3f5b4114ddc58ef7487033f08f86bd9a7da6f2cb
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Pneumocystis jirovecii 폐렴"
  - "HIV 감염"
  - "보조 스테로이드"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
question_type: management
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
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9GaWxncmFzdGltLm1k
---

# MedQA US 임상문제

## 문제

치료를 중단한 HIV 감염인이 심한 호흡곤란으로 내원했다. CD4 수는 98/µL이고 β-D-글루칸이 높다. 실내 공기에서 PaO₂는 60 mmHg다. 폐포자충 폐렴이 의심돼 트리메토프림·설파메톡사졸을 시작했다. 추가할 치료는?

## 선택지

A. 프레드니손
B. 이소니아지드
C. 아지트로마이신
D. 필그라스팀

## 해설


HIV 관련 폐포자충 폐렴에서 실내 공기 PaO₂가 70 mmHg 미만이면 항균제에 전신 코르티코스테로이드를 추가한다. 보기의 프레드니손이 이에 해당한다. 전신 스테로이드는 항균 치료를 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009933 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HIV/CD4 98·저산소증의 중등도 이상 PCP 보조 prednisone A 유지. β-D-glucan/누락 X선만으로 확진했다고 주장하지 않고 중증 저산소증 근거를 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009933
- NIH, HIV 관련 폐포자충 폐렴 진료지침: https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis
