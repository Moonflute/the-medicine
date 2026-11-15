---
type: qbank
schema_version: 1
id: medqa-us-train-006151
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b70c680345f1920afe2fe224d46a740d8ef4f73ba62f760621b077548f997ee
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "상대정맥증후군"
  - "폐암"
  - "전흉벽 정맥 울혈"
related_disease_slugs:
  - MTAg7KKF7JaRL-yDgeuMgOygleunpSDspp3tm4TqtbAgKFN1cGVyaW9yIFZlbmEgQ2F2YSBTeW5kcm9tZSkubWQ
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
---

# MedQA US 임상문제

## 문제

양쪽 팔과 얼굴이 붓고 누우면 두통이 심한 환자의 앞가슴 정맥이 뚜렷하다. 협착음이나 의식 변화는 없고 혈압과 호흡은 안정적이다. 상대정맥증후군으로 의심할 때 막힌 부위와 원인을 알아볼 첫 영상은?

## 선택지

A. 흉부 비조영 단순 X선만 촬영
B. 조영증강 흉부 CT
C. 심장 운동부하검사
D. 전신 골스캔

## 해설


상대정맥 폐색이 의심되는 안정적인 환자에서 조영증강 CT로 막힘의 위치, 범위와 종괴·혈전 여부를 평가한다. 기도나 신경계 위험이 있으면 긴급 처치를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006151 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 얼굴·양팔부종·목정맥/흉벽정맥 확장과 자세성 두통의 SVC 폐쇄 증후군 및 폐암 C가 보기 중 부합함을 직접 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006151
- https://pubmed.ncbi.nlm.nih.gov/41485866/
