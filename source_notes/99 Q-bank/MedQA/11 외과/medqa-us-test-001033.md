---
type: qbank
schema_version: 1
id: medqa-us-test-001033
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f300c91fa63eb121485a90925b6f6cfc7b0303bd544537d092ebc955302f6ad6
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "괴사성 근막염"
  - "괴사성 연조직 감염"
  - "응급 변연절제술"
related_disease_slugs:
  - MDgg6rCQ7Je8L-q0tOyCrOyEsSDqt7zrp4nsl7wgKE5lY3JvdGl6aW5nIEZhc2NpaXRpcykubWQ
question_type: management
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

80세 남성이 갑자기 시작된 오른쪽 하지의 심한 통증을 호소한다. 최근 상기도감염에 따른 COPD 악화로 중환자실에서 알부테롤·이프라트로피움 분무, 지속 산소, 정맥 메틸프레드니솔론과 레보플록사신으로 치료받던 중 발생했다. 올해 COPD 악화로 세 차례 더 입원했다. 2개월 전 관상동맥 우회술 후 좌주관상동맥 심근경색, 경도 인지장애, 제2형 당뇨병이 있다. 복용 약물은 메트포르민, 아스피린, 클로피도그렐, 메토프롤롤, 아토르바스타틴, 갈란타민, 에날라프릴이다. 40갑년 흡연력이 있으나 10년 전 금연했다. 체온 39.0°C, 혈압 100/75 mmHg, 맥박 분당 122회, 호흡수 분당 20회, 실내 공기 산소포화도 88%이다. 사진과 같은 피부병변이 있고 해당 부위는 심한 압통·열감·염발음과 악취 나는 분비물을 보인다. 통증은 진찰 소견보다 심하다. 다음 중 가장 적절한 처치는?

## 선택지

A. 즉시 변연절제술
B. 즉시 변연절제술과 경험적 정맥 항생제
C. 상처 생검
D. 흉부 및 복부 조영 CT

## 해설


괴사성 연조직 감염은 급속히 진행되는 통증·부종·피부 궤양·악취가 특징이며, 즉시 변연절제술과 경험적 정맥 항생제가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001033 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 괴사성 연조직 감염의 수술+항생제 B 유지. 원문에서 누락된 최근 스테로이드·항생제 치료, 당뇨 및 상세 활력징후 등 임상 맥락을 복원했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001033
