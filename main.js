function addUser(){
    var player_1_name_input = document.getElementById("player_1_name_input").value;
    var player_2_name_input = document.getElementById("player_2_name_input").value;
    localStorage.setItem("player_1_name_input", player_1_name_input);
    localStorage.setItem("player_2_name_input", player_2_name_input);
    window.location="quiz_game_game.html";
}