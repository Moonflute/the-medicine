---
type: qbank
schema_version: 1
id: medqa-us-train-005257
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e8a11d8b64716e9621d2df0060e2ea23c5b9e560efe72b0c1e193be3a592b44
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "건선성 관절염"
  - "손발톱 건선"
  - "염증성 관절염"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpC5tZA
question_type: management
difficulty: complex
answer: B
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
---

# MedQA US 임상문제

## 문제

53세 여자가 수년간 있던 손가락 관절 통증과 부종이 최근 심해져 내원했다. 양쪽 모든 손가락이 붓고 손발톱 밑에 황백색 판이 있으며 어깨와 무릎 통증도 있다. 다음 중 치료에서 가장 적절한 초기 처치는?

## 선택지

A. 인도메타신과 설파살라진 투여
B. 인도메타신과 메토트렉세이트 투여
C. 인도메타신 투여
D. 메토트렉세이트 투여

## 해설


여러 손발가락 종창과 손발톱 병변·다관절 증상은 건선성 관절염을 시사한다. 다관절염·손발가락염·손발톱 침범은 조기 csDMARD 치료를 고려할 근거가 된다. 선택지 B는 methotrexate로 질병조절을 시작하고 indomethacin으로 단기 증상을 완화하는 조합이다. NSAID 병용이 모든 환자에게 반드시 필요한 것은 아니며 신장·위장관·심혈관 위험을 확인한다. 실제 건선/손발톱병변 진단과 병형·활성도에 따라 다른 DMARD나 생물학제가 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005257 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PsA의 NSAID+MTX를 모든 환자에 필수 조합으로 제시한 설명을 다관절/손발가락염의 조기 DMARD와 증상치료로 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://ard.bmj.com/content/83/6/706

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005257
