const roomsTag1 = document.getElementById("rooms-tag1")

function clickButton(clicked_id){
    roomsTag1.innerHTML = `${clicked_id}を予約しました！`
}