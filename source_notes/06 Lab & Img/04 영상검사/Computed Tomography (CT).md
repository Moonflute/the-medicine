---
유형: imaging_test
검사_분류: 영상검사
aliases:
  - CT
  - Computed Tomography
  - CAT scan
---

# Computed Tomography (CT)

> Computed Tomography (CT) : 회전하는 X-ray와 detector 데이터를 컴퓨터가 재구성해 단면 영상을 만드는 검사
> 정상범위: 정상범위보다는 attenuation pattern, enhancement pattern, lesion/bleeding/air/fluid 유무로 해석

## 1. 개요
- CT는 body를 단면으로 잘라 본 듯한 영상을 빠르게 제공하는 검사다.
- 응급 영상에서 매우 중요하며, 출혈, 외상, 폐질환, 종양, 혈관질환 평가에 널리 쓰인다.

## 2. 검사 원리
- CT는 기본적으로 X-ray를 사용하지만, 일반 X-ray와 달리 X-ray tube와 detector가 환자 주위를 **회전**한다.
- 다양한 각도에서 얻은 X-ray attenuation 데이터를 detector가 수집하고, 컴퓨터가 이를 **tomographic reconstruction**으로 재구성해 단면(slice) 영상을 만든다.
- 각 voxel은 조직의 평균 attenuation을 반영하며, 이를 `Hounsfield unit (HU)`로 표현한다.
- 예를 들어 air는 매우 낮은 HU, water는 대략 `0 HU`, bone은 높은 HU를 가진다.
- 즉 CT의 본질은 **여러 각도에서 본 X-ray 감쇠 정보**를 합쳐 2차원 단면 또는 3차원 volume으로 복원하는 것이다.

## 3. contrast enhancement 원리
- 조영제(대개 iodine contrast)는 X-ray attenuation을 증가시켜 vessel과 특정 조직을 더 밝게 보이게 한다.
- 시간에 따라 arterial phase, portal venous phase, delayed phase 등 enhancement pattern이 달라져 병변 성격 구분에 도움을 준다.

## 4. 무엇을 잘 보는가
- acute hemorrhage
- lung parenchyma
- trauma
- abdominal emergency
- calcification
- bone detail
- vessel lumen (CTA)

## 5. 무엇이 약한가
- soft tissue contrast는 MRI보다 떨어질 수 있다.
- ionizing radiation dose가 X-ray보다 높다.
- iodinated contrast nephrotoxicity, allergy 문제가 있을 수 있다.

## 6. Hounsfield unit 개념
- `air`: 대략 `-1000 HU`
- `water`: `0 HU`
- `fat`: 음수 영역
- `soft tissue`: water보다 높음
- `bone`: 높은 양수 영역
- window/level 조정을 통해 특정 조직을 더 잘 보이게 한다.

## 7. 임상적 활용
- brain CT: hemorrhage, hydrocephalus, mass effect
- chest CT: pneumonia, ILD, PE, lung nodule
- abdomen/pelvis CT: appendicitis, bowel obstruction, perforation, abscess, malignancy
- CTA: aortic dissection, vascular occlusion

## 8. 장점
- 빠름
- 응급 상황에 강함
- 단면 및 3D reconstruction 가능
- 공기, 뼈, 출혈, 석회화 평가에 강함

## 9. 한계
- radiation exposure
- contrast reaction 가능
- 반복 추적 시 cumulative dose 고려 필요

## 10. 안전성과 주의점
- RadiologyInfo 기준 CT는 검사 종류에 따라 radiation dose 차이가 크다.
- 예시로 chest CT는 대략 `6.1 mSv`, abdomen/pelvis CT는 약 `7.7 mSv` 수준의 대표값이 제시된다.
- 조영 CT 전에는 allergy history, renal function, metformin 여부 등을 확인하는 경우가 많다.

## 11. 관련 개념
- slice
- voxel
- Hounsfield unit
- helical CT
- multi-detector CT
- contrast phase

## 12. 참고문헌
- RadiologyInfo: Radiation Dose from X-Ray and CT Exams
- CT 기본 원리 요약
