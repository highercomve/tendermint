(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{715:function(t,e,a){"use strict";a.r(e);var s=a(1),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"install-tendermint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-tendermint"}},[t._v("#")]),t._v(" Install Tendermint")]),t._v(" "),a("h2",{attrs:{id:"from-binary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-binary"}},[t._v("#")]),t._v(" From Binary")]),t._v(" "),a("p",[t._v("To download pre-built binaries, see the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("releases page"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"using-homebrew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-homebrew"}},[t._v("#")]),t._v(" Using Homebrew")]),t._v(" "),a("p",[t._v("You can also install the Tendermint binary by simply using homebrew,")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"YnJldyBpbnN0YWxsIHRlbmRlcm1pbnQK"}}),t._v(" "),a("h2",{attrs:{id:"from-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-source"}},[t._v("#")]),t._v(" From Source")]),t._v(" "),a("p",[t._v("You'll need "),a("code",[t._v("go")]),t._v(" "),a("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("installed"),a("OutboundLink")],1),t._v(" and the required\nenvironment variables set, which can be done with the following commands:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ZWNobyBleHBvcnQgR09QQVRIPVwmcXVvdDtcJEhPTUUvZ29cJnF1b3Q7ICZndDsmZ3Q7IH4vLmJhc2hfcHJvZmlsZQplY2hvIGV4cG9ydCBQQVRIPVwmcXVvdDtcJFBBVEg6XCRHT1BBVEgvYmluXCZxdW90OyAmZ3Q7Jmd0OyB+Ly5iYXNoX3Byb2ZpbGUK"}}),t._v(" "),a("p",[t._v("Get the source code:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQuZ2l0CmNkIHRlbmRlcm1pbnQK"}}),t._v(" "),a("p",[t._v("Then run:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWFrZSBpbnN0YWxsCg=="}}),t._v(" "),a("p",[t._v("to put the binary in "),a("code",[t._v("$GOPATH/bin")]),t._v(" or use:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWFrZSBidWlsZAo="}}),t._v(" "),a("p",[t._v("to put the binary in "),a("code",[t._v("./build")]),t._v(".")]),t._v(" "),a("p",[a("em",[t._v("DISCLAIMER")]),t._v(" The binary of Tendermint is build/installed without the DWARF\nsymbol table. If you would like to build/install Tendermint with the DWARF\nsymbol and debug information, remove "),a("code",[t._v("-s -w")]),t._v(" from "),a("code",[t._v("BUILD_FLAGS")]),t._v(" in the make\nfile.")]),t._v(" "),a("p",[t._v("The latest Tendermint is now installed. You can verify the installation by\nrunning:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCB2ZXJzaW9uCg=="}}),t._v(" "),a("h2",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[t._v("#")]),t._v(" Run")]),t._v(" "),a("p",[t._v("To start a one-node blockchain with a simple in-process application:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBpbml0IHZhbGlkYXRvcgp0ZW5kZXJtaW50IHN0YXJ0IC0tcHJveHktYXBwPWt2c3RvcmUK"}}),t._v(" "),a("h2",{attrs:{id:"reinstall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reinstall"}},[t._v("#")]),t._v(" Reinstall")]),t._v(" "),a("p",[t._v("If you already have Tendermint installed, and you make updates, simply")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWFrZSBpbnN0YWxsCg=="}}),t._v(" "),a("p",[t._v("To upgrade, run")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z2l0IHB1bGwgb3JpZ2luIG1hc3RlcgptYWtlIGluc3RhbGwK"}}),t._v(" "),a("h2",{attrs:{id:"compile-with-cleveldb-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-with-cleveldb-support"}},[t._v("#")]),t._v(" Compile with CLevelDB support")]),t._v(" "),a("p",[t._v("Install "),a("a",{attrs:{href:"https://github.com/google/leveldb",target:"_blank",rel:"noopener noreferrer"}},[t._v("LevelDB"),a("OutboundLink")],1),t._v(" (minimum version is 1.7).")]),t._v(" "),a("p",[t._v("Install LevelDB with snappy (optionally). Below are commands for Ubuntu:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c3VkbyBhcHQtZ2V0IHVwZGF0ZQpzdWRvIGFwdCBpbnN0YWxsIGJ1aWxkLWVzc2VudGlhbAoKc3VkbyBhcHQtZ2V0IGluc3RhbGwgbGlic25hcHB5LWRldgoKd2dldCBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2xldmVsZGIvYXJjaGl2ZS92MS4yMC50YXIuZ3ogJmFtcDsmYW1wOyBcCiAgdGFyIC16eHZmIHYxLjIwLnRhci5neiAmYW1wOyZhbXA7IFwKICBjZCBsZXZlbGRiLTEuMjAvICZhbXA7JmFtcDsgXAogIG1ha2UgJmFtcDsmYW1wOyBcCiAgc3VkbyBjcCAtciBvdXQtc3RhdGljL2xpYiogb3V0LXNoYXJlZC9saWIqIC91c3IvbG9jYWwvbGliLyAmYW1wOyZhbXA7IFwKICBjZCBpbmNsdWRlLyAmYW1wOyZhbXA7IFwKICBzdWRvIGNwIC1yIGxldmVsZGIgL3Vzci9sb2NhbC9pbmNsdWRlLyAmYW1wOyZhbXA7IFwKICBzdWRvIGxkY29uZmlnICZhbXA7JmFtcDsgXAogIHJtIC1mIHYxLjIwLnRhci5nego="}}),t._v(" "),a("p",[t._v("Set a database backend to "),a("code",[t._v("cleveldb")]),t._v(":")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBjb25maWcvY29uZmlnLnRvbWwKZGJfYmFja2VuZCA9ICZxdW90O2NsZXZlbGRiJnF1b3Q7Cg=="}}),t._v(" "),a("p",[t._v("To install Tendermint, run:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Q0dPX0xERkxBR1M9JnF1b3Q7LWxzbmFwcHkmcXVvdDsgbWFrZSBpbnN0YWxsIFRFTkRFUk1JTlRfQlVJTERfT1BUSU9OUz1jbGV2ZWxkYgo="}}),t._v(" "),a("p",[t._v("or run:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Q0dPX0xERkxBR1M9JnF1b3Q7LWxzbmFwcHkmcXVvdDsgbWFrZSBidWlsZCBURU5ERVJNSU5UX0JVSUxEX09QVElPTlM9Y2xldmVsZGIK"}}),t._v(" "),a("p",[t._v("which puts the binary in "),a("code",[t._v("./build")]),t._v(".")])],1)}),[],!1,null,null,null);e.default=l.exports}}]);