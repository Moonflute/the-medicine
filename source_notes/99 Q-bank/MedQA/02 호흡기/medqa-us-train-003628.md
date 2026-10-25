---
type: qbank
schema_version: 1
id: medqa-us-train-003628
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5e63e57d93b38b58bd0128985ec5b9d2cdca0ccaca712f69701eb13e05264133
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "chronic obstructive pulmonary disease"
  - "emphysema"
  - "Rtp801"
  - "smoking-related lung disease"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
  - MDIg7Zi47Z2h6riwL-yEuOuhnOy5uCDquLDsooUgKE1lZGlhc3RpbmFsIEVtcGh5c2VtYSkubWQ
question_type: mechanism
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 여성이 6년간 지속된 기침과 1년간 간헐적 호흡곤란으로 내원했다. 만성 흡연자이고 흉부 X선에서 양쪽 폐가 과팽창되어 있었다. 다음 중 이 상태의 병인을 가장 잘 설명하는 것은?

## 선택지

A. 활성화된 호산구와 T 림프구의 하기도 점막 침윤
B. 호중구의 기질금속단백분해효소 12 분비 증가
C. Rtp801에 의해 매개되는 구조세포 사멸
D. 히스톤탈아세틸화효소-2 활성화

## 해설

흡연과 과팽창 등은 폐기종 양상의 COPD를 시사한다. 흡연 관련 폐손상 연구에서 Rtp801/REDD1은 mTOR 신호와 산화스트레스·폐포 구조세포 사멸에 관여하므로 제시된 선택지 중 C가 합당하다. MMP-12는 대표적으로 대식세포 유래 단백분해효소이며 흡연 COPD에서는 HDAC2 기능 저하가 논의된다. RTP801만이 모든 COPD의 유일한 병인이나 임상 진단표지자라는 뜻은 아니다. 원문에서 언급한 CT 사진은 제공되지 않아 영상 소견 자체는 확인하지 않았다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 희귀 RTP801 기전을 원저로 확인하되 모든 COPD의 단일 확정 원인처럼 서술하지 않음. 원문 CT 이미지는 없지만 흡연·과팽창과 다른 선지의 세포/효소 차이가 기전 선택을 지지하며 영상 자체를 검증한 것은 아님.
- https://www.nature.com/articles/nm.2157

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003628
