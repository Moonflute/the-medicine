# 미연결 QBank 질환 태그 빈도

대상: 정본 질환 문서 링크가 없는 MedQA 문항 **516개**. 한 문항 안에서 같은 태그가 반복되어도 1회로 계산했습니다.

## 빈도 분포 (표기 정규화 후)

| 문항 반복 수 | 질환 태그 수 |
| --- | ---: |
| 1회 | 406 |
| 2회 | 54 |
| 3회 | 21 |
| 4회 | 0 |
| 5–9회 | 0 |
| 10–19회 | 0 |
| 20회 이상 | 0 |

정규화 태그 481종, 질환 태그-문항 발생 577건입니다. 원문 표기 기준은 490종입니다.

## 상위 미연결 질환 태그

| 질환 태그 | 미연결 문항 수 | 표기 |
| --- | ---: | --- |
| Charcot-Marie-Tooth disease | 3 | Charcot-Marie-Tooth disease |
| Creutzfeldt-Jakob disease | 3 | Creutzfeldt-Jakob disease |
| Fanconi anemia | 3 | Fanconi anemia |
| carcinoid syndrome | 3 | carcinoid syndrome |
| hyperviscosity syndrome | 3 | hyperviscosity syndrome |
| idiopathic intracranial hypertension | 3 | idiopathic intracranial hypertension |
| neonatal meningitis | 3 | neonatal meningitis |
| 골형성부전증 | 3 | 골형성부전증 |
| 마르팡 증후군 | 3 | 마르팡 증후군 |
| 마미증후군 | 3 | 마미증후군 |
| 비후성 유문협착증 | 3 | 비후성 유문협착증, 비후성 유문 협착증 |
| 신생아 생리적 질출혈 | 3 | 신생아 생리적 질출혈 |
| 에드워드 증후군 | 3 | 에드워드 증후군 |
| 에틸렌글리콜 중독 | 3 | 에틸렌글리콜 중독 |
| 잠복결핵감염 | 3 | 잠복결핵감염 |
| 치성 감염 | 3 | 치성 감염 |
| 카르시노이드 증후군 | 3 | 카르시노이드 증후군 |
| 특발성 두개내 고혈압 | 3 | 특발성 두개내 고혈압 |
| 폐동맥고혈압 | 3 | 폐동맥 고혈압, 폐동맥고혈압 |
| 폐신장 증후군 | 3 | 폐신장 증후군, 폐-신장 증후군 |
| 흔들린 아기 증후군 | 3 | 흔들린 아기 증후군 |
| Bacillus cereus 식중독 | 2 | Bacillus cereus 식중독 |
| Dubin-Johnson syndrome | 2 | Dubin-Johnson syndrome |
| Ehlers-Danlos syndrome | 2 | Ehlers-Danlos syndrome |
| Horner syndrome | 2 | Horner syndrome |
| Langerhans cell histiocytosis | 2 | Langerhans cell histiocytosis |
| Marfan syndrome | 2 | Marfan syndrome |
| Pes anserine bursitis | 2 | Pes anserine bursitis |
| Respiratory syncytial virus infection | 2 | Respiratory syncytial virus infection |
| Statin-induced liver injury | 2 | Statin-induced liver injury |
| Tay-Sachs disease | 2 | Tay-Sachs disease |
| Whipple disease | 2 | Whipple disease |
| anemia of prematurity | 2 | anemia of prematurity, Anemia of prematurity |
| costochondritis | 2 | costochondritis, Costochondritis |
| cyclophosphamide hemorrhagic cystitis | 2 | cyclophosphamide hemorrhagic cystitis |
| hairy cell leukemia | 2 | hairy cell leukemia |
| hemochromatosis | 2 | hemochromatosis |
| macrocytic anemia | 2 | macrocytic anemia |
| mixed respiratory alkalosis and metabolic acidosis | 2 | mixed respiratory alkalosis and metabolic acidosis |
| palmar fibromatosis | 2 | palmar fibromatosis |
| pinworm infection | 2 | pinworm infection |
| respiratory failure | 2 | respiratory failure |
| subclavian steal syndrome | 2 | subclavian steal syndrome |
| 고IgM 증후군 | 2 | 고 IgM 증후군, 고IgM 증후군 |
| 고혈압성 위기 | 2 | 고혈압성 위기 |
| 구토형 식중독 | 2 | 구토형 식중독 |
| 당뇨병성 신증 | 2 | 당뇨병성 신증 |
| 대사증후군 | 2 | 대사증후군 |
| 독성쇼크증후군 | 2 | 독성쇼크증후군 |
| 리튬 중독 | 2 | 리튬 중독 |

## 해석

- 1회성 태그가 대부분이라, 새 문서를 일괄 생성하기보다 반복 빈도와 임상 중요도를 함께 기준으로 정리하는 편이 적절합니다.
- 이 보고서는 아직 문서가 없는 질환성 태그가 하나라도 있는 문항만 포함합니다. 증상·검사·약물 등 비질환 태그만 있는 문항은 제외했습니다.
- 한국어/영어 동의어는 자동으로 임상 동의어 병합하지 않았습니다. 표기·대소문자 차이만 정규화해, 임상적으로 다른 질환을 잘못 합치지 않도록 했습니다.
