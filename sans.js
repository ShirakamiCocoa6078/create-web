function pointUp(){
    var tempEle = document.createElement("div")
    document.getElementById("wa").append(tempEle)
    var byeansu1 = prompt("질문", "예상답변")
    tempEle.innerHTML = "답변 결과 : " + byeansu1
}
function YN(){
    var tempEle = document.createElement("div")
    document.getElementById("wa").append(tempEle)
    var byeansu2 = confirm("확인/취소 선택창")
    tempEle.innerHTML = "확인/취소 선택결과 : " + byeansu2
}
function rroad(){
    var rrroad = confirm('정말로 새로고침 하시겠습니까?')
    if(rrroad){
        location.reload()
    }
}
function tosite(){
    var url
    var byeansu3 = prompt("사이트 이동(구글/네이버)")
    switch(byeansu3){
        case "구글": url = "www.google.com"
        break
        case "네이버": url = "www.naver.com"
        break
        default: alert('없는 목록입니다. (알람 기능)')
        break
    }
    if(url){
        var q = confirm('새 탭으로 여시려면 확인, 해당 탭에서 이동하려면 취소를 누르세요')
        if(!q){
            location.href = "http://" + url//해당 사이트로 이동(이동(새로운 창 X))
        }else{
            open("http://" + url, "_blank")
        }
    }
}
function popup(){
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    open("https://www.naver.com", "와 네이버 아시는구나!(창 이름)","width=350, height=400, left=50,top=10, scrollbars=no") //창이름 적용 안됨
    //scrollbars = 스크롤 노출 여부 (다음과 같은 옵션은 yes, no로 설정)
    //location = URL입력란 노출 여부
    //status = 상태 표시줄 노출 여부
    //toolbars = 도구 상자영역 노출 여부
}
var test
function banbok(){
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    var count = 0
    var tt = prompt("몇초 간격으로 실행시킬건가요?", 1)
    if(tt){
        test = setInterval(function() {tempEle.innerHTML = "샌즈" + (++count)}, tt*1000) //책 119쪽 참고
    }                      //ㄴ function은 선택사항
}
    function cancelb(){
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    clearInterval(test)
}
var ttest
var dd = false
function stimeout(){
    dd = false
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    var tt = prompt("몇초 후에 실행시킬건가요?", 1)
    if(tt){
        dd = true
        ttest = setTimeout(function() {
            tempEle.innerHTML = tt+"초 후에 나온 텍스트"
            dd = false
        }, tt*1000)
    }
}
function ctimeout(){
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    if(dd === true){
        clearTimeout(ttest)
        tempEle.innerHTML = "실행될 타임아웃을 종료시켰습니다."
        dd = false
    }else{
        tempEle.innerHTML = "종료시킬 타임아웃이 없습니다."
    }
}
function cheakpf(){
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    var platformInfo = navigator.userAgent.toLowerCase()
    var string

    if(platformInfo.indexOf('windows') >= 0){
        string = 'windows'
    }else if(platformInfo.indexOf('macintosh') >= 0){
        string = 'macintosh'
    }else if(platformInfo.indexOf('iphone') >= 0){
        string = 'iphone'
    }else if(platformInfo.indexOf('android') >= 0){
        string = 'android'
    }
    tempEle.innerHTML = "현재 사용중인 플랫폼 : " + string + "\n기타 정보 : " + platformInfo + ", 윈도우 전용 : " + platformInfo.indexOf('windows')
}
var colorList = ['blue', 'red', 'yellow', 'white', 'aqua', 'purple']
var i = 0
function changec(){
    if(i >= colorList.length){
        i = 0
    }else{
        var bodyTag = document.getElementById("body")
        bodyTag.style.backgroundColor = colorList[i]
        i++
    }
}
//여기서부터ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
/*
$(".onMouse").on("mouseover focus", function() {
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    tempEle.innerHTML = "샌즈"
})
$(".printip").ajax({
    var tempEle = document.createElement('div')
    document.getElementById('wa').append(tempEle)
    url: "https://api.ip.pe.kr/json"
}).done(function(api){
    tempEle.innerHTML = $"ip : {api.ip}, country : {api.country_code}"
}).fail(function(){
    alert("로딩 실패")
})
*/
//여기까지 어케하는지 모르겟음ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//screen 객체 설명(나중에 사용해보기)
/*
screen.width = 화면의 너빗값(가로)을 반환
screen.height = 화면의 높잇값(세로)을 반환
screen.availWidth = 화면의 너빗값(작업 표시줄 제외)
screen.availHeight = 화면의 높잇값(작업 표시줄 제외)
screen.colorDepth = 사용자 모니터가 표현 가능한 컬러 bit을 반환

location 객체 설명(나중에 사용해보기)
location.href = 주소를 설정하거나 현재 URL을 반환
location.hash = URL의 해시값(#)을 반환
location.hostname = URL의 호스트 이름을 설정하거나 반환
location.host = URL의 호스트 이름과 포트 번호를 반환
location.protocol = URL의 프로토콜을 반환
location.reload() = 새로고침

history 객체 설명(나중에 사용해보기)
history.back = 전 사이트로 이동
history.forward() = 방문했던 사이트로 이동(없으면...?)
history.go(number) = 숫자에 -2를 입력하면 2번 전에 방문한 사이트로 이동, +시 앞으로 이동
history.length = 방문 기록에 저장되어있는 목록의 갯수 반환

navigatior 객체 설명(나중에 사용해보기)
navigatior.appCodeName = 현재 브라우저의 코드명 반환
navigatior.appName = 현재 브라우저의 이름을 반환
navigatior.appVersion = 현재 브라우저의 버전 정보를 반환
navigatior.language = 현재 브라우저가 사용중인 언어를 반환
navigatior.product = 현재 브라우저의 엔진 이름을 반환
navigatior.platform = 현재 컴퓨터의 운영체제 정보를 반환
navigatior.onLine = 온라인(네트워크 연결 상태)여부를 반환
navigatior.userAgent = 브라우저와 운영체제의 종합 정보를 반환
태그정보
document.write("<img src='images URL'>", "<br>") <- 이미지 불러오는거
*/
//이제 html은 끝, css 공부하자