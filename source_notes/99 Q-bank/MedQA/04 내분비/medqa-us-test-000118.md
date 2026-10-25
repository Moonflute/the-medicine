---
type: qbank
schema_version: 1
id: medqa-us-test-000118
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:63c09bbad61908220a3c36c9deea9e6d1f4d822143fbb23da1634fde41578375
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "메트포르민 관련 젖산산증"
  - "고음이온차 대사성 산증"
  - "신장기능 저하"
  - "Lactic acidosis"
related_disease_slugs:
  - MDUg7Iug7J6lL-yCsOymnSAoQWNpZG9zaXMpLm1k
question_type: mechanism
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성이 복통, 오심, 구토로 응급실에 내원했다. 과거력으로 당뇨병성 신장병증, 고혈압, 이상지질혈증, 우울증, 중증 비만이 있고 생식기 헤르페스 치료 중이다. 체온 37.2°C, 혈압 184/102 mmHg, 맥박 분당 89회, 호흡수 분당 18회, 산소포화도 98%이다. 조영 복부 CT는 정상이고 관찰병동에 입원해 통증을 모니터링했다. 관장 후 여러 차례 배변하자 복통은 호전되었다. 저녁 검사에서 Na⁺ 141, Cl⁻ 99, K⁺ 4.8, HCO₃⁻ 11 mEq/L, BUN 20 mg/dL, 포도당 177 mg/dL, 크레아티닌 3.1 mg/dL이다. 다음 중 검사 이상을 일으킨 가장 가능성 높은 원인은?

## 선택지

A. 아시클로버
B. 아토르바스타틴
C. 메트포르민
D. 메토프롤롤

## 해설

음이온차는 141−(99+11)=31 mEq/L로 증가해 있다. 신기능 저하가 있는 환자에서 메트포르민을 복용한다면 신장 배설 감소로 약물이 축적되어 젖산산증 위험이 높아지므로 보기 중 C가 출제 의도에 합당하다. 메트포르민은 주로 신장으로 배설되며 '메트포르민 대사가 축적된다'는 표현은 부정확하다.

다만 실제 복용 여부와 젖산·혈액가스·케톤 등의 확인이 필요하다. 고혈당 자체만으로 메트포르민 관련 젖산산증이 확진되는 것은 아니며, 조영제 노출 사실만으로 인과관계를 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 고음이온차 산증/신기능 저하에서 MALA 가능성을 설명하되 복용/젖산 미측정을 구별하고 대사 축적이 아닌 신장 청소율 감소로 교정.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/204353s045%2C205879s022lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000118
