---
type: qbank
schema_version: 1
id: medqa-us-train-009658
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:de3ceec3f2dd8dd4bc4294ad92648d8f7249fa05250ffb2b7e53bef4c5dc2aa0
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "sickle cell disease"
  - "겸상적혈구병"
  - "β-globin mutation"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: mechanism
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
---

# MedQA US 임상문제

## 문제

3세 여아가 정기검진을 위해 내원했다. 지속적인 정상적혈구성 빈혈이 있고 가족 중 어머니의 폐색전증과 오빠의 평생 빈혈 병력이 있다. 중이염을 자주 앓았지만 그 외 과거력은 없다. 체온 36.7°C, 혈압 106/74 mmHg, 심박수 111회/분, 호흡수 17회/분이다. 맥박이 강하고 손발톱이 창백하며 실내 공기 산소포화도는 91%, 심전도는 동성 빈맥이다. 말초혈액도말에서 용혈성 빈혈이 보인다. 겸상적혈구병의 병태생리를 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 적혈구의 보체 활성화 민감도 증가로 혈전 위험 증가
B. 적혈구 형태 변화를 일으키는 열성 베타글로빈 돌연변이
C. 산화 스트레스에 민감한 X연관 열성 질환
D. EBV, 마이코플라스마, CLL 또는 류마티스 질환에 의해 이차적으로 발생

## 해설


겸상적혈구병은 HBB의 상염색체 열성 유전 질환이다. HbS는 성숙 β-globin 사슬 6번의 glutamate가 valine으로 바뀐 변이(Glu6Val)이며, 탈산소 상태에서 HbS 중합과 적혈구 겸상화·용혈·혈관폐쇄를 유발한다. 따라서 형태 변화를 일으키는 열성 β-globin 변이(B)가 맞다. Histidine이 glutamine으로 바뀌는 변이가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009658 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원정답 B 유지. HbS 변이를 histidine→glutamine이라고 한 명백한 기전 오류를 β6 glutamate→valine으로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://medlineplus.gov/genetics/gene/hbb/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009658
