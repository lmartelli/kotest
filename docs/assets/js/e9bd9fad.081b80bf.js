"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[87175],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,f=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"pitest",title:"Pitest",sidebar_label:"Pitest",slug:"pitest.html"},l=void 0,p={unversionedId:"extensions/pitest",id:"version-5.5/extensions/pitest",title:"Pitest",description:"The Mutation Testing tool Pitest is integrated with Kotest via an extension module.",source:"@site/versioned_docs/version-5.5/extensions/pitest.md",sourceDirName:"extensions",slug:"/extensions/pitest.html",permalink:"/docs/extensions/pitest.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.5/extensions/pitest.md",tags:[],version:"5.5",frontMatter:{id:"pitest",title:"Pitest",sidebar_label:"Pitest",slug:"pitest.html"},sidebar:"extensions",previous:{title:"Test Clock",permalink:"/docs/extensions/test_clock.html"}},u={},c=[{value:"Gradle configuration",id:"gradle-configuration",level:2},{value:"Maven configuration",id:"maven-configuration",level:2}],d={toc:c};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Mutation Testing tool ",(0,i.kt)("a",{parentName:"p",href:"https://pitest.org/"},"Pitest")," is integrated with Kotest via an extension module."),(0,i.kt)("h2",{id:"gradle-configuration"},"Gradle configuration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://search.maven.org/#search%7Cga%7C1%7Ckotest-extensions-pitest"},(0,i.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-pitest.svg?label=latest%20release"}))),(0,i.kt)("p",null,"After ",(0,i.kt)("a",{parentName:"p",href:"https://gradle-pitest-plugin.solidsoft.info/"},"configuring")," Pitest,\nadd the ",(0,i.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-extensions-pitest")," module to your dependencies as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'    testImplementation("io.kotest.extensions:kotest-extensions-pitest:<version>")\n')),(0,i.kt)("p",null,"Note: Since pitest is an extension, we use a different maven group name (io.kotest.extensions) from the core modules."),(0,i.kt)("p",null,"After doing that, we need to inform Pitest that we're going to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Kotest")," as a ",(0,i.kt)("inlineCode",{parentName:"p"},"testPlugin"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Assuming that you have already configured the Gradle/Maven extension\nconfigure<PitestPluginExtension> {\n    // testPlugin.set("Kotest")    // needed only with old PIT <1.6.7, otherwise having kotest-extensions-pitest on classpath is enough\n    targetClasses.set(listOf("my.company.package.*"))\n}\n')),(0,i.kt)("p",null,"This should set everything up, and running ",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew pitest")," will generate reports in the way you configured."),(0,i.kt)("h2",{id:"maven-configuration"},"Maven configuration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://search.maven.org/#search%7Cga%7C1%7Ckotest-extensions-pitest"},(0,i.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-pitest.svg?label=latest%20release"}))),(0,i.kt)("p",null,"First of all, you need to configure the ",(0,i.kt)("a",{parentName:"p",href:"https://pitest.org/quickstart/maven/"},"Maven Pitest plugin"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.pitest</groupId>\n    <artifactId>pitest-maven</artifactId>\n    <version>${pitest-maven.version}</version>\n    <configuration>\n        <targetClasses>...</targetClasses>\n        <coverageThreshold>...</coverageThreshold>\n        ... other configurations as needed        \n    </configuration>\n</plugin>\n")),(0,i.kt)("p",null,"Then add the dependency on Pitest Kotest extension:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n  ... the other Kotest dependencies like kotest-runner-junit5-jvm \n  <dependency>\n    <groupId>io.kotest.extensions</groupId>\n    <artifactId>kotest-extensions-pitest</artifactId>\n    <version>${kotest-extensions-pitest.version}</version>\n    <scope>test</scope>\n  </dependency>\n</dependencies>\n")),(0,i.kt)("p",null,"This should be enough to be able to run Pitest and get the reports as described in the ",(0,i.kt)("a",{parentName:"p",href:"https://pitest.org/quickstart/maven/"},"Maven Pitest plugin"),"."))}g.isMDXComponent=!0}}]);