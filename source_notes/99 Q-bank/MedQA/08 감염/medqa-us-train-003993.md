---
type: qbank
schema_version: 1
id: medqa-us-train-003993
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c500fdd20b17c9a0a4a23e1c4d9cfc3fae27915007eb147b8d73e4c539d62af5
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "급성 신우신염"
  - "복잡성 요로감염"
  - "당뇨병"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: 임상증례 객관식
difficulty: complex
answer: D
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
---

# MedQA US 임상문제

## 문제

45세 여자가 발열, 오한, 오심, 배뇨통으로 내원했다. 4일 전 시작된 증상이 점점 악화되었다. 지난 6개월간 재발성 요로감염이 있었고, 5년 전 진단받은 제2형 당뇨병을 메트포르민으로 치료 중이다. 체온 39.5°C, 혈압 100/70 mmHg, 맥박 90회/분, 호흡수 23회/분이다. 신체검사에서 우측 늑골척추각에 중등도의 압통이 있다. 백혈구 9,500/mm³, 적혈구 4.20×10⁶/mm³, 헤마토크릿 41.5%, 헤모글로빈 13.0 g/dL, 혈소판 225,000/mm³이다. 소변은 진한 황색이고 혼탁하며 pH 5.5, 비중 1.021, 포도당·케톤 음성, 아질산염 및 백혈구에스터레이스 양성, 빌리루빈 음성, 유로빌리노겐 0.6 mg/dL, 단백질 미량, 혈액 음성, 백혈구 25/고배율시야, 세균 다수이다. 소변 배양 및 감수성 결과를 기다리는 중이다. 다음 중 가장 적절한 처치는 무엇인가?

## 선택지

A. 복부와 골반의 조영증강 MRI
B. 신속한 경피적 신루설치를 위해 입원
C. 신장 초음파
D. 정맥 항생제 치료를 위해 입원

## 해설


고열·오한·오심과 CVA 압통·농뇨는 신우신염을 시사한다. 이 환자는 전신증상이 뚜렷하고 당뇨·재발 병력이 있어 D의 입원/정주 항균치료가 선택지 중 적절하다. 배양·내성 및 신기능에 맞춰 조정하고 안정 후 경구 전환을 평가한다. 모든 신우신염이 입원을 필요로 하는 것은 아니며 폐쇄·농양·기종성 감염 또는 반응 불량이 의심되면 영상과 원인 배액이 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003993 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고열·전신증상의 신우신염 입원 IV 치료 D 유지; 모든 신우신염 입원 및 영상/배액 영구 불필요라는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/complicated-urinary-tract-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003993
