(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3996],{"../node_modules/highlight.js/lib/languages/makefile.js":module=>{module.exports=function makefile(hljs){var VARIABLE={className:"variable",variants:[{begin:"\\$\\("+hljs.UNDERSCORE_IDENT_RE+"\\)",contains:[hljs.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},QUOTE_STRING={className:"string",begin:/"/,end:/"/,contains:[hljs.BACKSLASH_ESCAPE,VARIABLE]},FUNC={className:"variable",begin:/\$\([\w-]+\s/,end:/\)/,keywords:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},contains:[VARIABLE]},ASSIGNMENT={begin:"^"+hljs.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},TARGET={className:"section",begin:/^[^\s]+:/,end:/$/,contains:[VARIABLE]};return{name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"},contains:[hljs.HASH_COMMENT_MODE,VARIABLE,QUOTE_STRING,FUNC,ASSIGNMENT,{className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{$pattern:/[\.\w]+/,"meta-keyword":".PHONY"}},TARGET]}}}}]);