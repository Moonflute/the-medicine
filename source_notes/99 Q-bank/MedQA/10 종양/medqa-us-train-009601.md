---
type: qbank
schema_version: 1
id: medqa-us-train-009601
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:48bc13bb9174752c0143015115c1783a63b16e033eb356a8ad182db4ce5417b3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "palpable breast mass"
  - "만져지는 유방 종괴"
  - "breast ultrasound"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: investigation
difficulty: standard
answer: D
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9BbGVuZHJvbmF0ZS5tZA
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
---

# MedQA US 임상문제

## 문제

49세 여성이 왼쪽 유방 종괴로 내원했다. 3개월 전 월례 자가검진에서 발견해 지켜보았고 커진 것 같다. 궤양, 체중 감소, 피로, 야간 발한, 유두 분비물은 없다. 경미한 골다공증으로 알렌드로네이트를 복용한다. 왼쪽 유방에 4 mm 크기의 단단하고 압통 없는 종괴가 만져진다. 유방촬영술에서는 종괴가 보이지 않았다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 타목시펜 치료 시작
B. 6개월 후 유방촬영술 반복
C. 6개월 관찰 후 지속되면 생검
D. 왼쪽 유방 초음파

## 해설


지속적으로 만져지거나 커지는 종괴가 유방촬영에서 보이지 않아도 표적 초음파 D로 평가한다. 유방촬영 음성은 촉지 병변의 악성을 배제하지 않는다. 임상적으로 의심스럽거나 영상과 촉진 소견이 일치하지 않으면 영상이 음성이어도 조직검사가 필요할 수 있다. 단순히 6개월 기다리거나 진단 없이 tamoxifen을 시작하는 것은 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009601 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 음성 유방촬영 후에도 지속되는 촉지 종괴의 표적 US D 유지; 음성 영상만으로 악성을 배제하는 해석 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.radiologyinfo.org/en/info/acs-palpable-breast-masses

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009601
