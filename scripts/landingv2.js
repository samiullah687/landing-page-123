const storeZipcode = async () => {
  const zipcodeInput = document.getElementById("zipcode");
  const zipcodeValue = zipcodeInput.value;

  if (zipcodeValue == "") {
    window.location.href = "/q1.html";
    return;
  }

  let data = await fetch("/get-timezone", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      zipcode: zipcodeValue,
    }),
  });

  let response = await data.json();

  if (response && response.timezone !== null) {
    localStorage.setItem("Zipcode", zipcodeValue);
    localStorage.setItem("timezone", response.timezone[0]);
    localStorage.setItem("state", response.timezone[1]);

    window.location.href = "/q1.html";
  } else {
    localStorage.setItem("Zipcode", " ");
    localStorage.setItem("timezone", " ");
    localStorage.setItem("state", " ");

    window.location.href = "/q1.html";
  }
};

const getPages = async () => {
  let data = {
    private: {
      header: "Shop and Save Instantly on Private Health Insurance Today",
      sub_heading:
        "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Private Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "Health insurance is a critical part of maintaining your health and wellbeing.<br><br>If you're exploring options outside of employer-sponsored or government health insurance, <strong> private plans offer a diverse range of coverage </strong> tailored to various needs and budgets.<br><br>Choosing a private health insurance plan involves considering several factors, such as the scope of coverage, in-network providers, premium costs, and out-of-pocket maximums.<br><br><strong>WOW Health Insight is designed to present this information in a clear, straightforward way.</strong> Making it easier for you to compare and understand different private plans.<br><br>Our goal is to provide you with the tools and resources needed to make an informed decision about your health insurance. <strong>With the ability to discover your top plans and low prices from over 40+ providers.</strong><br><br><strong>Take the first step towards finding a private health insurance plan that suits your needs.</strong> Our online resources are available to guide you through this important decision, offering clarity and support throughout the process. We aim to demystify health insurance, helping you navigate this essential aspect of your healthcare journey with ease and confidence.",
      image_url: null,
    },
    cobra: {
      header: "Shop and Save Instantly on COBRA Health Insurance Today",
      sub_heading:
        "Compare COBRA plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top COBRA Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>COBRA offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in an COBRA plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the COBRA enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different COBRA plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with COBRA today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right COBRA plan for your unique healthcare needs.",
      image_url: null,
    },
    ppo: {
      header: "Shop and Save Instantly on PPO Health Insurance Today",
      sub_heading:
        "Compare quotes from a marketplace of top-rated PPO insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top PPO Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Preferred Provider Organization (PPO) plans offer flexibility in choosing your healthcare providers.</strong> With a PPO plan, you have the freedom to see any healthcare professional, without needing a referral, even those outside of your plan's network.<br><br><strong>The process of choosing and enrolling in a PPO plan can be complex, given the myriad of options and factors to consider.</strong> That's where we come in. Our expert team is here to assist you in navigating the PPO enrollment process, making it smooth and straightforward.<br><br><strong>We will help you understand the specifics of different PPO plans, outlining the extent of coverage for both in-network and out-of-network providers, and detailing the cost implications.</strong> We're here to clarify any concerns and answer any questions you may have.<br><br>Start your journey to flexible, comprehensive health care coverage with us today. We are dedicated to simplifying the PPO enrollment process, ensuring you secure the right plan for your unique health needs with confidence and ease.",
      image_url: null,
    },
    hmo: {
      header: "Shop and Save Instantly on HMO Health Insurance Today",
      sub_heading:
        "Compare quotes from a marketplace of top-rated HMO insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top HMO Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Health Maintenance Organization (HMO) plans are designed to provide comprehensive care within a defined network of healthcare providers, emphasizing preventive care and cost-effectiveness.</strong> Enrolling in an HMO plan can provide you with coordinated care, often at a lower cost than other plan types.<br><br><strong>Choosing an HMO plan and going through the enrollment process can seem daunting, but it doesn't have to be.</strong> Our expert team is here to guide you through every step, ensuring you successfully enroll in an HMO plan that meets your unique health needs and budget.<br><br><strong>We will help you understand the specifics of different HMO plans, and assist you in selecting a primary care physician within the plan's network.</strong> Our team is here to simplify the process, breaking down the complexities, and answering any questions you may have along the way.<br><br>Begin your journey to comprehensive, coordinated care with us today. We are committed to simplifying the HMO enrollment process, ensuring you secure the right plan with confidence and ease.",
      image_url: null,
    },
    ambetter: {
      header: "Shop and Save Instantly on Ambetter Health Insurance Today",
      sub_heading:
        "Compare Ambetter plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Ambetter Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Ambetter offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in an Ambetter plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Ambetter enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Ambetter plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Ambetter today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Ambetter plan for your unique healthcare needs.",
      image_url: "ambetter.png",
      extra_heading:
        "Save up to 60% on health insurance through top providers like Ambetter Insurance.",
    },
    "blue-cross": {
      header:
        "Shop and Save Instantly on Blue Cross Blue Shield Health Insurance Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Blue Cross Blue Shield Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Blue Cross Blue Shield offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a Blue Cross Blue Shield plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Blue Cross Blue Shield enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Blue Cross Blue Shield plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Blue Cross Blue Shield today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Blue Cross Blue Shield plan for your unique healthcare needs.",
      image_url: "bluecross.svg",
      extra_heading:
        "Save up to 60% on health insurance through top providers like Blue Cross Blue Shield Health Insurance.",
    },
    cigna: {
      header: "Shop and Save Instantly on Cigna Health Insurance Today",
      sub_heading:
        "Compare Cigna plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Cigna Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Cigna offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a Cigna plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Cigna enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Cigna plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Cigna today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Cigna plan for your unique healthcare needs.",
      image_url: "cigna-logo.svg",
      extra_heading:
        "Save up to 60% on health insurance through top providers like Cigna Insurance.",
    },
    aetna: {
      header: "Shop and Save Instantly on Aetna Health Insurance Today",
      sub_heading:
        "Compare Aetna plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Aetna Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Aetna offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in an Aetna plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Aetna enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Aetna plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Aetna today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Aetna plan for your unique healthcare needs.",
      image_url: null,
    },
    molina: {
      header: "Shop and Save Instantly on Molina Health Insurance Today",
      sub_heading:
        "Compare Molina plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Molina Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Molina offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a Molina plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Molina enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Molina plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Molina today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Molina plan for your unique healthcare needs.",
      image_url: null,
    },
    united: {
      header:
        "Shop and Save Instantly on United Healthcare Health Insurance Today",
      sub_heading:
        "Compare United Healthcare plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top United Healthcare Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>United Healthcare offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a United Healthcare plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the United Healthcare enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different United Healthcare plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with United Healthcare today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right United Healthcare plan for your unique healthcare needs.",
      image_url: null,
    },
    florida: {
      header: "Shop and Save Instantly on Florida Health Insurance Today",
      sub_heading:
        "Compare quotes from top-rated health insurance companies in Florida and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Florida Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Health insurance can be tricky, but not with us at WOW Health Insight.</strong> We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br><strong>Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong>Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br><strong>Our process is simple - In 3 simple steps</strong>, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    obamacare: {
      header: "Shop and Save Instantly on Obamacare Health Insurance Today",
      sub_heading:
        "Compare Obamacare Quotes And Find Your Most Affordable Plan",
      paragraphHeader:
        "Check Obamacare Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Health insurance can be tricky, but not with us at WOW Health Insight.</strong> We make finding your perfect plan simple and stress-free in the health insurance Marketplace.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you for ACA / Obamacare. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br><strong>Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong>Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br><strong>Our process is simple - In 3 simple steps</strong>, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    "short-term": {
      header: "Shop and Save Instantly on Short Term Health Insurance Today",
      sub_heading:
        "Compare Short Term Health Quotes And Find Your Most Affordable Plan",
      paragraphHeader:
        "Check Short Term Health Insurance Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Health insurance can be tricky, but not with us at WOW Health Insight.</strong> We make finding your perfect plan simple and stress-free in the health insurance Marketplace.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you with Short Term Health Insurance. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br><strong>Want quality without the hefty price tag?</strong> Check out top-rated Short Term Health Insurance plans at the lowest prices. And with us, it only takes minutes.<br><br><strong>Need coverage fast?</strong> We've got you covered. We offer Short Term Health Insurance plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br><strong>Our process is simple - In 3 simple steps</strong>, get a quote, compare your Short Term Health Insurance plans, and enroll in a plan tailor-made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be with Short Term Health Insurance.",
      image_url: null,
    },
    catastrophic: {
      header: "Shop and Save Instantly on Catastropic Health Insurance Today",
      sub_heading:
        "Compare Catastropic Health Quotes And Find Your Most Affordable Plan",
      paragraphHeader:
        "Check Catastropic Health Insurance Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Health insurance can be tricky, but not with us at WOW Health Insight.</strong> We make finding your perfect plan simple and stress-free in the health insurance Marketplace.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare Catastrophic plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare Catastrophic plans from over 40+ providers.<br><br><strong>Want quality without the hefty price tag?</strong> Check out top-rated Catastrophic plans at the lowest prices. And with us, it only takes minutes.<br><br><strong>Need coverage fast?</strong> We've got you covered. We offer Catastrophic plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br><strong>Our process is simple - In 3 simple steps</strong>, get a quote, compare your Catastrophic plans, and enroll in a plan tailor-made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be with Catastrophic plans.",
      image_url: null,
    },
    premera: {
      header: "Shop and Save Instantly on Plans Like Premera Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans Like Premera at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Premera offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a health insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the health coverage enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding different health insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with health insurance plans today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right health insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    anthem: {
      header: "Shop and Save Instantly on Plans Like Anthem Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans Like Anthem at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Anthem offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a health insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the health coverage enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding different health insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with health insurance plans today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right health insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    rocky: {
      header: "Shop and Save Instantly on Plans Like Rocky Mountain Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans Like Rocky Mountain at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Rocky Mountain offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a health insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the health coverage enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding different health insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with health insurance plans today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right health insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    carefirst: {
      header: "Shop and Save Instantly on Plans Like CareFirst Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans Like CareFirst at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>CareFirst offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a health insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the health coverage enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding different health insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with health insurance plans today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right health insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    floridablue: {
      header: "Shop and Save Instantly on Plans Like Florida Blue Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans Like Florida Blue at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Florida Blue offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a health insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the health coverage enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding different health insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with health insurance plans today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right health insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    wellmark: {
      header: "Shop and Save Instantly on Plans Like Wellmark Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans Like Wellmark at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Wellmark offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a health insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the health coverage enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding different health insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with health insurance plans today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right health insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    regence: {
      header: "Shop and Save Instantly on Plans Like Regence Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans Like Regence at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Regence offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a health insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the health coverage enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding different health insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with health insurance plans today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right health insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    horizon: {
      header: "Shop and Save Instantly on Plans Like Horizon Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans Like Horizon at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Horizon offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a health insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the health coverage enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding different health insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with health insurance plans today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right health insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    empire: {
      header: "Shop and Save Instantly on Plans Like Empire Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans Like Empire at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Empire offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a health insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the health coverage enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding different health insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with health insurance plans today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right health insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    independence: {
      header: "Shop and Save Instantly on Plans Like Independence Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans Like Independence at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Independence offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a health insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the health coverage enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding different health insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with health insurance plans today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right health insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    highmark: {
      header: "Shop and Save Instantly on Plans Like Highmark Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans Like Highmark at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Highmark offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a health insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the health coverage enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding different health insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with health insurance plans today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right health insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    excellus: {
      header: "Shop and Save Instantly on Plans Like Excellus Today",
      sub_heading:
        "Compare Blue Cross Blue Shield plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans Like Excellus at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Excellus offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a health insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the health coverage enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding different health insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with health insurance plans today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right health insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    epo: {
      header: "Shop and Save Instantly on EPO Health Insurance Today",
      sub_heading:
        "Compare EPO plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top EPO Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>EPO offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a EPO plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the EPO enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different EPO plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with EPO today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right EPO plan for your unique healthcare needs.",
      image_url: null,
    },
    pos: {
      header: "Shop and Save Instantly on POS Health Insurance Today",
      sub_heading:
        "Compare POS plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top POS Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>POS offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a POS plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the POS enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different POS plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with POS today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right POS plan for your unique healthcare needs.",
      image_url: null,
    },
    indemnity: {
      header:
        "Shop and Save Instantly on Hospital Indemnity Health Insurance Today",
      sub_heading:
        "Compare Hospital Indemnity plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Hospital Indemnity Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Hospital Indemnity offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a Hospital Indemnity plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Hospital Indemnity enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Hospital Indemnity plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Hospital Indemnity today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Hospital Indemnity plan for your unique healthcare needs.",
      image_url: null,
    },
    hdhp: {
      header: "Shop and Save Instantly on HDHP Health Insurance Today",
      sub_heading:
        "Compare HDHP plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top HDHP Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>HDHP offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in an HDHP plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the HDHP enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different HDHP plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with HDHP today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right HDHP plan for your unique healthcare needs.",
      image_url: null,
    },
    critical: {
      header:
        "Shop and Save Instantly on Critical Illness Health Insurance Today",
      sub_heading:
        "Compare Critical Illness Insurance plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Critical Illness Insurance Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Critical Illness Insurance offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a Critical Illness Insurance plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Critical Illness Insurance enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Critical Illness Insurance plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Critical Illness Insurance today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Critical Illness Insurance plan for your unique healthcare needs.",
      image_url: null,
    },
    comprehensive: {
      header:
        "Shop and Save Instantly on Comprehensive Healthcare Insurance Today",
      sub_heading:
        "Compare Comprehensive Healthcare plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Comprehensive Healthcare Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Health insurance can be tricky, but not with us at WOW Health Insight.</strong> We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br><strong>Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong>Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br><strong>Our process is simple - In 3 simple steps</strong>, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    kaiser: {
      header: "Shop and Save Instantly on Kaiser Health Insurance Today",
      sub_heading:
        "Compare Kaiser plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Kaiser Health Insurance Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Kaiser offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a Kaiser plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Kaiser enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Kaiser plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Kaiser today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Kaiser plan for your unique healthcare needs.",
      image_url: null,
    },
    texas: {
      header: "Shop and Save Instantly on Texas Health Insurance Today",
      sub_heading:
        "Compare Texas Health Insurance plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Texas Health Insurance Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Texas offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a Texas plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Texas enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Texas plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Texas today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Texas plan for your unique healthcare needs.",
      image_url: null,
    },
    georgia: {
      header: "Shop and Save Instantly on Georgia Health Insurance Today",
      sub_heading:
        "Compare Georgia Health Insurance plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Georgia Health Insurance Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Georgia offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a Georgia plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Georgia enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Georgia plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Georgia today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Georgia plan for your unique healthcare needs.",
      image_url: null,
    },
    tennessee: {
      header: "Shop and Save Instantly on Tennessee Health Insurance Today",
      sub_heading:
        "Compare Tennessee  Health Insurance plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Tennessee  Health Insurance Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Tennessee offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a Tennessee plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Tennessee enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Tennessee plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Tennessee today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Tennessee plan for your unique healthcare needs.",
      image_url: null,
    },
    carolina: {
      header:
        "Shop and Save Instantly on North Carolina Health Insurance Today",
      sub_heading:
        "Compare North Carolina  Health Insurance plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top North Carolina Health Insurance Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>North Carolina offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a North Carolina plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the North Carolina enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different North Carolina plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with North Carolina today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right North Carolina plan for your unique healthcare needs.",
      image_url: null,
    },
    jersey: {
      header: "Shop and Save Instantly on New Jersey Health Insurance Today",
      sub_heading:
        "Compare New Jersey Health Insurance plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top New Jersey Health Insurance Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>New Jersey offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a New Jersey plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the New Jersey enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different New Jersey plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with New Jersey today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right New Jersey plan for your unique healthcare needs.",
      image_url: null,
    },
    illinois: {
      header: "Shop and Save Instantly on Illinois Health Insurance Today",
      sub_heading:
        "Compare Illinois Health Insurance plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Illinois Health Insurance Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Illinois offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in an Illinois plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Illinois enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Illinois plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Illinois today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Illinois plan for your unique healthcare needs.",
      image_url: null,
    },
    alabama: {
      header: "Shop and Save Instantly on Alabama Health Insurance Today",
      sub_heading:
        "Compare Alabama Health Insurance plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Alabama Health Insurance Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Alabama offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in an Alabama plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Alabama enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Alabama plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Alabama today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Alabama plan for your unique healthcare needs.",
      image_url: null,
    },
    connecticut: {
      header: "Shop and Save Instantly on Connecticut Health Insurance Today",
      sub_heading:
        "Compare Connecticut Health Insurance plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Connecticut Health Insurance Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Connecticut offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in a Connecticut plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Connecticut enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Connecticut plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Connecticut today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Connecticut plan for your unique healthcare needs.",
      image_url: null,
    },
    arizona: {
      header: "Shop and Save Instantly on Arizona Health Insurance Today",
      sub_heading:
        "Compare Arizona Health Insurance plans and other insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Arizona Health Insurance Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Arizona offers a range of health insurance plans, focusing primarily on providing affordable options through the Health Insurance Marketplace.</strong> Their plans are designed to deliver balanced coverage, with a focus on preventive care and wellness.<br><br><strong>Choosing and enrolling in an Arizona plan involves navigating through their diverse offerings and understanding the specifics of each.</strong> That's where our team comes in. We are here to guide you through the Arizona enrollment process, making it as easy as possible for you to secure a plan that fits your unique health needs and budget.<br><br><strong>We'll assist you in understanding the different Arizona plans, outlining their coverage scope, costs, and any additional benefits.</strong> Our goal is to simplify the enrollment process, ensuring all your questions are answered, and you're fully informed about your chosen plan.<br><br><strong>Begin your journey to affordable, balanced health coverage with Arizona today.</strong> We're dedicated to making the enrollment process effortless, helping you secure the right Arizona plan for your unique healthcare needs.",
      image_url: null,
    },
    hsa: {
      header:
        "Shop and Save Instantly on Health Savings Account Insurance Today",
      sub_heading:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraphHeader:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Health insurance can be tricky, but not with us at WOW Health Insight.</strong> We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br><strong>Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong>Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br><strong>Our process is simple - In 3 simple steps</strong>, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    selfemployed: {
      header: "Shop and Save Instantly on Self Employed Health Insurance Today",
      sub_heading:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraphHeader:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Health insurance can be tricky, but not with us at WOW Health Insight.</strong> We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br><strong>Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong>Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br><strong>Our process is simple - In 3 simple steps</strong>, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    marketplace: {
      header: "Shop and Save Instantly on Marketplace Insurance Plans Today",
      sub_heading:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraphHeader:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "<strong>Health insurance can be tricky, but not with us at WOW Health Insight.</strong> We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br><strong>Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong>Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br><strong>Our process is simple - In 3 simple steps</strong>, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    "q-lowincome": {
      header: "Get A Quote For Affordable Health Insurance Plans",
      sub_heading:
        "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately",
      paragraphHeader:
        "Compare Your Top Plans at the Lowest Prices in 2 Minutes or Less",
      paragraph:
        "Health insurance can be tricky, but not with us at WOW Health Insight. We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br> <strong> Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong> Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br> Our process is simple - In 3 simple steps, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    "q-individual": {
      header: "Get A Quote For Individual or Family Health Insurance Today",
      sub_heading:
        "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately",
      paragraphHeader:
        "Compare Your Top Plans at the Lowest Prices in 2 Minutes or Less",
      paragraph:
        "Health insurance can be tricky, but not with us at WOW Health Insight. We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br> <strong> Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong> Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br> Our process is simple - In 3 simple steps, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    "q-betterplans": {
      header: "Shop and Save on Top 2023 Health Insurance Plans",
      sub_heading:
        "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately",
      paragraphHeader:
        "Compare Your Top Plans at the Lowest Prices in 2 Minutes or Less",
      paragraph:
        "Health insurance can be tricky, but not with us at WOW Health Insight. We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br> <strong> Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong> Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br> Our process is simple - In 3 simple steps, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    "q-highincome": {
      header: "Get A Health Insurance Quote for Incomes Over $35,000",
      sub_heading:
        "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately",
      paragraphHeader:
        "Compare Your Top Plans at the Lowest Prices in 2 Minutes or Less",
      paragraph:
        "Health insurance can be tricky, but not with us at WOW Health Insight. We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br> <strong> Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong> Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br> Our process is simple - In 3 simple steps, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    speak: {
      header: "Affordable Health Plan Options 2024",
      sub_heading:
        "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "Health insurance can be tricky, but not with us at WOW Health Insight. We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br> <strong> Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong> Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br> Our process is simple - In 3 simple steps, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    request: {
      header: "Request A Free Quote For 2024 Health Coverage",
      sub_heading:
        "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "Health insurance can be tricky, but not with us at WOW Health Insight. We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br> <strong> Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong> Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br> Our process is simple - In 3 simple steps, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    nextday: {
      header: "Enter Your Zip Code And Get Next Day Health Coverage",
      sub_heading:
        "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "Health insurance can be tricky, but not with us at WOW Health Insight. We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br> <strong> Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong> Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br> Our process is simple - In 3 simple steps, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    local: {
      header: "Compare 2024 Health Plans Near You",
      sub_heading:
        "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "Health insurance can be tricky, but not with us at WOW Health Insight. We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br> <strong> Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong> Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br> Our process is simple - In 3 simple steps, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    69: {
      header: "Compare Health Plans Starting At $69",
      sub_heading:
        "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "Health insurance can be tricky, but not with us at WOW Health Insight. We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br> <strong> Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong> Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br> Our process is simple - In 3 simple steps, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    299: {
      header: "Compare Health Plans Starting At $299",
      sub_heading:
        "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "Health insurance can be tricky, but not with us at WOW Health Insight. We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br> <strong> Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong> Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br> Our process is simple - In 3 simple steps, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
    199: {
      header: "Compare Health Plans Starting At $199",
      sub_heading:
        "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately",
      paragraphHeader:
        "Check Your Top Health Plans at Low Prices in Just a Few Steps",
      paragraph:
        "Health insurance can be tricky, but not with us at WOW Health Insight. We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br> <strong> Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong> Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br> Our process is simple - In 3 simple steps, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.",
      image_url: null,
    },
  };

  return data;
};

async function appendToLocalStorage() {
  localStorage.removeItem("Zipcode");
  localStorage.removeItem("state");
  localStorage.removeItem("When do you need coverage?");
  localStorage.removeItem("What is your household size?");
  localStorage.removeItem("What is your annual household income");
  localStorage.removeItem("What is your birth year?");
  localStorage.removeItem("What is your gender?");
  localStorage.removeItem("Are dental or vision plans important to you?");
  localStorage.removeItem("Name");
  localStorage.removeItem("Email");
  localStorage.removeItem("carrier");
  localStorage.removeItem("Phone Number");
  localStorage.removeItem("certificate");
  localStorage.removeItem("callButtonPressed");
  localStorage.removeItem("timezone");
  localStorage.removeItem("clickedAccordians");
  localStorage.removeItem("posted");
  localStorage.removeItem("Url Name");
  localStorage.removeItem("mouseleft");
  localStorage.removeItem("Coverage Type");
  localStorage.removeItem("Address");

  let pagesJson = await getPages();

  const urlParams = new URLSearchParams(window.location.search);

  let pathName = window.location.pathname;

  pathName = pathName
    .replace(/\//g, "")
    .replace(/_/g, " ")
    .replace(/.html/g, "")
    .replace(/%20/g, " ")
    .replace(/%3F/g, "?")
    .replace(/%3D/g, "=")
    .replace(/%2C/g, ",")
    .replace(/%2F/g, "/")
    .replace(/%3A/g, ":")
    .replace(/%26/g, "&")
    .replace(/%23/g, "#")
    .replace(/%24/g, "$")
    .replace(/%25/g, "%")
    .replace(/%3B/g, ";")
    .replace(/%2B/g, "+")
    .replace(/%40/g, "@");

  const urlObj = decodeURIComponent(urlParams.get("url")).replace(
    /.*\.html/,
    ""
  );

  let urlParams2 = new URLSearchParams(urlObj);

  const url = decodeURIComponent(urlParams.get("url")).replace(/\.html.*$/, "");

  // Check if campaignid parameter exists
  if (urlParams2.has("campaignid")) {
    const campaignId = urlParams2.get("campaignid");
    localStorage.setItem("campaignid", campaignId);
  }

  // Check if adgroupid parameter exists
  if (urlParams2.has("adgroupid")) {
    const adGroupId = urlParams2.get("adgroupid");
    localStorage.setItem("adgroupid", adGroupId);
  }

  if (urlParams2.has("keyword")) {
    const keyword = urlParams2.get("keyword").replace(/%20/g, " ");

    localStorage.setItem("Tags", keyword);
  }

  const fileName = url.split("/").pop(); // get the last part of the URL path

  const formattedName = fileName
    .replace(/-/g, " ")
    .replace(/q /g, "")
    .replace(/q-/g, "")
    .replace(/_/g, " ")
    .replace(/.html/g, "")
    .replace(/%20/g, " ")
    .replace(/%3F/g, "?")
    .replace(/%3D/g, "=")
    .replace(/%2C/g, ",")
    .replace(/%2F/g, "/")
    .replace(/%3A/g, ":")
    .replace(/%26/g, "&")
    .replace(/%23/g, "#")
    .replace(/%24/g, "$")
    .replace(/%25/g, "%")
    .replace(/%3B/g, ";")
    .replace(/%2B/g, "+")
    .replace(/%40/g, "@");

  const headline = document.getElementById("headlineTitle");

  let name = formattedName.toLowerCase();

  if (name.includes("blue")) {
    let url2 = decodeURIComponent(urlParams.get("url")).replace(
      /\.html.*$/,
      ""
    );

    console.log(url2);

    if (url2.includes("blue-cross")) {
      name = "blue-cross";
    }
  }

  if (name.includes("short")) {
    name = "short-term";
  }

  if (pagesJson.hasOwnProperty(name)) {
    console.log("detected");

    document.getElementById("headerText").innerHTML = pagesJson[name].header;
    document.getElementById("subHeader").innerHTML =
      pagesJson[name].sub_heading;
    document.getElementById("paragraphHeader").innerHTML =
      pagesJson[name].paragraphHeader;
    document.getElementById("paragraphs").innerHTML = pagesJson[name].paragraph;

    /*
        if(pagesJson [name ].image_url){

          document.getElementById('imagecheck').style.display = "block"

          document.getElementById('headlineimage').innerHTML = pagesJson[ name ].extra_heading

          let image_logo = `./images/${pagesJson[ name].image_url}`

          if(image_logo === "./images/ambetter.png"){
            document.getElementById('providerimagealert').style.maxWidth = "100px"

          }

          document.getElementById('providerimagealert').setAttribute('src', image_logo)

        }
        */

    localStorage.setItem("Url Name", pagesJson[name].header);

    localStorage.setItem("Tags", name);
  } else if (pagesJson.hasOwnProperty(pathName)) {
    console.log("detected");

    document.getElementById("headerText").innerHTML =
      pagesJson[pathName].header;
    document.getElementById("subHeader").innerHTML =
      pagesJson[pathName].sub_heading;
    document.getElementById("paragraphHeader").innerHTML =
      pagesJson[pathName].paragraphHeader;
    document.getElementById("paragraphs").innerHTML =
      pagesJson[pathName].paragraph;

    /*
        if(pagesJson [pathName ].image_url){

          document.getElementById('imagecheck').style.display = "block"

          document.getElementById('headlineimage').innerHTML = pagesJson[ pathName ].extra_heading

          let image_logo = `./images/${pagesJson[ pathName].image_url}`

          if(image_logo === "./images/ambetter.png"){
            document.getElementById('providerimagealert').style.maxWidth = "100px"

          }

          document.getElementById('providerimagealert').setAttribute('src', image_logo)

        }
        */

    localStorage.setItem("Url Name", pagesJson[pathName].header);
    localStorage.setItem("Tags", pathName);
  } else {
    document.getElementById("headerText").innerHTML =
      "Affordable Health Plan Options 2024";
    document.getElementById("subHeader").innerHTML =
      "Compare quotes from a marketplace of top-rated health insurance companies and lock in savings immediately";
    document.getElementById("paragraphHeader").innerHTML =
      "Compare Your Top Plans at the Lowest Prices in 2 Minutes or Less";
    document.getElementById("paragraphs").innerHTML =
      "Health insurance can be tricky, but not with us at WOW Health Insight. We make finding your perfect plan simple and stress-free.<br><br><strong>Lost in a sea of options?</strong> We can help. Our website lets you compare plans that fit just right for you. No more guesswork, just personalized options at your fingertips. Compare plans from over 40+ providers.<br><br> <strong> Want quality without the hefty price tag?</strong> Check out top-rated plans at the lowest prices. And with us, it only takes minutes.<br><br><strong> Need coverage fast?</strong> We've got you covered. We offer plans that start as soon as tomorrow. No more waiting, start your journey to better health right away.<br><br> Our process is simple - In 3 simple steps, get a quote, compare your plans, and enroll in a plan tailor made to fit your needs and budget.<br><br>Start with us today and see how easy finding health insurance can be.";

    let formattedNameCapitalLetters = formattedName
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    if (
      formattedNameCapitalLetters === "Null2" ||
      formattedNameCapitalLetters === null
    ) {
      localStorage.setItem(
        "Url Name",
        "Save up to 60% on health insurance! Complete your profile and we’ll match you with providers."
      );
    }

    localStorage.setItem("Tags", "Generic");
  }

  localStorage.setItem("Url", window.location.href);
  localStorage.setItem("Title", formattedName);

  // 8310012039587
  let code = "";
  for (let i = 0; i < 10; i++) {
    code += Math.floor(Math.random() * 10);
  }
  if (!localStorage.getItem("anonID")) {
    localStorage.setItem("anonID", code);
  }
}

const storeAccordian = async (accordianText) => {
  //Get from localStorage if exists

  let clickedAccordians = localStorage.getItem("clickedAccordians");

  if (!clickedAccordians) {
    localStorage.setItem("clickedAccordians", accordianText);
  } else {
    let clickedAccordiansArray = clickedAccordians.split("|");

    //Check if accordianText is already in the array, if so, return

    if (clickedAccordiansArray.includes(accordianText)) {
      return;
    } else {
      clickedAccordiansArray.push(accordianText);

      let combinedClickedAccordiansStr = clickedAccordiansArray.join("|");

      localStorage.setItem("clickedAccordians", combinedClickedAccordiansStr);
    }
  }
};

const attemptedCall = async () => {
  let res = await fetch("/callbutton", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      callButtonStatus: "Call Button Pressed",
      page: window.location.href,
      zipcode: localStorage.getItem("Zipcode") || " ",
      coverage_type: localStorage.getItem("Coverage Type") || " ",
      whatIsYourHouseholdSize:
        localStorage.getItem("What is your household size?") || " ",
      whatIsYourAnnualHouseholdIncome:
        localStorage.getItem("What is your annual household income") || " ",
      whatIsYourBirthYear:
        localStorage.getItem("What is your birth year?") || " ",
      whatIsYourGender: localStorage.getItem("What is your gender?") || " ",
      address: localStorage.getItem("Address") || " ",
      name: localStorage.getItem("Name") || " ",
      email: localStorage.getItem("Email") || " ",
      carrier: localStorage.getItem("carrier") || " ",
      phoneNumber: localStorage.getItem("Phone Number") || " ",
      certificate: localStorage.getItem("certificate") || " ",
      callButtonPressed: "Yes",
      timezone: localStorage.getItem("timezone") || " ",
      clickedAccordians: localStorage.getItem("clickedAccordians") || " ",
      posted: localStorage.getItem("posted") || " ",
      urlName: localStorage.getItem("Url Name") || " ",
      anonId: localStorage.getItem("anonID") || " ",
      state: localStorage.getItem("state") || " ",
    }),
  });
};

appendToLocalStorage();

document.querySelector("#button1").addEventListener("click", () => {
  storeZipcode();
});

document.getElementById("accordian2").addEventListener("click", () => {
  let accordianText = document.getElementById("accordian2").innerHTML;

  storeAccordian(accordianText);
});

document.getElementById("accordian3").addEventListener("click", () => {
  let accordianText = document.getElementById("accordian3").innerHTML;

  storeAccordian(accordianText);
});

document.getElementById("accordian4").addEventListener("click", () => {
  let accordianText = document.getElementById("accordian4").innerHTML;

  storeAccordian(accordianText);
});

document.getElementById("accordian5").addEventListener("click", () => {
  let accordianText = document.getElementById("accordian5").innerHTML;

  storeAccordian(accordianText);
});

document.getElementById("accordian6").addEventListener("click", () => {
  let accordianText = document.getElementById("accordian6").innerHTML;

  storeAccordian(accordianText);
});

document.getElementById("accordian7").addEventListener("click", () => {
  let accordianText = document.getElementById("accordian7").innerHTML;

  storeAccordian(accordianText);
});

document
  .querySelector(".globalFooter__telephoneNum")
  .addEventListener("click", () => {
    let callButtonPressedCheck = localStorage.getItem("callButtonPressed");

    if (!callButtonPressedCheck) {
      attemptedCall();
      localStorage.setItem("callButtonPressed", "Yes");
    } else {
      console.log("button was already pressed");
      return;
    }
  });

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.getElementById("button1").click();
  }
});
