"use strict";

/* Bling.js */

window.$ = document.querySelector.bind(document);

window.$$ = document.querySelectorAll.bind(document);

NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = NodeList.prototype.addEventListener = function(
  name,
  fn
) {
  this.forEach(function(elem, i) {
    elem.on(name, fn);
  });
};

Node.prototype.on = window.on = function(name, fn) {
  this.addEventListener(name, fn);
};

/* App initialization */

var content = {
  en: {
    companyName: "Cloudberry Consulting",
    body: "We provide you a direct link to Nordic game art design talent."
  },
  zh: {
    companyName: "乐瑞咨询",
    body: "我们为您提供北欧游戏美术设计人才外包的一站式解决方案。"
  },
  sv: {
    companyName: "Cloudberry Consulting",
    body: "Vi är din direktlänk till talang inom nordisk speldesign."
  }
};

function initializeApp() {
  var selectedLanguage = "en";

  return {
    selectLanguage: function(evt) {
      selectedLanguage = evt.target.id;

      $("#content").innerText = content[selectedLanguage].body;
      $("#companyName").innerText = content[selectedLanguage].companyName;
      $$("button").forEach(b => {
        b.classList.remove("selected");
      });
      $("#" + selectedLanguage).classList.add("selected");
    }
  };
}

window.App = initializeApp();
