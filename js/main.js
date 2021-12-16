const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    // title: "About Me",
    width: "400px",
    height: "400px",
    top: 15,
    right: 15,
    bottom: 15,
    left: 15,
    mount: aboutContent,
    modal: true,
    onfocus: function () {
      this.setBackground("#00a000");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Connect",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 15,
    right: 15,
    bottom: 15,
    left: 15,
    modal: true,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00a000");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
