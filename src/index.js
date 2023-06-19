// var val1 = "vavavava";
// console.log(val1);
// //varは上書き可能
// val1="va!va!";
// console.log(val1);
// var val1="vvvvvv";
// console.log(val1)

// let val2="let!";
// console.log(val2);
// val2="llee!";
// console.log(val2);

// const val3="con";
// console.log(val3);
// const val3="fuga";

// const val4 = { name: "ame", age: 32 };
// console.log(val4);
// val4.name = "amenbir";
// val4.age = 14;
// console.log(val4);

// const val5=["dog", "cat"];
// val5.push('tanuki')
// console.log(val5);

/**テンプレート文字列 */

// const name="amenbir"
// const age=14;

// console.log(`私の名前は${name}で${age}歳です`);

/**アロー関数 */
function func1(x) {
  return x + x;
}
console.log(func1("aa"));

const func2 = function (x) {
  return x + x + x;
};
const func3 = (x) => {
  return x + x + x + x;
};
const func4 = (x) => x;
console.log(func2("b"));
console.log(func3("c"));
console.log(func4("d"));
