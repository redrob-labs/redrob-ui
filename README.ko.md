# redrob-ui

English: [README.md](./README.md)

React 컴포넌트 라이브러리입니다. 컴포넌트 67개, TypeScript로 작성하고 Tailwind CSS로
스타일링하며 Storybook으로 문서화합니다.

`@mckinley-and-rice/redrob-ui`

## 설치

패키지는 **GitHub Packages**에 발행됩니다. 패키지가 공개돼 있어도 인증된 요청이
필요하므로, 사용하는 쪽에 `read:packages` 권한 토큰이 `.npmrc`에 있어야 합니다.

```
@mckinley-and-rice:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

```bash
yarn add @mckinley-and-rice/redrob-ui
# 또는
npm install @mckinley-and-rice/redrob-ui
```

`react`와 `react-dom`(`^18.2.0`)은 peer dependency입니다. 쓰는 프로젝트가 제공합니다.

## 사용

패키지가 함께 내보내는 Tailwind 설정을 preset으로 확장하고, 클래스가 purge되지 않도록
패키지 경로를 `content`에 넣습니다.

```javascript
// tailwind.config.js
const packageTailwindConfig = require('@mckinley-and-rice/redrob-ui/tailwind.config.js');

module.exports = {
  presets: [packageTailwindConfig],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@mckinley-and-rice/redrob-ui/**/*.{js,ts,jsx,tsx}',
  ],
};
```

```jsx
import { Button, Dialog } from '@mckinley-and-rice/redrob-ui';

function App() {
  return (
    <div>
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

진입점은 `src/index.ts` 하나입니다. 내보내는 모든 것이 거기 적혀 있습니다.

## 개발

Node.js 20.x, Yarn 1.x입니다(`yarn.lock`이 v1이고 CI는 `--frozen-lockfile`로 설치).

```bash
git clone https://github.com/mckinley-and-rice/redrob-ui.git
cd redrob-ui
yarn install
yarn storybook        # http://localhost:6006
```

| 명령 | 하는 일 |
|---|---|
| `yarn storybook` | 6006 포트에서 Storybook 개발 서버. |
| `yarn build` | `tsc`로 `dist/` 생성 후 `src/style`, `src/assets` 복사. |
| `yarn build-storybook` | `storybook-static/`에 정적 Storybook 생성. |

**테스트 스위트가 없습니다.** `yarn test`는 의도적으로 실패합니다. 돌지도 않은 검사가
통과로 보이지 않게 하려는 것입니다. 변경은 빌드하고 Storybook에서 직접 보며 확인합니다.
테스트가 없으므로 테스트 잡을 필수 검사로 걸 수 없고, 대신 `ci`가 패키지와 Storybook을
빌드하고 두 산출물이 실제로 생겼는지 단정합니다.

## 기여

[CONTRIBUTING.ko.md](./CONTRIBUTING.ko.md)에 브랜치 이름, 풀 리퀘스트 경로, 릴리스 방법이
있습니다. 브랜치 전략은 조직
[gitflow 표준](https://github.com/mckinley-and-rice/.github/blob/main/docs/GITFLOW.ko.md)을
따릅니다. 기본 브랜치는 `develop`이고 `main`은 릴리스된 상태입니다.

## 문서

Storybook이 문서이고 호스팅하지 않습니다. `yarn storybook`으로 로컬에서 봅니다.

## 지원

- 버그와 기능 요청: [이슈](https://github.com/mckinley-and-rice/redrob-ui/issues).
- 보안 취약점: 이슈에 쓰지 않습니다. 조직
  [보안 정책](https://github.com/mckinley-and-rice/.github/blob/main/SECURITY.md)을 봅니다.

## 라이선스

MIT. [LICENSE](./LICENSE)를 봅니다.

```
Copyright (c) 2026 Janghoon Lee (McKinley and Rice) and contributors
```
