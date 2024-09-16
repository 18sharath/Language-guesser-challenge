// import franc from "franc";
// import langs from "langs";
// // const franc=require('lang');   
// // const langs=require("langs");
// const langauge=franc('hello i am sharath');
// const l=langs.where("3",langauge);
// console.log(l.name);
import {franc} from "franc";
import langs from "langs";
import color from "colors";
const input =process.argv[2];

// const langCode = franc('HELLO WOLRD HII');
const langCode=franc(input);
if(langCode==='und')
{
    console.log("sorry couldn't figured out try again");
}
const language = langs.where("2", langCode);
if (language) {
    console.log(language.name.green);
} else {
    console.log("Language not found!");
}
