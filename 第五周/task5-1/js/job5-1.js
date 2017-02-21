
function sort(){
    var text;
    var score = document.getElementById("score").value;
    console.log(score);

    score = parseInt(score); //将字符串转为整型
    switch(true){
        case 90 <= score && score <= 100:
            text="您的等级为: 第一级";
            break;
        case 80 <= score && score < 90:
            text="您的等级为: 第二级";
            break;
        case 70 <= score && score < 80:
            text="您的等级为: 第三级";
            break;
        case 60 <= score && score < 70:
            text="您的等级为: 第四级";
            break;
        case 50 <= score && score < 60:
            text="您的等级为: 第五级";
            break;
        case 40 <= score && score < 50:
            text="您的等级为: 第六级";
            break;
        case 30 <= score && score < 40:
            text="您的等级为: 第七级";
            break;
        case 20 <= score && score < 30:
            text="您的等级为: 第八级";
            break;
        case 10 <= score && score < 20:
            text="您的等级为: 第九级";
            break;
        case 0 <= score && score < 10:
            text="您的等级为: 第十级";
            break;
        default:
            text="出错啦";
    }


    document.getElementById("result").innerHTML=text;
}