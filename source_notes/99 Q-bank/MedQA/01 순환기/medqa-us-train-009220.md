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

83세 남성이 운동 시 호흡곤란이 심해졌다. 심초음파에서 석회화된 삼첨 대동맥판막, 평균 압력차 46 mmHg와 판막 면적 0.7 cm²가 확인됐다. 심장팀은 수술 위험이 높고 대퇴동맥 접근이 가능하며 판막 교체로 일상 기능이 좋아질 가능성이 높다고 판단했다. 적절한 치료는?

## 선택지

A. 이뇨제만 증량하고 관찰한다
B. 풍선 대동맥판막성형술을 최종 치료로 시행한다
C. 대퇴동맥을 통한 경피적 대동맥판막삽입술(TAVI)을 시행한다
D. 경피적 승모판 교련절개술을 시행한다

## 해설

치료 이득을 기대할 수 있는 고령의 증상성 중증 대동맥판협착에서 대퇴동맥 접근과 판막 해부학이 적합하면 TAVI가 적절하다. 수술적 치환과의 선택은 나이, 위험도, 접근 해부와 기대수명 등을 심장팀에서 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TAVR C를 고위험 환자에만 쓰는 치료로 제한한 오래된 설명을 현행 선택 과정으로 보완.
- https://www.escardio.org/static-file/Escardio/Guidelines/Products/Slide%20sets/2025/2025%20official%20slides_VHD.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009220
- https://academic.oup.com/eurheartj/article/46/44/4635/8234488
