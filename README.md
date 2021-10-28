# DNS-BlockList
Domain Block/Allow Lists for Tools like PiHole or AdGuard Home. 

This is only supposed to be an addition to the already good lists over at https://firebog.net/

The `allow.list` will contain domains for services I use, so your milage may vary if you use other services than me.

## PiHole

Add this blocklist to your collection: https://raw.githubusercontent.com/metawave/dns-blocklists/main/block.list

Unfortunately pi-hole doesn't have external whitelists (yet). Go through `allow.list` and add the rule into the whitelist, if you use that service too.

## AdGuard Home

### Adding Firebog Rules
You may add the Firebog Lists first. Replace the `<adguard-host>` and `<adguard-port>` placeholders in `adguard-firebog.js` and run the script in the DebugConsole (F12) of your browser (Firefox/Chrome). This will add the green lists of firebog to your AdLists (lists you may already have, won't get overriden or dupplicated).

### Use this lists
Add the Block/Allow lists in the corresponding pages in AdGuard Home

 * Allow: https://raw.githubusercontent.com/metawave/dns-blocklists/main/allow.list
 * Block: https://raw.githubusercontent.com/metawave/dns-blocklists/main/block.list
