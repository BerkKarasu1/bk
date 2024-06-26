/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v2.0.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */
!(function (n) {
  "use strict";
  n(function () { }), n(window).on("load", function () { });
})(jQuery);

function setAge() {
  var agespan = document.getElementById("aboutmeAge");
  var age = getAge(new Date(1995, 1, 13));
  agespan.innerHTML = age;
}
setAge();
const userAction = async () => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  //  var raw= jsonControl();
  var name = document.querySelector('#contactname').value;
  var mail = document.querySelector('#contactemail').value;
  var subject = document.querySelector('#contactsubject').value;
  var message = document.querySelector('#contactmessage').value;
  if (!(name && mail && subject && message))
    return null;
  const raw = JSON.stringify({
    "name": name,
    "mail": mail,
    "subject": subject,
    "message": message
  });
  if (raw == null)
    return;
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  fetch("http://128.140.107.62/formapp", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      var resultArea = document.querySelector('.contact-feedback');
      resultArea.style.display = "block";
      if (result) {
        resultArea.classList.add("success");
        resultArea.innerHTML="Mesajınız tarafıma ulaşmıştır, en yakın zamanda size dönüş yapacağım.";
      }
      else {
        resultArea.classList.add("error");
        resultArea.innerHTML="Mesaj gönderilirken bir hata oluştu, diğer iletişim seçenekleri üzerinden bana ulaşabilirsiniz.";
      }
    document.querySelector('#contact-form').reset();
    })

  

}
function jsonControl() {

  return raw;
}
$(document).ready(function () {
  var arrLang = {
    TR: {
      developer: "Yazılım Geliştirici",
      about: "Hakkımda",
      resume: "Özgeçmiş",
      contact: "İletişim",
      aboutme: "Hakkımda",
      aboutme: "Hakkımda",
      aboutmeparagraph1:
        "Merhabalar, ben Berk Karasu 1995 yılında Sinop'ta doğdum. Makine mühendisliği eğitimi aldım ve şu anda bilgi teknolojilerinde yüksek lisans yapıyorum.",
      aboutmeparagraph2:
        "Yazılım dünyasına 2022 Ocak ayında Fenerbahçe Üniversitesinde Web ve Mobil Programalama kursuna giderek başladım. Bu kurs, web ve mobil geliştirmenin temellerini öğrenmemi sağladı.Kursun ardından, yazılım alanında kendimi daha da geliştirmek için birçok online kurs aldım. Bu kurslar sayesinde, C#, ASP.NET Core, SQL Server ve diğer teknolojiler hakkında bilgi sahibi oldum.2023 Ocak ayında, QSoft adında bir yazılım firmasında işe başladım. Burada, Teams ve WhatsApp için chatbotlar geliştiriyorum.",
      aboutmeparagraph3:
        "İlgi alanlarım arasında Formula 1 ve yazılım yer alıyor. Boş zamanlarımda Formula 1 yarışlarını takip ediyor ve yazılım projeleri üzerinde çalışıyorum.",
      aboutmeparagraph4:
        "İş hayatıyla ilgili amacım, yazılım alanında kendimi daha çok geliştirmek ve bu alanda başarılı olmaktır.",
      aboutmeName: "İsim Soyisim",
      aboutmeEmail: "E-posta",
      aboutmeAge: "Yaş",
      aboutmeFrom: "Şehir",
      downloadCvButton: "CV İndir",
      resumeHeader: "Özgeçmiş",
      resumeEducationHeader: "Eğitim",
      resumeMasterDegree: "Yüksek Lisans",
      resumeMasterDegreeHeader: "Yıldız Teknik Üniversitesi / Şubat 2023 - Haziran 2024",
      resumeMasterDegreeParagraph:
        "•Bilgi Teknolojileri bölümünde tezsiz yüksek lisans yapmaktayım.",
      resumeFenerbahceUniDegree: "Web ve Mobil Programlama",
      resumeFenerbahceUniHeader:
        "Fenerbahçe Üniversitesi / Ocak 2022 - Temmuz 2022",
      resumeFenerbahceUniParagraph:
        "•İŞKUR tarafından düzenlenen 800 saatlik web programlama kursu",
      resumeBachelorDegree: "Lisans",
      resumeBachelorDegreeHeader: "Kocaeli Üniversitesi / Eylül 2013 - Şubat 2020",
      resumeBachelorDegreeParagraph: "•Makine Mühendisliği bölümünden mezunum.",
      resumeExperienceHeader: "Deneyim",
      experienceSpidyaPosition: "Yazılım Geliştirici",
      experienceSpidyaHeader: "Spidya Yazılım A.Ş. / Kasım 2023 - Halen",
      experienceSpidyaParagraph:
        "•Sistemsel olarak gelen ihtiyaçlar doğrultusunda, SPIDYA Cheetah Platform üzerinde geliştirmeler yapıyorum.",
      experienceQsoftPosition: "Yazılım Geliştirici",
      experienceQsoftHeader: "QSoft Bilgi ve Teknoloji A.Ş. / Ocak 2023 -Kasım 2023",
      experienceQsoftParagraph:
        "•.NET kullanarak, müşteri talepleri doğrultusunda Whatsapp ve Teams platformlarında chatbotlar geliştiriyorum.",
      experienceHisarPosition: "Stajyer",
      experienceHisarHeader:
        "Hisar Çelik Döküm Sanayi ve Ticaret A.Ş / Haziran 2019 - Temmuz 2019",
      experienceHisarParagraph:
        "•Özel sipariş ile gelen büyük makine parçalarının döküm işlemlerini gözlemleme şansı elde ettiğim staj programıdır.",
      experienceKBBPosition: "Stajyer",
      experienceKBBHeader:
        "Kocaeli Büyükşehir Belediyesi Ulaşım Dairesi / Ocak 2019 - Şubat 2019",
      experienceKBBParagraph:
        "•Belediyenin iş makinelerinde oluşan sorunlara müdahale şeklini, kaynak, torna ve motor tamiratı işlemlerini görme fırsatı bulduğum staj programıdır.",
      resumeMySkills: "Yeteneklerim",
      certificates: "Sertifikalar",
      course1Header:
        ".Net Core Asenkron- Çoklu İş Parçacıklı Programlama (TASK,TPL,PLINQ)",
      course1Content: "Udemy - Kasım 2022",
      course1CertificateLinkHeader: "Sertifika",
      course2Header:
        "AspNet Core Web/API+Çok Katmanlı Mimari|En İyi Uygulamalar-Net6",
      course2Content: "Udemy - Eylül 2022",
      course2CertificateLinkHeader: "Sertifika",
      course3Header: "Uygulamalarla SQL Öğreniyorum",
      course3Content: "BTK Akademi - Haziran 2022",
      contactHeader: "İletişime Geçin",
      contactMessageMeHeader: "Bana Mesaj Gönderin",
      contactMeSendMessage: "Mesaj Gönder",
      contactInfoHeader: "İletişim Bilgileri",
      contactInfoName: "İsim Soyisim",
      contactInfoLocation: "Konum",
      contactInfoCallMe: "Telefon Numarası",
      contactInfoEmail: "E-posta",
      contactMessageMePlaceHolderName: "Ad",
      contactMessageMePlaceHolderEmail: "E-posta",
      contactMessageMePlaceHolderSubject: "Konu",
      contactMessageMePlaceHolderMessage: "Mesaj",
    },

    ENG: {
      developer: "Software Developer",
      aboutme: "About Me",
      aboutmeparagraph1:
        "I am Berk Karasu, born in Sinop in 1995. I graduated from mechanical engineering and currently studying information technology.",
      aboutmeparagraph2:
        "I started my journey into the software world in January 2022 by taking a web and mobile programming course at Fenerbahçe University. This course helped me learn the basics of web and mobile development.After the course, I took many online courses to further my development in the software field. These courses gave me the knowledge of C#, ASP.NET Core, SQL Server, and other technologies.In January 2023, I started working at QSoft, a software company. Here, I develop chatbots for Teams and WhatsApp.",
      aboutmeparagraph3:
        "My interests include Formula 1 and software. In my free time, I follow Formula 1 races and work on software projects.",
      aboutmeparagraph4:
        "My goal in my career is to develop myself more in the field of software and be successful in this field.",
      aboutmeName: "Name",
      aboutmeEmail: "Email",
      aboutmeAge: "Age",
      aboutmeFrom: "From",
      downloadCvButton: "Download CV",
      resumeHeader: "Resume",
      resumeEducationHeader: "Education",
      resumeMasterDegree: "Master Degree",
      resumeMasterDegreeHeader: "Yildiz Technical University / Feb 2023 - June 2024",
      resumeMasterDegreeParagraph:
        "•I am doing a master's degree without thesis in the department of information technology.",
      resumeFenerbahceUniDegree: "Web and Mobile Programing",
      resumeFenerbahceUniHeader: "Fenerbahçe University / Jan 2022 - July 2022",
      resumeFenerbahceUniParagraph:
        "•800-hour web programming course organized by İŞKUR",
      resumeBachelorDegree: "Bachelor Degree",
      resumeBachelorDegreeHeader: "Kocaeli University / Sep 2013 - Feb 2020",
      resumeBachelorDegreeParagraph: "•I studied Mechanical Engineering.",
      resumeExperienceHeader: "Experience",
      experienceSpidyaPosition: "Software Developer",
      experienceSpidyaHeader: "Spidya Software Co. Inc. / Nov 2023 - Now",
      experienceSpidyaParagraph:
        "•In line with the needs that come systemically, I am making improvements on the SPIDYA Cheetah Platform.",
      experienceQsoftPosition: "Software Developer",
      experienceQsoftHeader: "QSoft Information and Tech Co. Inc. / Jan 2023 - Nov 2023",
      experienceQsoftParagraph:
        "•Using .NET, I create custom whatsapp and teams chatbots according to customer requests.",
      experienceHisarPosition: "Intern",
      experienceHisarHeader:
        "Hisar Celik Dokum Sanayi ve Ticaret A.S / June 2019 - July 2019",
      experienceHisarParagraph:
        "•It is an internship program where I observe the casting processes of large machine parts that come with a special order.",
      experienceKBBPosition: "Intern",
      experienceKBBHeader:
        "Kocaeli Metropolitan Municipality Transportation Department / Jan 2019 - Feb 2019",
      experienceKBBParagraph:
        "•The way the municipality responds to problems arising in construction machinery, welding, lathe and engine repair it is an internship program whose operations I have observed.",
      resumeMySkills: "My Skills",
      certificates: "Certificates",
      course1Header:
        ".Net Core Asenkron- Multithread Programlama (TASK,TPL,PLINQ)",
      course1Content: "Udemy - November 2022",
      course1CertificateLinkHeader: "Certificate",
      course2Header:
        "AspNet Core Web/API+Çok Katmanlı Mimari|Best Practices-Net6",
      course2Content: "Udemy - September 2022",
      course2CertificateLinkHeader: "Certificate",
      course3Header: "Uygulamalarla SQL Öğreniyorum",
      course3Content: "BTK Akademi - June 2022",
      contactHeader: "Get in Touch",
      contactMessageMeHeader: "Message Me",
      contactMessageMePlaceHolderName: "Name",
      contactMessageMePlaceHolderEmail: "Email",
      contactMessageMePlaceHolderSubject: "Subject",
      contactMessageMePlaceHolderMessage: "Message",
      contactMeSendMessage: "Send Message",
      contactInfoHeader: "Contact Info",
      contactInfoName: "Name",
      contactInfoLocation: "Location",
      contactInfoCallMe: "Phone",
      contactInfoEmail: "Email",
    },
  };

  $(".language").click(function () {
    localStorage.setItem("dil", JSON.stringify($(this).attr("id")));
    location.reload();
  });

  var lang = JSON.parse(localStorage.getItem("dil"));

  // if(lang=="ENG"){
  //     $(".language").html("English");
  // }
  // else{
  //     $(".language").html("Türkçe");

  // }
  $('input, textarea').each(function () {
    var inputKey = $(this).attr('placeholder-key');
    $(this).attr('placeholder', arrLang[lang][inputKey]);
  });

  $("a,h5,h4,h6,p,h1,h2,span,li,button,h3,label,b").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});
function getAge(d1, d2) {
  d2 = d2 || new Date();
  var diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
function request() {
  const request = new Request("https://example.com", {
    method: "POST",
    body: '{"foo": "bar"}',
  });
}