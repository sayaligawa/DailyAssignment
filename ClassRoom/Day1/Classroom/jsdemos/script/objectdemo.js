function show()
{
    const userData={
        uname:document.data.uname.value,
        email:document.data.email.value,
        city:document.data.city.value
    }

    document.getElementById(show).innerHTML=userData.uname+" "+userData.email+""+userData.city
    
}