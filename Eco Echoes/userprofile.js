
let step = ["Name","Surname","Age","Gender","Agree with privacy terms","Interest in terrestial life","Your contribute","Task","Place","Assignment type"
            ,"Area of study","Highest degree","University / Institution","Completion year","Country",
            "Availability of voluntering","Surname","Telephone Number","Email Adress"];
let count=0;


let count01 = 1;
let count02 = 0;
let count03 = 0;
let count04 = 0;



document.getElementById("joinus").onclick=function(){
    document.getElementById("joinus").style.display="none";
    document.getElementById("clickhere").style.display="none";
    document.getElementById("box1").style.display="block";
    document.getElementById("survey1").style.display="block";
}


let next=document.getElementById("button1");
next.addEventListener('click',function(){
   
    if(count<4){
        
        if(document.getElementById("input1").value === ""){
            alert("Please fill the given field or else press skip...!");
        }
        else{
        step[count++] = document.getElementById("input1").value;
        count01 = count01 + 1;
        var rewriteText01 ="STEP 1 Personal details | Question " + count01 + "/5";
        document.getElementById("steps").innerHTML=rewriteText01;
        document.getElementById("text1").innerHTML= step[count];
        document.getElementById("input1").value = "" ;
        
        
        } 
         
        
        

    }else if (count<9){
         

        if(document.getElementById("input1").value === ""){
            alert("Please fill the given field or else press skip...!");
        }
        else{
        step[count++] = document.getElementById("input1").value;
        count02 = count02 + 1;
        var rewriteText02 = "STEP 2 volunteering tasks | Question " + count02 +"/5" ;
        document.getElementById("steps").innerHTML = rewriteText02;
        document.getElementById("text1").innerHTML= step[count];
        document.getElementById("input1").value = "" ;

        }

        

    }else if (count<14){

        if(document.getElementById("input1").value === ""){
            alert("Please fill the given field or else press skip...!");
        }
        else{
        step[count++] = document.getElementById("input1").value;
        count03 = count03 + 1;
        var rewriteText03 = "STEP 3 Qualifications | Question " + count03 +"/5";
        document.getElementById("steps").innerHTML = rewriteText03;
        document.getElementById("text1").innerHTML= step[count];
        document.getElementById("input1").value = "" ;

        }
        

    }else if (count<19){

        if(document.getElementById("input1").value === ""){
            alert("Please fill the given field or else press skip...!");
        }
        else{
        step[count++] = document.getElementById("input1").value;
        count04 = count04 + 1;
        var rewriteText04 = "STEP 4 Avaiability and Contact | Question " + count04 +"/4";
        document.getElementById("steps").innerHTML = rewriteText04;
        document.getElementById("text1").innerHTML= step[count];
        document.getElementById("input1").value = "" ;

        }
         
    } else{
        count = count +1;
    }
       
  
    
    
})



let skip=document.getElementById("button2");
skip.addEventListener('click',function(){
    if(count<4){
        step[count++] = "Skipped";
        count01 = count01 + 1;
        var rewriteText01 ="STEP 1 Personal details | Question " + count01 + "/5";
        document.getElementById("steps").innerHTML=rewriteText01;
        document.getElementById("text1").innerHTML= step[count];
        document.getElementById("input1").value = "" ;
        
        

    }else if (count<9){
        step[count++] = "Skipped";
        count02 = count02 + 1;
        var rewriteText02 = "STEP 2 volunteering tasks | Question " + count02 +"/5" ;
        document.getElementById("steps").innerHTML = rewriteText02;
        document.getElementById("text1").innerHTML= step[count];
        document.getElementById("input1").value = "" ;

        
    }else if (count<14){
        step[count++] = "Skipped";
        count03 = count03 + 1;
        var rewriteText03 = "STEP 3 Qualifications | Question " + count03 +"/5";
        document.getElementById("steps").innerHTML = rewriteText03;
        document.getElementById("text1").innerHTML= step[count];
        document.getElementById("input1").value = "" ;

        

    }else if (count<19){
        step[count++] = "Skipped";
        count04 = count04 + 1;
        var rewriteText04 = "STEP 4 Avaiability and Contact | Question " + count04 +"/4";
        document.getElementById("steps").innerHTML = rewriteText04;
        document.getElementById("text1").innerHTML= step[count];
        document.getElementById("input1").value = "" ;

        
    }else {
        count = count+1;
    }

 
})

let form = document.getElementById("buttona");
form.addEventListener('click',function(){
    
    if(count==5){
        document.getElementById("name").innerHTML = document.getElementById("name").textContent+ step[0];
        document.getElementById("surname").innerHTML = document.getElementById("surname").textContent + step[1];
        document.getElementById("age").innerHTML = document.getElementById("age").textContent+ step[2];
        document.getElementById("gender").innerHTML = document.getElementById("gender").textContent+ step[3];
        document.getElementById("awpt").innerHTML = document.getElementById("awpt").textContent+ step[4];
        document.getElementById("box3").style.display = "block";
        document.getElementById("step1").style.display = "block";
        document.getElementById("profilecompletion").innerHTML = "Profile completed 25%";
        let myprogressbar = document.getElementById("progressbar");
        myprogressbar.value = 1;
        

    } 

    if(count==10){
        document.getElementById("rational").innerHTML = document.getElementById("rational").textContent+ step[5];
        document.getElementById("doa").innerHTML = document.getElementById("doa").textContent + step[6];
        document.getElementById("task").innerHTML = document.getElementById("task").textContent+ step[7];
        document.getElementById("place").innerHTML = document.getElementById("place").textContent+ step[8];
        document.getElementById("at").innerHTML = document.getElementById("at").textContent+ step[9];
        document.getElementById("step2").style.display = "block";
        document.getElementById("profilecompletion").innerHTML = "Profile completed 50%";
        let myprogressbar = document.getElementById("progressbar");
        myprogressbar.value = 2;
    }  
        
    if (count==15){
        document.getElementById("aos").innerHTML = document.getElementById("aos").textContent+ step[10];
        document.getElementById("hd").innerHTML = document.getElementById("hd").textContent + step[11];
        document.getElementById("ui").innerHTML = document.getElementById("ui").textContent+ step[12];
        document.getElementById("cy").innerHTML = document.getElementById("cy").textContent+ step[13];
        document.getElementById("country").innerHTML = document.getElementById("country").textContent+ step[14];
        document.getElementById("step3").style.display = "block";
        document.getElementById("profilecompletion").innerHTML = "Profile completed 75%";
        let myprogressbar = document.getElementById("progressbar");
        myprogressbar.value = 3;
    }

    if(count==19){
        
        document.getElementById("afv").innerHTML = document.getElementById("afv").textContent+ step[15];
        document.getElementById("sn").innerHTML = document.getElementById("sn").textContent + step[16];
        document.getElementById("tp").innerHTML = document.getElementById("tp").textContent+ step[17];
        document.getElementById("email").innerHTML = document.getElementById("email").textContent+ step[18];
        document.getElementById("step4").style.display = "block";
        document.getElementById("box1").style.display = "none";
        document.getElementById("box4").style.display = "block";
        document.getElementById("survey1").style.display = "none";
        document.getElementById("survey2").style.display = "block";
    }

    
})    

















    
    









 
    
        
        
        
        


    














