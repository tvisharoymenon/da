songp = "";
songh = "";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;


function preload(){
    songh= loadSound("music.mp3");
    songp= loadSound("music2.mp3");
    }
    function setup(){
        canvas = createCanvas(600,500);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();}
        
        function draw(){
            image(video,0,0,600,500);
        }
        function play(){
            song.play();
            song.setVolume(1);
            song.rate(1);
        }
        function modeloaded(){
             console.log('posenet is initialied')
        }
        function gotposes(results){
            if(results.length > 0){
                console.log(results);
                scoreleftwrist = results[0].pose.keypoints[9].score;
                leftwristx = results[0].pose.leftWrist.x;
                leftwristy = results[0].pose.leftWrist.y;
                console.log("leftwristx =" + leftwristx + "leftwristy ="+ leftwristy);
                rightwristx = results[0].pose.rightWrist.x;
                rightwristy = results[0].pose.rightWrist.y;
                console.log("rightwristx =" + rightwristx + "rightwristy ="+ rightwristy);
        