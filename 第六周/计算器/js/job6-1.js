var num=0,result=0,numshow="0",hasminus=0;
var operate=0;           //判断输入状态的标志
var calcul=0;            //判断计算状态的标志
var quit=0;              //防止重复按键的标志

function command(num){
    var str=String(document.calculator.numScreen.value);    //获得当前显示数据
    str=(str!="0") ? ((operate==0) ? str : "") : "";        //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值;
    str=str + String(num);                   //给当前值追加字符
    document.calculator.numScreen.value=str; //刷新显示
    operate=0;   //重置输入状态
    quit=0;      //重置防止重复按键的标志
}
function del(){   //退格
    var str=String(document.calculator.numScreen.value);
    str=(str!="0") ? str : "";
    str=str.substr(0,str.length-1);
    str=(str!="") ? str : "0";
    document.calculator.numScreen.value=str;
    hasminus=0;
    }

function clearscreen(){     //清除数据
    num=0;
    result=0;
    numshow="0";
    document.calculator.numScreen.value="0";
    hasminus=0;
    }

function minusSign(){
	if (hasminus==0){
		document.calculator.numScreen.value="-";
	}
	operate=0;
	hasminus = 1;
}

function plus(){  //加法
    calculate(); //调用计算函数
    operate=1;   //更改输入状态
    calcul=1;    //更改计算状态为加
    hasminus=0;
    }
function minus(){  //减法
    calculate();
    operate=1;
    calcul=2;
    hasminus=0;
    }
function times(){  //乘法
    calculate();
    operate=1;
    calcul=3;
    hasminus=0;
    }
function divide(){  //除法
    calculate();
    operate=1;
    calcul=4;
    hasminus=0;
    }
function persent(){  //求余
    calculate();
    operate=1;
    calcul=5;
    hasminus=0;
    }
function sin(){    //求sin值
	calcul=6;
	calculate()
	operate=0;
	calcul=0;
	hasminus=0;
	
}
function cos(){    //求cos值
	calcul=7;
	calculate()
	operate=1;
	calcul=0;
	hasminus=0;
}
function backwards(){    //求倒数值
	calcul=8;
	calculate()
	operate=1;
	calcul=0;
	hasminus=0;
}
function sqrt(){    //开方
	calcul=9;
	calculate()
	operate=1;
	calcul=0;
	hasminus=0;
}

function equal(){
    calculate();    //等于
    operate=0;
    num=0;
    result=0;
    hasminus=0;
    numshow="0";
    }
function dot(){
    var str=String(document.calculator.numScreen.value);
    str=(str!="0") ? ((operate==0) ? str : "0") : "0";        //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0";
    for(i=0; i<=str.length;i++){             //判断是否已经有一个点号
        if(str.substr(i,1)==".") return false;   //如果有则不再插入
    }
    str=str + ".";
    document.calculator.numScreen.value=str;
    operate=0;
    }
function calculate(){
    numshow=Number(document.calculator.numScreen.value);
    if((num!=0 || calcul == 6 || calcul == 7|| calcul==8 || calcul==9) && quit!=1){                            //判断前一个运算数是否为零以及防重复按键的状态
        switch(calcul){                                   //判断要输入状态
            case 1:result=parseFloat((num+numshow).toFixed(8));break;               //计算"+" 
            case 2:result=parseFloat((num-numshow).toFixed(8));break;               //计算"-"
            case 3:result=parseFloat((num*numshow).toFixed(8));break;               
            case 4:if(numshow!=0){result=parseFloat((num/numshow).toFixed(8));}else{result="被除数不能为零！";} break;
            case 5:result=parseFloat((num%numshow).toFixed(8));break;
            case 6:result=parseFloat((Math.sin(numshow*Math.PI/180)).toFixed(8));break;
            case 7:result=parseFloat((Math.cos(numshow*Math.PI/180)).toFixed(8));break;
            case 8:if(numshow!=0){result=parseFloat((1/numshow).toFixed(8));}else{result="分母不能为零！";} break;
            case 9:if(numshow>=0){result=parseFloat((Math.sqrt(numshow)).toFixed(8));}else{result="不能小于0!";} break;
            }
        quit=1;    //避免重复按键
        }
    else{
        result=numshow;
        }
    numshow=String(result);
    document.calculator.numScreen.value=numshow;
    num=result;   //存储当前值
    hasminus=0;
    }