---
type: qbank
schema_version: 1
id: medqa-us-train-000016
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5e5b4773bb2bde8eb5d9d67cf46d72b8a2d9d53a11f51ab38236246ea8627b9e
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "다리 통증"
  - "당뇨병"
  - "고혈압"
  - "비만"
  - "심방세동"
  - "급성 사지 허혈"
  - "말초동맥질환"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

68세 남성이 다리 통증으로 응급실에 내원했습니다. 그는 밖에서 걷던 중 갑자기 통증이 시작되었다고 말합니다. 환자는 당뇨병, 고혈압, 비만, 심방세동의 과거력이 있습니다. 그의 체온은 99.3°F (37.4°C), 혈압은 152/98 mmHg, 맥박은 97회/분, 호흡수는 15회/분이며, 실내 공기에서 산소포화도는 99%입니다. 신체 검진에서 왼쪽 다리가 차갑고 창백한 것이 특징적입니다. 환자의 왼쪽 다리 감각은 오른쪽 다리에 비해 현저히 감소했으며, 왼쪽 다리의 근력은 1/5입니다. 다음 중 관리의 최선의 다음 단계는 무엇입니까?

## 선택지

A. 단계적 운동과 아스피린
B. 헤파린 점적 주입
C. 수술적 혈전 제거술
D. 조직 플라스미노겐 활성제

## 해설


갑작스러운 통증·창백·차가움과 뚜렷한 감각저하·근력 1/5는 급성 하지허혈, 특히 즉시 위협받는 사지 가능성을 시사한다. 금기가 없으면 진단 즉시 정맥 비분획 헤파린으로 혈전 진행과 추가 색전을 억제한다(B). 헤파린 자체는 혈전을 녹이는 약이 아니다. 동시에 혈관외과 응급 평가와 신속한 재관류를 진행해야 하며, 운동장애가 있는 사지에서 헤파린의 효과를 기다리며 수술을 미뤄서는 안 된다. 색전제거술 등 재관류 방식은 사지 생존가능성·해부학·시간·전문인력에 따라 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000016 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 헤파린을 혈전용해제로 설명하고 재관류 수술을 보존치료 실패 뒤로 미룬 위험한 해설을 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000016
