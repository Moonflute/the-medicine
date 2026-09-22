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
- 요로결석은 보통 비조영 CT로 평가하며, 신장 종양의 성격화에는 임상 질문에 맞춘 조영증강 CT를 고려한다. 혈뇨 또는 요로상피 병변 평가가 필요하면 CT urography를 선택할 수 있다.
- 종양 추적에서는 표적 병변, 비표적 병변과 새 병변을 구분하고 같은 영상 방식·측정법으로 이전 검사와 비교한다. 흉수·복수, 순수 골경화 병변, 림프관성 병변처럼 크기 측정이 제한적인 소견도 전체 반응 판정에 함께 반영한다.
- **흉부 CT 프로토콜은 질문 중심으로 정한다**: 객혈은 흉부 X선 뒤 조영증강 CT 또는 CTA로 원인과 출혈 혈관을 평가하고, 생명위협 출혈은 기도 확보·기관지동맥 색전술 경로를 병행한다. 폐색전증 의심은 사전확률에 따라 D-dimer 또는 폐혈관 CTA를 선택하며, 간질성폐질환·기관지확장증은 얇은 절편의 비조영 고해상도 CT를 임상 질문에 맞춰 고려한다.
- 미만성 간질성 또는 소기도 질환에서는 호기 영상으로 air trapping을, 복와위 흡기 영상으로 의존성 음영과 실제 간질성 이상을 구분하는 데 도움을 얻을 수 있다. 기관 협착·기도 종양 등에서는 3D 기도 재구성이 병변 범위와 기도 형태 평가에 유용할 수 있다.
- 조영 CT는 단순히 “더 자세한 CT”가 아니다. 혈관·종양·염증·출혈의 평가 목적, 방사선·조영제 위해, 신기능과 과거 조영제 반응, 임신 가능성 및 대체 영상 가능성을 함께 검토해 영상의학과 프로토콜을 정한다.

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
- 조영 CT 전에는 이전 조영제 반응, AKI/CKD와 현재 신기능, 당뇨·metformin 사용, 탈수·동반 신독성 위험, 최근 반복 조영제 노출 및 응급성을 함께 확인한다. 검사 필요성·대체 영상 가능성과 수액 투여 시 체액 과다 위험을 함께 저울질한다. metformin 보류·재개와 예방 조치는 단일 약물명만으로 결정하지 않고 eGFR·AKI 여부와 기관 조영제 프로토콜에 따른다.

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


보완 출처: 삼성서울병원 메뉴얼. [ACR 객혈 영상 적절성 기준](https://acsearch.acr.org/docs/69449/Narrative), [ACR 조영제 매뉴얼](https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Contrast-Manual), [성인 진단적 유연기관지경 지침](https://pmc.ncbi.nlm.nih.gov/articles/PMC6681731/); 객혈·혈전색전·간질성폐질환의 CT 프로토콜 선택, 기관지경 위험평가 및 EBUS/경성기관지경 적응증 원칙을 대조. 2026-09-14 기존 목차 내 보완.
