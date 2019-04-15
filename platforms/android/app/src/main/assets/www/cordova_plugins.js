cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "at.gofg.sportscomputer.powermanagement.device",
      "file": "plugins/at.gofg.sportscomputer.powermanagement/www/powermanagement.js",
      "pluginId": "at.gofg.sportscomputer.powermanagement",
      "clobbers": [
        "window.powerManagement"
      ]
    },
    {
      "id": "com.hiraqui.ringtone.ringtone",
      "file": "plugins/com.hiraqui.ringtone/www/ringtone.js",
      "pluginId": "com.hiraqui.ringtone",
      "clobbers": [
        "ringtone"
      ]
    },
    {
      "id": "cordova-plugin-audiotoggle.AudioToggle",
      "file": "plugins/cordova-plugin-audiotoggle/www/audiotoggle.js",
      "pluginId": "cordova-plugin-audiotoggle",
      "clobbers": [
        "AudioToggle"
      ]
    },
    {
      "id": "cordova-plugin-background-fetch.BackgroundFetch",
      "file": "plugins/cordova-plugin-background-fetch/www/BackgroundFetch.js",
      "pluginId": "cordova-plugin-background-fetch",
      "clobbers": [
        "window.BackgroundFetch"
      ]
    }
  ];
  module.exports.metadata = {
    "at.gofg.sportscomputer.powermanagement": "1.1.0",
    "com.hiraqui.ringtone": "0.6.1",
    "cordova-plugin-audiotoggle": "1.0.3",
    "cordova-plugin-background-fetch": "5.4.1"
  };
});