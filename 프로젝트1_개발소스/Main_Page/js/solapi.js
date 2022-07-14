const api_key = 'NCSJTUHVWWQ0EWKT'
const api_secret = 'AU16IKRS7CVUPXXWOWP3ECGMEFBB7VCQ'

function getAuthorization(){
    let salt = getSalt();
    let date = getDate();
    let value = date + salt;
    let signature = getSignature(value, api_secret);
    let authoriztion = 'HMAC-SHA256 apiKey='+api_key+', date='+date+', salt='+salt+', signature='+signature;
    return authoriztion;
}

function getSalt(){
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 30; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function getDate(){
    let today = new Date();
    return today.toISOString();
}

function getSignature(value, key){
    let signature = CryptoJS.HmacSHA256(value, key);
    return signature;
}

var request;

function getPlusfriend(pfid){
    let url = 'https://api.solapi.com/kakao/v1/plus-friends/' + pfid;

    request = new XMLHttpRequest();

    if(!request){
        alert('request create fail');
        return;
    }

    let authoriztion = getAuthorization();

    request.onreadystatechange = requestResult;
    request.open('GET', url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", authoriztion);
    request.send();
}

function getPlusfriends(){
    let url = 'https://api.solapi.com/kakao/v1/plus-friends';

    request = new XMLHttpRequest();

    if(!request){
        alert('request create fail');
        return;
    }

    let authoriztion = getAuthorization();

    request.onreadystatechange = requestResult;
    request.open('GET', url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", authoriztion);
    request.send();
}

function getTemplate(templateId){
    let url = 'https://api.solapi.com/kakao/v1/templates/' + templateId;

    request = new XMLHttpRequest();

    if(!request){
        alert('request create fail');
        return;
    }

    let authoriztion = getAuthorization();

    request.onreadystatechange = requestResult;
    request.open('GET', url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", authoriztion);
    request.send();
}

function getTemplates(){
    let url = 'https://api.solapi.com/kakao/v1/templates';

    request = new XMLHttpRequest();

    if(!request){
        alert('request create fail');
        return;
    }

    let authoriztion = getAuthorization();

    request.onreadystatechange = requestResult;
    request.open('GET', url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", authoriztion);
    request.send();
}

function sendMessage(name, tel, date, btn_url, pfid, templateId, where, phonenum, 안내문구, location){
    let url = 'https://api.solapi.com/messages/v4/send';

    request = new XMLHttpRequest();

    if(!request){
        alert('request create fail');
        return;
    }

    let authoriztion = getAuthorization();

    request.onreadystatechange = requestResult;
    request.open('POST', url);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", authoriztion);

//       ## 이 메시지는 '참좋은 휘트니스' 일일무료체험을
//      신청하신 분에게만 발송되는 메시지 입니다.

//      ▶ 예약자: #{name}
//      ▶ 예약 신청일자: #{date}
//      ▶ 예약 방문지점: #{where}
//      ▶ 센터 위치: #{location}
//      ▶ 센터 전화번호: #{phonenum}

//      #{안내문구}

    var message = {"message": 
    {"to": tel,
    "from": "01033528779",
    "text": `## 이 메시지는 '참좋은 휘트니스' 일일무료체험을 신청하신 분에게만 발송되는 메시지 입니다.\n\n▶ 예약자: ${name}\n▶ 예약 신청일자: ${date}\n▶ 예약 방문지점: ${where}\n▶ 센터 위치: ${location}\n▶ 센터 전화번호: ${phonenum}\n\n${안내문구}`,
    "type": "ATA",
    "kakaoOptions": 
    {"pfId": pfid,
    "templateId": templateId,
    "buttons": [{
        "buttonType": "WL",
        "buttonName": "예약 상세 정보 확인",
        "linkMo": 'http://lwy5632.dothome.co.kr/',
        "linkPc": 'http://lwy5632.dothome.co.kr/'}]
    }}};
    
    message = JSON.stringify(message);

    request.send(message);
    return;
}

function requestResult(){
    if(request.readyState == XMLHttpRequest.DONE){
        alert('신청이 정상적으로 접수되었습니다.');
    }
}