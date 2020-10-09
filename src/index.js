module.exports = function check(str, bracketsConfig) {
    let configArr = bracketsConfig.map((el) =>
        el.reduce((sum, cur) => sum + cur)
    );
    let n = -1;
    while (str.length != n) {
        n = str.length;
        for (let i = 0; i < configArr.length; i++) {
            str = str.replace(configArr[i], "");
        }
    }
    return str.length == 0 ? true : false;
};
