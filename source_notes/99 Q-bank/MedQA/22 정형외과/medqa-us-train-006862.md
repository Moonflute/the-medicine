---
type: qbank
schema_version: 1
id: medqa-us-train-006862
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d3ea2099648a6a41d986f64d4febf104a19a09ef2d90c67639be6abb86b318fc
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "거위발 윤활낭염"
  - "내측 무릎 통증"
  - "비만 관련 과사용"
  - "Pes anserine bursitis"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

체질량지수 45kg/m²인 45세 남성이 오른쪽 고관절 통증으로 주치의를 방문했다. 건설현장에서 계단을 오르내릴 때 통증이 생긴다고 한다. 진찰에서 양쪽 고관절은 대칭이고 압통이 없다. 왼쪽 하지와 운동 범위는 정상이다. 오른쪽 무릎도 대칭이지만 경골 고평부 앞안쪽을 누르면 신음한다. 무릎의 다른 부위에는 압통이 없고 신전, 굴곡, 내반 및 외반 운동에서도 통증이 유발되지 않는다. 오른쪽 다리를 안쪽과 바깥쪽으로 회전하며 시행한 맥머리검사는 음성이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 외측 반월상연골 파열
B. 내측 반월상연골 파열
C. 거위발 윤활낭염
D. 슬개전 윤활낭염

## 해설

정답은 C, 거위발 윤활낭염이다. 거위발 윤활낭은 근위 경골 안쪽의 봉공근·박근·반힘줄근 힘줄 부근에 위치한다. 비만과 반복되는 계단 오르내리기는 위험 요인이며, 무릎 관절선보다 아래쪽의 앞안쪽 경골에 국한된 압통이 진단을 지지한다. 반월상연골 파열은 관절선 압통이나 기계적 증상 및 맥머리검사 소견이 더 뒷받침되지만, 음성 검사 하나만으로 완전히 배제되지는 않는다. 슬개전 윤활낭염의 압통·부종은 무릎 앞쪽 슬개골 표면에 나타나므로 이 위치와 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문의 본문·선지·정답 및 한국어 해설을 개별 대조하였다. 원정답과 케이스를 유지하고 잘못 연결된 해설을 교체하였다.
- 영어 원문도 주호소를 hip pain으로 적었으나 진찰상 통증은 경골 앞안쪽으로 국소화한다. 원래 케이스를 다른 증례로 바꾸지 않고 이 국소화 단서에 따라 판단하였다.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/pes-anserine-knee-tendon-bursitis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006862
