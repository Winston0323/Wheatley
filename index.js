
let greetWords = ['hey', 'hi', 'hello', 'yoo', 'yolo', 'howdy', 'greetings'];
let greetReturn = ['Hey', 'Hi', 'Hello', 'Yoo', 'Yolo', 'Howdy', 'Greetings'];
let myName = ['wheatley', 'whet', 'wl', 'wely']
let helpWordsL1 = ['Uhhhhhhhhhhhh, you need help?', 'What? Me?'];
let helpWordsL2 = ['Hold on, this is a bit tricky!', 
    "Stay calm!'Prepared'- that's all they're saying 'Prepared.'It's all fine. Alright? Dont' move", 
    "Okay, look, I wasn't going to mention this to you, but I am in pretty hot water here",
    'Wait,  you are asking me? Ummmm let me think, Ummmmmmm okay '];
let helpWordsL3 = ['Oh, okay, on ya go', "That's it, no, that's it Yeah."];
let helpWords = [helpWordsL1, helpWordsL2, helpWordsL3];
let helpTime = 0;

//channel id 
let notification_broadcast = "793587196090646553";
let intel_chamber = "793599920468131860";
let lab_equipment_procurement = "793709474497167391";
let bot_test_chamber = "794084948033142804";
let internal

//Chinese checking
let specTime = 20;
let ZTime = 0;
let resTime = randRange(1, 3);
let chReply = ['Uhuh', 'Interesting...', 'Okay', "Giao", '迷HOTEL', '确实' , '啊吧啊吧', '啊这'];

//singers 
//positive singers
let positiveSinger = ['weeknd', 'queen', 'script', 'daft', 'maroon', 'Elton'];
let negativeSinger = ['sheeran', 'biber', 'doja', '花粥' ];

let posSingerReply = [
    'Hmmm, Wheatly like that one too',
    "That song's rock! 芜湖!",
    "You have some good taste huh"
]
let negSingerReply = [
    'Get this song out of my ear!!!!!!!',
    "Uh, okay, just 3min, it's okay it's okay....",
    '.......',
    'KILL ME NOW'
]

//id greeting reply
let idMap = new Map();
idMap.set('595758745439698954', {word:'Oh hi boss', pic:'./pic/EZ_BOIS.webp'});//me 
idMap.set('297567645044310017',{word:'May I help u?', pic:' '});//Yuu
idMap.set('368579856625172482',{word:'发生肾摸事了黄老师',pic:'./pic/EZ_BOIS.webp'});//Eric
idMap.set('531346570801840129',{word:"-p ocean eyes", pic:''});//Lili
idMap.set('300083579126546432',{word:"Hello Super Solider who was a Chinese newphew", pic:''});//MCREE
idMap.set('498308740823646228',{word:"Hello Ms.Duckie. Did uh, did  u finish your homework?", pic:''});//DUCKIE
idMap.set('495819221654175744',{word:"TRUMP 2020", pic:''});//GONGDADEYEYE

//role greeting reply
let roleMap = new Map();
roleMap.set('','');

//discord set up 
const Discord = require('discord.js');
const client = new Discord.Client();

//cronjob
const cron = require("cron");

// login in token 
require('dotenv').config();
client.login(process.env.TOKEN);

//sleep for ms
function sleep(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
}

//random generaters
//return a randome number from 0 to max
function randInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//return a random number from the range
function randRange(min, max) {
    return Math.floor(Math.random() * (Math.floor(max)-Math.floor(min)) + Math.floor(min));
}
//return a random phase in the array
function randPhase(arr){
    return arr[randInt(arr.length)];
}

//check Chinese
function containZH(arr){
    for(const word of arr){
        if (word.match(/[\u3400-\u9FBF]/)){
            return true;
        }
    }
}

//firework 
async function fireWork(){
    await sleep(1000);
    client.channels.cache.get("793587196090646553").send("Happy New Year to all members to Aperture Science");
    await sleep (5000);
    client.channels.cache.get("793587196090646553").send("Now, please wait patiently for our annual firework show");
    await sleep (5000);
    client.channels.cache.get("793587196090646553").send("What u gonna see is our Sou Sky monkey show");
    await sleep(5000);
    client.channels.cache.get("793587196090646553").send("3");
    await sleep (1000);
    client.channels.cache.get("793587196090646553").send("2");
    await sleep (1000);
    client.channels.cache.get("793587196090646553").send("1");
    await sleep (2000);
    //1
    client.channels.cache.get("793587196090646553").send("SOOOOOOOOOOOOOOOOOOOUUUUUUUUUU");
    await sleep(3000);
    client.channels.cache.get("793587196090646553").send({files: ['./firework/1.jpg']});
    client.channels.cache.get("793587196090646553").send("PENNNNNNNNNNNNNNNNNNNNNNNG");
    await sleep(5000);

    //2
    client.channels.cache.get("793587196090646553").send("SOOOOOOOOOOOOOOOOOOOU");
    await sleep(1000);
    
    client.channels.cache.get("793587196090646553").send("PENNNNNNNNNNNNNNNNNNNNNNNG");
    client.channels.cache.get("793587196090646553").send({files: ['./firework/2.jpg']});
    await sleep(5000);
    //3
    client.channels.cache.get("793587196090646553").send("XIUUUUUUUUUUUUUUUUUUU");
    await sleep(500);
    client.channels.cache.get("793587196090646553").send("XIUUUUUUUUUUUUUUUUUUU");
    await sleep(500);
    client.channels.cache.get("793587196090646553").send("XIUUUUUUUUUUUUUUUUUUU");
    await sleep(3000);
    client.channels.cache.get("793587196090646553").send({files: ['./firework/3.jpg']});
    await sleep(500);
    client.channels.cache.get("793587196090646553").send("BANNNNNNNNNNNNNNNNNNNNNG");
    await sleep(500);    
    client.channels.cache.get("793587196090646553").send("BANNNNNNNNNNNNNNNNNNNNNG");
    await sleep(500);
    client.channels.cache.get("793587196090646553").send("BANNNNNNNNNNNNNNNNNNNNNG");
    await sleep(5000);
    //4
    client.channels.cache.get("793587196090646553").send("XIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUERRRRRRRRRRR");
    await sleep(100);
    client.channels.cache.get("793587196090646553").send({files: ['./firework/4.jpg']});
    await sleep(1000);
    client.channels.cache.get("793587196090646553").send("PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    await sleep(5000);
    //5
    client.channels.cache.get("793587196090646553").send("ZOURRRRRRRRRRRRRRRRRRRRRRRRR");
    await sleep(300);
    client.channels.cache.get("793587196090646553").send("ZOURRRRRRRRRRRRRRRRRRRRRRRRR");
    await sleep(300);
    client.channels.cache.get("793587196090646553").send("ZOURRRRRRRRRRRRRRRRRRRRRRRRR");
    client.channels.cache.get("793587196090646553").send({files: ['./firework/5.jpg']});
    await sleep(100);
    client.channels.cache.get("793587196090646553").send("PENNNNNNNNNNNNNNNNNNNNNNNG");
    await sleep(100);
    client.channels.cache.get("793587196090646553").send("PAAAAAAAAAAAAAAAAAAAAAAAAA");
    await sleep(100);
    client.channels.cache.get("793587196090646553").send("BANNNNNNNNGGGGGGGGGGGGGGGG");
    await sleep(5000);
    //6
    client.channels.cache.get("793587196090646553").send("TUUUUUUUUUUUUUUUUUUUUUUUUU");
    await sleep(300);
    client.channels.cache.get("793587196090646553").send("TUUUUUUUUUUUUUUUUUUUUUUUUU");
    await sleep(300);
    client.channels.cache.get("793587196090646553").send("TUUUUUUUUUUUUUUUUUUUUUUUUU");
    await sleep(300);
    client.channels.cache.get("793587196090646553").send("TUUUUUUUUUUUUUUUUUUUUUUUUU");
    await sleep(2000);
    client.channels.cache.get("793587196090646553").send({files: ['./firework/6.jpg']});
    client.channels.cache.get("793587196090646553").send("PENNNNNNNNNNNNNNNNNNNNNNNG");
    await sleep(100);
    client.channels.cache.get("793587196090646553").send("BAAAAAAAAAAAAAAAAAAAAAAAAA");
    await sleep(100);
    client.channels.cache.get("793587196090646553").send("PPPPPPPPPPPPPPPAAAAAAAAAAA");
    await sleep(100);
    client.channels.cache.get("793587196090646553").send("BIANNNNNNNNNNNGGGGGGGGGGGG");
    await sleep(5000);
    //7
    client.channels.cache.get("793587196090646553").send("SIUUUUUUUUUUUUUUUUUUUUUUUU");
    await sleep(1000);
    client.channels.cache.get("793587196090646553").send({files: ['./firework/7.jpg']});
    await sleep(100);
    client.channels.cache.get("793587196090646553").send("PENNNNNNNNNNNNNNNNNNNNNNNG");
    await sleep(5000);
    //gif
    client.channels.cache.get("793587196090646553").send("XIUSOUZOURSHUACINGDINGTONG");
    await sleep(2000);
    client.channels.cache.get("793587196090646553").send({files: ['./firework/gif.gif']});
    await sleep(100);
    client.channels.cache.get("793587196090646553").send("PIPADINGGUANGDONGDONGCEI");
    await sleep(5000);
    client.channels.cache.get("793587196090646553").send("XIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU");
    await sleep(8000);
    client.channels.cache.get("793587196090646553").send("没了");
    await sleep(3000);
    client.channels.cache.get("793587196090646553").send("真没了");
    await sleep(3000);
    client.channels.cache.get("793587196090646553").send("那。。。。再整个二踢脚？");
    await sleep(3000);
    client.channels.cache.get("793587196090646553").send("DINGGGGGGGGGGGGGGGGGGGGG");
    await sleep(4000);
    client.channels.cache.get("793587196090646553").send("DUANGGGGGGGGGGGGGGGGGGGG");
    await sleep(1000);
    client.channels.cache.get("793587196090646553").send("明年见朋友们");
    await sleep(1000);
    
}

let job = new cron.CronJob('59 59 23 31 11 *', fireWork);
job.start();

async function countDown1(){
    client.channels.cache.get("793587196090646553").send("Starting in 10min");
}
async function countDown2(){
    client.channels.cache.get("793587196090646553").send("Count down in 5min");
}
async function countDown3(){
    client.channels.cache.get("793587196090646553").send("One min count down");
}
async function countDown4(){
    client.channels.cache.get("793587196090646553").send("50 min to New Year");
}
let c1 = new cron.CronJob('00 50 23 31 11 *', countDown1);
c1.start();

let c2 = new cron.CronJob('00 55 23 31 11 *', countDown2);
c2.start();

let c3 = new cron.CronJob('00 59 23 31 11 *', countDown3);
c3.start();

let c4 = new cron.CronJob('00 10 23 31 11 *', countDown4);
c4.start();

//when the client is ready 
client.on('ready', async readyDiscord => {
    console.log("Are you going to open the door?");
    await sleep(1000);
    console.log("At any time?");
});

//react to message
client.on('message', async message => {
    //setting up parameters
    if(message.author.id == "793889874310332466") return;  
    const name = message.author.username;
    const id = message.author.id;
    
    /** @type {Discord.TextChannel} */
    const channel = message.channel;
    const role = channel.members.get(message.author.id).roles.highest;
    
    //extracting message content;
    const cont = message.content.toLowerCase();
    const strings = cont.split(" ");

    //extracting music bot content
    let description = ' ';
    if(message.author.id == "234395307759108106"){
        description = message.embeds[0].description.toString();
        description = description.toLowerCase();
    }
    description = description.replace(/[\[\]']+/g, " ");
    let desWords = description.split(" ");    
    console.log(desWords);
    //checking sensitive words
    let greeting = false;
    let metionMe = false;
    let needHelp = false;
    for (const words of strings) {
        //check greet word
        for (const greet of greetWords) {
            if (words == greet){
                greeting = true;
            }  
        }

        //check mention words
        for(const name of myName){
            if (words == name){
                metionMe = true;
            }
        }

        //when a user type !help
        if (words == '!help'){
            needHelp = true;
        }
    }
    let ocean = false;
    let eyes = false;

    if(message.author.id == "234395307759108106" && desWords[0] == 'queued'){
        //loop through postive singers 
        for (const singer of positiveSinger){
            for (const word of desWords){
                if (word == singer){
                    message.channel.send(randPhase(posSingerReply));
                    console.log("here");
                }
            }
        }

        //loop through negative singers
        for (const singer of negativeSinger){
            for (const word of desWords){
                if (word == singer){
                    message.channel.send(randPhase(negSingerReply));
                }
            }
        }

        //ocean eyes
        for (const word of strings){
            if (word == 'ocean'){
                ocean = true;
            }
            if (word == 'eyes'){
                eyes = true;
            }
        }
        if (ocean == true && eyes == true){
            message.channel.send("Ocean Eyes YYDS");
        }
    }
    //setting up helpTime
    if (needHelp == true){
        await sleep(500);
        message.channel.send(randPhase(helpWords[helpTime]));
        helpTime++;
        needHelp = false;
        if(helpTime == 3){
            helpTime = 0;
        }
    }

    if(greeting && metionMe){

        await sleep(800);
        message.channel.send(randPhase(greetReturn));
        await sleep(1500);
        message.channel.send(idMap.get(id).word);
        await sleep(800);
        if (idMap.get(id).pic != ' '){
            message.channel.send({files: [idMap.get(id).pic]} );
        }
        
    }

    //check chinese
    if (containZH(strings) && strings[0]!= '-p'){
        ZTime++;
        if (ZTime < specTime){
            //when ZTime reach resTime
            if (resTime == ZTime){
                //update the resTime
                resTime = ZTime + randRange(1, 2); 
                //send Message
                message.channel.send(randPhase(chReply));
            }
            
            
        }else{
            //when the ZTime is smaller than 0
            if (ZTime == resTime){
                message.channel.send("Oh okay, Wheatley is also learning Chinese");
            //}else if (ZTime == resTime + 1){
                // await sleep(1000);
                // message.channel.send("咳KUMMMNNN， 咳咳， okay");
                // await sleep(1500);
                // message.channel.send("美...酶");
                // await sleep(2000);
                // message.channel.send("梅。。。妹？");
                // await sleep(2000);
                // message.channel.send("梅毒驴子");
                // await sleep(4000);
                // message.channel.send("。。。。");
                // await sleep(2000);
                // message.channel.send("Okay stop laughing"); 
                await sleep(3000);
                message.channel.send("咳KUMMMNNN， 咳咳， okay");
                await sleep(1500);
                message.channel.send('窝是陈冠希呀');
                await sleep(2000);
                message.channel.send("我现在再哎路欸啊");
                await sleep(2000);
                message.channel.send("我遇到一帮很坏很坏的人");
                await sleep(4000);
                message.channel.send("一些Gangster， you know");
                await sleep(2000);
                message.channel.send("微信转账300块"); 
                await sleep(4000);
                message.channel.send("帮我回到HongKong");
                await sleep(2000);
                message.channel.send("我向你敬礼啊");
                await sleep(2000);
                message.channel.send("Salute"); 
            // }else if( ZTime == resTime + 2){        
            //     message.channel.send("咳咳， that's not all, stop laughing!");
            //     await sleep(3000);
            //     message.channel.send("握不要柳丁脚踏车");
            //     await sleep(1000);
            //     message.channel.send("....................");
            //     await sleep(2000);
            //     message.channel.send("OkayI should go, uh, go now");
            //     resTime = ZTime + randRange(5, 10);
            }
             
            //when ZTime reach 30
            if (ZTime == 50){
                await sleep(1000);
                message.channel.send("Okay.. can u guys speak english? Wheatley dont understand");
                await sleep(2000);
                message.channel.send("Wheatley dont understand");
            }

        }
    }
});