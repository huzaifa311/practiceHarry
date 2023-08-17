//for loop
/* for (let i = 0; i <= 8; i++) {
                console.log(i);
            } */

//for in loop
/* const obj = {
                harry: 55,
                carry: 42,
                ali: 85

            }
            for (let a in obj) {
                console.log("marks of " + a + " are " + obj[a]);
            } */

//for of loop
/* for (let b of "asli") {
                console.log(b);
            } */

//while loop
/* let z = 0;
            while (z < 4) {
                console.log(z);
                z++;
            } */

//do while loop
/* let a = 0;
            do {
                console.log(a);
                a++;
            }
            while (a < 5); */

//template literals
/* let boy1 = "huzaifa"
            let boy2 = "daniyal"
            console.log(`${boy1} is a friend of ${boy2}`); */

//escape sequence characters
/* let fruit = 'Bana\rna';
            console.log(fruit);
            let fruit2 = 'Bana\nna';
            console.log(fruit2);
            let fruit3 = 'Bana\tna';
            console.log(fruit3);

            let boy3 = "huzaifa"
            let boy4 = "daniyal"
            console.log(boy3.toUpperCase());
            console.log(boy3.toLowerCase());
            console.log(boy3.slice(2, 5));
            console.log(boy3.replace("huzai", "tuh"));
            console.log(boy3.concat(` is a friend of ${boy4} Ok`));
            let boy5 = "         anas           "
            console.log(boy5);
            console.log(boy5.trim()); */

//Array methods
/* let marks = [98, 89, 87, 68, 79, 58]
            console.log(marks[0]);
            console.log(marks[1]);
            console.log(marks[2]);
            console.log(marks[3]);
            console.log(marks[4]);
            console.log(marks[5]);
            marks[1] = 52
            console.log(marks[1]); */

/* let marks1 = [98, 89, 87, 68, 79, 58]
            let b = marks.toString()//b is now a string
            console.log(b);
            let c = marks.join("_")
            console.log(c, typeof (c)); */

/* let marks2 = [98, 89, 87, 68, 79, 58]
            let d = marks2.pop()// last element gayab krdega
            console.log(d);
            console.log(marks2);
            let e = marks2.push(4)//last mein add krdega
            console.log(e);
            console.log(marks2);
            let f = marks2.shift()//first ko gayab krdega
            console.log(f);
            console.log(marks2);
            let g = marks2.unshift(5)//first mein add krdega
            console.log(g);
            console.log(marks2);
            let h = delete marks2[0]//jo index number doge uski val ko del to krega but us index number ko del nhi krega phir uski val undefined hojaigi
            console.log(h);
            console.log(marks2, typeof (marks2[0]));
            let marks3 = [12, 15, 14, 17, 19]
            let marks4 = marks2.concat(marks3)//ek naya aaray banadega 2 arr ko jorkr
            console.log(marks4); */

//Sort Method
/* let marks5 = [32, 15, 14, 17, 19, 888, 113]
            marks5.sort()//sort krta hai descending order mein magar pehle number k mutabiq jese 32 , 113 mein technically to 32 chota hai lekin first number k mutabiq 32(3) hai or 113(1) hai islye pehle 113 print hoga
            console.log(marks5); */

/* let marks6 = [32, 15, 14, 17, 19, 888, 113]
            marks6.reverse()//array ko ulta krdeta hai
            console.log(marks6);
            marks6.splice(2, 3, 1025, 1026, 1027, 1028)//multiple arguments leta hai jse pehle mein ne pehla argument 2 likha hai to is ka matlab hai k index2 se le kr or doosra argument 3 likha hai jis ka matlab hua k index no 2 se le kr aage k 3 number delete krdo or unki jaga argument mein jo or number die hain unhein print krdo "or ye asal array ko b change krta hai"
            console.log(marks6);
            let i = marks6.slice(2, 5)//do arguments leta hai jese mein ne 2 or 5 dia hai jisa ka matlab 2 se le kr 5 se pehle tak k saare index ko copy krlo "ye asal array mein koi changing nhi krta bss copy krta hai means aap copy kr k ek new array bana sakte ho"
            console.log(i);
            console.log(marks6); */

//using for loop in array
/* let marks7 = [3,5,4,6,8,7,2]
            for (let i = 0; i < marks7.length; i++) {
                console.log(marks7[i]);
            }
            marks7.forEach(
                (number) => {
                    console.log(number * number);
                }
            ) */

//Array.from
/* let name = "Huzaifa"
            let arr = Array.from(name)//string ko arr mein convert krega
            console.log(arr); */

//for...of
/* let marks8 = [3, 5, 4, 6, 8, 7, 2]
            for (const i of marks8) {
                console.log(i);

            } */

//for...in
/* let marks9 = [3, 5, 4, 6, 8, 7, 2]
            for (const i in marks8) {
                console.log(i);
            } */

//map()
/* let marks10 = [3, 5, 4, 6, 8, 7, 2]
            let newMarks = marks10.map((value)=>{ // ek new array banata hai existing array mein koi changing nhi krta
                console.log(value);
                return value+1
            })
            console.log(newMarks)
            console.log(marks10); */

//Array Filter
/* let marks11 = [3, 5, 4, 16, 83, 74, 21]
            let a2 = marks11.filter((a)=>{ //ek new arr banata hai jis se existing array ko koi farak nhi parta
                return a <10


            })
            console.log(marks11);
            console.log(a2); */

//Reduce Method
/* let marks12 = [1, 4,8,5,7,1,4]
            let newMarks = marks12.reduce((a, b)=>{//ek new arr banata hai jis se existing array ko koi farak nhi parta
                return a + b
            })
            console.log(newMarks);
            console.log(marks12); */

//Practice Set
/* let marks13 = [1 , 5 , 8 ,15 , 780,50,40]
            let newMarks13 = +prompt("Enter a number");// Create an arr of num and take value via prompt from user to add number to this arr
            marks13.push(newMarks13)
            console.log(newMarks13);
            console.log(marks13);
            let newArr;
            do { //Keep add numbers to this arr via prompt until 0 is added to this arr
                newArr = +prompt("Enter a number");
                marks13.push(newArr);
            }
            while (newArr != 0);
            console.log(newMarks13);
            let u = marks13.filter(x=>{//filter for those number who are divisible to 10 in this arr
                return x % 10 == 0
            })
            console.log(u);
            let i = marks13.map(p =>{//Create a square of all the values in this arr
                return p*p
            })
            console.log(i);
            let d = marks13.reduce((c1,c2)=>{//arr ki values ko shuru se multipky kreinge to end mein value kia aayegi
                return c1*c2
            })
            console.log(d); */

// Game
/* let random = Math.floor(Math.random()* 10)
            let user = +prompt("Enter a number")
            if (random !== user ) {
                console.log("game over");
            } else {
                console.log("You win");
            }
            console.log(random); */

//game via random number

/* function generateRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            function getUserInput() {
                return parseInt(prompt("Enter a number between 0 and 50:"));
            }

            function checkUserInput(randomNumber, userInput) {
                if (userInput === randomNumber) {
                    return "Congratulations! You guessed the correct number!";
                } else if (userInput > randomNumber) {
                    return "Your number is greater than the random number. Try again.";
                } else {
                    return "Your number is lower than the random number. Try again.";
                }
            }

            function main() {
                const minNumber = 0;
                const maxNumber = 50;
                let randomNumber = generateRandomNumber(minNumber, maxNumber);
                let userInput;

                while (true) {
                    userInput = getUserInput();

                    if (userInput < minNumber || userInput > maxNumber || isNaN(userInput)) {
                        alert("Invalid input! Please enter a number between 0 and 50.");
                        continue;
                    }

                    const resultMessage = checkUserInput(randomNumber, userInput);
                    alert(resultMessage);

                    if (userInput === randomNumber) {
                        break;
                    }
                }
            }
            main(); */

//console thing
/* console.log("this is a simple console");
            console.error("this will show the message as an error");
             // console.clear()// it will clear all the console elements so try to keep it always in comment in this file

            let obj = {
                a : 1,
                n :2 ,
                c : 3
            }
            console.table(obj )//it shows the obj in a table
            console.warn("this will show the message as a warning")
            console.time()
            let h = ()=>{
                console.log("huzaifa");
            }
            console.timeEnd()// is se ye pata chalta  hia k console.time se console.timeEnd tak ki cheezon ko chalne mein kitna time laga */

//alerrt, prompt nad confirm
/* let p = +prompt("Enter a number" , "123")//the second argument in prompt is the default value of prompt
            alert("you entered a val which is a type of " + (typeof p) )

            let write = confirm("do you want to write the val in the page which u enterned")
            if (write) {
                document.write(p)
            } else {
                document.write("you denied")
            } */
// console.log(document);
// document.body.style.backgroundColor = ("orange" , "red");

//Snake Water Gun game
/* let characters = ["gun", "snake", "water"];
            let user = prompt("Enter one of them: 'gun', 'water', or 'snake'");
            let randomIndex = Math.floor(Math.random() * characters.length);
            let randomCharacter = characters[randomIndex];

            console.log("Computer chose:", randomCharacter);

            switch (user) {
                case "gun":
                case "snake":
                case "water":
                    if (user === randomCharacter) {
                        alert("It's a tie!");
                    } else if (
                        (user === "gun" && randomCharacter === "snake") ||
                        (user === "snake" && randomCharacter === "water") ||
                        (user === "water" && randomCharacter === "gun")
                    ) {
                        alert("You win! Computer chose " + randomCharacter);
                    } else {
                        alert("You lose! Computer chose " + randomCharacter);
                    }
                    break;

                default:
                    alert("Invalid choice!");
            } */

//DOM manuplation
/* console.log(document.body.firstChild);
            let a = (document.body.firstChild);
            console.log(a.parentNode);
            console.log(a.parentElement);
            console.log(a.firstChild.nextSibling); */

/* let b = document.body
            console.log("first child of body is ", b.firstChild);
            console.log("first element child of body is ", b.firstElementChild); */

/* let t = document.body.firstElementChild.firstElementChild;
            console.log(t);
            console.log(t.caption);
            console.log(t.rows);
            console.log(t.tFoot);
            console.log(t.tHead);
            console.log(t.tBodies);
            console.log(t.tHead.firstElementChild); */

//matches, closest and contains

/* let id1 = document.getElementById("id1")
            let span1 = document.getElementById("span1")
            let class1 = document.getElementsByClassName("box")[0]
            console.log(id1);
            console.log(class1);
            console.log(id1.matches(".class"));//ye check krne k lye hota hai k hum jo id de rahai hain us element ki class woi hai jo hum derahai hain ya nhi.. or ye ek boolean pass krta hai
            console.log(id1.matches(".box"));
            console.log(class1.matches("#id1"));

            console.log(span1.closest(".box"));//buhat hi bakwas hai lekin hai.. ye given css selector ko check krta hai  (code with harry video no 37 time:(5:30) )

            console.log(id1.contains(span1));//name se hi pta chalta hai check krta hai k is element mein ye cheez contain krti hai ya nhi
            console.log(span1.contains(span1));
            console.log(span1.contains(id1)); */

// difference between console.log and console.dir
/* console.log(document.getElementsByTagName("span")[0]);//log sirf tag or usk andar ka text dikhyega
            console.dir(document.getElementsByTagName("span")[0]);//dir usko as an JS object dikhayega */

//innerHTML and outerHTML
/* let y = document.getElementById("first")
            console.log(y.innerHTML);//is mein sirf html text aayega

            console.log(y.outerHTML);//is mein html text or tags dono aayega */

//TEXT CONTENT
/* console.log(document.body.textContent);  */

//hidden
/* let z = document.getElementById("hidden")
            z.hidden = false; */

//Attribute Methods
/* let first = document.getElementById("first")

            let r = first.getAttribute("id")//getAttribute se us attribute ki val nikal sakte hain

            console.log(first.hasAttribute("id"));//hasAttribute check kre k lye hita hai k jp element hum ne get kia hia us mein hamara bataya hua attribute exist krta hai ya nhi
            console.log(first.hasAttribute("name"));
            console.log(r);

            // first.setAttribute("hidden", true);//attribute set krne k lye hota hai
            first.setAttribute("class", "ali");
            console.log(document.querySelector(".ali"));

            console.log(first.removeAttribute("class"));//attribute remove krne k lye hota hai
            console.log(document.querySelector(".ali"));
            console.log(first.attributes); //die hue element k saare attribute dekh sakte hain is se
            console.log(first.dataset);//hum html mein data-"custom" kr k apna customize attribute bna sakte hain or use javascript mein .dataset k zariye access b kr sakte hai (codewithharry videono42 10:19)
            console.log(first.dataset.game)
            console.log(first.dataset.player) */

//below code ki html line no 51
/* let get = document.getElementsByTagName("div")[0]

            //neeche die gae 2no ko ek baar uncommit kr k dekh l farek samjh jao ge
            // get.innerHTML = get.innerHTML + "<h1> Hello world </h1>"
            get.innerHTML = "<h1> Hello world </h1>" */

//Insertion Method append prepend before after replaceWith (html line no 55 - 61)

/* let a = document.getElementsByTagName("div")[0]
            let div = document.createElement("div")
            div.innerHTML = "<h1>Hello World</h1>"

            a.appendChild(div);//appendChild ek Node ko dusre Node ke andar add karne ke liye use hota hai. Is method mein, aap ek existing parent Node ke andar ek child Node ko append kar sakte hain. Ye method parent Node ko specify karta hai jahan child Node ko add karna hai.

            a.append(div);//append method se aap ek ya ek se zyada Nodes ko ek sath append kar sakte hain. Is method mein, aap multiple Nodes ko ek hi call mein specify kar sakte hain aur ye unko specified order mein append karta hai. Ye method parent Node ko specify nahi karta, balke directly un Nodes ko document ke body ke andar append karta hai

            a.prepend(div);//prepend krne se container k andar ka sabse pehla bn jaiga ye

            a.before(div);//IS SE CONTAINER K BAHAR ye sab se pehle ye aajaiga

            a.after(div);//is se container k foran bahar aajiga ye

            a.replaceWith(div);//is se html ka div jiski id container hai us se hamara line no 468 wala div replace hojaiga */

//Insert Adjacent HTML , Insert Adjacent Element , Insert Adjacent text (html in line no 63)

// let first = document.getElementById("first")
/* first.insertAdjacentHTML("beforeend" ,  "<div id=`test`> beforeend </div>");//die hue element k jese k abhi hum ne first ko lia ai to usk tag k khatam hine se pehle ye add hojaiga
            first.insertAdjacentHTML("afterend" ,  "<div id=`test`> beforeend </div>");//die hue element k tag khatam hone k baad add hojaiga
            first.insertAdjacentHTML("afterbegin" ,  "<div id=`test`> beforeend </div>");//is se die gaye element jaise k hum ne id"first wala diua hai uska tag shuru hite hai sab se pehle hamara dia hua content aajaiga
            first.insertAdjacentHTML("beforebegin" ,  "<div id=`test`> beforeend </div>");//diegaye element k shuru hone se pehle addhojaige

            first.remove()//remove krne k lye hai*/

//classlist and many more concepts    noche wale code ki html line no 63 or css 10 to 398
/* let first = document.getElementById("first")
            first.className = ("yellow text-darker")
            console.log(first.classList);
            first.classList.remove("yellow")//remove krega class
            first.classList.add("red")//add krega
            first.classList.toggle("text-darker")//hogi to remove krega nhi hogi to addkrega
            console.log(first.classList.contains("red"));//di hui class agar us element mein hogi to true aayega warna false bnasically check krne ka tarika hai */

//setInterval(line no 515 to 526) setTimeout(line no 528 to 536)
/* document.write("Hello")
            let a = setTimeout(()=>{ //function k bahar jo 5000 likha hai uska matlab 5k miliseconds k baad ye wala functon jis k andar alert hai wo chalega
                alert("Hi I am inside of a setTimeOut function")
            },"5000")
            clearTimeout(a)//is se timeout wale function ko rok sakte hai jis se wo function 5sec badd b nhi chalega
            console.log(a);

            const sum = (a , b)=>{
                console.log("yes I am running " + (a , b));
                a+b
            }
            setTimeout(sum , 5000 , 2 , 4)//pehla argument function ka NAM, 2sra kitne time badd code execute ho , 3sra or chotha a,b ki value hai sum(a,b)wala function parh samajh jaiga */

/* let a = setInterval(()=>{//is se ye har 2sec baad ye chalta rahega
                document.write("Hi I am inside of a setInterval function")
            },"2000")
            clearInterval(a);//ye setInterval ko rokna hai
            const minus = (a,b)=>{
                document.write("I will work always after 2sec " + (a - b) + "     ");
                a - b
            }
            setInterval(minus , 2000 , 10 , 5)//pehla argument function ka NAM, 2sra kitne time badd code execute ho , 3sra or chotha a,b ki value hai minus(a,b)wala function parh samajh jaiga */

//DOM events or ,keyboard events, browser events (is ki html line number 82-84)
/* html mein hi kie hain unhein or us tarike k elawa hum usse yahan b krsakte getelementbyid se or.onclick()de kr agar hum ne onclick javaScript ki file or html done mein likh dia to javascript file wala hi chalega htl wala overwrite krdia jaiga */

//addEventListeners, removeEventListeners (is ki html line number 89-91)

/* let btn = document.getElementById("btn")

            let a = (e) => {
                console.log(e.target);//e.target se wo wala button aajaiga jis pr onclick ka event chalaya hai
                console.log(e.type  , e.clientX, e.clientY);//e.type se event ki type patachalegi , e.clientX or e.clientY se user ne kahan click kra wo b pta chalega
                alert("Hello World 1")
            }

            let b = () => {
                alert("Hello World 2")
            }

            btn.addEventListener("click", a)
            btn.addEventListener("click", b)

            let user = prompt("What`s your fvrt number")

            if (user === "2") {
                btn.removeEventListener("click", a)//eventListener ko remove krnbe k lye hota hai code parho samjh jaoge warna (codewithharry video no 48 at 7:00)
            } */

//example of async function
/* console.log("start");
            setInterval(()=>{
                console.log("async function");
            }, 3000);
            console.log("END"); */

//example of CallBacks function
/* function loadScript(src, callback) {
                let script = document.createElement("script");
                script.src = src;
                script.onload = () => {//check krne k lye hota hai funvtion succesfully chala ya nhi
                    console.log('loaded script with src ' + src);
                    callback( null , src);
                };
                script.onerror = () => {
                    console.log("src got some error" + src);
                    callback(new Error , ("error on src"))
                };
                document.body.appendChild(script);
            }
            let hello = (error ,src) => {
                if(error){
                    console.log(error);
                    return;
                }
                alert("Hello World " + src);
            };
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", hello); */

//Expales of Promises in JS
/* let promise = new Promise((resolve , reject)=>{
                alert("Hello")
                resolve(56)
            })
            console.log("Hello 1");
            setTimeout(()=>{
                console.log("Hello 2");
            },2000)
            console.log("Hello 3");
            console.log(promise); */
/* let p1 = new Promise((resolve , reject)=>{
                console.log("Promise is pending");
                setTimeout(()=>{
                    resolve(true)
                },5000)


            })
            let p2 = new Promise((resolve , reject)=>{
                console.log("Promise is pending");
                setTimeout(()=>{
                    reject(new Error ("Error Found"))
                },2000)


            })
            p1.then((value)=>{
                console.log(value);
            })
            // p2.catch((Error)=>{
            //     console.log("error found (:-|)");
            // })
            p2.then((value)=>{
                console.log(value);
            },(error)=>{
                console.log(error);
            }) */
/* let p1 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("Resolve after 2 seconds");
                    resolve(56)
                }, 2000);
            })
            p1.then(value => {
                console.log(value);
                //niche hum let p2= kr k ek variable bana kr b kaam kr sakte hai or return kr k b kaam kr sakte hain
                let p2 = new Promise((resolve, reject) => {
                    setTimeout(() => { resolve("Promise 2") }, 2000);
                })
                return p2
            }).then(value => {
                console.log("done");
                return 2;
            }).then(value => {
                console.log("now we are actually done");
            }) */

//loadScript function via promises (pehle callbacks wale se b banaya tha code line number 587 - 607 tak hai)
/* let loadScript = (src) => {
                return new Promise((resolve, reject) => {
                    let script = document.createElement("script");
                    script.src = src;
                    document.body.appendChild(script);
                    script.onload = () => {
                        resolve("Script Loaded")
                    }
                    script.onerror = ()=>{reject(0)}
                })
            }
            let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
            p1.then((value)=>{
                console.log(value);
            }).catch((error)=>{
                console.log("got an error");
            }); */

//promises ko ek sath access krne k tarike
/* let p1 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("value 1")
                    //reject(new Error("error"))//.race() or .any() mein difference dekhne k lye kia tha
                }, 1000)
            })
            let p2 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("value 2")
                    // reject(new Error("error")) //Check krne k lie lagaya tha k agar promise.all()mein agar ek agar ek promises reject hua to kia promise.all chalega?:nhi chalega
                }, 2000)
            })
            let p3 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("value 3")
                }, 3000)
            })

            let allPromises = Promise.all([p1, p2, p3])//is se param mein die gaye saare promises ko ek saath acces kr sakte hain jis se  .then mein dia gaya kaam tab hi hoga jab saare promises fulfill ho jainge
            //Promise.all()nein agar ek b promise reject hui to neeche dia gaya code ruk kaiga
            allPromises.then(value => {
                console.log(value);
            })

            let allPromise = Promise.allSettled([p1, p2, p3])//is se agar ek b prmoise reject b hui to .then()nhi rukega
            allPromise.then(value => {
                console.log(value);
            })

            let AllPromise = Promise.race([p1, p2, p3])//is se jo promise pehle hojaiga us ka result dekhne ko miljaiga lekin agar jo sab se pehle hua wo reject hogya to error show krdega jiska matlab jo promise sab se pehle hua wo reject higaya
            AllPromise.then(value => {
                console.log(value);
            })

            let Allpromise = Promise.any([p1, p2, p3])//is mein promice.race ki tarha jo sab se pehle hoga wo aajaiga lekin agar jo sab se pehle promise aaya wo reject hogaya to wo nhi aayega sab se pehle resolve hone wala hi aayega
            Allpromise.then(value => {
                console.log(value);
            })

            let allpromise = Promise.resolve(53)//Is function se ek resolved promise return hota hai, jiska value aap specify karte hain.
            allpromise.then(value => {
                console.log(value);
            })

            let AllPromises = Promise.reject(new Error("Error"))//Is function se ek rejected promise return hota hai, jiska reject reason aap specify karte hain.
            AllPromises.then(value => {
                console.log(value);
            }) */

//Async \ Await
/* let harry = async()=>{ //async agar hum ne kisi b promise se pehle likha to ye ensure hojata hai k wo function ek promise return krega agr hum ye wala function bagair async k chalainge to .then() is not a function kr k ek error aajaiga
                return 5
            }
            harry().then(x=>{
                alert(x);
            }) */

//Example hai jis mein ye pta chala k asyncawait ki zaroorat q pari promise return krne k lye (code with harry video no 59 4:20)
/* let huzaifa = async () => {
                let karachiWeather = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("27 degree")
                    }, 2000)
                })
                let lahoreWeather = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("37 degree")
                    }, 4000)
                })

                //ye karachiWeather.then or lhrweather.then (neeche wala) hum ek or trige se b kr sakte hain in dono ko comment kr k neeche hi kr raha hun
                // karachiWeather.then(alert)
                // lahoreWeather.then(alert)

                console.log("Fetching karachi weather please wait...");
                let karachiW = await karachiWeather//await ki madad se function ki execution yhin pr ruk jaigi fuction is se aage nhi barhega jab tak ye await wala function fulfill nhi hojata
                console.log("karachi weather fetched : " + karachiW);

                console.log("Fetching lahore weather please wait...");
                let lahoreW = await lahoreWeather
                console.log("lahore weather fetched : " + lahoreW);
                return [karachiW, lahoreW]


            }

            // agar hum cahahte hain k ye poora codeline by line run ho to mu neeche poora console wagera ka kaam aync func.. mein kr sakte hain or us mein await wagera laga sakte hain
            // console.log("Weather Web")
            // let a = huzaifa()
            // a.then(value => {
            //     console.log(value);
            // })
            let cherry = async () => {//code line by line await se chal raha hai ya nhi us k ye as an example banaya tha
                console.log("I am cherry");

            }
            let huzzi = async () => {
                console.log("Weather Web")
                let a = await huzaifa()
                let b = await cherry()

            }
            huzzi() */

//Error Handling try and catch
/* setTimeout(() => {
                console.log("2 sec");
            }, 2000);

            // console.log(rahul); //ye ek example k ter pr hai k agar script mein koi b error aagaya is tarha to neeche ka poora code ruk jaiga to is waja se try cath use kia jata hai
            try {//is try catch ki madad se agar koi error aa b gaya top error through nhi hoga jis ki madadse neeeche ki pori script rukegi nhi chalti rahaigi
                console.log(rahul);
            } catch (error) {
                console.log(error);
            }

            setTimeout(() => {
                console.log("3 sec");
            }, 3000);
            setTimeout(() => {
                console.log("4 sec");
            }, 4000); */
/* try {
                setTimeout(()=>{
                    console.log(ug);//agar hum ye koshish krein k try catch mein settiemout jese function jo k schedule hue hote hain chala lein to aisa nhi higa is k lye hamein set time out ko b try catch mein rap krna hoga
                },100)
            } catch (error) {
                console.log(error);
            } */

//Error object and custom error
/* try {
                console.log(harry);
                // throw new Error("htfd")
                throw new ReferenceError("htfd")//custom error throw krne k tarike hainy
            } catch (error) {
                console.log(error.name);//Error ki types dekhne ka tarika
                console.log(error.message);
                console.log(error.stack);
            } */
/* try {
                let age = +prompt("Enter your age")
                if (age > 150) {
                    throw new Error("This is not a valid age")
                }
            } catch (error) {
                console.log(error.name);
                console.log(error.message);
                console.log(error.stack);
            }
            console.log("Script is still running"); */

//Finally Clause
/* try {
                let a = 0
                console.log(program);
                console.log("Program ran successfully");
            } catch (error) {
                console.log("This is an error");
                console.log(tri);//trycatch or finally mein diff dekhne k lye lagaya tha
            }
            finally {//finally use krne ka main reason ye hai k error hum try catch se hum ne koi error get kr ia lein agar catch mein b error aagaya to? :is lye finally use hota hai is se error k neeche wala code b run hota hai
                console.log("I always ran");
            } */

//Practicing aync/await, try/catch, callbacks() and promises
/* let loadScript = async (src) => {
                return new Promise((resolve, reject) => {
                    let script = document.createElement("script");
                    script.src = src;
                    script.onload = () => {
                        resolve(src);
                    }
                    document.head.appendChild(script);
                })
            }
            let a = async () => {
                let b = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
                console.log(b);
            }
            a() */
/* let p = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject("This is not acceptable")
                    }, 3000)
                });
            }
            let a = async () => {
                try {

                    let c = await p()
                    console.log(c);
                } catch (error) {
                    console.log("this error has been handled");
                }
            }
            a() */
/* let p1 = async () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(1)
                    }, 2000)
                })
            }
            let p2 = async () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(2)
                    }, 1000)
                })
            }
            let p3 = async () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(3)
                    }, 3000)
                })
            }
            let run =  async() => {
                console.time("run")
                // let a1 = await p1()
                // let a2 = await p2()
                // let a3 = await p3()
                // console.log(a1 , a2,  a3);
                // console.timeEnd("run")//ye code is wqt 6 sec mein horaha hai time ki bachat k lye hm ise ek or tarike se b krsakte hain is code ko //wale comment mein krraha hun jo ziada time le raha

                let a1 =  p1()//oper wali logic jo k //wale comment mein hai us mein hum 3no promises k fulfll hone ka w8 kr rahai the line by line await laga k jab k is mein hum ek sath 3no ko fulfill hone ka keh rhai hain phir 3no ko a1a2a3 wale variable mein await kr k save kr rahai hain jis se time ki bachat ho rahi hai :agar abhi b samajh nhi aaya to dekho (codeWithHarry video no 63 22:00)
                let a2 =  p2()
                let a3 =  p3()
                let a1a2a3 = await Promise.all([a1, a2, a3])
                console.log(a1a2a3);
                console.timeEnd("run")
            }
            run() */

//Fetch API
/* let p = fetch('https://goweather.herokuapp.com/weather/Dc')

            p.then(value1 => {
                console.log(value1.status);
                console.log(value1.ok);
                console.log(value1.headers);
                console.time("fetch")
                return value1.json()
            }).then(value2 => {
                console.log(value2); 
                console.timeEnd("fetch")
            }) */

//isko samajhne k lye code with harry video no 67 b dekh sakte ho : https://youtu.be/57SrCBCxdgc
/* let createToDo = async () => {
  let options = {
    method: "POST",
    body: JSON.stringify({
      title: "Huzaifa",
      body: "bhai",
      userId: 101,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

let mainFunc = async () => {
  console.time("mainFunc");
  let todo = await createToDo();
  console.log(todo);
  console.timeEnd("mainFunc");
};
mainFunc(); */

//Cookies in JavaScript
// encodeURIComponent se hum kisi b string ko ek code mein convert kr sakte hain 
//decodeURI se hum encodeURIComponent se mili hui value ko decodeURI mein daal kr decode kr sakte hain 
/* console.log(document.cookie);
document.cookie = "name=huzaifa854";
console.log(document.cookie);
document.cookie = "name2=huzaifa8542";
console.log(document.cookie);
document.cookie = "name=huzaifa";
console.log(document.cookie);
let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie); */

//Example of encodeURIComponent & decodeURIComponent
/* let a = encodeURIComponent("a::")
console.log(a);
console.log(decodeURIComponent(a)); */

