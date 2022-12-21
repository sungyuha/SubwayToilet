## SubwayToilet

2022.10.17 ~ 2022.11.02

## 개요
- 지하철 화장실 API 이용하여 화장실이 가까운 역 정보 제공 및 지하철 화장실 평점 시스템 웹개발 프로젝트

## 정보
- 공공데이터 API를 활용한 React 기반 반응형 팀 프로젝트
- 작업 인원 : 프론트엔드3, 백엔드1
- 서버 배포 : [http://13.125.248.225:3000]

## 기술 스택

**Front-End**
- HTML, CSS, JavaScript(ES6), React, Sass, axios

**Back-End**
- Node.js, mongoDB, AWS

**Tools**
- Github, slack, Notion, Figma

### 담당한 부분

- 맡은 업무
    - 프론트엔드

- Header에 `JSON Web Token`을 담아서 백엔드에  데이터 전송 후 로그인&로그아웃 버튼 구현 ( 로그아웃하면 JWT 정보 삭제 )
- 자동 검색 기능 구현  
    (화장실이 가까운 역 정보 제공에 필요한 검색 기능 구현) 
    - 공공 데이터 API를 활용하여 `JSON`파일로 지하철 역명 자동 완성 검색 이벤트 기능 구현
- 백엔드에 `Axios`로 데이터 전송
- 아이디 찾기 페이지 구현
    - 아이디 유효성 검사 구현
- 비밀번호 찾기 페이지 구현
    - `hooks`로 `tabTitle`기능 구현
- 비밀번호 찾기 검사
    - 비밀번호 재 설정 구현
- 공통 컴포넌트 모듈화
    - 서비스에 사용되는 `input, button`과 같은 컴포넌트 모듈화
    - 서비스에 필요한 `props`을 직접 선언하고 관리
- Github flow
    - 코드 리뷰도 함께 진행하면서 코드의 질과 코드 이해도가 상승
- MyPage 페이지 구현
    - `hooks`로 `tabTitle`기능 구현
    - 레이아웃 구축
- 페이지 연동 구현
    - `BrowserRouter`, `Routes`, `Route`사용해서 각각 페이지 연동 적용
