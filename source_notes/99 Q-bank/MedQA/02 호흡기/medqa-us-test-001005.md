---
type: qbank
schema_version: 1
id: medqa-us-test-001005
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ea81d2696b3ec4a279294a40caae5db52100bbe5a97d336db1d2278cef69de2b
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환 급성악화"
  - "중증 COPD"
  - "레보플록사신"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: management
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmYXpvbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성이 3일 동안 점점 심해지는 노란-녹색 가래를 동반한 기침과 호흡곤란으로 응급실에 왔다. 고혈압, 고지혈증, 만성폐쇄성폐질환이 있고 지난 1년간 비슷한 증상으로 네 번 입원했다. 체온 102°F(38.9°C), 혈압 156/94 mmHg, 맥박 101회/분, 호흡 26회/분, 실내공기 산소포화도 85%였으며 말하기 어렵고 흉복부 호흡이 비동기적이고 천명음이 들렸다. 산소, 이프라트로피움, 알부테롤, 메틸프레드니솔론을 시작했다. 치료에 추가할 약물은?

## 선택지

A. 세파졸린
B. 세프트리악손
C. 레보플록사신
D. 페니실린

## 해설

정답은 C이다. 호흡곤란과 객담량·농성이 증가하고 저산소혈증을 동반한 중증 COPD 악화이므로 항생제 치료를 고려한다. 제시된 약 중 levofloxacin이 호흡기 병원체와 일부 그람음성균을 포괄하는 선택지이다. 실제 처방은 최근 배양·항생제 노출·지역 내성·이상반응 위험에 맞추며, 모든 COPD 악화에 fluoroquinolone을 일률적으로 쓰는 뜻은 아니다. 반복 입원과 호흡피로가 있어 환기 보조 필요성도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: COPD 악화의 항생제 적응증을 설명하고 fluoroquinolone 세대 비교라는 부적절한 근거 제거.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001005
