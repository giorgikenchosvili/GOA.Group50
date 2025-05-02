// 2)შექმენით 4 div-კონტეინერი,თითოეულ დივს მიეცით id , თუ რა ფერი უნდა გახდეს ეს დივი დაკლიკების შემდეგ,
// ასევე ამ დივში უნდა იყოს პარაგრაფი(Click to see color), შემდეგ javaascript-იდან შეამოწმეთ რომელ DIV-ზე 
// განხორციელდა მოვლენა , ასევე შეამოწმეთ ამ DIV- ის ID-ები და 
// მიანიჭეთ შესაბამისი ფერი ,  ასევე შეცვალეთ paragraph-ის textContent იმ ფერის სახელით რა ფერითაც შეიცვლება დივი


document.addEventListener("click", function(event){
    event.target.style.backgroundcolor = event.target.id
    event.target.style.color = event.target.id
    console.log(event.target.id)
})





