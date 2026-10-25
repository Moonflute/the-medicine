---
type: qbank
schema_version: 1
id: medqa-us-train-005325
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:605adbf3c03bca375b464017e51ef0bb9764230a0e146cb03986a6949a6bec8c
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "굿파스처 증후군"
  - "항사구체기저막 항체"
  - "폐신장 증후군"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyGjSDsp4Ttlokg7Yag66as7L2p7Yyl7Je8IChSYXBpZGx5IFByb2dyZXNzaXZlIEdsb21lcnVsb25lcGhyaXRpcykubWQ
  - MDUg7Iug7J6lL-2PkOyLoOyepSDspp3tm4TqtbAgKFB1bG1vbmFyeS1SZW5hbCBTeW5kcm9tZSkubWQ
question_type: management
difficulty: complex
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
curation_status: "revised"
curation_reason: "신염을 신증후군으로 오기하고 면역복합체 질환으로 설명한 오류 수정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

32세 남자가 2주 동안 기침, 호흡곤란과 객혈, 3개월 동안 피로로 내원했다. 빈혈, 폐 수포음, 크레아티닌 2.3 mg/dL, 항사구체기저막 항체 양성, 혈뇨와 적혈구 원주가 있다. 프레드니손과 사이클로포스파미드를 시작했다. 다음 중 가장 적절한 처치는?

## 선택지

A. 흡입 플루티카손
B. 혈액투석
C. 혈장교환
D. 에날라프릴

## 해설

객혈·폐침윤과 혈뇨·적혈구 원주·신기능 저하, anti-GBM 항체 양성은 항GBM 폐-신장 증후군을 지지한다. Glucocorticoid·cyclophosphamide에 혈장교환을 더해 순환 anti-GBM 항체를 제거한다. 이는 전형적인 면역복합체 침착 질환이 아니며 신기능 회복을 보장하는 치료라는 뜻도 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 신염을 신증후군으로 오기하고 면역복합체 질환으로 설명한 오류 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2017/02/KDIGO-2021-Glomerular-Diseases-Guideline_English_LN-2024-Update.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005325

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
