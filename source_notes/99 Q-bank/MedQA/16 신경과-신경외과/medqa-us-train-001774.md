---
type: qbank
schema_version: 1
id: medqa-us-train-001774
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fbf67f166760287733577bfa89208944ff0fedfebc5d781fa40aebce2045b3a0
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "basilar skull fracture"
  - "cerebrospinal fluid rhinorrhea"
  - "halo sign"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rkZDqsJzsoIAg6rOo7KCIIChCYXNhbCBza3VsbCBmcmFjdHVyZSkubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

24세 남성이 안전벨트를 착용한 운전자로서 고속 자동차 충돌에 연루된 지 30분 후 응급실에 왔다. 도착 당시 의식이 명료하고 지남력이 있다. 맥박 112/min, 호흡 29/min, 혈압 100/60 mm Hg이다. 동공은 양측 같고 빛에 반응한다. 이마에 3-cm 열상과 몸통에 여러 멍이 있다. 폐 청진은 정상이고 심장과 복부 진찰도 특이사항이 없다. 오른쪽 무릎이 붓고 압통이 있으며 통증 때문에 관절운동이 제한된다. 0.9% 생리식염수와 정맥 acetaminophen을 투여했다. 2시간 후 양쪽 콧구멍에서 피가 섞인 액체가 저절로 흐르고 앞으로 숙이면 심해진다. 거즈에 묻히면 피 주위로 맑은 액체 고리가 빠르게 확장된다. 추가 평가에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 제12뇌신경 마비
B. 양측 눈둘레 멍
C. 상부 뺨 부위 감각저하
D. 귀 뒤 멍

## 해설

고에너지 두부 외상 후 체위에 따라 늘어나는 혈성 비루는 전두개저 골절과 CSF 누출을 의심하게 한다. 선지 중 양측 눈둘레 멍(B)은 전두개저 골절에 합당하다. Halo sign은 누출을 시사할 수 있지만 CSF에 특이적이지 않으므로 단독 확진 검사는 아니다. 귀 뒤 멍(Battle sign)도 두개저 골절의 소견이며 CSF 누출과 전혀 무관하다는 설명은 틀리다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전두개저 외상성 CSF 비루와 눈둘레 멍 B를 유지하되 halo sign 단독 확진 및 Battle sign 무관이라는 오류를 제거한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng232/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001774
