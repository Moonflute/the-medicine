---
type: qbank
schema_version: 1
id: medqa-us-train-009145
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:323830b96b29cb49256ee6daf8118490d651387e840960ac2764d3501f207456
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "descending mediastinitis"
  - "하행성 종격동염"
  - "retropharyngeal infection"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yEuOuhnOy5uOyXvCAoTWVkaWFzdGluaXRpcykubWQ
question_type: prevention
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
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
---

# MedQA US 임상문제

## 문제

50세 남자가 전날 시작된 진행성 흉골 뒤 흉통과 호흡곤란으로 응급실에 내원했다. 통증은 심하고 흡기 시 악화되며 목으로 방사된다. 지난 4일 동안 인후통과 목 통증도 있었다. 이 기간 내내 침대에 누워 지냈고 식욕이 저하되었다. 1주일 전 소화성 궤양병으로 상부 내시경을 받았다. 제2형 당뇨병, 소화성 궤양병, 고지혈증, 고혈압이 있고 유일한 약물은 오메프라졸이다. 흡연과 음주는 하지 않는다. 심한 고통을 호소하며 체온 39.1°C, 맥박 108회/분, 호흡수 28회/분, 혈압 88/46 mmHg이다. 폐 청진은 깨끗하고 심장 진찰에서는 빈맥 외에 이상이 없다. 복부는 부드럽고 압통이 없다. 통증 때문에 입을 벌릴 수 없어 구인두 진찰은 제한적이다. 헤마토크릿 42%, 백혈구 13,800/mm³, 혈소판 205,000/mm³이다. 응급실에서 삽관하고 적절한 치료를 시작했다. 흉부 X선에서 종격동 확장이 보인다. 다음 중 이 환자의 상태를 예방했을 가능성이 가장 높은 것은 무엇인가?

## 선택지

A. 심낭천자
B. 암피실린-설박탐 정맥 투여
C. 혈압 조절
D. 레보플록사신 정맥 투여

## 해설


선행 인후통·목 통증과 개구제한 뒤 종격동 확장·고열·쇼크는 심경부 감염의 하행성 종격동염을 고려하게 한다. 조기에 구강인두의 호기성·혐기성균을 포함해 치료하는 ampicillin-sulbactam(B)이 제시된 선택지 중 합당하다. 내시경 후 식도 천공도 감별해야 하지만 원문에는 천공이 확정되어 있지 않다. 일반적인 진단 상부내시경 전 모든 환자에게 이 항생제를 예방 투여하라는 뜻이 아니다. 이미 발생한 종격동염은 광범위 항생제뿐 아니라 적절한 배농·감염원 제어가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009145 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 모든 내시경에 예방 항생제가 필요하다는 인상을 제거하고 심경부감염/종격동염의 조기 광범위 치료로 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/ejcts/article/51/1/10/2670570
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009145
