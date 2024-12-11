console.clear()

let user = {
    name: 'Hailemeskel Getaneh',
    email: 'hailegetaneh1221@gmail.com',
    department: 'Software ENgineering',
    addres : 'Debre Birhan',
    gethubUserName: 'Hailemeskel-Getaneh', 
    introduction : function (){
        console.log(`my name is ${this.name}. I am second year ${this.department} student. I live in ${this.addres}. use the email , ${this.email} to reach me`)
    }

}


    
console.log(user.introduction())

let MyName = 'Hailemeskel ';

// MyName = window.prompt("Enter your name : ")

if(MyName.length > 20){
    console. log('The length of the name field should be less than 20')
}

else if(MyName.length < 5){
    console.log('The length of your name should be greater than 5')
}

else
{
    console.log('successfully submitted')
}
