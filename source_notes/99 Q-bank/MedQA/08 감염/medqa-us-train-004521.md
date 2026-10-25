---
type: qbank
schema_version: 1
id: medqa-us-train-004521
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:086b74617d9671a642730c9d4c3f23eb67043869597bd81ec6ecee575b6f616a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Streptococcus bovis 균혈증"
  - "대장암"
  - "감염성 심내막염"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: investigation
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
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

65세 남성이 발열과 쇠약감으로 응급실에 왔다. 증상은 어제 시작되어 점점 악화되었다. 과거력으로 비만, 당뇨병, 알코올 남용과 30갑년 흡연력이 있다. 요양원에 거주하며 과거 궤양과 섬망으로 여러 차례 내원했다. 체온은 103°F (39.4°C), 혈압은 122/88 mmHg, 맥박은 분당 129회, 호흡수는 분당 24회, 산소포화도는 99%이다. 신체검사에서 심잡음이 들린다. 반코마이신과 피페라실린-타조박탐을 시작하고 입원했다. 입원 중 혈액배양에서 Streptococcus bovis가 자라 항생제를 적절히 변경했다. 경식도 심초음파는 정상이다. 발열이 감소하고 증상이 호전되었다. 이 환자에게 추가로 필요한 것은 무엇인가?

## 선택지

A. 중독의학 의뢰
B. 대장내시경
C. 중심정맥관 교체 및 심초음파 재검
D. 노인학대에 대한 사회복지 상담

## 해설


S. bovis군, 특히 S. gallolyticus 균혈증은 동반 대장 종양/선종과 연관되어 대장내시경 B로 병변을 평가한다. 이 균혈증이 곧 대장암을 새로 일으켰다는 의미는 아니다. 급성 상태 안정성과 진료 상황에 맞춰 검사하며 모든 항생제 과정이 끝나야만 가능한 것은 아니다. TEE 음성은 대장 병변 평가의 필요성을 없애지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004521 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: S. bovis/gallolyticus와 대장 병변의 연관 B 유지; 균혈증이 암을 일으킨다거나 항생제 완료까지 반드시 기다린다는 오해 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004521
