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
let replyService = (function () {
//일회성으로 사용되는 함수

    //댓글 등록
    function add(reply, callback, error) { //callback, error는 외부에서 전달받을 함수이다.
        //함수의 파라미터 개수를 일치시킬 필요가 없기 때문에
        //사용시 callback이나 error와 같은 파라미터는 상황에 따라 작성한다.
        $.ajax({    /*$.ajax({name:오강래})*/
            url: "/reply/new",//ReplyController랑 연결됨, 거기서 링크보고 연결
            type: "post",
            data: JSON.stringify(reply),//JSON.stringify() 이 메서드는 js값이나 객체를 json 문자열로 변환한다.
            // 전달할 JSON데이터에서 문자열 처리가 필요한 것들(key, dateType)을 자동으로 처리해준다.
            contentType: "application/json",
            //여기까지가 보내기
            success: function (result) {//요청 완료시
                if (callback) {
                    //외부에서 전달받은 값이 있다면 결과를 해당 함수의 매개변수로 전달하여 사용한다.
                    callback(result);
                }
            },
            error: function (xhr, status, er) {//요청 실패시
                if (error) {
                    error(er);
                }
            }
        });
    }

    // 댓글 한 개 정보 가져오기
    function get(rno, callback, error) {
        $.ajax({
            url: "/reply/" + rno,
            type: "get",
            dataType: "json",
            success: function (reply) {
                if (callback) {
                    callback(reply);
                }
            }
        })
    }

    //댓글 삭제
    function remove(rno, callback, error) {
        $.ajax({
            url: "/reply/" + rno,
            type: "delete",
            success: function (result) {
                if (callback) {
                    callback(result);
                }
            }
        });
    }

    //댓글 수정
    function modify(reply, callback, error) {
        $.ajax({
            url: "/reply/" + reply.rno,
            type: "patch", //ReplyController에 수정부분이 @PatchMapping이기 때문에
            data: JSON.stringify(reply),//JSON.stringify() 이 메서드는 js값이나 객체를 json 문자열로 변환한다.
            contentType: "application/json; charset=utf-8;",

            success: function (result) {
                if (callback) {
                    callback(result);
                }
            }

        });
    }


    // 댓글 목록

    function getList(param, callback, error) {
        let page = param.page || 1;
        $.getJSON("/reply/list/" + param.bno + "/" + page, function (replyPageDTO) {
            if (callback) {
                callback(replyPageDTO.total, replyPageDTO.list);
            }
        }).fail(function (xhr, status, er) {
            if (error) {
                error(er);
            }
        });
// 댓글 목록
//         function getList(param, callback, error) {   //뭘받을지는 컨트롤러 가서 확인
//         let page = param.page || 1;
//         $.ajax({
//             url:"/reply/list/" + param.bno + "/" + page,
//             type:"get", //get방식이고
//             dataType: "json",//왜? json?  controller에 리턴타입이 List<ReplyVO>(객체) 때문에
//             success: function(list){
//                 if(callback){
//                     callback(list);
//                 }
//             },
//             error: function(xhr, status, er){//요청 실패시
//                 if(error){
//                     error(xhr, status, er);
//                 }
//             }
//         });
//     }


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


//     return {getList: getList};
// })();

//     return {add: add, get: get, remove: remove, modify: modify};
// })();


        //댓글 작성 시간(Javascript)
        function getReplyDateByJavascript(replyDate) {
            let today = new Date();
            let rDate = new Date(replyDate);
            let gap = today.getTime() - rDate.getTime();

            if (gap < 1000 * 60 * 60 * 24) {
                let h = rDate.getHours();
                let m = rDate.getMinutes();
                let s = rDate.getSeconds();

                return [(h < 10 ? '0' : '') + h, (h < 10 ? '0' : '') + m, (h < 10 ? '0' : '') + s].join(":");
            } else {
                let y = rDate.getFullYear();
                let m = rDate.getMonth();
                let d = rDate.getDate();

                return [y, (m < 10 ? '0' : '') + m, (d < 10 ? '0' : '') + d]
            }

        }
    }

    return {
        add: add,
        get: get,
        remove: remove,
        modify: modify,
        getList: getList,
        getReplyDateByJavascript: getReplyDateByJavascript
    };
})();