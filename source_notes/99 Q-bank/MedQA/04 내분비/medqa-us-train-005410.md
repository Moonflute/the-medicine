---
type: qbank
schema_version: 1
id: medqa-us-train-005410
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:edaf58378cad15cf604728752f1c914f8e9344fd670b8837a01e4ae4aa63539a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "말단비대증"
  - "성장호르몬 과다"
  - "IGF-1 선별검사"
related_disease_slugs:
  - MDQg64K067aE67mEL-unkOuLqOu5hOuMgOymnSAoQWNyb21lZ2FseSkubWQ
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

40세 여성이 손과 발이 커져 반지와 신발을 바꿨다. 아래턱이 돌출됐고 최근 당뇨병과 고혈압이 생겼다. 말단비대증이 의심될 때 우선 시행할 생화학 검사는?

## 선택지

A. 무작위 성장호르몬 단독 측정
B. 연령별 정상범위로 해석한 혈청 IGF-1
C. 아침 혈청 코르티솔
D. 혈청 프로락틴

## 해설


말단비대증이 의심되면 연령에 맞는 혈청 IGF-1을 먼저 본다. 성장호르몬은 박동성으로 분비되어 단회 측정만으로 배제할 수 없다. 결과가 애매하면 재검이나 포도당부하 뒤 성장호르몬 억제 평가를 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 말단비대 외형·DM·고혈압의 초기 생화학평가 IGF1 B는 MRI보다 먼저.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10837217/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005410
