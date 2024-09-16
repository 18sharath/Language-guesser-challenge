// import franc from "franc";
// import langs from "langs";
// // const franc=require('lang');   
// // const langs=require("langs");
// const langauge=franc('hello i am sharath');
// const l=langs.where("3",langauge);
// console.log(l.name);
import {franc} from "franc";
import langs from "langs";

const langCode = franc('HELLO WOLRD HII');
const language = langs.where("2", langCode);

if (language) {
    console.log(language.name);
} else {
    console.log("Language not found!");
}
