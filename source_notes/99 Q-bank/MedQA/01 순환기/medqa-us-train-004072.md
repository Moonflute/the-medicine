---
type: qbank
schema_version: 1
id: medqa-us-train-004072
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce103c699bbb9e5bf2de0cd499254e49d19086c5d9a60d36b0c17a607c8f32ac
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 심근경색"
  - "니트로글리세린 유발 저혈압"
  - "cGMP"
question_type: 임상증례 객관식
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

67세 남자가 갑자기 시작된 호흡곤란과 명치 통증으로 응급실에 왔다. 위식도역류질환, 비만, 제2형 당뇨병, 불안, 녹내장, 과민성장증후군 병력이 있다. 오메프라졸, 인슐린, 메트포르민, 리시노프릴, 필요 시 클로나제팜을 복용한다. 체온 37.5°C, 맥박 112회/분, 혈압 90/70 mmHg, 호흡수 18회/분, 실내 공기 산소포화도 95%이다. 폐 청진은 양측 정상이고 경정맥 팽창이 뚜렷하지만 심장 청진에서 특이 소견은 없다. 응급실에서 심전도를 시행했다. 수액을 급속 주입하자 맥박은 80회/분, 혈압은 105/75 mmHg가 되었다. 이후 베타차단제, 산소, 니트로글리세린, 모르핀, 정맥 수액, 아스피린을 투여했다. 반복 측정한 혈압은 80/65 mmHg였다. 현재 활력징후를 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 베타아드레날린 차단
B. cGMP 증가
C. 체액 과다
D. 좌심실 부전

## 해설


베타 차단제 투여 후 혈압이 지속적으로 저하되는 것은 니트로글리세린에 의해 cGMP가 증가해 혈관이 확장되기 때문이다. 따라서 현재 활력징후는 ‘cGMP 증가’에 기인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004072
