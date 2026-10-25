---
type: qbank
schema_version: 1
id: medqa-us-train-008257
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c3905376a23267b2d1fa51282a24afee5c4448ca894166319b592bee8db29d70
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "deep vein thrombosis"
  - "unfractionated heparin"
  - "chronic kidney disease"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIOuwjyDtj5Dsg4nsoITspp0gKERlZXAgVmVpbiBUaHJvbWJvc2lzIGFuZCBQdWxtb25hcnkgRW1ib2xpc20pLm1k
question_type: management
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9Fbm94YXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
curation_status: "revised"
curation_reason: "혈소판 감소를 heparin의 바람직한 약효로 설명한 오류를 4Ts 위험 판단으로 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

56세 남자가 하루 동안 점점 심해지는 좌측 종아리 부종과 통증으로 응급실에 왔다. 호흡곤란이나 흉통은 없다. 고혈압과 만성콩팥병이 있으며 에날라프릴, 아스피린, 심바스타틴, 비타민 D를 복용한다. 정맥 도플러에서 좌측 슬와정맥 혈전이 보여 비분획 헤파린을 시작했다. 2일 후 증상이 호전되었고 혈소판은 230,000에서 170,000/mm³로 감소, aPTT는 55초, eGFR 28 mL/min/1.73m²이다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 에녹사파린으로 변경
B. 비분획 헤파린 계속
C. 와파린으로 변경
D. 항응고 중단

## 해설

Heparin 시작 2일째 혈소판이 230,000에서 170,000으로 30% 미만 감소했고 새 혈전 없이 호전 중이므로 제시된 정보의 HIT 가능성은 낮다. 최근 heparin 노출 등 빠른 발병 위험도 확인하되 저위험 4Ts에서는 heparin을 지속하며 경과를 볼 수 있다. 혈소판 감소 자체가 치료 목표는 아니다. 신기능이 저하된 환자의 UFH 사용은 조절·감시가 필요하며 warfarin으로 즉시 단독 교체하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008257

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 혈소판 감소를 heparin의 바람직한 약효로 설명한 오류를 4Ts 위험 판단으로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6258919/
