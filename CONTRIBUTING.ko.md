# 기여 안내

English: [CONTRIBUTING.md](./CONTRIBUTING.md)

조직 전체 규칙은
[mckinley-and-rice/.github](https://github.com/mckinley-and-rice/.github)에 있습니다. 이
문서는 **이 저장소**에만 해당하는 것, 즉 상속으로 대신할 수 없는 부분을 적습니다.

## 준비

Node.js 20.x, Yarn 1.x입니다.

```bash
yarn install
yarn storybook
```

## 브랜치

기본 브랜치는 `develop`이고 모든 변경이 먼저 여기로 들어옵니다. `main`은 릴리스된 상태이며
승격 풀 리퀘스트로만 움직입니다.

작업 브랜치는 `<type>/<짧은-슬러그>`입니다. `gitflow` 워크플로가 실제로 검사하는 이
저장소의 타입 목록은 다음과 같습니다.

```
feat fix chore docs test refactor perf hotfix release
```

`sync` 타입은 없습니다. 이 저장소는 포크가 아니라 상류에서 받아올 것이 없습니다.

타입 목록은 조직 안에서도 저장소마다 다르고, 검사는 추측을 통과시키지 않습니다. 게이트는
`.github/workflows/gitflow.yml`의 `ALLOWED_TYPES`이고 위 목록은 그 설명입니다. 둘이
어긋나면 워크플로가 맞고 이 문서가 낡은 것입니다.

브랜치 이름은 무엇을 바꾸는지를 말하며, 누가·무엇이 만들었는지를 말하지 않습니다. 에이전트
이름이나 도구 이름은 타입이 아닙니다.

검사가 이미 실패했다면 브랜치 이름만 바꿔서는 부족합니다. 실패한 실행이 커밋에 묶여 남으므로
커밋도 amend해야 합니다. 그러지 않으면 새 풀 리퀘스트가 스스로 머지 가능하다고 보고하면서
예전 빨간 X를 그대로 보여줍니다.

## 머지

| 상황 | 방식 |
|---|---|
| 작업 브랜치 -> `develop` | squash |
| `develop` -> `main` 승격 | 머지 커밋 |
| 핫픽스 -> `main` | 머지 커밋 |

rebase 머지는 쓰지 않습니다. 승격을 squash하면 두 브랜치의 관계가 사라지고 `back-merged`
검사가 비교할 실체를 잃습니다.

## 변경 검증

**테스트 스위트가 없습니다.** `yarn test`는 의도적으로 실패합니다. 돌지도 않은 검사가
통과로 보이지 않게 하려는 것입니다. 그래서 부담이 작성자와 리뷰어에게 있습니다.

```bash
yarn build            # tsc 후 style·assets 복사
yarn build-storybook  # 스토리 전체가 컴파일돼야 한다
yarn storybook        # 그 다음 바꾼 컴포넌트를 눈으로 본다
```

빌드가 초록인 것은 사용자가 보는 어떤 것도 검증하지 않습니다. 스토리를 열고 컴포넌트를
조작한 뒤, 무엇을 봤고 어떻게 동작했는지 풀 리퀘스트에 적습니다.

테스트 잡이 없으므로 그것을 필수 검사로 걸 수 없습니다. 필수 검사는 `ci`입니다. 패키지와
Storybook을 빌드하고 두 산출물이 실제로 생겼는지 단정합니다. 빌드가 `tsc`와 `cp` 두 개라
비어 있는 `dist/`도 그냥 통과해버리기 때문입니다.

## 컴포넌트 추가

1. `src/components/<Name>.tsx`.
2. `src/index.ts`에서 내보냅니다. 이 파일이 공개 표면 전부이며, 여기서 내보내지 않은
   컴포넌트는 사용자에게 존재하지 않습니다.
3. `src/stories/<Name>.stories.tsx`. Storybook이 문서이므로 스토리가 없는 컴포넌트는
   문서가 없는 것입니다.
4. Tailwind 클래스로 스타일링합니다. 패키지의 `tailwind.config.js`가 모르는 것은 사용자
   빌드의 `content` purge에 걸려 전달되지 않습니다.

예시 데이터에는 `example.com`을 씁니다. 실제 사람과 내부 도메인은 쓰지 않습니다.

## 릴리스

버전은 `v<major>.<minor>.<patch>`입니다.

1. `develop`에서 `package.json`의 `version`을 올립니다.
2. `develop` -> `main` 승격 풀 리퀘스트를 열고 머지 커밋으로 머지합니다.
3. 그 커밋에 `main` 태그를 달고, 태그에서 GitHub Release를 만듭니다.

발행은 푸시가 아니라 `release: published`에서 돕니다. 태그가 `main`의 조상이 아니거나
`package.json`이 태그와 어긋나면 발행을 거부하고, 레지스트리에 이미 있는 버전은 건너뛰어
재시도가 안전합니다. 발행은 되돌릴 수 없습니다. 버전 번호는 올라간 순간 소진됩니다.

발행 없이 예행하려면 `publish` 워크플로를 수동 실행하고 `dry_run`을 켠 채로 둡니다.

## 풀 리퀘스트

조직 풀 리퀘스트 템플릿을 씁니다. 이 저장소에서 특히 빠지는 두 줄입니다.

- 설명에 쓰는 개수·크기·버전은 같은 자리에서 빌드 산출물로 다시 측정하고, 어느 표면에서
  나온 수치인지 밝힙니다.
- diff에 자격증명·토큰·`.env` 파일을 넣지 않습니다. `.npmrc`가 gitignore된 이유이니 그대로
  둡니다.

## 취약점 신고

이슈에 쓰지 않습니다. 조직
[보안 정책](https://github.com/mckinley-and-rice/.github/blob/main/SECURITY.md)을 봅니다.
