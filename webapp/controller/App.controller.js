sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("sapwalkthrough.webapp.controller.App", {
    onShowHello: function () {
      // show a native JavaScript alert
      alert("Hello World");
    },
  });
});
