---
type: qbank
schema_version: 1
id: medqa-us-train-000477
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3b1dc30fc8222df26c8a7955976eac53329a27d745341096f09ac0877a748f55
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "syncope"
  - "polymorphic ventricular tachycardia"
  - "torsades de pointes"
  - "prolonged QT interval"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2YiOq0gOuvuOyjvOyLoOqyveyEsSDsi6Tsi6AgKFZhc292YWdhbCBTeW5jb3BlKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOyLpCDruYjrp6UgKFZlbnRyaWN1bGFyIFRhY2h5Y2FyZGlhKS5tZA
  - MDEg7Iic7ZmY6riwL-uLpO2YleyEsSDsi6zsi6Qg67mI66elIChUZFApIChUb3JzYWRlcyBkZSBQb2ludGVzIChUZFApLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
---

# MedQA US 임상문제

## 문제

62세 남성이 실신으로 응급실에 내원했다. 환자는 식료품을 차로 옮기던 중 갑작스러운 두근거림이 발생한 후 의식을 잃었다고 보고했다. 그 이후의 세부 사항은 기억하지 못하며, 흉통이나 어지럼증은 없다. 고혈압, 제2형 당뇨병, 위마비(gastroparesis), 무릎 골관절염의 과거력이 있다. 복용 중인 약물로는 리시노프릴(lisinopril), 메트포르민(metformin), 그리고 구역질 시 필요에 따라 복용하는 온단세트론(ondansetron)이 있다. 또한 만성 통증으로 매일 메타돈(methadone)을 복용한다. 이마의 찰과상을 제외하고는 건강해 보인다. 체온은 37.2°C, 심박수는 분당 104회로 규칙적이며, 혈압은 135/70 mmHg이다. 응급실에 있는 동안 환자는 다시 의식을 잃었다. 원격 심전도(telemetry)상 QRS 축이 주기적으로 변하는 다형성 심실빈맥(polymorphic ventricular tachycardia)이 관찰되었으며, 이는 30초 후 자발적으로 회복되었다. 일반혈액검사(CBC), 혈청 전해질 농도, 혈청 갑상선 기능 검사 결과는 모두 정상이다. 심장 효소 수치도 정상 범위 내에 있다. 이 환자의 실신에 대한 가장 가능성 있는 기저 원인은 무엇인가?

## 선택지

A. QT 간격 연장
B. 이형 협심증(Prinzmetal angina)
C. 브루가다 증후군(Brugada syndrome)
D. 저마그네슘혈증

## 해설


다형성 심실빈맥이 주기적으로 나타나고 전해질·심근 효소가 정상인 경우, QT 간격 연장이 가장 흔한 원인이다. 연장된 QT는 토르사드스(토르사드스) 발생을 일으켜 실신을 초래한다. 따라서 기저 원인은 QT 간격 연장이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000477
