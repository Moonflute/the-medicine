---
type: qbank
schema_version: 1
id: medqa-us-train-009220
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cc2eb56baeafb1cf561c35bb967ef008ff2d839b64c495b9ef10ec6565c94166
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "severe aortic stenosis"
  - "중증 대동맥판막 협착"
  - "transcatheter aortic valve replacement"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2FwdG9wcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남자가 지난 6개월 동안 진행된 운동 시 호흡곤란으로 심장내과에 의뢰되었다. 식이요법만으로 조절되는 제2형 당뇨병이 있다. 체온 37.1℃, 맥박 76회/분, 혈압 132/86 mmHg이다. 진찰에서 오른쪽 상흉골연에서 가장 잘 들리고 경동맥으로 방사되는 수축기 잡음이 있다. 심전도에서 좌심실 비대와 Q파 소실이 보인다. 경흉부 심초음파에서 대동맥 압력 구배 상승, 심한 판막엽 석회화, 좌심실 이완기 기능장애가 보인다. 이 심장질환에서 생존 이득을 제공하는 처치는 무엇인가?

## 선택지

A. 카프토프릴과 히드로클로로티아지드 병용
B. 임상 및 심초음파 연속 추적
C. 경피적 대동맥판막 치환술
D. 니트로프루시드나트륨

## 해설

증상이 있는 중증 대동맥판 협착에서는 판막 치환이 생존을 개선하므로 제시된 선택지 중 C가 적합하다. TAVR은 수술 고위험군에만 한정되지 않는다. 실제로는 협착 중증도를 정량 확인하고, 나이, 기대 수명, 판막·혈관 해부와 환자 선호를 고려해 심장팀이 TAVR과 수술적 치환을 선택한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TAVR C를 고위험 환자에만 쓰는 치료로 제한한 오래된 설명을 현행 선택 과정으로 보완.
- https://www.escardio.org/static-file/Escardio/Guidelines/Products/Slide%20sets/2025/2025%20official%20slides_VHD.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009220
