/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/
let memberList=['유노윤호','최강창민','영웅재중','믹키유천','시아준수'];
while(true){
    if(memberList.length===0){
        alert(`모든 멤버가 삭제 되었습니다!`);
        break;
    }
    else{

        let usetAnswer=prompt(`[${memberList}]\n삭제할 멤버를 입력하세요`);
        let indexNumber=memberList.indexOf(usetAnswer);
        if (indexNumber===-1){
            alert(`${usetAnswer}은(는) 없는 이름입니다. 다시 입력해 주세요!`);
            continue;
        }
        else{
            memberList.splice(indexNumber,1);
            alert(`${usetAnswer}가 삭제 되었습니다.`)

        }
    }
    
}