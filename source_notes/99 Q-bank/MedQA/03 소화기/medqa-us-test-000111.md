---
type: qbank
schema_version: 1
id: medqa-us-test-000111
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9711d6e1133451975fa308487c4ae5203bc7f71502d35f0e59d7a9880e1b1744
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "자발성 세균성 복막염"
  - "간경변"
  - "세균 전이"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 남성이 2일 동안 지속된 발열, 복통, 혼란으로 응급실에 내원했다. 아내의 이름과 자신의 생일도 기억하지 못한다. 3년 전 C형 간염을 진단받았지만 치료를 거부했고 지난 1년 동안 급성 췌장염으로 두 번 치료받았다. 체온 38.3°C, 맥박 분당 101회, 혈압 104/68 mmHg이다. 혼란스럽고 사람만 알아보며 공막 황달, 거미혈관종, 양손의 미세한 떨림, 복부팽창과 이동성 탁음이 있다. 복수천자에서 알부민 0.8 g/dL, 포도당 62 mg/dL, 백혈구 1,900/mm³(호중구 60%)이다. 다음 중 이 소견을 가장 잘 설명하는 것은?

## 선택지

A. 무균성 복막 염증
B. 종양성 증식
C. 세균 전이
D. 장기 천공

## 해설

간경변을 시사하는 소견과 복수, 발열·복통·혼돈이 있고 복수 호중구 수는 1900×0.60=1140/mm³로 250/mm³를 넘는다. 자발성 세균성 복막염을 의심하게 하며, 보기 중 장내 세균의 전이(C)가 합당한 기전이다. 복수 포도당 62 mg/dL나 낮은 복수 알부민만으로 감염을 확진하는 것이 아니다. 장기 천공 등 이차성 복막염의 단서도 실제 진료에서는 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. PMN 1140을 핵심으로 SBP/세균전이 설명; 실제 복수 포도당 62를 저포도당이라고 단정한 오류 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000111
