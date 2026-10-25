---
type: qbank
schema_version: 1
id: medqa-us-train-002927
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b39ff98ac595d27affeb0b35bb00bd0fdd6d2752639c19ef67a69b76650d8167
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "acromegaly"
  - "growth hormone excess"
  - "insulin-like growth factor 1"
  - "pituitary adenoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-unkOuLqOu5hOuMgOymnSAoQWNyb21lZ2FseSkubWQ
  - MDQg64K067aE67mEL-uHjO2VmOyImOyytCDsg5jsooUgKFBpdHVpdGFyeSBBZGVub21hKS5tZA
question_type: investigation
difficulty: complex
answer: A
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

43세 남성이 6개월 동안 지속된 두통 평가를 위해 내원했다. 두통을 완화하는 것이 없고 아침에 더 심하다고 한다. 지난 2개월 동안 발기를 유지하지 못하고 성욕도 낮아졌다. 체온은 37°C, 맥박 80회/분, 혈압 150/90 mmHg이다. 코, 이마, 턱이 커지고 손, 손가락, 발이 넓어져 있으며 손에 땀이 난다. 혈청 포도당은 260 mg/dL이다. 다음 중 진단에서 가장 적절한 다음 단계는?

## 선택지

A. 혈청 IGF-1 측정
B. 경구 포도당부하검사
C. 기저 프로락틴 측정
D. 24시간 소변 코르티솔 측정

## 해설

말단·안면의 비대, 다한증, 두통과 고혈압은 성장호르몬 과다에 의한 말단비대증을 의심하게 한다. 혈당 260 mg/dL는 고혈당이며 인슐린 수치가 측정된 것은 아니다. 보기 중 초기 생화학적 평가로 가장 적절한 검사는 A, 연령을 고려한 혈청 IGF-1 측정이다.

IGF-1이 높거나 경계값이면 임상 상황과 검사 특성에 따라 경구 포도당 투여 후 성장호르몬 억제 여부 등을 평가한다. 프로락틴이나 코르티솔은 이 사례의 전형적인 말단 비대 소견에 대한 첫 검사로 더 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 실제 측정은 고혈당인데 고인슐린혈증이라고 한 오류를 수정하고 IGF-1 우선 검사/필요 시 GH 억제 확인 순서를 설명.
- https://academic.oup.com/jcem/article/99/11/3933/2836347

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002927
