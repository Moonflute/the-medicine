---
type: qbank
schema_version: 1
id: medqa-us-train-005509
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:db585ccb3b81a45326365b496b26dfba55c204b05e51d998b21c18e917b3d802
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "다발성경화증 재발"
  - "횡단척수염"
  - "고용량 정맥 스테로이드"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여자가 2일 동안 갑자기 시작된 양쪽 하지 근력저하와 요폐로 내원했다. 과거 왼팔 근력저하가 저절로 호전된 적이 있고, 하지 근력 3/5, 근긴장 증가, 과도한 반사, 배꼽 아래 감각저하, 목을 굽힐 때 전기충격 같은 감각이 있다. 안저에서 양측 시신경유두가 약간 부어 있다. 다음 중 가장 적절한 처치는?

## 선택지

A. 인터페론 베타
B. 정맥 메틸프레드니솔론
C. 혈장교환
D. 릴루졸

## 해설

양측 상위운동신경원 하지위약·감각수준·요폐와 과거 다른 신경증상은 급성 염증성 탈수초성 척수염을 시사한다. 적절한 영상 등으로 압박성 병변·감염 등 다른 원인을 신속히 배제하며 주어진 치료 선택지에서는 고용량 정맥 메틸프레드니솔론(B)이 적절한 급성기 치료다. 혈장교환은 중증 스테로이드 불응성 탈수초 악화에서 구제치료가 될 수 있어 효과가 없다고 하지 않는다. 인터페론 베타는 장기 질환조절제로 급성 마비를 신속히 치료하는 대안이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 염증성 척수증상에서 B를 유지하며 혈장교환이 급성기에 효과 없다는 오류를 스테로이드 불응 시 구제치료로 교정했다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng220/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005509
