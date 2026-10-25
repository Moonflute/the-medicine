---
type: qbank
schema_version: 1
id: medqa-us-train-000068
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d41f72c4b35dfb40f098c6de3b82291acef15945d4e46b96c54e91a3a54b7f01
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "전신 권태감"
  - "쇠약감"
  - "두통"
  - "오심"
  - "구토"
  - "설사"
  - "빈혈"
  - "혈소판 감소증"
  - "신부전"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rkZDthrUubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1JpdHV4aW1hYi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

37세 여성이 전신 권태감, 쇠약감, 두통, 오심, 구토, 설사를 주소로 응급실에 내원했습니다. 약 이틀 전부터 몸이 좋지 않았다고 합니다. 그녀는 다른 기저 질환이 없으며, 복용하는 약물도 없습니다. 활력 징후는 체온 38.0°C, 심박수 96회/분, 혈압 110/73 mmHg, 실내 공기에서 산소 포화도 96%입니다. 진찰 결과 다소 아파 보이는 여성으로, 졸려 하지만 각성 가능하며 국소 신경학적 결손은 없습니다. 초기 검사 결과 혈액 검사에서 헤마토크릿 26%, 혈소판 80,000/μL, 혈청 크레아티닌 1.5 mg/dL로 나타났습니다. 이 시점에서 가장 적절한 치료는 무엇입니까?

## 선택지

A. 고용량 글루코코르티코이드
B. 사이클로포스파미드 및 리툭시맙
C. 반코마이신 및 세페핌
D. 혈장 교환술

## 해설


빈혈·혈소판감소에 의식 변화와 신기능 이상이 동반되어 혈전성 미세혈관병증, 특히 TTP를 의심한다. TTP 가능성이 높으면 ADAMTS13 결과를 기다리지 않고 혈장교환(D)을 시작하며 면역억제 등 병행 치료를 평가한다. 다만 본문에는 도말·LDH 등 용혈 증거와 ADAMTS13 결과가 없어 확진은 아니다. TTP(혈전성 혈소판감소성 자반증)와 HUS(용혈성요독증후군)는 동의어가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-000068`와 직접 대조했다.
- 판정: TTP와 HUS를 혼용한 해설 교정. 급성 빈혈·혈소판감소·신경증상에서 TTP 의심 시 D 지연 금지 확인. 용혈/ADAMTS13 확진은 미제시임을 명시, platelet /mL 오단위도 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13470878/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000068
