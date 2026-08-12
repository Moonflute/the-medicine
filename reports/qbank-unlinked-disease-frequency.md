# 미연결 QBank 질환 태그 빈도

대상: 정본 질환 문서 링크가 없는 MedQA 문항 **26개**. 한 문항 안에서 같은 태그가 반복되어도 1회로 계산했습니다.

## 빈도 분포 (표기 정규화 후)

| 문항 반복 수 | 질환 태그 수 |
| --- | ---: |
| 1회 | 9 |
| 2회 | 1 |
| 3회 | 0 |
| 4회 | 0 |
| 5–9회 | 0 |
| 10–19회 | 0 |
| 20회 이상 | 0 |

정규화 태그 10종, 질환 태그-문항 발생 11건입니다. 원문 표기 기준은 11종입니다.

## 상위 미연결 질환 태그

| 질환 태그 | 미연결 문항 수 | 표기 |
| --- | ---: | --- |
| 칸나비스 구토 증후군 | 2 | cannabinoid hyperemesis syndrome, 칸나비스 구토 증후군 |
| 47,XYY 증후군 | 1 | 47,XYY 증후군 |
| Conn syndrome | 1 | Conn syndrome |
| Riedel thyroiditis | 1 | Riedel thyroiditis |
| Silent thyroiditis | 1 | Silent thyroiditis |
| burn infection | 1 | burn infection |
| coronary artery disease evaluation | 1 | coronary artery disease evaluation |
| pinworm infection | 1 | pinworm infection |
| post-traumatic infection | 1 | post-traumatic infection |
| 임신 중 피부질환 | 1 | 임신 중 피부질환 |

## 해석

- 1회성 태그가 대부분이라, 새 문서를 일괄 생성하기보다 반복 빈도와 임상 중요도를 함께 기준으로 정리하는 편이 적절합니다.
- 이 보고서는 아직 문서가 없는 질환성 태그가 하나라도 있는 문항만 포함합니다. 증상·검사·약물 등 비질환 태그만 있는 문항은 제외했습니다.
- 한·영 표기 및 약어가 명백히 같은 질환인 경우만 수동 동의어 표로 병합했습니다. 상위·하위 질환이나 관련 질환은 별도로 유지했습니다.
