
function test_sort(){
    var char_dict = {};
    var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];


    for(var i=0; i<arr.length;i++){
        if(char_dict.hasOwnProperty(arr[i])){
                //跳过已经参与过比较的元素
        }else{
            char_dict[arr[i]] = [i];
            for(var j=i+1; j<arr.length; j++){
                if(arr[i] == arr[j]){
                    char_dict[arr[i]].push(j);
                }else{}
            };
        }
    }
    console.log(char_dict);

    //对象转数组
    var output = [], item;

    for (var element in char_dict) {
        item = {};
        item.element = element;
        item.subscript = char_dict[element];
        item.num = char_dict[element].length;
        output.push(item);
    }
    console.log(output);

    //排序
    output = output.sort(function (x, y) {
        if (x.num < y.num) {
            return 1;
        }
        if (x.num > y.num) {
            return -1;
        }
        return 0;
    });

    var result = output[0];
    console.log(result);


    document.getElementById("result").innerHTML = "结果为: "+JSON.stringify(result);
}
