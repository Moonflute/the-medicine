---
type: qbank
schema_version: 1
id: medqa-us-train-006321
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:41780201a16ea92a27e97ec8769b89d861c9016392be868dbc4cabe20fdfbe9e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "유전성 혈색소침착증"
  - "간세포암"
  - "철 과부하"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLjtj6zslZQgKEhlcGF0b2NlbGx1bGFyIENhcmNpbm9tYSkubWQ
  - MDkg7ZiI7JWhL-ycoOyghOyEsSDtmIjsg4nshozsuajssKnspp0gKEhlcmVkaXRhcnkgSGVtb2Nocm9tYXRvc2lzKS5tZA
question_type: prognosis
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 6개월 동안 점점 심해지는 피로감과 성욕 감소로 내원했다. 양손 관절의 통증도 호소한다. 에날라프릴로 조절되는 고혈압 병력이 있다. 흡연이나 불법 약물 사용은 하지 않는다. 주말에 맥주 2~3잔을 마신다. 활력징후는 정상이다. 신체진찰에서 피부가 짙게 그을려 있고 고환 크기가 감소되어 있다. 양손의 제2 및 제3 중수지관절에 압통이 있고 운동 범위가 제한되어 있다. 간은 오른쪽 늑골 아래 2~3cm까지 만져진다. 검사 결과는 다음과 같다.
페리틴 250 μg/L
아스파르테이트 아미노전이효소 70 U/L
알라닌 아미노전이효소 80 U/L
포도당 250 mg/dL
이 환자에게 다음 중 어떤 합병증이 발생할 위험이 가장 높은가?

## 선택지

A. 비호지킨 림프종
B. 간세포암
C. 진행성 중심성 비만
D. 췌장암

## 해설

피부색소·DM·MCP관절병·성선저하/간비대 조합은 혈색소침착증을 의심하게 한다. 관련된 중대한 합병증은 HCC B이며 특히 진행섬유화/간경변에서 위험이 높다. Ferritin250만으로 남성의 명확한 철과부하를 확진할 수 없고 transferrin saturation·유전/간평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Ferritin250을 남성에서 명백히 높다고 한 수치해석과 HCC가 모든철과부하의 최다합병증이라는 과장 교정.
- https://easl.eu/wp-content/uploads/2022/06/PIIS01688278220021121.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006321
