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

원본을 직접 편집했다면 해당 `.ase` 파일만 다시 내보낸다. 앱 폴더에서:

```powershell
& 'C:\path\to\libresprite.exe' --batch art/pixel-rpg/medic.ase --sheet-type rows --sheet-width 256 --sheet-height 96 --sheet public/themes/pixel/medic.png
```

`build-sprites.mjs`는 최초 픽셀과 자세를 재현하는 소스다. 아래 명령은 `.ase`를
**처음부터 다시 생성하므로 편집기에서 수정한 원본이 있다면 먼저 보존해야 한다.**

```powershell
node art/pixel-rpg/build-sprites.mjs 'C:\path\to\libresprite.exe'
```
