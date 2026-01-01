
function getNum(n){
    if(n===0) return 1;
    if(n===1) return 1;
    return getNum(n-1) + getNum(n-2);
}
const readline = require('readline');

function getInput() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('please input a number n:', (answer) => {
            rl.close();
            resolve(Number(answer)); // 转成数字
        });
    });
}

(async function main(){
    try{
        const n = await getInput();
        console.log(getNum(n));
    }catch(err){
        console.error("error:", err);
    }
})();
