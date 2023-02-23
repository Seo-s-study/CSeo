class Americano{
    constructor(){
        this.name="americano"
    }
}

class Cocoa{
    constructor(){
        this.name="cocoa"
    }
}

class AmericanoFactory{ // 하위 클래스 - 구체적인 내용 결정
    static createCoffee(){
        return new Americano()
    }
}

class CocoaFactory{
    static createCoffee(){
        return new Cocoa()
    }
}

const factoryList={AmericanoFactory,CocoaFactory}

class CoffeeFactory{ // 상위 클래스 - 중요한 뼈대 결정
    static createCoffee(type){
        const factory=factoryList[type]
        return factory.createCoffee()
    }
}

const main=()=>{
    const coffee=CoffeeFactory.createCoffee("AmericanFactory")
    console.log(coffee.name) //americano
}

main()