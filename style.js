let Lang = sessionStorage.getItem("Lang") || "DE";



document.addEventListener("DOMContentLoaded", function() {

  
    if (window.location.href.indexOf("/index.html")>= 0){

  if (Lang === "DE") {
    document.getElementById("index1").innerHTML = "Sehr geehrte Damen und Herren:"
    document.getElementById("index2").innerHTML = "Herzlich willkommen auf meiner Portfolio-Seite, auf der ich mich Ihnen näher vorstellen möchte! Ich freue mich, dass Sie hierher gefunden haben. Mein Name ist <strong>Moritz Weber</strong>, und ich studiere im Bereich <strong>E-Commerce</strong> an der <strong>Technischen Hochschule Würzburg Schweinfurt</strong>.";
    document.getElementById("index3").innerHTML = "Als Student im <strong>4. Semester</strong> konnte ich wertvolle Erfahrungen im Bereich E-Commerce sammeln und habe neben meinem Studium bereits mehreren Unternehmen erfolgreich dabei unterstützt, ihre <strong>Webshops und Websites zu optimieren</strong> und ihren Umsatz zu steigern. Mein umfangreiches Wissen im Bereich Online-Marketing, der Erstellung ansprechender Webshops sowie der Optimierung von E-Commerce-Prozessen macht mich zum idealen Praktikanten für Ihr Unternehmen, das im E-Commerce-Bereich erfolgreich agieren möchte.";
    document.getElementById("index4").innerHTML = "Auf meiner Portfolio-Seite finden Sie einen Überblick über meine <strong>bisherigen Projekte</strong> und Referenzen. Wenn Sie mehr über meine Arbeit erfahren möchten oder Fragen haben, zögern Sie nicht, mich zu <strong>kontaktieren.</strong> Ich freue mich darauf, von Ihnen zu hören und gemeinsam an Ihrem Erfolg im E-Commerce-Bereich zu arbeiten."
  } 

  else if (Lang === "EN") {
    document.getElementById("index1").innerHTML = "Dear Sir or Madam:"
    document.getElementById("index2").innerHTML = "Welcome to my <strong>portfolio</strong> page, where I would like to introduce myself to you! I am glad that you have found your way here. My name is Moritz Weber, and I am a student in the field of <strong>e-commerce</strong> at the <strong>Technical University of Würzburg Schweinfurt</strong>.";
    document.getElementById("index3").innerHTML = "As a student in the 4th semester, I was able to gain valuable experience in the field of e-commerce and have already successfully helped several companies to optimize their <strong>webshops and websites</strong> and increase their sales. My extensive knowledge in online marketing, the creation of appealing webshops, as well as the optimization of e-commerce processes, makes me the perfect intern for your company that wants to operate successfully in the e-commerce sector.";
    document.getElementById("index4").innerHTML = "On my portfolio page you will find an overview of my previous projects and references. If you want to learn more about my work or have any questions, don't hesitate to contact me. I look forward to hearing from you and working together on your e-commerce success."
  }
}


    else if (window.location.href.indexOf("/about.html")>= 0){

    if (Lang === "EN") {
        document.getElementById("about1").innerHTML ="Hello"
        document.getElementById("about2").innerHTML ="I am Moritz, 22 years old and a student in the 4th semester of e-commerce. This website serves to introduce myself to give you a better impression of me."
        document.getElementById("about3").innerHTML ="As already mentioned in my introductory sentence, I am also involved in e-commerce projects in addition to my studies. For example, a year ago I set up my own webshop with Shopify and sold products around the topic Living for Young People. As you can already imagine, I did simple dropshipping and quickly realized that this form of shipping is not sustainable for me as an operator as well as for my customers. However, I was able to gain a lot of experience in the areas of: CMS, shipping, marketing and customer relations and gain interest in e-commerce."
        document.getElementById("SH1").innerHTML ="<strong>Webdesign:</strong>"
        document.getElementById("SH1.1").innerHTML ="I create user-friendly and engaging web designs that increase the engagement of your target audience."
        document.getElementById("SH2").innerHTML ="<strong>Programming Skills:</strong>"
        document.getElementById("SH2.1").innerHTML ="I have experience both through my studies and on my own initiative with programming languages such as: HTML, CSS, PYTHON, JS, SQL and PHP."
        document.getElementById("SH3").innerHTML ="<strong>CMS Experience</strong>"
        document.getElementById("SH3.1").innerHTML ="I have already worked with content management systems such as: Shopify, WordPress, Magento, Shopware, Webflow and have dealt with them intensively."
        document.getElementById("SH4").innerHTML ="<strong>English skills:</strong>"
        document.getElementById("SH4.1").innerHTML ="I speak English fluently also on business level"
        document.getElementById("SH5").innerHTML ="<strong>Marketing Experience:</strong>"
        document.getElementById("SH5.1").innerHTML ="In the course of my private work and further education I have already performed SEO optimization to achieve a better page rank on the result page and successfully placed advertising campaigns on Meta and TikTok with both my own and other people's content."
        document.getElementById("SH6").innerHTML ="<strong>CMS Experience</strong>"
        document.getElementById("SH6.1").innerHTML ="I have already worked with content management systems such as: Shopify, WordPress, Magento, Shopware, Webflow and have dealt with them intensively."
      }
}


    else if (window.location.href.indexOf("/lebenslauf.html")>= 0){
  console.log("passt")

  if (Lang === "EN") {
    document.getElementById("Leb").innerHTML ="Resume"
    document.getElementById("Leb1").innerHTML ="Graduation:"
    document.getElementById("Leb1.1").innerHTML ="Vocational baccalaureate at the FOS Würzburg"
    document.getElementById("Leb2").innerHTML ="Work experience:"
    document.getElementById("Leb2.1").innerHTML ="Service staff at Hans im Glück Würzburg"
    document.getElementById("Leb3").innerHTML ="Study:"
    document.getElementById("Leb3.1").innerHTML ="Student at THWS in the field of e-commerce"
    document.getElementById("Leb4").innerHTML ="Internships:"
    document.getElementById("Leb4.1").innerHTML ="Half-year internship at Cutvert GmbH in the area of marketing and development"
    document.getElementById("Leb4.2").innerHTML ="Six-month internship at Rügamer & Steiner Consulting GmbH in the field of marketing"
    document.getElementById("Leb5").innerHTML ="Other:"
    document.getElementById("Leb5.1").innerHTML ="Six-month internship at Rügamer & Steiner Consulting GmbH in the field of marketing"
    
    
    document.getElementById("Leb6").innerHTML ="Last updated: March 2023"
}
}


    else if (window.location.href.indexOf("/kontakt.html")>= 0){
  console.log("passt")

  if (Lang === "EN") {
    document.getElementById("contact1").innerHTML ="Contact form"
    document.getElementById("contact2").innerHTML ="Name"
    document.getElementById("contact3").innerHTML ="E-mail address"
    document.getElementById("contact4").innerHTML ="Your message"
    document.getElementById("contact5").innerHTML ="I confirm that I agree with the processing of my input for the purpose of processing my request."
}
}

  });




function ChangeLang() {
  if (Lang == "DE") {
    Lang = "EN";
    document.getElementById("changeLanguage").innerHTML = Lang
    location.reload();
  } else {
    Lang = "DE";
    document.getElementById("changeLanguage").innerHTML = Lang
    location.reload();
  }
  sessionStorage.setItem("Lang", Lang);
}



function rotateImageClockwise(img1) {
  const image = document.getElementById("img1");
  let angle = 0;
  let isHovering = false;

  image.addEventListener("mouseenter", () => {
    isHovering = true;
    rotateImage();
  });

  image.addEventListener("mouseleave", () => {
    isHovering = false;
  });

  function rotateImage() {
    if (isHovering) {
      angle += 1;
      image.style.transform = `rotate(${angle}deg)`;
    }
    requestAnimationFrame(rotateImage);
  }
}