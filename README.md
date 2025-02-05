# Personal Project: 포켓몬 도감 <img src="https://ifh.cc/g/B87CRh.png" width="30" height="30" />

### 🕰️ 개발 기간
25.02.03 ~ 25.02.05

### ⚙️ 기술 스택
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

### 🖥 데모
[포켓몬 도감](https://dex-mon.vercel.app/)

---
# 📢 프로젝트 소개
React의 prop drilling, context API, Redux Toolkit 총 3가지 방식을 이용하여

포켓몬 정보를 제공하는 포켓몬 도감 사이트를 제작하였습니다.

## 목적
- 여러기지 state 관리 방식을 익히면서 데이터 흐름 이해하기
- React-Router-Dom을 이용하여 SPA 구현하기

## 주요 기능
1️⃣ 포켓몬 추가/삭제 기능

2️⃣ 포켓몬 상세 정보 페이지

3️⃣ Local Storage을 통한 데이터 유지

---
# 💻 기능 소개
## 1️⃣ 포켓몬 추가/삭제 기능
사용자는 좋아요 버튼을 통해 원하는 포켓몬 6마리를 추가하거나 삭제할 수 있습니다.

![Image](https://github.com/user-attachments/assets/2e91304b-af2e-424d-b1e4-d415aee1f56d)

## 2️⃣ 포켓몬 상세 정보 페이지
클릭한 포켓몬에 대한 상제 정보를 보여줍니다.

상세 페이지 안에서 포켓몬을 추가/삭제할 수 있습니다.

![Image](https://github.com/user-attachments/assets/22a3c726-ffd0-4e05-9ef6-9e13439dabd9)

## 3️⃣ Local Storage을 통한 데이터 유지
페이지를 새로고침해도 사용자가 추가/삭제한 포켓몬에 대한 정보가 저장됩니다.

---
# 🔥 트러블 슈팅
[이벤트가 중복으로 발생할 때](https://home1204.tistory.com/92)

[Context API로 바꾸기](https://home1204.tistory.com/94)

[Vercel 배포: 이미지가 안 보일 때](https://home1204.tistory.com/95)

[Vercel 배포: 새로고침 시 404 에러가 발생할 때](https://home1204.tistory.com/96)

---
# 🌟 느낀점
3가지 방식으로 코드를 작성하면서, 각각의 장단점을 확실하게 알 수 있었습니다.

props drilling으로 작성할 때보다 context API 혹은 RTK로 작성할 때 jsx 파일 내부의 코드가 훨씬 간결해졌습니다.

부모 컴포넌트에서 자식 컴포넌트로 state를 넘겨줄 필요없이 필요한 곳에서 바로 state를 선언하여 사용할 수 있었습니다.

또한, state 관리를 하나의 파일 내에서 관리할 수 있다는 점이 큰 장정으로 다가왔습니다.

---
# 🧬 프로젝트 구조
```
📦src
 ┣ 📂API
 ┃ ┗ 📜MOCK_DATA.js
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📜Dashboard.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜PokemonCard.jsx
 ┃ ┗ 📜PokemonList.jsx
 ┣ 📂pages
 ┃ ┣ 📜Dex.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┗ 📜PokemonDetail.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜store.js
 ┃ ┗ 📂slices
 ┃ ┃ ┗ 📜pokemonSlice.js
 ┣ 📂shared
 ┃ ┗ 📜Router.jsx
 ┣ 📜.DS_Store
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```
