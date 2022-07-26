sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello: function (oEvent) {
        // read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sName = this.getView().getModel().getProperty("/recipient/name");
        var sSurname = this.getView()
          .getModel()
          .getProperty("/recipient/surname");
        var sMsg = oBundle.getText("helloMsg", [sName, sSurname]);
        // show message
        MessageToast.show(sMsg);
      },
    });
  }
);
