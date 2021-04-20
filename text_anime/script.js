// querySelectorAllはcssのセレクタを使ってhtmlを配列で取得する。
const animationTargetElemnts = document.querySelectorAll(".textAnimation");
//consoleで確認するとNodeが2つ取れている
// console.log(animationTargetElemnts)

for (let i = 0; i < animationTargetElemnts.length; i++) {
  //for文で要素分取得し、定義する
  const targetElemnt = animationTargetElemnts[i];
  //要素.textContentでテキストを取得することができる
  texts = targetElemnt.textContent;
  textsArray = [];
  //targetElemnt.textContent = "";で文字を消す"の中に文字を入れることもできる"
  targetElemnt.textContent = "";

  //文字列を分解して配列に変換する。split("")を空にして無条件ですべて取得する。
  // console.log(texts.split(""))
  //for文のなかにfor文を書くので競合しないようにiではなくjにする
  for (let j = 0; j < texts.split("").length; j++) {
    const t = texts.split("")[j];
    //取得した文字を上のtextArrayにプッシュする
    //if文で文字が空（スペースの場合）はそのまま返す処理をする
    if (t === " ") {
      textsArray.push(" ");
    } else {
      //spanに対してアニメーションdelayをかける
      textsArray.push(
        //animation-delayを使って動きを出し、
        '<span><span style="animation-delay: ' +
          j * 0.1 +
          's;">' +
          t +
          "</span></span>"
      );
    }
  }
  // console.log(textsArray);

  //spanタグを付与した後に文字列をfor文でもとに戻す
  for (let k = 0; k < textsArray.length; k++) {
    targetElemnt.innerHTML += textsArray[k];
  }
}

//文字を取得し分解する。spanを付与する。もとに戻す
