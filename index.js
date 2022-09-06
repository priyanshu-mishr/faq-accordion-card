var questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    question.addEventListener("click", function(){
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active");
        } else {
            questions.forEach(function(question){ 
                question.parentNode.classList.remove("active");
            });
            question.parentNode.classList.add("active");
        }
    });
});