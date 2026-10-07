---
유형: imaging_test
검사_분류: 영상검사
aliases:
  - Plain radiography
  - Radiography
  - X-ray
  - Chest X-ray
sources:
- "ACR: Cardiothoracic Ratio | https://www.acr.org/Data-Science-and-Informatics/AI-in-Your-Practice/AI-Use-Cases/Use-Cases/Cardiothoracic-Ratio"
- "ACR: High-Yield Radiology Guides | https://cs.acr.org/-/media/ACR/Files/Member-Resources/Med-Students/MESO_High-Yield-Guides_Design_v3.pdf"
---

# X-ray

> X-ray : ionizing radiation을 이용해 조직의 attenuation 차이를 2차원 영상으로 만드는 기본 영상검사
> 정상범위: 정상범위보다는 정상 해부학적 음영과 이상 음영 유무로 해석

## 1. 개요
- X-ray는 가장 기본적인 영상검사로, 빠르고 접근성이 좋으며 응급실과 병동, 외래에서 폭넓게 사용된다.
- 골절, 폐질환, 장폐색, 기흉, 심장 크기 평가 등에서 1차 검사로 자주 선택된다.

## 2. 검사 원리
- X-ray는 **high-energy electromagnetic radiation**을 이용한다.
- X-ray tube에서 발생한 photon이 몸을 통과할 때, 조직마다 photon을 흡수하거나 통과시키는 정도가 다르다.
- 이 차이를 `attenuation`이라고 하며, attenuation이 큰 조직은 detector에 도달하는 photon이 적어 더 하얗게, attenuation이 적은 조직은 더 검게 보인다.
- 뼈처럼 calcium이 많고 밀도가 높은 구조는 X-ray를 많이 흡수해 **radiopaque**하게 보이고, 공기가 많은 폐는 X-ray가 잘 통과해 **radiolucent**하게 보인다.
- 최종적으로 detector에 도달한 X-ray intensity 분포를 컴퓨터가 2차원 grayscale 영상으로 변환한다.
- 즉 X-ray의 본질은 **단일 방향으로 투과된 방사선의 감쇠 차이**를 그림으로 바꾸는 것이다.

## 3. 무엇을 잘 보는가
- bone
- lung field
- pleural space
- bowel gas pattern
- line/tube 위치

## 4. 무엇이 약한가
- 연부조직 대조도(soft tissue contrast)가 CT나 MRI보다 떨어진다.
- 2차원 투영 영상이라 구조가 겹쳐 보인다.
- 초기 미세 병변은 놓칠 수 있다.

## 5. 촬영 방식
- 흔한 projection은 `AP`, `PA`, `lateral`, `oblique`, `decubitus` 등이다.
- projection이 달라지면 구조물의 겹침과 확대 정도가 달라져 해석이 바뀔 수 있다.
- 예를 들어 chest X-ray에서 `PA erect`와 portable `AP supine`은 심장 크기와 기흉/흉수 해석이 다를 수 있다.

## 6. 임상적 활용
- chest X-ray: pneumonia, pulmonary edema, pleural effusion, pneumothorax
- bone X-ray: fracture, dislocation, degenerative change
- abdomen X-ray: bowel gas pattern, ileus, obstruction 의심

## 7. 장점
- 빠름
- 저비용
- 이동 촬영 가능
- 초기 triage에 적합

## 8. 한계
- 미세 병변 민감도가 낮을 수 있다.
- 겹침(superimposition) 때문에 위치 파악이 제한된다.
- ionizing radiation을 사용한다.

## 9. 안전성과 주의점
- X-ray는 ionizing radiation을 사용하지만, 대개 개별 검사당 radiation dose는 CT보다 훨씬 낮다.
- RadiologyInfo 기준 성인 chest X-ray의 대표 effective dose는 약 `0.1 mSv` 정도다.
- 임신 가능성, 반복 촬영 필요성, pediatric patient에서는 적응증을 더 신중히 본다.

## 10. 관련 개념
- `radiopaque`: 하얗게 보이는 구조
- `radiolucent`: 검게 보이는 구조
- projectional imaging
- attenuation

## 11. 참고문헌
- RadiologyInfo: Radiation Dose from X-Ray and CT Exams
- 일반 radiography 원리 요약

## 심흉곽비
심흉곽비(CTR)는 심장 음영의 최대 횡경을 흉곽의 최대 내부 횡경으로 나눈 값이다. 그림에서 정중선 기준 우측·좌측 심장 폭을 A·B, 흉곽 폭을 C라 표시했다면 `(A+B)/C`로 계산한다. 촬영 조건이 적절한 성인 PA 영상의 통상적인 0.5 기준을 소아·영아나 portable AP 영상에 그대로 적용하지 않는다. AP의 확대, 회전·흡기 정도, 흉선 등은 심장 크기 판단에 영향을 준다. 확대된 음영만으로 심부전·심근질환을 확정하지 않고 이전 영상·임상·심초음파 등과 대조한다.

참고: [ACR 심흉곽비](https://www.acr.org/Data-Science-and-Informatics/AI-in-Your-Practice/AI-Use-Cases/Use-Cases/Cardiothoracic-Ratio), [촬영 방향과 확대](https://cs.acr.org/-/media/ACR/Files/Member-Resources/Med-Students/MESO_High-Yield-Guides_Design_v3.pdf).
