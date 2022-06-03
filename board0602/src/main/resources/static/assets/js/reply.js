/*
*   reply module
* read.html 과 연결
*
* url : '요청할 주소' 타입은 String 이고 요청을 보낼 URL을 포함하는 문자열입니다. , controller의 매핑값
* data : 요청과 함께 서버로 전송되는 일반 개체 또는 문자열. , controller로 보낼 데이터
* dataType : "text", //xml, json, script, html  기본값은 text 즉 문자열 이다. , 받을 데이터 타입
* type : '전송방식' //POST, GET, PUT
* contentType : 보내는 데이터에 대한 타입
*
*/

console.log("Reply Module......");
let replyService = (function(){
//일회성으로 사용되는 함수

    //댓글 등록
    function add(reply, callback, error){ //callback, error는 외부에서 전달받을 함수이다.
        //함수의 파라미터 개수를 일치시킬 필요가 없기 때문에
        //사용시 callback이나 error와 같은 파라미터는 상황에 따라 작성한다.
        $.ajax({    /*$.ajax({name:오강래})*/
            url: "/reply/new",//ReplyController랑 연결됨, 거기서 링크보고 연결
            type: "post",
            data: JSON.stringify(reply),//JSON.stringify() 이 메서드는 js값이나 객체를 json 문자열로 변환한다.
            // 전달할 JSON데이터에서 문자열 처리가 필요한 것들(key, dateType)을 자동으로 처리해준다.
                contentType: "application/json",
            //여기까지가 보내기
           success: function(result){//요청 완료시
                if(callback){
                    //외부에서 전달받은 값이 있다면 결과를 해당 함수의 매개변수로 전달하여 사용한다.
                    callback(result);
                }
            },
            error: function(xhr, status, er){//요청 실패시
                if(error){
                    error(er);
                }
            }
        });
    }

    //댓글 한 개 정보 가져오기
    // function get(rno, callback, error){
    //     $.ajax({
    //         url: "/reply/" + rno,
    //         type: "get",
    //         dataType: "json",
    //         success: function(reply){
    //             if(callback){
    //                 callback(reply);
    //             }
    //         }
    //     })
    // }

    //댓글 삭제
    // function remove(rno, callback, error){
    //     $.ajax({
    //         url: "/reply/" + rno,
    //         type: "delete",
    //         success: function(result){
    //             if(callback){
    //                 callback(result);
    //             }
    //         }
    //     });
    // }

    //댓글 수정
    // function modify(rno ,callback, error){
    //     $.ajax({
    //        url: "/reply/" + rno,
    //        type: "patch", //ReplyController에 수정부분이 @PatchMapping이기 때문에
    //         data: JSON.stringify(reply),//JSON.stringify() 이 메서드는 js값이나 객체를 json 문자열로 변환한다.
    //         contentType: "application/json",
    //
    //         success: function(result){
    //             if(callback){
    //                 callback(result);
    //             }
    //         }
    //
    //     });
    // }


    // 댓글 목록
    // function getList(rno,reply, callback, error) {//뭘받을지는 컨트롤러 가서 확인
    //     $.ajax({
    //         url:"/reply/list/" + bno + "/" + page,
    //         type:"get", //get방식이고
    //         dataType: "json",
    //         success: function(list){
    //             if(callback){
    //                 callback(list);
    //             }
    //         }
    //     });
    // }


    // 1번 매개변수 없고 리턴은 문자열

    // function hi() {
    //     $.ajax({
    //         url:"/reply/" + ,
    //         type:"get",//전송방식
    //         dataType: "text",
    //         success: function (list) {//성공시
    //             if(callback){
    //                 callback(list);
    //             }
    //         }
    //     })
    //
    // }



    return {add: add, get: get};

//     return {add: add, get: get, remove: remove, modify: modify};
// })();


//     return {add: add, get: get, remove: remove, modify: modify};//, getlist: getlist
// })();