# SubwayToilet
<img width="100" src="https://i.pinimg.com/564x/9b/8a/16/9b8a163a09ac4c1d1d30f42314502d82.jpg" alt="로고">  

---
## Description
React, Nodejs, 지하철 화장실 API를 이용하여  
지하철 화장실 위치 정보 제공 및 지하철 화장실 평점, 리뷰 제공 웹사이트 개발 프로젝트  
개발기간: 2022.10.17 ~ 2022.11.02

---
## Team JIWHA
| <img width="100" src="https://github.com/Mokdasoo.png" alt="사진"> | <img width="100" src="https://github.com/sungyuha.png" alt="사진"> | <img width="100" src="https://github.com/GYoungJang.png" alt="사진"> | <img width="100" src="https://github.com/Ethanolll.png" alt="사진"> | 
| :------------------------------------------: | :-----------------------------------------: | :-------------------------------------------------: | :------------------------------------------: | 
|       [이동근](https://github.com/Mokdasoo) 프론트엔드     |      [성유하](https://github.com/sungyuha)  프론트엔드    |      [장근영](https://github.com/GYoungJang)  백엔드    |      [박자연](https://github.com/Ethanolll)   프론트엔드   |    

---

## 배포 주소
http://103.4.13.20:3001

---

## 기술
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"><img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"><img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
</br>
<img src="https://img.shields.io/badge/svg-FFB13B?style=for-the-badge&logo=svg&logoColor=black"><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"><img src="https://img.shields.io/badge/ckeditor5-0287D0?style=for-the-badge&logo=ckeditor 4&logoColor=white">
</br>
<img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"><img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=black"></br>
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"><img src="https://img.shields.io/badge/notion-FFFFFF?style=for-the-badge&logo=notion&logoColor=black"><img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">  

---

## 프로젝트 스크린샷, 설명

<img width='100%' src="./readme_img/gif.gif" alt="사진">
</br>

### 마우스 휠, 드래그 로 노선도 이미지를 자유롭게 확대, 축소, 이동이 가능하고 원하는 역을 선택 가능

</br>
<img width='50%' src="./readme_img/K-001.png" alt="사진"><img width='50%' src="./readme_img/K-006.png" alt="사진">
</br>

### 검색으로 선택 가능

</br>
<img width='50%' src="./readme_img/K-007.png" alt="사진"><img width='50%' src="./readme_img/K-002.png" alt="사진">
</br>

### 역을 선택하면 해당 역에 대한 정보와 리뷰, 평점 확인 가능

</br>
<img width='50%' src="./readme_img/K-003.png" alt="사진"><img width='50%' src="./readme_img/K-004.png" alt="사진">
</br>

### 로그인을 하면 평점과 리뷰를 등록 가능

</br>
<img width='50%' src="./readme_img/K-005.png" alt="사진"><img width='50%' src="./readme_img/K-008.png" alt="사진">
</br>

### 공지사항 게시판, 건의 게시판이 있고 글과 이미지를 자유롭게 업로드 가능

</br>

---

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
