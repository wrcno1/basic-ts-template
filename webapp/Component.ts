import UIComponent from "sap/ui/core/UIComponent";
import models from "./model/models";

export default UIComponent.extend("ui5.walkthrough.Component", {
  metadata: {
    manifest: "json",
  },

  init() {
    UIComponent.prototype.init.apply(this);
    // enable routing
    this.getRouter().initialize();
    // set the device model
    this.setModel(models.createDeviceModel(), "device");
  },
});