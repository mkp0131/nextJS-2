# NextJS

## 기존 서버의 응답과정

```
브라우저 -> 프론트서버 -> 백엔드서버 -> 데이터베이스
```

### 리액트 SPA 의 과정

- 브라우저 요청시 한번에 데이터가 없는 화면을 모두 가져온다.
- 데이터가 없는 화면을 가져온다. 즉, 데이터를 받아올때 로딩창이 생김
- 장점: 화면을 보다 빠르게 띄울수있다. but 전체적인 로딩은 더 느릴 수 있다.

```
브라우저 -> 프론트서버
브라우저 -> 백엔드서버 -> 데이터베이스
```

### NextJS 장점

- 서버사이드 랜더링과 코드스플리팅이 용이하다.
- 서버사이드 랜더링시 화면의 로딩창을 안띄울수있다.
- 내가 방문하지 않은 페이지도 추후에 받아와서 더 빠른 실행을 할 수 있다.

## NextJS 설치

```
npm i next
```

- package.json 에 script 추가

```
"dev": "next"
```

- pages/index.js 파일 생성

## ant design

### 설치

- 앤트디자인 설치
- 아이콘은 설치를 따로 해주어야한다.(보통 용량이 커서 따로 뺀다.)

```
npm install antd
npm i @ant-design/icons
```

### Layout 컴포넌트와 \_app.js 사용법 차이

- Layout 컴포넌트: 특정 페이지들에서 공통으로 사용하는 것
- \_app.js: 모든 페이지에서 공통으로 사용하는 것
- Layout 컴포넌트, \_app.js 컴포넌트 모두 css import 가 가능

## 주의사항

- 리액트는 객체를 비교하기 때문에 style={{}} 과 같은 것은 지양한다.
- 인라인 스타일을 꼭 사용해야한다면 useMemo 를 이용한다.

```js
import { useMemo } from 'react';

const style = useMemo(() => ({ marginTop: 10 }), []);

<Header style={style} />;
```

- <style jsx> 는 컴포넌트를 꾸며주는게 불가능? 한듯!
- 예를 들어 Ant Design 같은 컴포넌트를 꾸며주는게 안된다.
