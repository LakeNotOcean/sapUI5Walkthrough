sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/Fragment",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel, Fragment) {
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
      onOpenDialog: function () {
        // create dialog lazily
        if (!this.pDialog) {
          this.pDialog = this.loadFragment({
            name: "sap.ui.demo.walkthrough.view.HelloDialog",
          });
        }
        this.pDialog.then(function (oDialog) {
          oDialog.open();
        });
        // const oDialog = sap.ui.xmlfragment(
        //   this.getView().getId(),
        //   "sap.ui.demo.walkthrough.view.HelloDialog",
        //   this
        // );
        // this.getView().appDependend(oDialog);
        // oDialog.open();
      },
      onCloseDialog: function () {
        // note: We don't need to chain to the pDialog promise, since this event-handler
        // is only called from within the loaded dialog itself.
        this.byId("helloDialog").close();
        this.pDialog.then((oDialog) => {
          oDialog.close();
        });
      },
    });
  }
);
