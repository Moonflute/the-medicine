---
type: qbank
schema_version: 1
id: medqa-us-train-006056
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ab591eba9fab8ef791192d4755618492f299c637b97e75c04a55436de035c7ef
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "식도 이물"
  - "생선뼈 식도폐색"
  - "응급 내시경"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66y86rG0IOyCvO2CtCAoRm9yZWlnbiBCb2R5IEluZ2VzdGlvbikubWQ
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
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvR2x1Y2Fnb24ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남성이 급성으로 시작된 연하곤란, 연하통, 경미한 흉골 뒤 흉통, 침분비 증가 및 피가 섞인 가래로 입원했다. 3시간 전 식사 중 생선을 먹다가 증상이 시작되었다. 5년 전 외상성 식도 파열을 봉합한 병력이 있다. 활력징후는 혈압 140/90 mmHg, 심박수 분당 87회, 호흡수 분당 16회, 체온 36.8°C(98.2°F)이다. 창백하고 깊게 호흡하며 구강은 정상이고 인두는 홍반성이지만 병변은 보이지 않는다. 폐, 심혈관 및 복부검사는 정상이다. 다음 중 어떤 중재가 필요한가?

## 선택지

A. 정맥 내 글루카곤 투여
B. 폴리 카테터 제거
C. 응급 내시경
D. 매길 겸자로 제거

## 해설

생선 섭취 직후 연하곤란·연하통·침분비 증가와 혈성가래는 날카로운 식도이물/폐색을 의심해 응급내시경 C가 필요하다. 분비물 처리와 기도·천공 위험을 평가하며 약물이나 맹목적 제거로 지연하지 않는다. 본문은 호흡곤란 자체를 확정한 것이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 날카로운 식도이물 C의 응급내시경 적응증을 호흡곤란 발생 단정 없이 설명.
- https://doi.org/10.1055/s-0042-100456

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006056
