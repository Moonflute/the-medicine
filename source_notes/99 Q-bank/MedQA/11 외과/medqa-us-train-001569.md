---
type: qbank
schema_version: 1
id: medqa-us-train-001569
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:696dc9ed91ac52c5267d7c279434bdd5d7e62cb27454e2488b362cfbdc47cb8b
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "poststernotomy mediastinitis"
  - "surgical site infection"
related_disease_slugs:
  - MTEg7Jm46rO8L-ywveyDgSDqsJDsl7wgKFdvdW5kIEluZmVjdGlvbikubWQ
question_type: management
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

78세 남성이 실신 후 응급실에 내원했다. 아내와 개를 산책하던 중 갑자기 의식을 잃었다. 큰 박출-감소형 수축기 잡음이 있고 중증 대동맥판막 협착으로 진단받았다. 개방 대동맥판막 치환술 후 합병증 없이 회복했다. 수술 후 3일째 흉골 상처 배액관을 제거했다. 5일째 깊게 숨쉴 때 통증과 흉골 뒤 흉통이 생겼다. 체온은 101.7°F (38.7°C), 혈압은 125/81 mmHg, 맥박은 104회/분, 호흡수는 18회/분이다. 흉골 상처 주위 압통과 절개 주위 홍반이 있으나 벌어짐은 없다. 흉부 X선에서 종격동 확장과 왼쪽 소량 흉수가 보이고 CT 혈관조영에서 피하조직 침윤과 흉골 아래 액체 저류가 보인다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 식도 천공의 수술적 교정
B. 대동맥 손상의 수술적 교정
C. 정맥 항생제와 관찰
D. 정맥 항생제와 수술 상처 변연절제

## 해설


흉골절개 후 발열·흉골 뒤 통증·절개 주변 홍반과 흉골하 액체저류는 심부 흉골창 감염/수술 후 종격동염을 의심하게 한다. 정맥 항생제와 수술적 탐색·변연절제를 병행하는 D가 적절하다. 배양을 확보하고 괴사조직과 감염성 액체를 제거하며 상처 폐쇄 전략을 계획한다. 단순 관찰만으로 치료하거나 식도·대동맥 손상으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001569 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 흉골하 감염을 중격염으로 오역한 것을 종격동염으로 바로잡았다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.jtcvs.org/article/S0022522316308728/pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001569
