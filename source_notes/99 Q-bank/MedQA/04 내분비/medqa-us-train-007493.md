---
type: qbank
schema_version: 1
id: medqa-us-train-007493
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a539babd383d78950c89900a0a6e5fcd073429b3f3ec5f4a20d489f66edecf70
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "유전성 혈색소침착증"
  - "HFE 유전자"
  - "철 과다"
  - "간경변"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
  - MDkg7ZiI7JWhL-ycoOyghOyEsSDtmIjsg4nshozsuajssKnspp0gKEhlcmVkaXRhcnkgSGVtb2Nocm9tYXRvc2lzKS5tZA
question_type: investigation
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9JbnN1bGluR2xhcmdpbmUubWQ
---

# MedQA US 임상문제

## 문제

48세 남자가 한 달 동안 점점 심해지는 전신 피로로 내원했다. 평소 집안일이나 저녁 산책을 할 수 없었다. 고혈압, 고지혈증, 제2형 당뇨병이 있다. 아버지는 60세에 간암으로 사망했다. 담배는 피우지 않고 매일 술 한 잔을 마신다. 아토르바스타틴, 에날라프릴, 메트포르민, 인슐린 글라진을 복용한다. 키는 170cm(5피트 7인치), 체중은 100kg(220lb), BMI는 34.6kg/m²이다. 체온 36.6°C(97.9°F), 맥박 116회/분, 혈압 140/90 mmHg이다. 목덜미와 사지 피부가 과다색소침착되어 있고 간이 오른쪽 늑골연 아래 4cm에서 만져진다. 검사에서 헤모글로빈 10.6 g/dL, MCV 87 µm³, 백혈구 수 9,700/mm³, 혈소판 수 182,000/mm³, 포도당 213 mg/dL, 크레아티닌 1.4 mg/dL, 알부민 4.1 g/dL, 총 빌리루빈 1.1 mg/dL, ALP 66 U/L, AST 100 U/L, ALT 69 U/L, GGT 28 U/L, B형간염 표면항원 음성, C형간염 항체 음성, 철 261 μg/dL, 페리틴 558 ng/dL, 트랜스페린 포화도 83%, 항핵항체 음성이다. 진단을 확진하기 위한 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 복부 CT
B. 복부 초음파
C. 간 생검
D. 유전자검사

## 해설


정답 D. TSAT 83%와 ferritin 상승, 피부색 변화·당뇨·간효소 이상은 철과다를 시사하여 HFE 등 유전성 혈색소침착증 평가를 고려한다. 적합한 유전자형과 철과다 표현형이 함께 있으면 진단을 뒷받침한다. 생검이 모든 환자에서 필요하진 않지만 비전형 유전자형이나 다른 간질환·섬유화 평가에서는 MRI나 생검이 추가될 수 있으므로 절대 불필요하다고 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007493 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 높은 TSAT/철과 ferritin에서 HFE D 취지 유지; 간생검이 어떤 상황에도 필요 없다는 단정 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://easl.eu/wp-content/uploads/2022/06/PIIS01688278220021121.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007493
