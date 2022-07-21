(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{804:function(e,t,s){"use strict";s.r(t);var n=s(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"p2p-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#p2p-config"}},[e._v("#")]),e._v(" P2P Config")]),e._v(" "),s("p",[e._v("Here we describe configuration options around the Peer Exchange.\nThese can be set using flags or via the "),s("code",[e._v("$TMHOME/config/config.toml")]),e._v(" file.")]),e._v(" "),s("h2",{attrs:{id:"seed-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seed-mode"}},[e._v("#")]),e._v(" Seed Mode")]),e._v(" "),s("p",[s("code",[e._v("--p2p.seed_mode")])]),e._v(" "),s("p",[e._v("The node operates in seed mode. In seed mode, a node continuously crawls the network for peers,\nand upon incoming connection shares some peers and disconnects.")]),e._v(" "),s("h2",{attrs:{id:"seeds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seeds"}},[e._v("#")]),e._v(" Seeds")]),e._v(" "),s("p",[s("code",[e._v("--p2p.seeds “id100000000000000000000000000000000@1.2.3.4:26656,id200000000000000000000000000000000@2.3.4.5:4444”")])]),e._v(" "),s("p",[e._v("Dials these seeds when we need more peers. They should return a list of peers and then disconnect.\nIf we already have enough peers in the address book, we may never need to dial them.")]),e._v(" "),s("h2",{attrs:{id:"persistent-peers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#persistent-peers"}},[e._v("#")]),e._v(" Persistent Peers")]),e._v(" "),s("p",[s("code",[e._v("--p2p.persistent_peers “id100000000000000000000000000000000@1.2.3.4:26656,id200000000000000000000000000000000@2.3.4.5:26656”")])]),e._v(" "),s("p",[e._v("Dial these peers and auto-redial them if the connection fails.\nThese are intended to be trusted persistent peers that can help\nanchor us in the p2p network. The auto-redial uses exponential\nbackoff and will give up after a day of trying to connect.")]),e._v(" "),s("p",[e._v("But If "),s("code",[e._v("persistent_peers_max_dial_period")]),e._v(" is set greater than zero,\npause between each dial to each persistent peer will not exceed "),s("code",[e._v("persistent_peers_max_dial_period")]),e._v("\nduring exponential backoff and we keep trying again without giving up")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" If "),s("code",[e._v("seeds")]),e._v(" and "),s("code",[e._v("persistent_peers")]),e._v(" intersect,\nthe user will be warned that seeds may auto-close connections\nand that the node may not be able to keep the connection persistent.")]),e._v(" "),s("h2",{attrs:{id:"private-peers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#private-peers"}},[e._v("#")]),e._v(" Private Peers")]),e._v(" "),s("p",[s("code",[e._v("--p2p.private_peer_ids “id100000000000000000000000000000000,id200000000000000000000000000000000”")])]),e._v(" "),s("p",[e._v("These are IDs of the peers that we do not add to the address book or gossip to\nother peers. They stay private to us.")]),e._v(" "),s("h2",{attrs:{id:"unconditional-peers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unconditional-peers"}},[e._v("#")]),e._v(" Unconditional Peers")]),e._v(" "),s("p",[s("code",[e._v("--p2p.unconditional_peer_ids “id100000000000000000000000000000000,id200000000000000000000000000000000”")])]),e._v(" "),s("p",[e._v("These are IDs of the peers which are allowed to be connected by both inbound or outbound regardless of\n"),s("code",[e._v("max_num_inbound_peers")]),e._v(" or "),s("code",[e._v("max_num_outbound_peers")]),e._v(" of user's node reached or not.")])])}),[],!1,null,null,null);t.default=o.exports}}]);