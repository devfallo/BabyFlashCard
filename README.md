# Baby FlashCard

시스템 언어를 자동 감지해 **영어 + 시스템 언어**를 함께 보여주는 이미지 카드 앱입니다.

## 기능
- 브라우저 언어(`navigator.language`)를 기준으로 다국어 카드 표시
- 영어 단어 클릭 시 영어 음성 재생(Web Speech API)
- 시스템 언어 단어 클릭 시 해당 언어 음성 재생
- 이전/다음 카드 전환 + 키보드 좌/우 이동
- 카드 전환 애니메이션 및 이미지 펄스 애니메이션
- 이미지 파일은 본 프로젝트에서 직접 제작한 단순 SVG(외부 IP 의존 없음)

## 지원 언어
- 한국어(ko)
- 일본어(ja)
- 스페인어(es)
- 프랑스어(fr)
- 독일어(de)
- 중국어(zh)

## 실행 방법
정적 웹 앱이므로 파일을 그대로 열거나 로컬 서버로 실행할 수 있습니다.

```bash
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173` 접속.

## GitHub Pages 배포 방법
이 저장소에는 GitHub Pages 자동 배포 워크플로(`.github/workflows/deploy-pages.yml`)가 포함되어 있습니다.

1. 기본 브랜치를 `main`으로 사용 중인지 확인합니다.
2. GitHub 저장소에서 **Settings → Pages → Build and deployment**로 이동합니다.
3. **Source**를 `GitHub Actions`로 선택합니다.
4. `main` 브랜치에 푸시하면 `Deploy static site to GitHub Pages` 워크플로가 자동 실행됩니다.
5. 배포 완료 후 접속 주소:
   - 프로젝트 저장소: `https://<GitHub사용자명>.github.io/BabyFlashCard/`
   - 사용자/조직 저장소(`<GitHub사용자명>.github.io`): `https://<GitHub사용자명>.github.io/`

## 추후 확장 포인트
- `app.js`의 `cards` 구조를 JSON/API 기반으로 분리
- 영어 고정 대신 기준 언어 선택 UI 추가
- 오디오 TTS를 클라우드 음성(예: Azure/Google/AWS)로 교체해 음질 고도화
