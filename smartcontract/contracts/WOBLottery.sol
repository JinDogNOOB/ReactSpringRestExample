// SPDX-License-Identifier: WTFPL
pragma solidity >=0.4.22 <0.9.0;



contract wobLottery{
    address payable owner;
    // 로또 회차(블록넘버)
    uint256 public gameNumber;
    // 모인 돈
    uint256 public gatheredWei;
    // 로또 한 회의 시작 블록 넘버
    // 시작 + 36864(6일) == 복권구매금지 시작시간
    // 복권구매금지 시작시간 + 25 == 복권당첨번호 기준 블록
    // 복권당첨번호 기준 블록 + 25 == 정산메소드 동작가능시간 시작
    // 
    // 복권당첨번호 기준 블록 으로부터 200블록 지났으면 이월
    uint256 public startBlockNumber;
    mapping(uint256 => mapping(uint8 => address payable[])) internal participants;
    
    // constructor
    constructor(){
        owner = payable(msg.sender);
        gameNumber = 0;
        gatheredWei = 0;
        startBlockNumber = block.number+1;
    }

    modifier onlyOwner{
        require(msg.sender == owner, "only owner can call the function");
        _;
    }

    function destroy() public onlyOwner{
        selfdestruct(owner);
    }


    /**
    external 
    로또 참여 함수
    number : 1~100
    msg.value 0.0015ETH 이상
    */
    function passNumberNPay(uint8 number) external payable returns(bool){
        require(0 < number && number < 101, "number should be within 1~100");
        require(msg.value >= 1500000000000000, "msg.value must be higher than 0.0015ETH");
        require(startBlockNumber+36864 >= block.number, "can't do this after startBlockNumber+36864");

        participants[gameNumber][number].push(msg.sender);
        gatheredWei += msg.value;
        return true;
    }

    // 아 이더리움 dirty read 같은거 조사좀 해봐야하는데
    // 만약 dirty read 같은거를 evm이 막으면 onlyOwner로 굳이 주인이 draw안호출해도된다
    // 전부한테 풀어버리고 맨 처음 한 사람이 draw() 하고 인센티브 조금 가져가고
    function draw() external payable returns(bool){
        require(startBlockNumber+36864+50 < block.number, "you can draw lottery only after startBlockNumber+36864+50");

        bool result = false;
        if(startBlockNumber+36864+50+175 < block.number){
            // 기한 넘음 => 돈 이월하고(그대로 두고) 새 게임 시작
            startNewGame();
        }else if(participants[gameNumber][getWinningNumber()].length == 0){
            // 당첨자 없음 => 돈 이월하고 새 게임 시작
            startNewGame();
        }else{
            // 당첨자 존재 => 당첨자에게 송금
            sendETHtoWinners();
            gatheredWei = 0; // 모인액수 초기화
            startNewGame();
            result = true;
        }
        return result;
    }

    
    // #### PRIVATE METHODS ####
    
    // startNewGame
    function startNewGame() private {
        gameNumber++;
        startBlockNumber = block.number+1;
    }

    // get winningNumber
    function getWinningNumber() private view returns (uint8){
        bytes32 hashval = blockhash(startBlockNumber+36864+25);
        bytes1 result = hashval[0];
        for(uint8 i = 1; i < hashval.length; i++){
            result ^= hashval[i];
        }
        return uint8(result) % 100 + 1 ;
    }

    // sendETHtoWinners
    function sendETHtoWinners() private{
        uint256 gatheredWeiTotalToBeSent = (gatheredWei / 100)*95; // 전체 금액의 95퍼센트를 당첨자에게
        uint8 winningNumber = getWinningNumber();
        uint numberOfWinners = participants[gameNumber][winningNumber].length;
        // 전송
        for(uint i = 0; i < numberOfWinners; i++){
            participants[gameNumber][winningNumber][i].transfer(gatheredWeiTotalToBeSent/numberOfWinners);
        }
    }


    

    // 검증 및 당첨자에게 송금 
    // 만약 한시간 지나거나 1등이 안나오면 이월 
    // 45개의 boolean 배열로 당첨번호 생성 
    
    
    
    // 특정 블록넘버의 블록해쉬 최근 256(한시간) 까지 가능
    // 이더리움 기준 블록 하나당 대략 15초 거의 한시간 
    // 이더리움 20 confirmations 대략 5분 
    // 행동에 30분 넣자 당첨번호 발표 전 15분 막고
    // 발표 후 남은 시간동안 까야한다 
    // 안까면 이월 
    function test1() public view returns(bytes32){
        
        return blockhash(2);
    }
    
    // 이 트랜잭션이 실행되는 순간의 최신 블록 번호
    function test2() public view returns(uint256){ 
        return block.number;
    }
    
   
}