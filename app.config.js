let IS_DEV = {
  name: "SalesPOS",
  bundleIdentifier: "com.prerit.salespos",
  package: "com.mypackage.salespos",
  icon: "./assets/icon.png",
};

if (process.env.APP_ENV === "production") {
  IS_DEV.name = "SalesPOS";
  IS_DEV.bundleIdentifier = "com.prerit.salespos";
  IS_DEV.package = "com.mypackage.salespos";
  IS_DEV.icon = "./assets/icon.png";
  //IS_DEV.googleServicesFile = "./google-services.json";
  //IS_DEV.oneSignal = "production";
} else if (process.env.APP_ENV === "preview") {
  IS_DEV.name = "SalesPOS Beta";
  IS_DEV.bundleIdentifier = "com.salespos.preview";
  IS_DEV.package = "com.mypackage.prevsalespos";
  IS_DEV.icon = "./assets/icon_preview.png";
  //IS_DEV.googleServicesFile = "./google-services-preview.json";
  //IS_DEV.oneSignal = "production";
} else {
  IS_DEV.name = "SalesPOS Dev";
  IS_DEV.bundleIdentifier = "com.salespos.development";
  IS_DEV.package = "com.mypackage.devsalespos";
  IS_DEV.icon = "./assets/icon_dev.png";
  //IS_DEV.googleServicesFile = "./google-services-dev.json";
  //IS_DEV.oneSignal = "development";
}

export default ({ config }) => {
  //console.log({ config });
  return {
    ...config,
    version: "1.0.0",
    name: IS_DEV.name,
    icon: IS_DEV.icon,
    android: {
      ...config.android,
      package: IS_DEV.package,
      versionCode: 1,
      googleServicesFile: IS_DEV.googleServicesFile,
      adaptiveIcon: {
        foregroundImage: IS_DEV.icon,
      },
    },
    ios: {
      ...config.ios,
      icon: IS_DEV.icon,
      bundleIdentifier: IS_DEV.bundleIdentifier,
      buildNumber: "1",
    },
    plugins: [...config.plugins],
  };
};
