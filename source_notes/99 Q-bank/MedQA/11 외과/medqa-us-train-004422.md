---
type: qbank
schema_version: 1
id: medqa-us-train-004422
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7c31d6d99f2ea8a7c00e517591dba2adf06286448e6dc7fdbe36ef8136e66a32
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "복부 둔상"
  - "복강 내 출혈"
  - "위장관 천공"
  - "외상성 복막염"
related_disease_slugs:
  - MTEg7Jm46rO8L-q4ieyEsSDrs7Xspp0gKEFjdXRlIEFiZG9tZW4pLm1k
question_type: management
difficulty: complex
answer: C
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

41세 남성이 대형 시멘트 판을 운반하던 중 복부를 맞은 뒤 응급실에 이송되었다. 현장에 도착한 구급대원이 처음 평가했을 때 혈압은 110/80 mm Hg, 심박수는 분당 85회였고 호흡곤란 징후는 없었다. 입원 시 의식은 명료하지만 고통스러워하며 심한 전반적 복통과 심한 쇠약감을 호소한다. 현재 활력징후는 혈압 90/50 mm Hg, 심박수 분당 96회, 호흡수 분당 19회, 체온 37.4°C (99.3°F), 실내 공기 산소포화도 95%이다. 폐 청진은 깨끗하다. 심장 진찰에서 맥압이 좁다. 복부검사에서 명치와 배꼽 주위에 큰 멍이 보인다. 복부는 팽창되어 있고 전반적인 압통, 반발통과 근육 방어가 있으며 명치 부위에서 가장 심하다. 명치 부위 타진은 고음성이며 오른쪽 상복부에서 간의 둔탁음이 소실되어 있다. 비위관을 흡인하자 혈액성 내용물이 나온다. 외상 초음파(FAST)에서 골반에 자유액체가 보인다. 복강 내 자유공기 때문에 비장 주위와 간 주위의 평가는 불가능하다. 적극적으로 정맥 수액을 투여했지만 혈역학적 상태는 호전되지 않는다. 다음 중 관리에서 가장 적절한 단계는 무엇인가?

## 선택지

A. CT 촬영
B. 진단적 복강세척
C. 응급 개복술
D. 응급 복강경 수술

## 해설


외상 뒤 지속되는 저혈압과 복막자극징후, FAST 자유액체 및 자유공기는 복강내 출혈과 장관 손상을 시사한다. 소생에도 혈역학적으로 불안정하므로 CT로 이동하여 시간을 쓰지 말고 응급 개복술(C)로 출혈과 장내용물 누출을 제어해야 한다. 혈액제제 중심의 소생 등은 수술 준비와 함께 시행한다. CT는 안정된 환자의 손상 평가에 유용하지만 이 환자의 수술 결정을 위한 필수 선행 검사는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004422 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수액에 반응하지 않는 복부외상에서 CT를 필수라던 정답-해설 충돌을 응급 개복술로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8896237/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004422
