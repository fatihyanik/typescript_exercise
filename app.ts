const person: {
    name:string;
    age:number;
} = {
    //const person = {
    name:"Fatih",
    age: 29,
    hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // !!! ERROR !!!
    
}