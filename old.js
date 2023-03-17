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