// 打开时就刷新新闻列表
$(document).ready(function() {
    var $newsTable = $("#newstable tbody");

    refreshNews();

    // 添加新闻
    $('#btnsubmit').click(function(e) {
        e.preventDefault();

        // 输入判断
        if ($('#newstitle').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "") {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
        } else {
            var jsonNews = {
                'newstitle': $('#newstitle').val(),
                'newstype': $('#newstype').val(),
                'newsimg': $('#newsimg').val(),
                'newstime': $('#newstime').val(),
                'newssrc': $('#newssrc').val(),
            };


            // 提交添加
            $.ajax({
                url: '/news',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    console.log(data);
                    refreshNews();
                }
            });
        }
    })



    // 删除新闻的功能
    var deletdId = null;
    $newsTable.on('click', '.btn-danger', function(e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(5).html();
    })
    $('#deleteModal #confirmDelete').click(function() {
        if (deleteId) {
            $.ajax({
                url: '/news/'+deleteId,
                type: 'delete',
                data: { 'newsid': deleteId },
                datatype: 'json',
                success: function() {
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }
            })
        }
    })


    // 修改新闻的功能
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(5).html();
        $.ajax({
            url: '/news/'+updateId,
            type: 'get',
            datatype: 'json',
            data: { 'newsid': updateId },
            success: function(data) {
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split('T')[0];
                $('#unewstime').val(utime);
            }
        })
    })
    $('#updateModal #confirmUpdate').click(function(e) {
        $.ajax({
            url: '/news/'+updateId,
            type: 'post',
            data: {
                'newstitle': autoscape($('#unewstitle').val()),
                'newstype': autoscape($('#unewstype').val()),
                'newsimg': autoscape($('#unewsimg').val()),
                'newstime': $('#unewstime').val(),
                'newssrc': autoscape($('#unewssrc').val()),
                'id': updateId,
            },
            success: function() {
                $('#updateModal').modal('hide');
                refreshNews();
            }
        });
    });


    function refreshNews() {
        $newsTable.empty();

        $.ajax({
            type: 'get',
            url: '/news',
            datatype: 'json',
            success: function(data) {
                console.log(data);
                data.forEach(function(item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdctrl = $('<td>');
                    var $btnupdata = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btnuplete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdata, $btnuplete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdsrc, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
                })
            }
        });
    }
    // 转义特殊字符
    function autoscape(specialchars) {
        return specialchars.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

});
