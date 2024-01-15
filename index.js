var clevertap = {
  event: [],
  profile: [],
  account: [],
  onUserLogin: [],
  region: "in1",
  notifications: [],
  privacy: [],
  spa: true,
};
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({ id: "Z44-Z4K-K65Z" });
clevertap.privacy.push({ optOut: false }); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({ useIP: false }); //set the flag to true, if the user agrees to share their IP data

(function () {
  var wzrk = document.createElement("script");
  wzrk.type = "text/javascript";
  wzrk.async = true;
  wzrk.src =
    ("https:" == document.location.protocol
      ? "https://d2r1yp2w7bby2u.cloudfront.net"
      : "http://static.clevertap.com") + "/js/clevertap.min.js";

  wzrk.onload = function () {
    // CleverTap library is loaded, perform initialization
    clevertap.init("Z44-Z4K-K65Z", "in1", null);
  };

  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(wzrk, s);
})();

// functions

document.getElementById("loginBtn").addEventListener("click", function () {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Call CleverTap JS function for login
  clevertap.onUserLogin.push({
    Site: {
      Name: name,
      Email: email,
      Phone: phone,
      DOB: new Date(),
    },
  });
});

document.getElementById("profileBtn").addEventListener("click", function () {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Call CleverTap JS function for profile push
  clevertap.profile.push({
    Site: {
      Name: name,
      Email: email,
      Phone: phone,
      DOB: new Date(),
    },
  });
});

document.getElementById("raiseEvent").addEventListener("click", function () {
  // Call CleverTap JS function for profile push
  clevertap.event.push("ProductViewed", {
    ProductName: "Casio Chronograph Watch",
    Category: "Mens Accessories",
    Price: 59.99,
    Date: new Date(), // Date object
  });
});

document
  .getElementById("askForPushButton")
  .addEventListener("click", function () {
    // Call CleverTap JS function for asking for push
    clevertap.notifications.push({
      titleText: "Would you like to receive Push Notifications?",
      bodyText:
        "We promise to only send you relevant content and give you updates on your transactions",
      okButtonText: "Sign me up!",
      rejectButtonText: "No thanks",
      askAgainTimeInSeconds: 5,
      okButtonColor: "#f28046",
    });
  });
