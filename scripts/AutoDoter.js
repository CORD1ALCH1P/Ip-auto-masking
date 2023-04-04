function filter(key) { //symbol filter 
    return ( key == 'Delete' || 
        key == 'ctrlDown' ||
        key == 'Backspace' ||
        key == 'v' ||
        key == 'ArrowRight' ||
        key == 'ArrowLeft' ||
        key == '.' ||
        (key >= 0 && key <= 9));
}
function AutoDoter() { //Function dotting and checking
    let PostValid = new Boolean(false); //item to post-check. Checks if the first octet is entered
    let arIn = []; //array keeps input values
    var ip = document.getElementById("IpInput").value; //get input
    arIn = document.getElementById('IpInput').value.split("."); //partition
    console.log(arIn); //console log 
    for (i = 0; i < arIn.length; i++) { //test cycle
        if (arIn[i] > Number(25)) { //test
           document.getElementById('IpInput').value = ip + "."; //add dot
        } else {
            document.getElementById('IpInput').value = ip; //else return input value
        }
        if (arIn[i] > Number(255)) { //test
            delete arIn[i]; //clear wrong value if any
            document.getElementById('IpInput').value = arIn.join(".");
            PostValid = true; //post test
        } else {
            
        }
    }
    let TemporaryArIn = arIn.join("."); //array assembly
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(TemporaryArIn)) {
        document.getElementById('IpInput').value = String(TemporaryArIn); //returns a variable without a dot if the address is correct
        PostValid = false;
    }
    if (PostValid == true) {
        document.getElementById('IpInput').value = String(TemporaryArIn);
    } else {
        PostValid = false;
        
    }
}
//com