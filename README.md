# 목표
* react 학습
    - provider, context, hooks
* spring boot 학습
    - spring security
* .net core 학습
* css 학습
* 이더리움 메인넷, 컨트랙트 학습

# git clone 후에 해줘야할것
mvn -N io.takari:maven:wrapper

# 구현된 기능 
* RESTAPI(spring boot)
* 디테일한 권한 및 자잘한 기능 구현생략
    - 회원가입, 로그인
    - 게시판 생성
    - 게시글, 댓글 입력
    - 어드민페이지
    - 랜덤번호생성(메인넷, 테스트넷 블록해쉬 이용)



# 구현 예정 기능
* react
    - 사다리타기 + main net
        - (랜덤번호생성과 똑같이 블록해쉬이용해서 사다리 만들고 전시 html canvas 이용)
        - 페이지 하나 만들어야함
    - 복권 + main net
        - 테스트넷트워크 중에 적절한곳에 복권 컨트랙트 배포
        - 페이지 하나 만들어야함


# 개발 환경
* VSC
* testDB h2안쓰고 mysql사용했고,, jpa사용안함