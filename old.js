/*
let Lang = sessionStorage.getItem("Lang") || "DE";


function ChangeLang() {
    if (Lang === "DE") {
      Lang = "EN";
      sessionStorage.setItem("Lang", Lang);
      document.getElementById("changeLanguage").innerHTML = Lang;
     
      document.getElementById("index1").innerHTML = "Dear Sir or Madam:";
      document.getElementById("index2").innerHTML = "Welcome to my <strong> portfolio </strong> page which serves to introduce me to you! I am glad that you have found your way here. My name is Moritz Weber, and I am a student in the field of e-commerce at the Technical University of Würzburg Schweinfurt.";
      document.getElementById("index3").innerHTML = "As a student in the 4th semester I was able to gain valuable experience in the field of e-commerce and besides my studies I have already successfully supported several companies to optimize their webshops and pages and to increase their sales. My profound knowledge in online marketing, the creation of appealing webshops as well as the optimization of e-commerce processes makes me the perfect intern for your company that wants to operate successfully in the e-commerce sector.";
      
    } else {
      Lang = "DE";
      sessionStorage.setItem("Lang", Lang);
      document.getElementById("changeLanguage").innerHTML = Lang;
      
      document.getElementById("index1").innerHTML = "Sehr geehrte Damen und Herren:";
      document.getElementById("index2").innerHTML = "Herzlich willkommen auf meiner Portfolio-Seite welche dazu dient mich ihnen näher vorzustellen! Ich freue mich, dass Sie hierher gefunden haben. Mein Name ist <strong> Moritz Weber</strong>, und ich bin Student im Bereich <strong> E-Commerce </strong> an der <strong> Technischen Hochschule Würzburg Schweinfurt.";
      document.getElementById("index3").innerHTML = "Als Student im <strong>4. Semester</strong> konnte ich wertvolle Erfahrungen im Bereich E-Commerce sammeln und habe neben meinem Studium bereits mehreren Unternehmen erfolgreich dabei unterstützt, ihre <strong>Webshops und Seiten zu optimieren</strong> und ihren Umsatz zu steigern. Mein fundiertes Wissen im Online-Marketing, der Erstellung ansprechender Webshops sowie der Optimierung von E-Commerce-Prozessen macht mich zum praktikanten für ihr Unternehmen, welches erfolgreich im E-Commerce-Bereich agieren möchten.";
  
    }
  }


  let Lang = sessionStorage.getItem("Lang") || "DE";

  if (Lang === "DE") {
    document.getElementById("index1").innerHTML = "Sehr geehrte Damen und Herren:";
    document.getElementById("index2").innerHTML = "Herzlich willkommen auf meiner Portfolio-Seite, auf der ich mich Ihnen näher vorstellen möchte! Ich freue mich, dass Sie hierher gefunden haben. Mein Name ist <strong>Moritz Weber</strong>, und ich studiere im Bereich <strong>E-Commerce</strong> an der <strong>Technischen Hochschule Würzburg Schweinfurt</strong>.";
    document.getElementById("index3").innerHTML = "Als Student im <strong>4. Semester</strong> konnte ich wertvolle Erfahrungen im Bereich E-Commerce sammeln und habe neben meinem Studium bereits mehreren Unternehmen erfolgreich dabei unterstützt, ihre <strong>Webshops und Websites zu optimieren</strong> und ihren Umsatz zu steigern. Mein umfangreiches Wissen im Bereich Online-Marketing, der Erstellung ansprechender Webshops sowie der Optimierung von E-Commerce-Prozessen macht mich zum idealen Praktikanten für Ihr Unternehmen, das im E-Commerce-Bereich erfolgreich agieren möchte.";
    document.getElementById("changeLanguage").innerHTML = "EN";
  } else {
    document.getElementById("index1").innerHTML = "Dear Sir or Madam:";
    document.getElementById("index2").innerHTML = "Welcome to my <strong>portfolio</strong> page, where I would like to introduce myself to you! I am glad that you have found your way here. My name is Moritz Weber, and I am a student in the field of <strong>e-commerce</strong> at the <strong>Technical University of Würzburg Schweinfurt</strong>.";
    document.getElementById("index3").innerHTML = "As a student in the 4th semester, I was able to gain valuable experience in the field of e-commerce and have already successfully helped several companies to optimize their <strong>webshops and websites</strong> and increase their sales. My extensive knowledge in online marketing, the creation of appealing webshops, as well as the optimization of e-commerce processes, makes me the perfect intern for your company that wants to operate successfully in the e-commerce sector.";
    document.getElementById("changeLanguage").innerHTML = "DE";
  }



function changeLang(currentLang) {
  if (Lang == "DE") {
    Lang = "EN";
  } else {
    Lang = "DE";
  }
  sessionStorage.setItem("Lang", Lang);
} */