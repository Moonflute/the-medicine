# Medicine Quest sprites

직접 그린 의사와 슬라임 캐릭터. 외부 게임의 캐릭터나 그래픽은 포함하지 않는다.
헬테이커의 작은 캐릭터처럼 발을 딛고 좌우로 체중을 옮기는 리듬을 참고했다.
골반이 먼저 이동하고 머리가 뒤따르며, 무릎과 팔도 프레임마다 다시 그린다.

`medic.ase`, `slime.ase`는 [LibreSprite](https://github.com/LibreSprite/LibreSprite)에서
열어 직접 수정할 수 있는 RGBA 애니메이션 원본이다. LibreSprite 1.3의 배치 기능으로
`public/themes/pixel/`에 PNG 스프라이트 시트를 출력했다. 웹 실행과 빌드에는 편집기가 필요 없다.

| 태그 | 프레임 (0부터) | 시트 행 | 타이밍 |
| --- | --- | --- | --- |
| dance | 0–7 | 0 | 프레임당 120ms, 960ms 반복 |
| cheer | 8–15 | 1 | 프레임당 90ms, 한 번 재생 |
| hit | 16–23 | 2 | 프레임당 90ms, 한 번 재생 |

각 셀은 32×32, 시트는 256×96이며 빈 공간을 잘라내지 않는다.
정답은 의사 cheer / 슬라임 hit, 오답은 의사 hit / 슬라임 cheer를 사용한다.
아직 채점되지 않은 모의고사 답안은 still 상태로 두어 정답을 노출하지 않는다.
결과 애니메이션은 마지막 포즈에서 멈추고, 동작 줄이기 설정에서는 즉시 해당 포즈를 표시한다.
CSS의 배경 프레임만 바뀌므로 본문 배치나 스크롤 위치에는 영향을 주지 않는다.

## 추가 몬스터

버섯, 꼬마 유령, 미니 돌골렘, 해골병사, 박쥐, 고블린은 승인한 가안을
기존 도트 소스와 같은 32×32 규격으로 옮긴 캐릭터다. `build-enemies.mjs`가
픽셀과 관절 위치를 정의하며 `.ase`는 LibreSprite에서 열 수 있는 편집 원본,
`public/themes/pixel/*.png`는 앱에서 읽는 실제 모션 시트다.

각 시트는 256×288, 8열×9행, 총 72프레임이다. calm / alert / danger마다
dance(둠칫) / cheer(공격) / hit(피격) 3행이 있다. 태그는 `calm-dance`처럼
이름을 붙였으며 타이밍은 기존 캐릭터와 같다. 버섯은 갓, 유령은 몸과 꼬리,
돌골렘은 팔과 무릎, 해골병사와 고블린은 무기, 박쥐는 날개를 프레임별로 움직인다.
등장·발사체·퇴장 이동은 CSS에서 처리하여 작은 전투 영역 안에서 끝난다.

`slime-moods`의 calm 24프레임은 기존 `slime.png`와 픽셀이 동일하다.
alert / danger는 기존 변형 위치를 따라 눈썹과 작은 볼 표시만 더한다.
민트·하늘·라일락·복숭아 색은 CSS 팔레트 필터다. 기존 `medic`과 `slime`
PNG 및 `.ase`는 새 몬스터 생성 명령에서 덮어쓰지 않는다.

문제 ID의 고정 해시로 종류와 슬라임 색을 고른다. 누적 오답 2회부터 alert,
4회부터 danger이며 정답 1회로 한 단계 완화하고 연속 정답 2회면 calm이 된다.
위험 표시는 문제 진입 때 고정해 채점 도중 갑자기 바뀌지 않는다.
일반 풀이와 모의고사 모두 같은 규칙이며 채점·저장에는 영향을 주지 않는다.

새 몬스터 소스에서 편집 가능한 원본과 배포용 시트를 재생성하려면 앱 폴더에서:

```powershell
node art/pixel-rpg/build-enemies.mjs
```

이 명령도 해당 신규 `.ase`를 재생성하므로 편집기에서 별도로 수정한 원본은
먼저 보존한다. PNG 출력에는 프로젝트의 `sharp`를 사용해 별도 편집기 설치 없이
같은 픽셀을 재현하며, 앱 빌드는 이미 생성한 정적 시트를 그대로 사용한다.

원본을 직접 편집했다면 해당 `.ase` 파일만 다시 내보낸다. 앱 폴더에서:

```powershell
& 'C:\path\to\libresprite.exe' --batch art/pixel-rpg/medic.ase --sheet-type rows --sheet-width 256 --sheet-height 96 --sheet public/themes/pixel/medic.png
```

`build-sprites.mjs`는 최초 픽셀과 자세를 재현하는 소스다. 아래 명령은 `.ase`를
**처음부터 다시 생성하므로 편집기에서 수정한 원본이 있다면 먼저 보존해야 한다.**

```powershell
node art/pixel-rpg/build-sprites.mjs 'C:\path\to\libresprite.exe'
```
