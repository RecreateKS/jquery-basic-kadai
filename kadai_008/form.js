// ボタンをクリックした際に、テキストボックス内に「クリックしました！」と表示
$('.btn').on('click', function(){
    $('.text-box').val("クリックしました！")
});