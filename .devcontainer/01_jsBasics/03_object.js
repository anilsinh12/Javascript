/*
    let obj = {
        id : 123,
        "name" : "anilsinh",
        age : 20,

    }

    console.log(obj.id);
    console.log(obj["name"]);

        123
        anilsinh

*/
 

/*

        const sym =  Symbol("xx")

        let obj = {
            id : 123,
            [sym] : "kkk",
            "name" : "anilsinh",
            age : 20,

        }

        console.log(obj.id);
        console.log(obj[sym]);
        console.log(typeof sym);
        console.log(obj["name"]);

        123
        kkk
        symbol
        anilsinh
*/




/*
 let obj = {
            id : 123,
            "name" : "anilsinh",
            age : 20,

        }

        obj.greeting = function(){
            console.log(`hello mr ${this.name}`)
            console.log(`And your age is  ${this.age}`)
        }

        console.log(obj.greeting())

        hello mr anilsinh
        And your age is  20
*/
 


/*
   
        const obj1 = { 1 :"a" ,2 : "b"}
        const obj2 = { 3 :"c" ,4 : "d"}
        const obj3 = { 5 :"e" ,6 : "f"}

        const obj4 = Object.assign({},obj1,obj2,obj3)
        const obj5 = {...obj1,...obj2,...obj3}
        console.log(obj4)
        console.log(obj5)

        { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
        { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

*/


/*
        const tinderUser = {
            id : 123,
            name : "anilsinh",
            age : 20,

        }
        


        
        console.log(tinderUser);

        console.log(Object.keys(tinderUser));
        console.log(Object.values(tinderUser));
        console.log(Object.entries(tinderUser));

        { id: 123, name: 'anilsinh', age: 20 }

        [ 'id', 'name', 'age' ]
        [ 123, 'anilsinh', 20 ]
        [ [ 'id', 123 ], [ 'name', 'anilsinh' ], [ 'age', 20 ] ]

*/



