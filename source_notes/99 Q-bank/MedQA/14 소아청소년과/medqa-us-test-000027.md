---
type: qbank
schema_version: 1
id: medqa-us-test-000027
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:02de8d05dce1969542bd2845113726b54a3e3268b0ed3da80b5e9f5e003ffdb1
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "크룹"
  - "후두기관기관지염"
  - "첨탑 징후"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7YGs66O5IChDcm91cCkubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

3세 남아가 ‘개가 짖는 듯한 기침’과 청진기 없이도 들리는 고음의 흡기 소음으로 응급실에 내원했다. 지난 몇 시간 동안 기침이 악화되었고 체온 38.3°C, 혈압 118/78 mmHg, 맥박 분당 90회, 호흡수 분당 35회이다. 호흡곤란으로 앉아 몸을 앞으로 기울이고 흉골상 및 늑간 함몰이 있다. 천명 없이 흡기성 협착음이 들리고 짖는 기침과 쉰 목소리가 있다. 흉부 X선에서 예상되는 소견은?

## 선택지

A. 간질성 음영 증가
B. 설상엽의 대엽성 경화
C. 측면 영상의 엄지손가락 자국 징후
D. 첨탑 징후

## 해설

짖는 기침, 쉰 목소리와 흡기성 협착음은 크루프에 부합한다. 영상에서 보일 수 있는 첨탑 징후(D)는 성문하 기도 공기기둥이 좁아지는 소견이다. C의 엄지손가락 징후는 후두개 비대와 관련되어 후두개염을 시사하는 상기도 소견이지 폐 병변이 아니다. 전형적 크루프는 임상적으로 진단하며 영상검사를 일률적으로 요구하지 않는다. 호흡곤란이 있는 소아는 영상보다 기도·호흡 상태 평가와 적절한 처치를 우선한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 첨탑징후를 성문하 협착으로 교정; 후두개염의 엄지징후 C를 폐병변이라고 한 오류 제거. D 유지.
- https://cps.ca/en/documents/position/acute-management-of-croup
- https://www.radiologyinfo.org/en/info/croup

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000027
