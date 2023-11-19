function send() {
    number1 = document.getElementById("word").value;
    number2 = get_word.toLowerCase();
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 +"</h4>";
    inputbox = "<br>Answer : <input type='text' id='input_text_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").innerHTML = row;
    document.getElementById("number2").innerHTML = row;
}