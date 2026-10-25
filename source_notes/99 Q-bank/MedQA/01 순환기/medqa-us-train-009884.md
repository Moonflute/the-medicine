---
type: qbank
schema_version: 1
id: medqa-us-train-009884
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:414a5e0082f2afd28e96143a49e18bd6c54764d9beea6359f3db70ca7431b7eb
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "실데나필-질산염 상호작용"
  - "저혈압"
  - "급성 심근경색"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
question_type: mechanism
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSXNvc29yYmlkZU1vbm9uaXRyYXRlLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 남성이 갑자기 시작된 흉통으로 응급실에 내원했다. 흉골 뒤 통증이 왼팔로 방사된다. 고혈압, 당뇨병, 발기부전, 양성 전립선비대증, 공황장애가 있다. 아스피린, 리시노프릴, 메트포르민, 실데나필, 프라조신, 시탈로프람을 복용한다. 심전도에서 측벽 유도에 새 ST 상승이 보인다. 심장도관검사에서 좌회선 관상동맥의 완전 폐색이 확인되어 스텐트를 삽입했다. 클로피도그렐과 이소소르비드 모노니트레이트를 처방받고 퇴원했으나, 5일 후 실신을 호소하며 다시 내원했다. 체온 37.2°C, 혈압 89/53 mmHg, 맥박 분당 90회이며 진찰은 특이사항이 없다. 심전도는 ST나 T파 이상 없이 측벽 Q파를 보인다. 다음 중 이 환자 상태의 가장 가능성 높은 원인은?

## 선택지

A. 섬유소성 심낭염
B. 약물 상호작용
C. 심근벽 파열
D. 스텐트 혈전증

## 해설

이소소르비드 모노니트레이트와 실데나필을 함께 사용하면 NO–cGMP 경로의 혈관확장이 증폭되어 심한 저혈압과 실신이 발생할 수 있으므로 B가 적합하다. 이 병용은 금기이며 프라조신도 저혈압에 기여할 수 있다. 클로피도그렐이 PDE5 억제제와 같은 방식으로 혈관을 확장하여 생긴다는 기존 설명은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저혈압 상호작용의 원인 약물을 클로피도그렐이 아닌 질산염-실데나필 병용으로 교정.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a1c3a2a2-8cf5-41c3-9c86-54290570d916

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009884
