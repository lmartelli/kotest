"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[81666],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={},l="Release 5.0",p={unversionedId:"blog/release_5.0",id:"version-5.5/blog/release_5.0",title:"Release 5.0",description:"**This document is a work in progress and will be finalized within a few days of the 5.0 release.**",source:"@site/versioned_docs/version-5.5/blog/release_5.0.md",sourceDirName:"blog",slug:"/blog/release_5.0",permalink:"/docs/blog/release_5.0",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.5/blog/release_5.0.md",tags:[],version:"5.5",frontMatter:{}},d={},u=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Kotlin 1.6 is now the minimum supported version",id:"kotlin-16-is-now-the-minimum-supported-version",level:4},{value:"Legacy Javascript compiler support dropped",id:"legacy-javascript-compiler-support-dropped",level:4},{value:"Global configuration object dropped",id:"global-configuration-object-dropped",level:4},{value:"Experimental data testing classes moved",id:"experimental-data-testing-classes-moved",level:4},{value:"Deprecated property test Arb.value removed",id:"deprecated-property-test-arbvalue-removed",level:4},{value:"Startup configuration dump off by default",id:"startup-configuration-dump-off-by-default",level:4},{value:"Deprecated method removals",id:"deprecated-method-removals",level:4},{value:"Inspector changes.",id:"inspector-changes",level:4},{value:"Deprecations",id:"deprecations",level:2},{value:"Test Status",id:"test-status",level:4},{value:"SpecExtension.intercept(KClass) method deprecation",id:"specextensioninterceptkclass-method-deprecation",level:4},{value:"Default test case config",id:"default-test-case-config",level:3},{value:"Listener names",id:"listener-names",level:4},{value:"Other deprecations",id:"other-deprecations",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-50"},"Release 5.0"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"This document is a work in progress and will be finalized within a few days of the 5.0 release."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#breaking-changes"},"Breaking Changes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deprecations"},"Deprecations"))),(0,r.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,r.kt)("h4",{id:"kotlin-16-is-now-the-minimum-supported-version"},"Kotlin 1.6 is now the minimum supported version"),(0,r.kt)("p",null,"From version 5 onwards, Kotest requires Kotlin 1.6. The decision to do this is twofold."),(0,r.kt)("p",null,"Firstly, the main feature in the 5.0\nrelease train is support for multiplatform tests and there are incompatibilities in the compiler between Kotlin 1.5 and 1.6. To support both\nwould add needless complexity to the build."),(0,r.kt)("p",null,"Secondly, ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlin.time.Duration"),"'s have finally gone stable as of 1.6 and Kotest\nbuilds on these internally. We wanted to be able to depend on the multiplatform functionality provided by Kotlin durations without\nany issues arising from changes in these classes from previous versions."),(0,r.kt)("h4",{id:"legacy-javascript-compiler-support-dropped"},"Legacy Javascript compiler support dropped"),(0,r.kt)("p",null,"Javascript support for the ",(0,r.kt)("em",{parentName:"p"},"legacy")," compiler is no longer supported. If you are running tests on JS legacy then you will need to continue using Kotest 4.6.x or set your Javascript test build to use only use the IR compiler."),(0,r.kt)("p",null,"Test support for the legacy Javascript compiler relied on functionality that has been removed in the IR compiler (Namely, that the\n",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/kotlin.test/kotlin.test/-framework-adapter/"},"framework adapter")," no longer works with third\nparty modules). For the 5.0 release, Kotest provides a compiler plugin which integrates tests directly into the compiled output exactly\nhow the kotlin.test support works."),(0,r.kt)("h4",{id:"global-configuration-object-dropped"},"Global configuration object dropped"),(0,r.kt)("p",null,"In previous versions Kotest supported configuration updates via a global configuration object called ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration")," (and called ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," in even earlier versions).\nFrom this release onwards, this top level val has been removed."),(0,r.kt)("p",null,"The reason for the removal is that having global state complicated using multiple instances of the Test Engine in the same JVM and\nalso because there was not precise semanatics around the orders of updates to a top level val."),(0,r.kt)("p",null,"The former was mainly an issue when testing Kotest itself, since users don't typically create instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"TestEngine"),"\ndirectly but instead run tests via gradle or intellij."),(0,r.kt)("p",null,"This top level val was not included in documentation so users should have been largely unaware it existed anyway. The\nrecommended approach to defining Kotest configuration remains\neither ",(0,r.kt)("a",{parentName:"p",href:"https://kotest.io/docs/framework/project-config.html"},"ProjectConfig"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"https://kotest.io/docs/framework/framework-config-props.html"},"system properties"),"."),(0,r.kt)("h4",{id:"experimental-data-testing-classes-moved"},"Experimental data testing classes moved"),(0,r.kt)("p",null,"The experimental data-test ",(0,r.kt)("inlineCode",{parentName:"p"},"withData")," functions added in 4.5 under the package name ",(0,r.kt)("inlineCode",{parentName:"p"},"io.kotest.datatest")," have moved to a new module ",(0,r.kt)("inlineCode",{parentName:"p"},"kotest-framework-datatest"),"."),(0,r.kt)("p",null,"Note: These are separate from the ",(0,r.kt)("inlineCode",{parentName:"p"},"forAll")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"forNone")," data test functions which have been part of Kotest since version 2.0."),(0,r.kt)("h4",{id:"deprecated-property-test-arbvalue-removed"},"Deprecated property test Arb.value removed"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Arb.values()")," method has been removed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Arb")," interface. This method was deprecated in 4.3 in favour of using ",(0,r.kt)("inlineCode",{parentName:"p"},"Arb.sample")," which was introduced to allow for Arb flat-mapping. This will only affect anyone who has written a custom arb that extends ",(0,r.kt)("inlineCode",{parentName:"p"},"Arb")," directly and is still using the deprecated method. Any existing uses of the ",(0,r.kt)("inlineCode",{parentName:"p"},"arbitrary")," builders is unaffected and those builders are always the preferred way to create custom arbitraries."),(0,r.kt)("h4",{id:"startup-configuration-dump-off-by-default"},"Startup configuration dump off by default"),(0,r.kt)("p",null,"The Engine no longer logs config to the console during start ",(0,r.kt)("strong",{parentName:"p"},"by default"),". To enable output, set the system property or env var ",(0,r.kt)("inlineCode",{parentName:"p"},"kotest.framework.dump.config")," to true."),(0,r.kt)("h4",{id:"deprecated-method-removals"},"Deprecated method removals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shouldReceiveWithin")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"shouldReceiveNoElementsWithin")," channel matchers have been removed."),(0,r.kt)("li",{parentName:"ul"},"The deprecated ",(0,r.kt)("inlineCode",{parentName:"li"},"RuntimeTagExtension")," has been undeprecated but moved to a new package."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RuntimeTagExpressionExtension")," has moved to a new package.")),(0,r.kt)("h4",{id:"inspector-changes"},"Inspector changes."),(0,r.kt)("p",null,"When using inspectors, the deprecated ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlintest.assertions.output.max")," system property has been removed.\nThis was replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"kotest.assertions.output.max")," in release 4.0 when the project was renamed\nfrom KotlinTest to Kotest."),(0,r.kt)("h2",{id:"deprecations"},"Deprecations"),(0,r.kt)("h4",{id:"test-status"},"Test Status"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TestStatus")," enum has been deprecated in favour of the ",(0,r.kt)("inlineCode",{parentName:"p"},"TestResult")," ADT. Instead of matching on",(0,r.kt)("inlineCode",{parentName:"p"},"result.status")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"AfterTestListener")," you should now match directly on the result. Eg"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"when (result) {\n  is TestResult.Success -> ...\n  is TestResult.Error -> ...\n}\n")),(0,r.kt)("h4",{id:"specextensioninterceptkclass-method-deprecation"},"SpecExtension.intercept(KClass) method deprecation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"intercept(KClass)")," method in SpecExtension has been deprecated and ",(0,r.kt)("inlineCode",{parentName:"p"},"SpecRefExtension")," has been added. The deprecated method had ambigious behavior when used with an ",(0,r.kt)("inlineCode",{parentName:"p"},"IsolationMode")," that created multiple instances of a spec. The new methods have precise guarantees of when they will execute."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SpecRefExtension"),"s will execute once per class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SpecExtension"),"s will execute once per instance.")),(0,r.kt)("h3",{id:"default-test-case-config"},"Default test case config"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultTestCaseConfig")," containers in Spec's and project configuration have been deprecated. This is because it was not possible to specify at both the spec level and the project-configuration level and allow settings to fall through."),(0,r.kt)("p",null,"Instead, you should set per-setting defaults, and these will fall through from test -> spec -> configuration."),(0,r.kt)("p",null,"For example, instead of this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MySpec: FunSpec() {\n  init {\n    override fun defaultTestCaseConfig() = TestCaseConfig(tags = setOf(Foo, Bar), timeout = 100.seconds)\n    test("foo") {\n      // will time out after 100 seconds and has tags Foo and Bar applied\n    }\n  }\n}\n')),(0,r.kt)("p",null,"You should do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MySpec: FunSpec() {\n  init {\n\n    tags(Foo, Bar)\n    timeout = 100.seconds\n\n    test("foo") {\n       // will time out after 100 seconds and has tags Foo and Bar applied\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Note that the second variation has always been possible, but the first variation is no longer recommended."),(0,r.kt)("h4",{id:"listener-names"},"Listener names"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"val name")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"Listener")," has been deprecated. This was used so that errors from multiple before/after spec callbacks could appear with customized unique names. The framework now takes ensures that names are unique so this val is no longer needed and is now ignored."),(0,r.kt)("h4",{id:"other-deprecations"},"Other deprecations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SpecInstantiationListener")," has been deprecated in favour of ",(0,r.kt)("inlineCode",{parentName:"li"},"InstantiationListener")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"InstantiationErrorListener"),",\nboth of which support suspension functions. ",(0,r.kt)("inlineCode",{parentName:"li"},"SpecInstantiationListener")," is a hold-over from before coroutines existed\nin Kotlin and so had no support for coroutines."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SpecIgnoredListner")," (note the typo) has been renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"IgnoredSpecListener"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"listeners")," method to add listeners to a Spec has been deprecated. When adding listeners to specs directly, you\nshould now prefer ",(0,r.kt)("inlineCode",{parentName:"li"},"extensions()")," rather than ",(0,r.kt)("inlineCode",{parentName:"li"},"listeners()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CompareMode")," /",(0,r.kt)("inlineCode",{parentName:"li"},"CompareOrder")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"shouldEqualJson")," has been deprecated in favor of ",(0,r.kt)("inlineCode",{parentName:"li"},"compareJsonOptions { }"))))}m.isMDXComponent=!0}}]);