
function calculate(){
     var x = parseFloat(document.getElementById("x").value); //第一个数
    var y = parseFloat(document.getElementById("y").value);//第二个数
    var c = document.getElementById("char").value;
    var result;//结果
    if(isNaN(x) || isNaN(y)){
        result="请输入数字";
    }else{
        if(c=="+"){
            result = parseFloat((x+y).toFixed(8));
        }else if(c=="-"){
            result = parseFloat((x-y).toFixed(8));
        }else if(c=="*"){
            result = parseFloat((x*y).toFixed(8));
        }else if(c=="/"){
            if(y == 0){
                result="分母不能为0";
            }else{
                result = parseFloat((x/y).toFixed(8));
            }
        }else{
            result = "出错啦";
        }
    }
    
    document.getElementById("result").innerHTML=result;
}