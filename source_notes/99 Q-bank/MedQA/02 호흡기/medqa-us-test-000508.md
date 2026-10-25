---
type: qbank
schema_version: 1
id: medqa-us-test-000508
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c912da316a8374eed0a97e7ff1e6edafc0a665429fec031f080c7d97f8e59be1
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "병원획득폐렴"
  - "그람음성균 폐렴"
  - "녹농균 위험"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ygle2YlSDtj5DroLQgKFR5cGljYWwgUG5ldW1vbmlhKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvU2FsbWV0ZXJvbC5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGlvdHJvcGl1bS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ29saXN0aW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRXJ0YXBlbmVtLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzoxMCDsooXslpEvT3hhbGlwbGF0aW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남성이 하루 동안 지속된 기침, 호흡곤란, 발열로 응급실에 왔다. 녹색 가래가 소량 나왔다. 전이성 대장암으로 5-플루오로우라실, 류코보린, 옥살리플라틴 화학요법을 3주기 받았고 마지막 치료는 2.5개월 전이었다. 만성폐쇄성폐질환이 있어 지난 1년 동안 급성 악화로 항생제와 프레드니솔론 치료를 세 번 받았다. 플루티카손-살메테롤과 티오트로피움 브로마이드 흡입제를 사용하며 48갑년의 흡연력이 있다. 체온 39.1°C(103.1°F), 맥박 112회/분, 호흡 32회/분, 혈압 88/69 mmHg, 실내 공기 산소포화도 88%였다. 폐에서 미만성 수포음과 론카이가 들렸고 흉부 X선에서 왼쪽 상엽 침윤이 보였다. 혈액배양 2세트를 채취했고 기관내 흡인물 그람염색에서 그람음성 막대균이 보였다. 큰 정맥로 2개를 삽입하고 정맥 수액을 투여했다. 가장 적절한 약물치료는?

## 선택지

A. 세프트리악손과 아지트로마이신
B. 에르타페넴
C. 콜리스틴
D. 세페핌과 레보플록사신

## 해설

정답은 D이다. 저혈압·저산소혈증을 동반한 중증 폐렴이며 COPD, 반복 항생제 치료와 항암치료 병력이 있고 그람음성 막대균이 관찰되었다. 제시된 선택지에서는 녹농균까지 포괄하는 cefepime과 levofloxacin 조합이 의도된 경험적 치료이다. 병원에 온 시점의 폐렴을 단순히 병원획득폐렴이라고 부르지 않는다. 실제 항녹농균 치료 필요성은 과거 균 분리·최근 입원/정맥 항생제·지역 위험요인으로 평가하고 배양 결과에 따라 축소해야 하며, 녹색 객담만으로 녹농균을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 입원 후 발생 자료가 없는 사례를 병원획득폐렴으로 단정한 오류 제거; 중증 폐렴과 항녹농균 범위의 문항 맥락 설명.
- https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap-in-adults

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000508
