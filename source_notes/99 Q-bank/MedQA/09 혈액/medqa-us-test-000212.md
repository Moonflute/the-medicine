---
type: qbank
schema_version: 1
id: medqa-us-test-000212
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:84d2e0c8521f2690908d1bac171a3deb96dc84341a183ef09015ee789f1180c9
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "HIV 감염"
  - "림프종"
  - "전신 림프절병증"
  - "B 증상"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
question_type: investigation
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
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

65세 남성이 일주일 전부터 발생한 통증 없는 목 부종으로 진료를 받으러 왔다. 간헐적 발열과 심한 야간 발한도 있어 다음 날 침대 시트를 갈아야 할 정도라고 한다. 10년 전 진단받은 인간면역결핍바이러스(HIV) 감염이 있으며 항레트로바이러스 약물을 항상 잘 복용하지는 않았다고 인정한다. 20갑년의 흡연력이 있으나 음주나 기분전환용 약물 사용은 없다. 지난 2개월 동안 의도하지 않게 6 kg(13.2 lb)이 감소했다. 체온은 37.8℃(100.0℉), 혈압은 120/75 mmHg였다. 진찰에서 목 앞삼각과 뒤삼각 양쪽에 평균 직경 2 cm의 압통 없는 림프절이 여러 개 만져졌다. 오른쪽 겨드랑이와 서혜부 림프절도 커져 있었다. 심폐 진찰은 정상이었고 타진상 비장 크기는 16 cm였다. 검사 결과 혈색소 9 g/dL, 평균 적혈구 용적 88 μm³, 백혈구 18,000/mm³, 혈소판 130,000/mm³, 혈청 크레아티닌 1.1 mg/dL, 혈청 젖산탈수소효소 1,000 U/L였다. 오른쪽 표재성 겨드랑이 림프절 절제생검을 시행했고 조직병리학적 분석으로 가장 가능성 높은 진단을 확인했다. 이 환자의 평가에서 다음으로 시행할 가장 적절한 진단 검사는?

## 선택지

A. 항핵항체
B. C형간염바이러스 항체
C. JAK2 돌연변이
D. 주석산 저항성 산성 인산분해효소(TRAP) 검사

## 해설


전신 림프절병증·B증상·높은 LDH로 림프종을 고려하며 생검 진단 뒤 동반 HCV 감염을 검사하는 B가 적절하다. HCV는 일부 B세포 림프종과 연관되고 치료계획에도 영향을 줄 수 있다. TRAP는 전통적으로 털세포백혈병과 관련하며 호지킨림프종 표지가 아니다. 구체적 조직형은 본문에 기술되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000212 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 림프종/HIV의 동반감염 평가 HCV B 유지. HCV는 무관·TRAP는 Hodgkin이라는 정반대 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://oncologypro.esmo.org/content/download/233774/3945164/file/2019-ESMO-ESO-Course-Valencia-Understanding-Treating-Lymphomas-Challenges-Maria-Jose-Terol.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000212
