sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data model
        let oData = {
          recipient: {
            name: "Владислав",
            surname: "Невский",
          },
        };

        const oModel = new JSONModel(oData);
        this.setModel(oModel);
        this.getRouter().initialize();
        // set i18n model on view
        const i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
