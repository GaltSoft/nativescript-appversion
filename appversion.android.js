var application = require("application");

exports.getAppId = function() {
  return new Promise(function(resolve, reject) {
    function _resolve() {
      var context = application.android.context;
      resolve(context.getPackageName());
    }
    try {
      if (application.android.context) {
        _resolve();
      } else {
        // if this is called before application.start() wait for the event to fire
        application.on(application.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in appversion.getAppId: " + ex);
      reject(ex);
    }
  });
};

exports.getVersionName = function() {
  return new Promise(function(resolve, reject) {
    function _resolve() {
      var context = application.android.context;
      var packageManager = context.getPackageManager();
      resolve(packageManager.getPackageInfo(context.getPackageName(), 0).versionName);
    }
    try {
      if (application.android.context) {
        _resolve();
      } else {
        // if this is called before application.start() wait for the event to fire
        application.on(application.launchEvent, _resolve);
      }
    } catch (ex) {
      console.log("Error in appversion.getVersionName: " + ex);
      reject(ex);
    }
  });
};

// Added By KingAndroid {{{
exports.getVersionCode = function() {
  return new Promise(function(resolve, reject) {
    try {
      var context = application.android.context;
      var packageManager = context.getPackageManager();
      resolve(packageManager.getPackageInfo(context.getPackageName(), 0).versionCode);
    } catch (ex) {
      console.log("Error in appversion.getVersionCode: " + ex);
      reject(ex);
    }
  });
};
// }}} Added By KingAndroid