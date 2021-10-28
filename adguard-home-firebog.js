adLists = [
["Firebog - Suspicious Lists - KADhosts", "https://raw.githubusercontent.com/PolishFiltersTeam/KADhosts/master/KADhosts.txt"],
["Firebog - Suspicious Lists - FadeMind add.Spam", "https://raw.githubusercontent.com/FadeMind/hosts.extras/master/add.Spam/hosts"],
["Firebog - Suspicious Lists - Firebog w3kbl", "https://v.firebog.net/hosts/static/w3kbl.txt"],

["Firebog - Ad Lists - Adaway", "https://adaway.org/hosts.txt"],
["Firebog - Ad Lists - AdguardDNS", "https://v.firebog.net/hosts/AdguardDNS.txt"],
["Firebog - Ad Lists - Firebog", "https://v.firebog.net/hosts/Admiral.txt"],
["Firebog - Ad Lists - Anudeep", "https://raw.githubusercontent.com/anudeepND/blacklist/master/adservers.txt"],
["Firebog - Ad Lists - Disconnect-me", "https://s3.amazonaws.com/lists.disconnect.me/simple_ad.txt"],
["Firebog - Ad Lists - Firebog EasyList", "https://v.firebog.net/hosts/Easylist.txt"],
["Firebog - Ad Lists - pgl.yoyo.org", "https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=0&mimetype=plaintext"],
["Firebog - Ad Lists - FadeMind UncheckyAds", "https://raw.githubusercontent.com/FadeMind/hosts.extras/master/UncheckyAds/hosts"],
["Firebog - Ad Lists - Bigdargon", "https://raw.githubusercontent.com/bigdargon/hostsVN/master/hosts"],

["Firebog - Tracking Lists - Firebog Easyprivacy", "https://v.firebog.net/hosts/Easyprivacy.txt"],
["Firebog - Tracking Lists - Firebog Prigent-Ads", "https://v.firebog.net/hosts/Prigent-Ads.txt"],
["Firebog - Tracking Lists - FadeMind add.2o7Net", "https://raw.githubusercontent.com/FadeMind/hosts.extras/master/add.2o7Net/hosts"],
["Firebog - Tracking Lists - WindowsSpyBlocker", "https://raw.githubusercontent.com/crazy-max/WindowsSpyBlocker/master/data/hosts/spy.txt"],
["Firebog - Tracking Lists - Firstparty Trackers", "https://hostfiles.frogeye.fr/firstparty-trackers-hosts.txt"],

["Firebog - Malicious Lists - DandelionSprout", "https://raw.githubusercontent.com/DandelionSprout/adfilt/master/Alternate%20versions%20Anti-Malware%20List/AntiMalwareHosts.txt"],
["Firebog - Malicious Lists - Threat-Intel", "https://osint.digitalside.it/Threat-Intel/lists/latestdomains.txt"],
["Firebog - Malicious Lists - Disconnect.me", "https://s3.amazonaws.com/lists.disconnect.me/simple_malvertising.txt"],
["Firebog - Malicious Lists - Prigent Crypto", "https://v.firebog.net/hosts/Prigent-Crypto.txt"],
["Firebog - Malicious Lists - Ethanr Mandiant APT Report", "https://bitbucket.org/ethanr/dns-blacklists/raw/8575c9f96e5b4a1308f2f12394abd86d0927a4a0/bad_lists/Mandiant_APT1_Report_Appendix_D.txt"],
["Firebog - Malicious Lists - Phising.army", "https://phishing.army/download/phishing_army_blocklist_extended.txt"],
["Firebog - Malicious Lists - Nottrack", "https://gitlab.com/quidsup/notrack-blocklists/raw/master/notrack-malware.txt"],
["Firebog - Malicious Lists - Spam404", "https://raw.githubusercontent.com/Spam404/lists/master/main-blacklist.txt"],
["Firebog - Malicious Lists - FadeMind add.Risk", "https://raw.githubusercontent.com/FadeMind/hosts.extras/master/add.Risk/hosts"],
["Firebog - Malicious Lists - abuse.ch", "https://urlhaus.abuse.ch/downloads/hostfile/"],

["Firebog - Other Lists - CoinBlocker", "https://zerodot1.gitlab.io/CoinBlockerLists/hosts_browser"],
];

for (i = 0; i < adLists.length; i++) {
    let entry = adLists[i];
    console.log("Adding " + entry[0] + " with url " + entry[1]);

    fetch("http://<adguard-host>:<adguard-port>/control/filtering/add_url", {
    	method: "POST",
    	body: JSON.stringify({
    		name: entry[0],
    		url: entry[1],
    		whitelist: false
    	}),
    	headers: {
    		"Content-Type": "application/json",
    	},
    })
    .then((res) => res.text())
    .then(console.log);
}
