---
type: qbank
schema_version: 1
id: medqa-us-train-009515
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:368d6d64efb1b2112df841941638fb93af33e73c19dabc420eba01dadaa366bf
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "COPD exacerbation"
  - "COPD 급성 악화"
  - "noninvasive ventilation"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL0NPUETsnZgg6riJ7ISxIOyVhe2ZlCAoQWN1dGUgRXhhY2VyYmF0aW9uIG9mIENPUEQpLm1k
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

COPD가 있는 59세 환자가 호흡곤란과 가래 증가로 입원했다. 약 일주일 전 상기도감염이 있었다. 혈압 130/80 mmHg, 심박수 92회/분, 호흡수 24회/분, 체온 37.6°C, 실내 공기 산소포화도 87%이다. 흉부 X선에서 오른쪽 폐 하엽의 경화가 보인다. 동맥혈가스 검사를 채혈하고 항생제 치료를 시작했다. 산소 2 L를 비강 캐뉼라로 투여한 후 산소포화도 93%이다. ABG는 pH 7.32, PaO₂ 63 mmHg, PaCO₂ 57 mmHg, HCO₃⁻ 24 mEq/L이다. 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 산소포화도 95% 초과까지 산소 증가
B. 비침습적 양압환기 시작
C. 삽관 후 침습적 환기 시작
D. 경구 코르티코스테로이드 투여

## 해설

COPD 악화에서 pH 7.32와 PaCO2 57 mmHg는 고탄산혈증성 호흡성 산증을 시사하여, 금기가 없으면 B의 비침습적 환기를 우선 시도한다. 산소는 보통 88–92%를 목표로 조절하고 폐렴 치료와 기관지확장제, 전신 스테로이드 등도 병행한다. 악화하거나 기도 보호가 안 되면 삽관을 지연하지 않는다. 원문의 HCO3 수치는 다른 혈액가스 값과 완전히 일치하지 않아 재확인이 필요하지만, 제시된 산증과 고탄산혈증은 NIV 적응증을 지지한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 호흡성 산증의 NIV B를 유지하고 누락된 항생제 시작 및 표적 산소화를 보완.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009515
