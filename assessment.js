const userName=document.getElementById('user-name');
const asbutton=document.getElementById('assessment');
const resdivi=document.getElementById('resArea')
const tweetdivi=document.getElementById('tweAlea');

`use strict`;
const userNameInput=document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivision=document.getElementById('result-area');
const tweetDivision=document.getElementById('tweet-area');
assessmentButton.onclick=()=>{
  console.log('ボタンがおされました');
const userName=userNameInput.value;
if(!userName){return;}
resultDivision.innerText='';
console.log(userName);
const header=document.createElement('h3');
header.innerText='診断結果';
resultDivision.appendChild(header);
const paragragh=document.createElement('p');
const result=assessment(userName);
paragragh.innerText=result;
resultDivision.appendChild(paragragh);
const anchor=document.createElement('a');
const hrefValue='https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';
anchor.setAttribute('href',hrefValue);
anchor.setAttribute('class','twitter-hashtag-button');
anchor.setAttribute('data-text',result);
anchor.innerText='tweet#あなたのいいところ';
tweetDivision.appendChild(anchor);
const script=document.createElement('script');
script.setAttribute('src','https://platform.twitter.com/widgets.js');
tweetDivision.appendChild(script);
 
};
userNameInput.onkeydown=event=>{
if(event.key==='Enter'){
assessmentButton.onclick();
 }};
const answers=['###userName###のいいところは声です','###userName###のいいところはまなざしです','###userName###のいいところはna','###userName###のいいところは','###userName###のいいところはやさしさ'];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName
 * @return {string} 診断結果
 */
let sum=0;
function assessment(userName){
   
    for(let i=0;i<userName.length;i++){
     sum +=userName.charCodeAt(i);
   }
   sum %=answers.length;
   let res=answers[sum];
   res=res.replaceAll('###userName###',userName);
    return res;
}
console.log(assessment('太郎'));
console.assert(assessment('太郎')==='太郎のいいところは声です','へん');
