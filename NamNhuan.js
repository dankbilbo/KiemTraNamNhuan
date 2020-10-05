function NamNhuan()
{
    let year = parseInt(prompt("Nhap nam"));
    if((year % 4 == 0 && year % 100 !==0) || year % 400 == 0)
    {
        alert("nam " + year + " la nam nhuan");
    }
    else
        {
            alert(year +" khong la nam nhuan");
        }

}