let Person={
    name:'admin',
    greet: function()
    {
        return "Hello" + this.name
    }
}
let user=object.create(Person)
user.name='Manager'
user.doWork= function(task)
{
    return "I can do my " +task
}

console.log(user);
console.log(user.doWork('teaching'))