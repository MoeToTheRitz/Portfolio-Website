let Lang = sessionStorage.getItem("Lang") || "DE";



document.addEventListener("DOMContentLoaded", function() {

  
    if (window.location.href.indexOf("/index.html") >= 0 || window.location.href === "https://portfolio-moritzweber.de/"){

    if (Lang === "EN") {
      document.getElementById("Head1").innerHTML = "<strong>About</strong>"
      document.getElementById("Head2").innerHTML = "<strong>Resume</strong>"
      document.getElementById("Head3").innerHTML = "<strong>Contact</strong>"

      document.getElementById("Jumbo1").innerHTML = "<strong>Internship portfolio</strong>"
      document.getElementById("Jumbo2").innerHTML = "<strong>Contact Now</strong>"

      document.getElementById("index1").innerHTML = "Hey,"
      document.getElementById("index2").innerHTML = "Welcome to my self-made <strong>portfolio page</strong>, which serves to introduce me to them closer!";
      document.getElementById("index3").innerHTML = "I am pursuing a career in the business world and looking for exciting opportunities to get involved in areas such as <strong>e-commerce</strong>, <strong>online marketing</strong>, <strong>IT consulting</strong>, <strong>project management</strong>, <strong>business development</strong> and similar fields of work. I believe that my <strong>analytical skills</strong>, <strong>strategic thinking</strong>, and <strong>passion for technology and innovation</strong> will allow me to succeed in these fields. My goal is to work in a <strong>dynamic environment</strong> and continuously expand my <strong>skills and knowledge</strong> to help grow their business while advancing my own career."
      document.getElementById("index4").innerHTML = "In my previous <strong>four semesters</strong>, I have gained valuable experience in the field of E-commerce and have successfully assisted several companies in optimizing their <strong>webshops and websites</strong> and thereby increasing sales alongside my studies. My comprehensive knowledge in <strong>online marketing</strong>, creating <strong>appealing webshops</strong>, and <strong>optimizing E-commerce processes</strong> make me the ideal <strong>intern</strong> for your company.";
      document.getElementById("index5").innerHTML = "On my portfolio page, you will find an overview of my <strong>previous projects</strong> and <strong>references</strong>. If you would like to learn more about my work or have any questions, please do not hesitate to <strong>contact me</strong>. I am looking forward to hearing from you and working together towards a shared success."
      document.getElementById("index6").innerHTML = "<strong>Learn more</strong>"


      document.getElementById("Foot1").innerHTML = "<strong>About</strong>"
      document.getElementById("Foot2").innerHTML = "<strong>Resume</strong>"
      document.getElementById("Foot4").innerHTML = "<strong>Contact Now</strong>"
    }
}


    else if (window.location.href.indexOf("/about.html")>= 0){

    if (Lang === "EN") {
      document.getElementById("Head1").innerHTML = "<strong>About</strong>"
      document.getElementById("Head2").innerHTML = "<strong>Resume</strong>"
      document.getElementById("Head3").innerHTML = "<strong>Contact</strong>"

      document.getElementById("Jumbo1").innerHTML = "<strong>Internship portfolio</strong>"
      document.getElementById("Jumbo2").innerHTML = "<strong>Contact Now</strong>"

        document.getElementById("about1").innerHTML ="Who am i ?"
        document.getElementById("about2").innerHTML ="I am <strong>Moritz</strong>, <strong>22 years</strong> old and currently in the <strong>fourth semester</strong> of my <strong>E-commerce studies</strong> at <strong>THWS</strong>. Since the beginning of my studies, I have been looking forward to the <strong>internship semester</strong> to finally demonstrate my <strong>skills</strong> and <strong>enthusiasm</strong>."
        document.getElementById("about3").innerHTML ="In addition to my studies, I am also involved in projects related to E-commerce. For example, I set up my own webshop using Shopify and sold products related to home decor for young people. I conducted simple <strong>dropshipping</strong> and quickly realized that this form of shipping is not sustainable for both me as the operator and my customers. However, I was able to gain a lot of experience in the areas of <strong>content management</strong>, <strong>shipping</strong>, <strong>marketing</strong>, and <strong>customer relations</strong> and gain insights into practice through this project."
        document.getElementById("about4").innerHTML ="I am particularly interested in forward-thinking concepts such as <strong>personalization</strong>, <strong>blockchain</strong>, and <strong>artificial intelligence</strong> and their practical applications. I regularly follow the latest developments in this area and find it fascinating how companies use innovative approaches and technologies to improve their online presence and reach their customers better. In the future, I want to further deepen my knowledge and experience in E-commerce and contribute to helping companies operate successfully in this field."
        document.getElementById("SH1").innerHTML ="<strong>Webdesign</strong>"
        document.getElementById("SH1.1").innerHTML ="I create user-friendly and engaging web designs that increase the engagement of your target audience."
        document.getElementById("SH2").innerHTML ="<strong>Programming Skills</strong>"
        document.getElementById("SH2.1").innerHTML ="I have experience with programming languages such as <strong>HTML, CSS, PYTHON, JS, SQL, and PHP</strong> both through my studies and on my own initiative. For example, I coded the current page <strong>completely by myself.</strong>"
        document.getElementById("SH3").innerHTML ="<strong>CMS Experience</strong>"
        document.getElementById("SH3.1").innerHTML ="I have already worked with content management systems such as: Shopify, WordPress, Magento, Shopware, Webflow and have dealt with them intensively."
        document.getElementById("SH4").innerHTML ="<strong>English skills</strong>"
        document.getElementById("SH4.1").innerHTML ="I speak English fluently also on C1 level."
        document.getElementById("SH5").innerHTML ="<strong>Marketing Experience</strong>"
        document.getElementById("SH5.1").innerHTML ="In the course of my private work and further education I have already performed SEO optimization to achieve a better page rank on the results pages. I have also successfully run advertising campaigns on Meta and TikTok, both with my own and other people's content."
        document.getElementById("SH6").innerHTML ="<strong>Project Management</strong>"
        document.getElementById("SH6.1").innerHTML ="During my previous professional experience in the gastronomy industry and in creating websites, I was able to gain valuable experience, especially in managing projects and working in a team."
        document.getElementById("SH7").innerHTML ="Previous projects:"
        document.getElementById("SH8").innerHTML ="Finance for teacher"
        document.getElementById("SH8.1").innerHTML ="As a co-founder and web developer of the Finanzen für Lehrer project, I collaborated with a friend from the finance industry to create an appealing and functional website. I was responsible for designing the website using WordPress and Elementor, the navigation, backend development, as well as conversion optimization and SEO. The website is continuously optimized and expanded to provide our visitors with the best possible user experience."
        document.getElementById("SH9").innerHTML ="During the COVID-19 pandemic, the restaurant Pasta e Olio launched an online presence to maintain its delivery service. Together with the owner, I developed a concept for the redesign of the website, and helped to optimize and design it. This included implementing call-to-action buttons, increasing information density, and developing up-selling strategies. The website is continuously evolving to meet the changing demands of the situation."
        document.getElementById("SH10").innerHTML ="In the past, I have extensively explored dropshipping and founded an online shop called Young-Dwell. This shop sold furniture specifically for young people but unfortunately was not profitable. Nevertheless, I was able to learn a lot from this experience and gain valuable insights. I learned how important it is to develop an effective marketing strategy, use customer feedback to improve the offering, and focus on a clear target audience. These experiences have helped me further develop as an entrepreneur and improve my skills in the e-commerce field."
        document.getElementById("SH11").innerHTML ="If you are interested in more projects like my university portfolios please visit me on GitHub."
      
        document.getElementById("Foot1").innerHTML = "<strong>About</strong>"
        document.getElementById("Foot2").innerHTML = "<strong>Resume</strong>"
        document.getElementById("Foot4").innerHTML = "<strong>Contact Now</strong>"
      }
}


    else if (window.location.href.indexOf("/lebenslauf.html")>= 0){
  console.log("passt")

  if (Lang === "EN") {
    document.getElementById("Head1").innerHTML = "<strong>About</strong>"
    document.getElementById("Head2").innerHTML = "<strong>Resume</strong>"
    document.getElementById("Head3").innerHTML = "<strong>Contact</strong>"

    document.getElementById("Si1").innerHTML = "since"
    document.getElementById("Si2").innerHTML = "since"
    document.getElementById("Si3").innerHTML = "since"

    document.getElementById("Leb").innerHTML ="Resume"
    document.getElementById("Leb1").innerHTML ="School education:"
    document.getElementById("Leb1.1").innerHTML ="Vocational baccalaureate at the FOS Würzburg"
    document.getElementById("Leb2").innerHTML ="Work experience:"
    document.getElementById("Leb2.1").innerHTML ="Service staff at Hans im Glück Würzburg"
    document.getElementById("Leb2.2").innerHTML ="Independent web developer"
    document.getElementById("Leb3").innerHTML ="Study:"
    document.getElementById("Leb3.1").innerHTML ="Student at THWS in the field of e-commerce"
    document.getElementById("Leb4").innerHTML ="Internships:"
    document.getElementById("Leb4.1").innerHTML ="Half-year internship at Cutvert GmbH in the area of marketing and development"
    document.getElementById("Leb4.2").innerHTML ="Six-month internship at Rügamer & Steiner Consulting GmbH in the field of marketing"
    document.getElementById("Leb5").innerHTML ="Other:"
    document.getElementById("Leb5.1").innerHTML ="1 year sabbatical with stay abroad"

    document.getElementById("Leb6").innerHTML ="<strong>Last updated: March 2023</strong>"

    document.getElementById("Foot1").innerHTML = "<strong>About</strong>"
    document.getElementById("Foot2").innerHTML = "<strong>Resume</strong>"
    document.getElementById("Foot4").innerHTML = "<strong>Contact Now</strong>"
  }
}


    else if (window.location.href.indexOf("/kontakt.html")>= 0){
  console.log("passt")

  if (Lang === "EN") {
      document.getElementById("Head1").innerHTML = "<strong>About</strong>"
      document.getElementById("Head2").innerHTML = "<strong>Resume</strong>"
      document.getElementById("Head3").innerHTML = "<strong>Contact</strong>"

    document.getElementById("contact1").innerHTML ="Contact form"
    document.getElementById("contact2").innerHTML ="Name"
    document.getElementById("contact3").innerHTML ="E-mail address"
    document.getElementById("contact4").innerHTML ="Your message"
    document.getElementById("contact5").innerHTML ="I confirm that I agree with the processing of my input for the purpose of processing my request."

    document.getElementById("Foot1").innerHTML = "<strong>About</strong>"
    document.getElementById("Foot2").innerHTML = "<strong>Resume</strong>"
    document.getElementById("Foot4").innerHTML = "<strong>Contact Now</strong>"
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


