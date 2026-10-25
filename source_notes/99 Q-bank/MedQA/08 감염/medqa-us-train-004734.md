---
type: qbank
schema_version: 1
id: medqa-us-train-004734
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:226e249a529255b10343d41a89e2d92844d17797aa0d7ddb87a8c32719a0196f
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "중증 지역사회획득 폐렴"
  - "패혈성 쇼크"
  - "폐렴성 패혈증"
related_disease_slugs:
  - MTEg7Jm46rO8L-2MqO2YiOyEsSDsh7ztgawgKFNlcHRpYyBTaG9jaykubWQ
  - MDgg6rCQ7Je8L-yngOyXreyCrO2ajCDqsJDsl7wubWQ
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
question_type: management
difficulty: complex
answer: A
original_answer: D
answer_change_reason: "MRSA 위험인자 없는 입원 CAP에서 ATS/IDSA 권고 β-lactam+macrolide에 해당하는 A가 적절. 원정답D는 비정형균을 빠뜨리고 근거없는vancomycin을 선택한 오류."
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

59세 여성이 2일 동안 악화되는 발열, 오한, 권태감, 생산성 기침과 호흡곤란으로 응급실에 왔다. 3일 전 남아프리카 여행에서 돌아왔다. 제2형 당뇨병, 고혈압과 정맥류가 있다. 메트포르민, 리시노프릴과 아토르바스타틴을 복용한다. 체온은 39.4°C (102.9°F), 맥박은 분당 102회, 혈압은 94/68 mm Hg, 호흡수는 분당 31회이다. 비강 캐뉼라로 산소 2L를 투여한 상태에서 산소포화도는 91%이다. 왼쪽 폐기저부의 호흡음이 감소하고 타진음이 둔하다. 피부는 매우 따뜻하고 관류가 잘 된다. 혈액과 소변 배양을 채취하고 정맥 수액 소생을 시작했다. 다음 중 관리에서 가장 적절한 단계는 무엇인가?

## 선택지

A. 정맥 세프트리악손과 아지스로마이신
B. 에리트로마이신
C. 외부 냉각과 정맥 아세트아미노펜
D. 정맥 반코마이신과 세프트리악손

## 해설


저혈압·저산소증·빈호흡을 동반한 지역사회획득폐렴으로 신속한 입원 항균치료와 지지가 필요하다. 제시된 자료에는 과거 호흡기 MRSA 분리나 최근 입원 정주 항생제 등 검증된 MRSA 위험인자가 없다. 선택지 A ceftriaxone+azithromycin은 전형/비정형 병원체를 포함하는 권고 입원 CAP 요법이다. D vancomycin+ceftriaxone은 비정형 범위가 빠지고 여행·중증도만으로 MRSA 범위를 일률 추가할 근거가 되지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004734 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MRSA 위험인자 없는 지역사회획득폐렴에서 원정답 D는 비정형균 범위가 빠지고 vancomycin 근거도 없다. 현행 입원 CAP 요법 A로 변경.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap-in-adults

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004734
