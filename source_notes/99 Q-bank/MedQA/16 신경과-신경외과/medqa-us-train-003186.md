---
type: qbank
schema_version: 1
id: medqa-us-train-003186
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:79e39cc76e587ea2356fba558571f64065e4f789c040c5a639bbb916eee7e1b0
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "optic neuritis"
  - "multiple sclerosis relapse"
  - "internuclear ophthalmoplegia"
  - "high-dose corticosteroid"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-yLnOyLoOqyveyXvCAob3B0aWMgbmV1cml0aXMpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 여성이 갑자기 시작된 왼쪽 눈의 통증성 시력 소실로 응급실에 왔다. 과거력은 사지 저림으로 원인이 밝혀지지 않은 응급실 방문 몇 차례뿐이다. 체온 37.8°C, 혈압 122/83 mmHg, 맥박 100회/분, 호흡수 15회/분, 산소포화도 98%이다. 뇌신경검사에서 오른쪽을 볼 때 왼쪽 눈을 안쪽으로 모을 수 없다. 다음 중 가장 적절한 치료는?

## 선택지

A. 에스트리올
B. 글라티라머 아세테이트
C. 인터페론-베타
D. 메틸프레드니솔론

## 해설

통증성 시력저하와 왼눈 내전 장애, 과거 반복된 감각증상은 다발성경화증과 관련된 급성 탈수초성 시신경염 및 핵간안근마비를 시사한다. 기능을 크게 저해하는 급성 악화에는 고용량 메틸프레드니솔론(D)이 적절하며 정맥 1 g/일 3–5일은 중증 악화 등에서 사용하는 요법이다. 스테로이드는 회복 속도를 높이지만 전형적 시신경염의 장기 최종 시력이 반드시 더 좋아진다는 뜻은 아니다. 글라티라머와 인터페론-베타는 장기 질환조절제로 급성 시력저하를 신속히 치료하는 대안이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 시신경염에서 스테로이드가 장기 시력 회복률을 높인다는 과장과 질환조절제의 역할 혼동을 수정했다. 시신경염·핵간안근마비를 동반한 탈수초성 급성 악화의 D를 유지한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng220/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003186
