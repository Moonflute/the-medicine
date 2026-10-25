---
type: qbank
schema_version: 1
id: medqa-us-train-001326
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:40cc3ec7b616d6777ced2a3318aad3f5414bc06b20bafc24f39b6e8fd9b91de2
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "화상"
  - "자폐 스펙트럼 장애"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yekO2PkCDsiqTtjpntirjrn7wg7J6l7JWgIChBdXRpc20gU3BlY3RydW0gRGlzb3JkZXIpLm1k
  - MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30개월 된 남아를 부모가 응급실로 데려왔습니다. 아이는 왼손에 화상을 입었습니다. 어머니는 아이가 부엌에서 혼자 놀다가 실수로 뜨거운 숟가락을 잡아서 화상을 입었다고 의사에게 말합니다. 그녀는 또한 지난 방문 시 소아과 의사가 자폐 스펙트럼 장애 가능성에 대해 우려를 표명했으며 정기적인 추적 관찰을 제안했다고 말합니다. 아이는 임신 39주에 자연 질식 분만으로 태어났습니다. 모든 예방 접종을 완료했으며 모든 발달 이정표를 달성하고 있습니다. 신체 검진에서 체온은 37.0°C (98.6°F), 맥박수는 140회/분, 호흡수는 28회/분입니다. 아이는 과민하고 과도하게 울고 있습니다. 검진 결과, 왼손 피부는 손등 전체에 작은 물집이 있는 흰색-분홍색이지만, 손바닥 피부는 손상되지 않았습니다. 손목 위 건강한 피부와 손의 손상된 피부 사이에 명확한 경계가 있습니다. 아이의 다른 부위에는 화상이나 다른 부상이 없습니다. 다음 중 화상의 가장 가능성 있는 원인은 무엇입니까?

## 선택지

A. 뜨거운 물에 강제로 담금
B. 감독 소홀로 인한 화상
C. 우발적인 화상
D. 뜨거운 숟가락으로 인한 학대성 화상

## 해설

손목에서 뚜렷하게 끝나는 화상 경계와 손등 화상에 비해 손바닥이 보존된 양상은 단순히 뜨거운 숟가락을 잡았다는 병력으로 충분히 설명되지 않는다. 주먹을 쥔 손의 강제 침수를 포함한 손상 기전을 의심하므로 선택지 A가 출제 의도에 가장 부합한다. 강제 침수 화상은 균일한 깊이·뚜렷한 상한선·피부주름 보존 등을 보일 수 있다. 다만 패턴 하나만으로 고의성을 확정하지 않으며 전체 병력·발달 단계·다른 손상을 함께 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 강제 침수 화상의 경계가 불규칙하다고 한 역방향 설명을 교정하고 패턴만으로 학대를 확정하지 않도록 명시했다.
- https://childprotection.rcpch.ac.uk/child-protection-evidence/burns-systematic-review/
- https://childprotection.rcpch.ac.uk/wp-content/uploads/sites/6/2020/05/child_protection_evidence_-_burns.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001326
