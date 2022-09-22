function addData(){
     var Employee={}
    Employee.uname=document.fdata.uname.value
    Employee.pass=document.fdata.pass.value
    Employee.uname=document.fdata.email.value
    Employee.pass=document.fdata.city.value
    Employee.pass=document.fdata.nm.value

    console.log(Employee);

    var data=localStorage.setItem('udata',JSON.stringify(Employee))
   }
   
   
   function showData(){
   document.getElementById('show').innerHTML=localStorage.getItem('udata')
   }