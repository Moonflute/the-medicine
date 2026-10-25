---
type: qbank
schema_version: 1
id: medqa-us-train-002436
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:afa38309a772899a665c1027d9470bf4b34a113a081206e3ef6c578ac36e4037
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "necrotizing fasciitis"
  - "surgical site infection"
  - "urgent debridement"
  - "broad-spectrum antibiotics"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-q0tOyCrOyEsSDqt7zrp4nsl7wgKE5lY3JvdGl6aW5nIEZhc2NpaXRpcykubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 여성이 증상이 있는 자궁근종으로 계획된 전자궁적출술을 받았다. 수술 전 예방적 항생제를 투여했고 수술 후 1일째 요도 카테터를 제거했다. 제2형 당뇨병 등이 있으며 수술 후 4일째 복통, 입원 중 3~4회의 묽은 변과 발열이 발생했다. 체온 38.3°C, 혈압 97/59 mmHg, 맥박 106회/분이었다. 수술 상처에 새로 홍반과 어두운 반점, 다량의 혼탁한 분비물이 있고 상처 주변 감각이 감소했다. 폐는 깨끗하고 복부는 부드러우며 요검사는 정상이나 소변배양에서 대장균이 100,000 CFU/mL 이상 자랐다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 저분자량 헤파린을 중단한다
B. 경구 레보플록사신을 3일간 투여한다
C. 반코마이신/피페라실린-타조박탐/클린다마이신을 투여하고 관찰한다
D. 반코마이신/피페라실린-타조박탐/클린다마이신을 투여하고 수술 상처를 절개·변연절제한다

## 해설

수술 상처의 새 어두운 반점·다량 분비물·감각저하와 전신독성은 괴사성 연조직감염을 강하게 시사한다. 정맥 광범위 항생제와 즉시 수술 탐색·변연절제(D)가 필요하며 관찰만 하며 지연하지 않는다. 반코마이신과 피페라실린-타조박탐은 광범위 경험적 범위를 제공하고 독소 매개 감염이 의심되면 클린다마이신을 포함할 수 있으며 배양으로 조정한다. 소변의 E.coli는 별개 검체로서 상처 원인균이 확정되었다는 뜻이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 소변 E.coli 배양을 수술 상처 원인균으로 오연결한 오류를 교정하고 원문 당뇨·저혈압·빈맥을 복원했다. 괴사성 감염의 즉시 항생제+절제 D를 유지한다.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002436
