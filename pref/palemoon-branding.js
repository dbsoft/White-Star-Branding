#filter substitution
#filter emptyLines
#include ../../shared/pref/preferences.inc
#include ../../shared/pref/uaoverrides.inc

pref("startup.homepage_override_url","https://dbsoft.org/whitestar-releasenotes.php");
pref("app.releaseNotesURL", "https://dbsoft.org/whitestar-releasenotes.php");

// Firefox compatmode is set in shared prefs.

// Enable dynamic UA updates
pref("general.useragent.updates.enabled", true);
pref("general.useragent.updates.interval", 86400); // Once per day
pref("general.useragent.updates.retry", 7200);     // Retry getting update every 2 hours if failed
pref("general.useragent.updates.url", "https://dua.dbsoft.org/?app=whitestar&version=%APP_VERSION%&channel=%CHANNEL%");

// Geolocation
pref("geo.wifi.uri", "https://pro.ip-api.com/json/?fields=lat,lon,status,message&key=K3TirHYiysBjnmD");

// ========================= updates ========================
#ifdef MOZ_UPDATER
// Updates enabled
pref("app.update.enabled", true);
pref("app.update.cert.checkAttributes", true);

// Interval: Time between checks for a new version (in seconds) -- 2 days for Pale Moon
pref("app.update.interval", 172800);
pref("app.update.promptWaitTime", 86400);

// URL user can browse to manually if for some reason all update
// installation attempts fail.
pref("app.update.url.manual", "https://dbsoft.org/whitestar.php");

// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard. 
pref("app.update.url.details", "https://dbsoft.org/whitestar-releasenotes.php");
#else
// Updates disabled (Mac, etc.)
pref("app.update.enabled", false);
pref("app.update.url", "");
#endif
