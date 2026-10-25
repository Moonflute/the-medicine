---
type: qbank
schema_version: 1
id: medqa-us-train-004117
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea16630bf03920cc4626397ae3bfa773b07fa79c3bb515e0e7cd8fbfa27db0c9
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "거대세포동맥염"
  - "류마티스성 다발근통"
  - "시야 결손"
  - "giant cell arteritis"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: 임상증례 객관식
difficulty: complex
answer: C
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9HYWJhcGVudGluLm1k
---

# MedQA US 임상문제

## 문제

72세 백인 여자가 새로 시작된 오른쪽 박동성 두통으로 응급실에 왔다. 음식을 먹을 때 통증이 현저히 악화된다. 딸은 최근 어머니가 계단을 오르거나 일어서는 등 일상 활동을 수행하기 어려워졌다고 한다. 과거력에 하지 심부정맥혈전증이 있다. 혈압 124/78 mmHg, 맥박 72회/분, 호흡수 15회/분이다. 오른쪽 시야 결손 외에는 신체검사가 정상이다. 헤모글로빈 11.3 g/dL, 헤마토크릿 37.7%, 백혈구 6,200/mm³, 평균적혈구용적 82.2 μm³, 혈소판 200,000/mm³, ESR 75 mm/h, CRP 50 mg/dL이다. 이 환자에게 가장 유익한 약물은 무엇인가?

## 선택지

A. 저분자량 헤파린
B. 가바펜틴
C. 프레드니솔론
D. 메토트렉세이트

## 해설


새 측두부 두통·턱 파행·염증수치 상승과 시야 결손은 GCA에 의한 시각허혈을 강하게 의심하게 한다. 제시된 약물군 중 glucocorticoid인 prednisolone(C)이 가장 적절하며 즉시 치료가 필요하다. 다만 시력 상실 위협이 있는 경우 현행 지침은 정맥 pulse glucocorticoid를 우선 고려하므로 경구 prednisolone만이 최선의 전체 처치라는 뜻은 아니다. 즉시 안과 평가·적절한 steroid 경로 선택과 확진 평가를 병행한다. 저분자량 heparin이나 methotrexate가 초기 고용량 steroid를 대체하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004117 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 실제 시야 결손이 있는 GCA에서 경구 prednisolone만으로 치료를 종결하는 오해를 막고 pulse 정맥 steroid 평가를 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004117
