---
type: qbank
schema_version: 1
id: medqa-us-train-000116
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ba21c99f94eb92b048f1e2d33c0891c01b11b13ea83dd43c7ecb00991cfbc64
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "Acute interstitial nephritis"
  - "Acute glomerulonephritis"
  - "Acute tubular necrosis"
  - "IgA nephropathy"
related_disease_slugs:
  - MDUg7Iug7J6lL0lnQSDsvantjKXrs5Hspp0gKElnQU4pIChJZ0EgTmVwaHJvcGF0aHkpLm1k
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
  - MDUg7Iug7J6lL-yEuOq0gOyCrOydtOyniCDsvantjKXsl7wgKFR1YnVsb2ludGVyc3RpdGlhbCBOZXBocml0aXMpLm1k
  - MDUg7Iug7J6lL-yCrOq1rOyytOyniO2ZmC5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvU2ltdmFzdGF0aW4ubWQ
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 여성이 급성 부비동염으로 12일 동안 아목시실린(amoxicillin)을 복용해 왔다. 환자는 목, 등, 몸통에 반점상 발진이 발생하였다. 이에 아목시실린을 세팔렉신(cephalexin)으로 변경하여 1주일간 추가로 복용하였다. 발진은 호전되었으나, 부비동염이 나았음에도 불구하고 지속되는 피로감, 옆구리 통증, 발열을 호소하며 내원하였다. 환자는 본태성 고혈압, 고지혈증, 위식도 역류 질환의 과거력이 있다. 리시노프릴(lisinopril), 심바스타틴(simvastatin), 오메프라졸(omeprazole)을 안정적으로 복용 중이었다. 오늘 활력징후는 체온 37.9°C, 혈압 145/90 mm Hg, 맥박 75회/분, 호흡 16회/분이었다. 신체 검진상 특이 소견은 없었다. 혈청 요소(urea)와 크레아티닌(creatinine) 수치가 상승하였다. 소변 검사에서 백혈구뇨(leukocyturia)가 관찰되었으나, 소변 세균 배양 검사는 음성이었다. 한셀 염색(Hansel’s stain)을 시행한 소변 세포 원심분리 검사에서 호산구성 과립 세포질을 가진 이핵 세포(binucleated cells)가 3% 관찰되었다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 급성 간질성 신염
B. 급성 사구체신염
C. 급성 세뇨관 괴사
D. IgA 신병증

## 해설

정답은 A이다. 최근 amoxicillin/cephalexin 사용 뒤 발진·발열·AKI와 무균성 백혈구뇨가 발생해 약물성 급성 간질성 신염에 합당하다. 기존에 안정적으로 복용하던 lisinopril을 유일 원인으로 지목할 근거는 없다. PPI 등 다른 원인약도 검토한다. Hansel 염색의 호산구는 보조 단서이나 민감도·특이도가 제한적이므로 단독 확진검사는 아니다. 호산구의 전형적 핵은 두 엽 형태이며 이핵 세포 자체가 진단 기준인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 오래 복용한 lisinopril보다 새 β-lactam 노출과 발진의 시간적 연관을 반영.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000116
