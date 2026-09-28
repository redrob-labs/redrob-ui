# redrob-ui

English: [README.md](./README.md)

**Redrob Group Design System 2026**을 타입이 붙은 React 컴포넌트로 옮긴 라이브러리입니다.
컴포넌트 123개, 아이콘 252개. TypeScript로 작성하고, 디자인 토큰 위에 순수 CSS로 스타일을 입혔습니다.

`@redrob-labs/ui`

## 설치

```bash
yarn add @redrob-labs/ui
# 또는
npm install @redrob-labs/ui
```

공개 npm 레지스트리에 올라갑니다. 인증도, `.npmrc` 설정도 필요하지 않습니다. 이전 배포는 GitHub
Packages를 썼는데, 공개 패키지를 설치하는 데도 쓰는 쪽이 토큰을 들고 있어야 했습니다.

`react`와 `react-dom`은 peer dependency입니다(`^18.2.0 || ^19.0.0`). 쓰는 쪽 프로젝트가 제공합니다.

## 사용

스타일시트를 앱 진입점에서 한 번만 불러옵니다. Tailwind 설정도, PostCSS 단계도, 빌드 플러그인도
없습니다. 커스텀 프로퍼티 위에 올린 순수 CSS입니다.

```javascript
import '@redrob-labs/ui/dist/styles/tokens.css';
import '@redrob-labs/ui/dist/styles/system.css';
```

```jsx
import { Button, Hero, Display } from '@redrob-labs/ui';

function Landing() {
  return (
    <Hero
      lede="이 페이지의 모든 숫자는 무엇을 기준으로 잰 것인지 함께 말합니다."
      action={<Button tone="primary">측정 방법 보기</Button>}
      secondary="데이터 보기"
      secondaryHref="/data"
    >
      <Display>검증할 수 있는 채용 판단.</Display>
    </Hero>
  );
}
```

`src/index.ts`가 단일 진입점입니다. 모든 export가 시스템 그룹별로, 프롭 타입과 함께 거기 적혀 있습니다.

폰트 18종은 `dist/fonts/`에 들어가고 `system.css`가 상대 경로로 참조하므로, 패키지를 어디서 서빙해도
경로가 맞습니다.

## 패리티 하네스

이 라이브러리는 디자인 시스템 원본 번들을 옮겨 적은 것입니다. 그래서 "보기에 맞다"는 기준이 아닙니다.
게이트는 마크업이 정확히 같은지입니다.

```bash
yarn test        # 모든 컴포넌트를 원본 번들과 비교
yarn test:self   # 원본을 원본과 비교. 하네스가 아직 실제로 비교하는지 확인
```

`node tools/parity/run.js [이름들]`은 각 컴포넌트를 두 번 렌더합니다. 한 번은 원본 번들로, 한 번은
우리가 빌드한 `dist`로. 기준이 되는 케이스는 원본 배포물의 `preview.html`이고, 우리 것이 아니므로
검사 대상 구현 쪽으로 끌려갈 수 없습니다.

`reference/`에는 141MB 배포물에서 2MB만 떼어낸 사본이 들어 있습니다. `bundle.js`, 스타일시트,
프롭 계약, 프리뷰 케이스 148개. CI에서 게이트가 실제로 돌게 하려고 커밋했습니다. 갱신하거나 새 배포물을
시험하려면 `REDROB_DS_DIR`를 전체 배포물 경로로 지정하면 됩니다.

사람 눈으로는 못 잡고 이 하네스가 잡은 것 두 가지:

- 원 하나의 인라인 스타일이 `height;width` 순서인 원본과 달리 `width;height`로 나갔습니다.
  화면으로는 똑같고, DOM은 다릅니다.
- `tsc`에 `noEmitOnError`가 없어서 **오류를 보고하면서도 출력을 씁니다.** 타입 오류가 있는 컴포넌트가
  그대로 렌더되고, 깨진 출력 위에서 패리티가 통과했습니다. **빌드가 빨간데 패리티가 초록이면 통과가
  아닙니다.** 빌드 종료 코드를 따로 봐야 합니다.

## 개발

Node.js 20.x, Yarn 1.x (`yarn.lock`이 v1이고 CI는 `--frozen-lockfile`로 설치합니다).

```bash
git clone https://github.com/mckinley-and-rice/redrob-ui.git
cd redrob-ui
yarn install
yarn build && yarn test
```

| 명령 | 하는 일 |
|---|---|
| `yarn build` | `tsc`로 `dist/` 생성 후 `src/styles/*.css`와 `src/fonts/*.woff2` 복사. |
| `yarn test` | 원본 번들과 패리티 비교. 이게 게이트입니다. |
| `yarn test:self` | 원본을 원본과 비교. 하네스가 멀쩡한지 확인. |
| `yarn icons` | 배포물의 아이콘 표에서 `src/icons/index.tsx` 재생성. |
| `yarn icons:check` | 커밋된 아이콘 모듈이 낡았으면 실패. |

`src/icons/index.tsx`는 **생성된 파일**입니다. 파일이 아니라 생성기를 고치세요. 손으로 고친 내용은
다음 `yarn icons`에서 경고도 없이 덮어써집니다. CI가 검사하는 이유입니다.

컴포넌트는 JSX가 아니라 `React.createElement`로 씁니다. 의도한 것입니다. 이 포팅은 원본의 `h()` 호출을
옮겨 적는 일이고 게이트가 마크업을 정확히 비교하므로, 호출 모양을 그대로 두면 차이가 난 자리를 찾기 쉽습니다.

Storybook은 없습니다. 배포물의 `preview.html` 케이스 148개가 이미 갤러리이고, 패리티 하네스가 모든
컴포넌트를 그 케이스 전부로 렌더합니다. 손으로 쓴 스토리는 같은 케이스의 세 번째 사본이 되고, 원본과
구현 양쪽에서 따로 낡습니다.

## 기여

[CONTRIBUTING.ko.md](./CONTRIBUTING.ko.md) — 브랜치 이름, 풀 리퀘스트 경로, 릴리스 방법.
브랜치 전략은 조직의
[gitflow 표준](https://github.com/mckinley-and-rice/.github/blob/main/docs/GITFLOW.md)을 따릅니다.
`develop`이 기본 브랜치, `main`이 릴리스된 상태입니다.

## 지원

- 버그와 기능 요청: [issues](https://github.com/mckinley-and-rice/redrob-ui/issues).
- 보안 취약점: 이슈에 쓰지 마세요. 조직의
  [보안 정책](https://github.com/mckinley-and-rice/.github/blob/main/SECURITY.md)을 따릅니다.

## 라이선스

MIT. [LICENSE](./LICENSE) 참고.
