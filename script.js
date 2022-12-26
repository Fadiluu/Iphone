$(document).ready(function(){
    $("#calcbtn").click(function(){
        $("#calc").show()
    })
    $("#button").click(function(){
        $("#calc").hide()
    })
})
function calculate(val){
    document.getElementById("calcscrn").value=document.getElementById("calcscrn").value+val
}
function AllClear(){
    document.getElementById("calcscrn").value=""
}
function EqualTo(){
    var text=document.getElementById("calcscrn").value
    result=eval(text)
    document.getElementById("calcscrn").value=result
}
function SingleClear(){
    document.getElementById("calcscrn").value = document.getElementById("calcscrn").value.slice(0,-1)

} 
function hoi(){
    
}
