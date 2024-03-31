let profilePic = document.getElementById("profile-pic");
        let inputfile = document.getElementById("input-file");
        inputfile.onchange = function(){
            profilePic.src = URL.createObjectURL(inputfile.files[0])
        }