---
type: qbank
schema_version: 1
id: medqa-us-train-008685
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d4d0f745b99a959889df5239e4eff91a5572876cd0e9cf9042f19ef9f32781c7
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "ischemic colitis"
  - "colonic ischemia"
  - "supportive management"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tl4jtmIjshLEg64yA7J6l7Je8IChJc2NoZW1pYyBDb2xpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: D
original_answer: C
answer_change_reason: "ACG colon ischemia 지침은 복막염·괴사가 없는 의심 환자에서 초기 제한 대장내시경으로 진단 확인을 권고한다. 'diagnostic evaluation' 질문에서 관찰 C보다 제공된 제한내시경 D가 적절."
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

68세 여성이 2시간 동안 지속된 심한 복통으로 응급실에 내원했다. 최근 혈성 설사를 한 번 했다. 18년 전 당뇨병을 진단받았고 6년 전 고혈압과 허혈성 심장질환을 진단받았다. 의식은 명료하고 지남력은 정상이다. 체온 37.5°C(99.5°F), 혈압 145/90mmHg, 맥박 78회/분, 호흡수 14회/분이다. 복부검사에서 방어와 반발통 없이 경미한 전반적 압통이 있다. 복부 단순 X선은 정상이다. 복부 CT에서 비장만곡부 결장벽 비후와 결장주위 지방 침윤이 보인다. 장 휴식, 정맥 수액, 정맥 항생제를 시작했다. 현재 가장 중요한 진단적 평가는 무엇인가?

## 선택지

A. 혈관조영술
B. 가스트로그라핀 조영 X선
C. 입원 관찰
D. S상결장경검사

## 해설


CT의 비장만곡부 분절성 대장염과 급성 혈성 설사는 허혈성 대장염을 시사한다. 안정적이고 복막염·괴사 단서가 없으므로 선택지 중 S상결장경을 이용한 제한적 내시경 평가(D)가 진단 확인에 적절하다. 병변 원위부까지 최소한 송기하며 필요 생검을 한다. 입원 관찰(C)은 병행 관리이지만 내시경 진단을 대체하지 않으며, 단순 좌측 대장허혈에서 침습적 혈관조영을 일률 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008685 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 안정된 좌측 허혈성 대장염의 진단적 평가는 제한 내시경 D가 적절. C 입원관찰은 관리이지 진단 확인 검사가 아니므로 원답 변경.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://sites.duke.edu/gifellowship/files/2021/07/ACG-Clinical-Guideline-Colon-Ischemia-CI.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008685
