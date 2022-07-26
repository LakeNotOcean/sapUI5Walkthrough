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
      onInit: function () {
        // set data model on view
        let oData = {
          recipient: {
            name: "Владислав",
            surname: "Невский",
          },
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        // set i18n model on view
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        });
        this.getView().setModel(i18nModel, "i18n");
      },
      onShowHello: function (oEvent) {
        // read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sName = this.getView().getModel().getProperty("/recipient/name");
        var sSurname = this.getView().getModel().getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sName, sSurname]);
        // show message
        MessageToast.show(sMsg);
      },
    });
  }
);
