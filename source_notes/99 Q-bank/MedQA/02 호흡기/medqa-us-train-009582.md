---
type: qbank
schema_version: 1
id: medqa-us-train-009582
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f1f335b9d8cb54030f40be447ae2dfe3fd35c26a765954618d8d2a9fbd351f08
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "transfusion-related acute lung injury"
  - "수혈관련 급성 폐손상"
  - "acute respiratory distress syndrome"
related_disease_slugs:
  - MTEg7Jm46rO8L-yImO2YiCDqtIDroKgg6riJ7ISxIO2PkCDshpDsg4EgKFRyYW5zZnVzaW9uLVJlbGF0ZWQgQWN1dGUgTHVuZyBJbmp1cnkpLm1k
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDtmLjtnaHqs6TrnoAg7Kad7ZuE6rWwIChBUkRTKSAoQWN1dGUgUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
question_type: mechanism
difficulty: complex
answer: C
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

새로 진단된 췌장암으로 휘플 수술을 받은 지 4일 된 65세 남자가 호흡곤란을 보인다. 수술 중 출혈로 농축 적혈구 4단위와 혈소판 1단위를 수혈받았다. 체온 38.8°C, 맥박 110회/분, 호흡수 26회/분, 혈압 95/55 mmHg, 실내 공기 산소포화도 85%이다. 심음은 정상이고 경정맥 팽창이 없으며 양쪽 폐에 전반적인 수포음이 있다. 사지는 따뜻하고 부종은 없다. 백혈구 17,000/mm³, 혈색소 9.8 g/dL이고 ABG에서 pH 7.35, PaO₂ 41, PaCO₂ 38, HCO₃⁻ 25 mmHg이다. 삽관 후 기계환기를 시작했고 흉부 X선이 제시되었다. 심초음파에서 좌심실 수축은 정상이다. 현재 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 흉벽 순응도 감소
B. 항백혈구 항체 형성
C. 미만성 염증성 폐포 손상
D. 좌심방 압력 증가

## 해설

수술 후 발열과 저혈압에 동반된 심한 저산소혈증, 양측 수포음과 보존된 좌심실 수축은 비심인성 폐손상을 의심하게 한다. ARDS의 병태생리는 C의 미만성 염증성 폐포 손상이다. 수혈이 수술 중이었고 증상은 4일 뒤이므로, 통상 수혈 중 또는 6시간 이내 발생하는 TRALI로 자동 연결하지 않는다. 누락된 영상과 임상 경과로 폐부종의 원인을 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수술 중 수혈 4일 뒤의 호흡부전을 TRALI로 단정한 시간적 오류를 ARDS 병리로 교정.
- https://onlinelibrary.wiley.com/doi/10.1111/trf.15311

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009582
