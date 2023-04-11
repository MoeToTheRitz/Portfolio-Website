let Lang = sessionStorage.getItem("Lang") || "DE";



document.addEventListener("DOMContentLoaded", function() {

  
    if (window.location.href.indexOf("/index.html")>= 0){

    if (Lang === "EN") {
      document.getElementById("Head1").innerHTML = "<strong>About</strong>"
      document.getElementById("Head2").innerHTML = "<strong>Resume</strong>"
      document.getElementById("Head3").innerHTML = "<strong>Contact</strong>"

      document.getElementById("Jumbo1").innerHTML = "<strong>Internship portfolio</strong>"
      document.getElementById("Jumbo2").innerHTML = "<strong>Contact Now</strong>"

      document.getElementById("index1").innerHTML = "Hey,"
      document.getElementById("index2").innerHTML = "Welcome to my <strong>portfolio</strong> page, where I would like to introduce myself to you! I am glad that you have found your way here. My name is <strong>Moritz Weber</strong>, and I am a student in the field of <strong>e-commerce</strong> at the <strong>Technical University of Würzburg Schweinfurt</strong>.";
      document.getElementById("index3").innerHTML = "As a student in the <strong>4th semester</strong>, I was able to gain valuable experience in the field of e-commerce and have <strong>already successfully helped several companies</strong> to optimize their <strong>webshops and websites</strong> and increase their sales. My extensive knowledge in <strong>online marketing</strong>, the <strong>creation of appealing webshops</strong>, as well as the <strong>optimization of e-commerce processes</strong>, makes me the perfect <strong>intern</strong> for your company that wants to operate successfully in the e-commerce sector.";
      document.getElementById("index4").innerHTML = "On my portfolio page you will find an <strong>overview</strong> of my <strong>previous projects</strong> and <strong>references</strong>. If you want to learn more about my work or have any questions, don't hesitate to <strong>contact me</strong>. I look forward to hearing from you and working together on your e-commerce success."
      document.getElementById("index5").innerHTML = "<strong>Learn more</strong>"


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
        document.getElementById("about2").innerHTML ="My name is <strong>Moritz</strong>, I am <strong>22 years</strong> old and I am in the <strong>fourth semester</strong> of my <strong>e-commerce studies</strong> at the <strong>THWS</strong>. Since the beginning of my studies, I have been looking forward to the <strong>internship semester</strong>, because there I can finally show my <strong>enthusiasm</strong> in a practical way. I have created this website in order to give you a <strong>comprehensive picture</strong> of me and to present my <strong>experiences</strong> and <strong>skills</strong>."
        document.getElementById("about3").innerHTML ="As already mentioned in my introductory sentence, I am also involved in <strong>e-commerce</strong> projects in addition to my studies. For example, a year ago I set up my own <strong>webshop</strong> with Shopify and sold products around the topic <strong>Living for Young People</strong>. As you can already imagine, I did simple <strong>dropshipping</strong> and quickly realized that this form of shipping is not sustainable for me as an operator as well as for my customers. However, I was able to gain a lot of experience in the areas of: <strong>CMS</strong>, <strong>shipping</strong>, <strong>marketing</strong> and <strong>customer relations</strong> and gain interest in e-commerce."
        document.getElementById("about4").innerHTML ="I have a keen interest in <strong>e-commerce</strong> and in particular in forward-looking concepts such as <strong>personalization</strong>, <strong>blockchain</strong> and <strong>artificial intelligence</strong>, and I'm excited to see how these innovations are put into practice. I regularly follow the latest developments in this field and find it fascinating how companies are using innovative approaches and technologies to improve their online presence and better reach their customers. In the future, I would like to further deepen my knowledge and experience in e-commerce and help companies operate successfully in this field."
        document.getElementById("SH1").innerHTML ="<strong>Webdesign</strong>"
        document.getElementById("SH1.1").innerHTML ="I create user-friendly and engaging web designs that increase the engagement of your target audience."
        document.getElementById("SH2").innerHTML ="<strong>Programming Skills</strong>"
        document.getElementById("SH2.1").innerHTML ="I have experience both through my studies and on my own initiative with programming languages such as: <strong>HTML, CSS, PYTHON, JS, SQL and PHP.</strong>"
        document.getElementById("SH3").innerHTML ="<strong>CMS Experience</strong>"
        document.getElementById("SH3.1").innerHTML ="I have already worked with content management systems such as: Shopify, WordPress, Magento, Shopware, Webflow and have dealt with them intensively."
        document.getElementById("SH4").innerHTML ="<strong>English skills</strong>"
        document.getElementById("SH4.1").innerHTML ="I speak English fluently also on C1 level."
        document.getElementById("SH5").innerHTML ="<strong>Marketing Experience</strong>"
        document.getElementById("SH5.1").innerHTML ="In the course of my private work and further education I have already performed SEO optimization to achieve a better page rank on the results pages. I have also successfully run advertising campaigns on Meta and TikTok, both with my own and other people's content."
        document.getElementById("SH6").innerHTML ="<strong>Project Management</strong>"
        document.getElementById("SH6.1").innerHTML ="During my previous professional experience in the gastronomy industry and in creating websites, I was able to gain valuable experience, especially in managing projects and working in a team."
        document.getElementById("SH8").innerHTML ="As the co-founder and web developer of the Finance for Teachers project, I collaborated with my financial roommate to create a responsive and functional website. Using WordPress and Elementor, I handled the design, navigation, backend development, and conversion optimization and SEO of the site and have been constantly improving it. We are continuously working to enhance and optimize the website to provide the best possible user experience for our visitors."
        document.getElementById("SH9").innerHTML ="During the COVID-19 pandemic, Pasta e Olio, a restaurant located in the heart of Würzburg, Germany, launched an online presence to maintain their delivery service. Since the owner is a close friend of mine and doesn't have much experience in web design and e-commerce, I was able to help revamp and design the website. This included implementing call-to-action buttons, increased information density, and up-selling strategies. The website is continually evolving to meet the ever-changing needs."
        document.getElementById("SH10").innerHTML ="In the past, I have been intensively involved with dropshipping and founded an online store called Young-Dwell. This store sold furniture specifically for young people, but unfortunately was not profitable. Nevertheless, I was able to learn a lot from this experience and gain valuable insights. I learned the importance of developing an effective marketing strategy, using customer feedback to improve the offer, and focusing on a clear target audience. These experiences have helped me develop as an entrepreneur and improve my skills in the e-commerce field."
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

    document.getElementById("9.9").innerHTML = "since"

    document.getElementById("Leb").innerHTML ="Resume"
    document.getElementById("Leb1").innerHTML ="Graduation:"
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

    document.getElementById("Leb6").innerHTML ="Last updated: March 2023"

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


