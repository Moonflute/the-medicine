---
type: qbank
schema_version: 1
id: medqa-us-train-002532
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:969b00ac493990be1aca3e3007bb3319ec4bb236ae0aa9562c8b0340fb4302b1
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "unfractionated heparin"
  - "activated partial thromboplastin time"
  - "deep vein thrombosis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIOuwjyDtj5Dsg4nsoITspp0gKERlZXAgVmVpbiBUaHJvbWJvc2lzIGFuZCBQdWxtb25hcnkgRW1ib2xpc20pLm1k
question_type: investigation
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

고혈압, 당뇨병, 말기 신장질환이 있는 65세 남성이 소장폐쇄로 입원해 비위관 감압을 받았다. 며칠 후 왼쪽 다리 부종과 종아리 압통이 생겨 초음파에서 심부정맥혈전이 확인되었고 비분획 헤파린 주입을 시작했다. 헤파린 용량을 조절하기 위해 무엇을 모니터링해야 하는가?

## 선택지

A. 프로트롬빈시간
B. 활성화 부분 트롬보플라스틴시간
C. 국제정상화비율(INR)
D. 크레아티닌 수치

## 해설


정맥 비분획 heparin의 용량은 기관별로 검증한 aPTT 목표에 따라 조절할 수 있으므로 B가 맞다. aPTT는 시약, 응고인자와 lupus anticoagulant 등의 영향을 받으므로 혈중 heparin 농도와 항상 완벽하게 일치하지는 않는다. 실제로는 anti-Xa 측정을 사용하는 프로토콜도 있다. PT/INR은 주로 warfarin 모니터에 이용하며 creatinine 자체로 UFH의 항응고 강도를 조절하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002532 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: aPTT와 헤파린 농도의 완벽한 직접비례·유일한 모니터라는 과장을 줄임. 보기 B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1c634e53-44d6-cdcd-e063-6294a90a92e9

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002532
