const myAsyncFn02 = function (param) {
    return new Promise(function (resolve, reject) {
        //
        // 비동기 코드가 들어감.
        // 파일 시스템 접근(file io) or 네트워크 통신 or SQL to DB or setTimeout ...
        //
        setTimeout(function () {
            if (param === 'data') {
                resolve('ok');
            } else {
                reject(new Error('fail'));
            }
        }, 2000);
    });
}





if (require.main == module) {
    // test01: success
    myAsyncFn02("data")
        .then(function (result) {
            console.log("result");
        })
        .catch(function (error) {
            console.error(error);
        })

    console.log("wait....");
}else {
    module.exports = myAsyncFn02;
}

