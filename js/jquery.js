$("#button").click(function() {
$("#box")
   .css({
        color: "red",
        background :"black",
        width:"100%",
        height:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    })
    .fadeToggle(2000)
    .fadeToggle(2000)
})