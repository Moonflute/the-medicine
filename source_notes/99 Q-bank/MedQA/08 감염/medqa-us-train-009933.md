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

25세 남성 대학원생이 룸메이트에게 기침하며 심한 호흡곤란을 보이는 상태로 발견된 뒤 응급실에 왔다. 3개월 전 HIV 감염을 진단받았지만 항레트로바이러스 치료를 잘 따르지 않았다. 칠레 출신으로 5년 전 이곳으로 이주했다. 상태가 나빠 보이고 문장으로 말할 수 없다. 체온 38.2°C, 맥박 분당 127회, 호흡수 분당 32회, 혈압 95/65 mmHg, 실내 공기 산소포화도 86%이다. 구강 칸디다증은 보이지 않는다. 산소를 보충하고 혈청 LDH 364 IU/L, CD4 세포 수 98/mm³, β-D-글루칸 상승이 확인되었다. 동맥혈가스분석은 pH 7.50, PaCO₂ 22 mmHg, PaO₂ 60 mmHg, HCO₃⁻ 20 mEq/L이다. 흉부 X선 사진이 제시되어 있고 표준 항생제 치료를 즉시 시작했다. 다음 중 가장 적절한 추가 처치는?

## 선택지

A. 프레드니손
B. 이소니아지드
C. 아지트로마이신
D. 필그라스팀

## 해설


HIV와 낮은 CD4, 심한 저산소증 및 β-D-glucan 상승은 PCP를 강하게 의심하게 한다. 실내 공기 SpO₂ 86%이고 PaO₂도 60mmHg로 낮아 적절한 PCP 항균치료와 함께 보조 prednisone(A)이 적절하다. HIV-PCP에서는 실내 공기 PaO₂ <70mmHg 또는 A–a 산소차 ≥35mmHg가 대표 기준이다. β-D-glucan은 비특이적이며 누락된 흉부사진 자체를 확인한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009933 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HIV/CD4 98·저산소증의 중등도 이상 PCP 보조 prednisone A 유지. β-D-glucan/누락 X선만으로 확진했다고 주장하지 않고 중증 저산소증 근거를 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009933
