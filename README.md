# 👩🏻‍💻 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

##  기능 / 소개
### Login / SignUp
- /auth 경로에 로그인, /signup에 회원가입 기능 구현 완료
- 이메일은 @, . 포함, 비밀번호는 8자 이상 입력해야 회원가입 및 로그인 가능
- 로그인 API를 호출하고, 응답으로 받은 토큰은 Local storage에 저장
- private, public route로 구분하여 로그인 되어있지 않다면, Main 탭에 접근 불가
- 로그인이 되어 있다면, 로그인, 회원가입 탭에 접근 불가
### Todo List
- Todo List API 호출하여 CRUD 기능 구현 완료
- 한 화면 내에서 List와 개별 Todo 상세 확인 가능
- Todo 내용 수정시 목록에 실시간으로 반영

## Settings

```
git clone https://github.com/Jsgithubchannel/wanted-pre-onboarding-challenge-fe-1.git
cd front
npm install
npm start
```


## Preview

### Auth
- 처음 실행하였을 때, 보이는 화면입니다.
- 로그인이 가능하며, 아직 회원가입을 하지 않았다면 하단의 _'처음이신가요?'_ 버튼을 눌러 회원가입을 진행할 수 있습니다.
- 이전에 로그인 내역이 있다면, 자동 로그인 되어 메인 페이지로 리다이렉트 됩니다.

![login](https://user-images.githubusercontent.com/66022264/183277028-2ce53304-d2e9-4eaf-a5f4-604faa10bf96.png)

### Signup
- 이메일과 비밀번호를 규칙에 맞게 생성한 다음 회원가입 버튼을 클릭합니다.
- 이미 가입한 적이 있다면, 하단의 _'이미 가입하셨나요?'_ 버튼을 눌러 로그인을 진행할 수 있습니다.

![Signup](https://user-images.githubusercontent.com/66022264/183277029-37375ad7-97c1-46b7-b6ff-240b0ee56f49.png)


### Main
- 오늘 할 일을 작성하고, 리스트를 볼 수 있습니다.
- 제목, 내용 작성 칸과 추가 버튼으로 구성되어 있습니다.
- 제목은 필수, 내용은 선택하여 작성할 수 있습니다.

![Main](https://user-images.githubusercontent.com/66022264/183277173-d0f0f492-9e0e-4f52-acea-b779103bfa54.png)

#### Todo 수정
- 각 Todo의 편집 버튼을 눌러 제목과 내용을 수정할 수 있습니다.
- 제목과 내용을 입력했다면, 체크버튼을 눌러 저장할 수 있습니다.

![스크린샷 2022-08-07 오후 2 53 38](https://user-images.githubusercontent.com/66022264/183277423-9948c507-4bd3-4169-bae4-b512615440cb.png)

![스크린샷 2022-08-07 오후 2 56 08](https://user-images.githubusercontent.com/66022264/183277422-5b0f23e0-835b-463e-9f1f-a1893f4caf6f.png)

![스크린샷 2022-08-07 오후 2 56 13](https://user-images.githubusercontent.com/66022264/183277421-e9bf8f52-7d51-41b7-a382-6afcce955fb8.png)

#### Todo 삭제
- 삭제하고 싶은 Todo의 휴지통 버튼을 클릭하면 삭제됩니다.

![스크린샷 2022-08-07 오후 3 03 26](https://user-images.githubusercontent.com/66022264/183277614-151eeeb9-a5b9-4281-bf6c-b78b8335f9fe.png)

![스크린샷 2022-08-07 오후 3 03 39](https://user-images.githubusercontent.com/66022264/183277615-e5b8e5e7-3fbb-4e7d-b8df-ec0508f6c02e.png)

#### 하단의 로그아웃 버튼을 클릭하면, local storage에 저장되있는 token이 삭제되며 안전하게 로그인 페이지로 이동합니다.
