$(document).ready(function(){
    // console.log("hamza"); 
    $("#btn-1").click(function(){
        if(!$("#drop1content").hasClass("active")){
            //code for open
            $("#drop1content").addClass("active")
          }else{
            //code for close
            $("#drop1content").removeClass("active")
          } 
    });
    $("#btn-2").click(function(){
        // console.log("hamza"); 
        if(!$("#drop2content").hasClass("active")){
            //code for open
            $("#drop2content").addClass("active")
          }else{
            //code for close
            $("#drop2content").removeClass("active")
          } 
          
    });

    // const btn = $("#btn")
    // const panels = $('.drop1content');
    // console.log(btn);
    // btn.click(function(){
    //     const tab = $(this)
    //     const panel=$(this.panels)
    //     console.log(panel)
    //     // const panel = $("")
    // })
})