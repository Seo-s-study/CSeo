function createReactiveObject(target, callback){
    const proxy=new Proxy(target,{ //프록시 객체 이용
        set(obj, prop, value){
            if(value!==obj[prop]){
                const prev=obj[prop]
                obj[prop]=value
                callback(`${prop}가 [$(prev)]>>[$(value)]로 변경되었습니다.`)
            }
            return true
        }
    })
    return proxy
}

const a ={
    "지수":"감자"
}

const b=createReactiveObject(a, console.log)
b.지수="감자"
b.지수="튀김"
//지수가 [감자]>>[튀김]로 변경되었습니다.