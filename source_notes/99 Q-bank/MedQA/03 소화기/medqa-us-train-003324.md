---
type: qbank
schema_version: 1
id: medqa-us-train-003324
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c664b010dc5964741e861cea7a0e517e619bffbc09a9091dbe576b8cb899092c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "ruptured hepatic adenoma"
  - "hepatic adenoma"
  - "oral contraceptive and anabolic steroid exposure"
  - "hemoperitoneum"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 운동 중 갑자기 악화된 진행성 둔한 복통으로 응급실에 왔다. 우측 상복부를 누르면 10/10 통증이고 혈압 80/40 mmHg, 맥박 110회/분이다. 우울증, 불안, 치료된 임균성 요도염 병력이 있고 성생활 중이며 콘돔은 사용하지 않는다. 매일 표준 알코올 5잔 이상을 마시고 피트니스 대회를 준비하며 최근 체중을 크게 줄였다. 경구피임약, 플루옥세틴, 알프라졸람, 이부프로펜, 아세트아미노펜, 엽산을 복용한다. 진찰에서 근육질의 어깨와 굵은 목이 보이며 이마와 등에 여드름이 있다. 체온 37.5°C, 호흡수 15회/분, 실내 공기 산소포화도 96%이다. 정맥 수액을 시작하고 검사실 검사를 의뢰했으며 소변 β-hCG 검사를 주문했다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 방사선 불투과성 결석에 의한 총담관 폐색
B. 간정맥 혈류 폐색
C. 간 내 혈관성 확장
D. 배아의 자궁외 착상

## 해설

경구피임약 복용과 원문에 제시된 근육질 체형·여드름 등 동화작용 스테로이드 사용을 의심하게 하는 단서에서, 간 내 혈액으로 찬 확장성 공간을 형성하는 간자색반병(peliosis hepatis)을 고려한다. 병변의 출혈이나 파열은 갑자기 심해진 우상복부 통증과 저혈압을 설명할 수 있으므로, 제시된 보기 중 C, 간 내 혈관성 확장이 출제 의도에 가장 합당하다.

이 표현형만으로 스테로이드 사용이나 간자색반병이 확진되는 것은 아니다. 경구피임약 관련 간세포선종 출혈, 간정맥 폐색 및 자궁외임신 등도 실제 진료에서는 감별해야 하며, 쇼크 소생과 임신검사 및 영상 평가가 필요하다. 임신검사 결과를 확인하기 전 자궁외임신을 배제해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 구루병 해설을 간자색반병(peliosis hepatis)의 혈액충만 공간/출혈 설명으로 교체. 원문에 있던 근육질 어깨·굵은 목·여드름 및 초기 소생/임신검사 문맥의 번역 누락 복원. 원정답 C 유지.
- https://doi.org/10.1016/j.jhep.2025.08.001

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003324
