(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"4/j+":function(e,t,a){"use strict";a.r(t),a.d(t,"makeBookmarkChallengesProps",function(){return b}),a.d(t,"mapDispatchToProps",function(){return k}),a.d(t,"mergeProps",function(){return y});var n=a("QbLZ"),r=a.n(n),l=a("/MKj"),i=a("fvjX"),s=a("peh1"),c=a("alL8"),o=a("p7rj"),u=a("eOGF"),m=a("0SFc"),d=a("MHAo"),h=a("WkQb"),p=a("lRgy"),g=function(e){return e.community.profile},f=Object(s.createSelector)([function(e,t){return t.appUtil.location}],function(e){return Object(u.s)(e).filters}),v=function(e){return e.community.challenges.bookmarks},b=function(){return Object(s.createSelector)([g,v,m.f,f],function(e,t,a,n){var r=t[Object(m.c)(n)]||{},l=r.list,i=void 0===l?[]:l,s=r.total;return{challenges:i.map(function(e){return a[Object(m.j)(e,"master")]}),currentChallengesCount:i.length,profile:e,listType:d.a.BOOKMARK,filters:n,totalChallenges:s||0}})},k=function(e){return{challengeActions:Object(i.b)(h.a,e)}},y=function(e,t,a){var n=e.filters,l=e.currentChallengesCount;return r()({},e,t,a,{loadChallenges:function(){return t.challengeActions.getBookmarkChallengeList({filters:n,limit:10,offset:l})}})},E=Object(i.d)(o.a,c.b,Object(l.b)(b(),k,y))(p.a);t.default=E},"7VDX":function(e,t,a){},B7ER:function(e,t,a){},H4Rz:function(e,t,a){},"L+7j":function(e,t,a){"use strict";var n=a("Yz+Y"),r=a.n(n),l=a("iCc5"),i=a.n(l),s=a("V7oC"),c=a.n(s),o=a("FYw3"),u=a.n(o),m=a("mRg0"),d=a.n(m),h=a("cDcd"),p=a.n(h),g=a("17x9"),f=a.n(g),v=a("/MKj"),b=a("MGin"),k=a("TSYQ"),y=a.n(k),E=a("alL8"),C=a("p7rj"),N=a("o14C"),S=a("tVtT"),T=(a("l3J6"),function(e){function t(){return i()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return d()(t,e),c()(t,[{key:"renderMultiDomainTabs",value:function(){var e=this.props,t=e.badgeTracks,a=e.appUtil,n=e.badgeType;if(t&&t.length>1)return p.a.createElement("ul",{className:"multi-domain-tabs"},t.map(function(e){var t=e.trackSlug,r=e.trackName,l="/domains/"+t;return p.a.createElement("li",{key:t,className:"domain-tab"},p.a.createElement(b.Link,{to:l,"data-analytics":"MultiDomainTabLink","data-attr1":t,"data-attr2":n,className:y()("track-link",{active:a.isRouteActive(l)})},r))}))}},{key:"render",value:function(){var e=this.props,t=e.track,a=e.abTest.isBadgeVariant();return p.a.createElement("header",{className:"challenge-list-header clearfix"},a?this.renderMultiDomainTabs():p.a.createElement("h3",{className:"track-label"},t.name),!a&&p.a.createElement("div",{className:"social-share-wrap"},p.a.createElement(S.a,{slug:t.slug,name:t.name,page:"domain"})))}}]),t}(h.PureComponent));T.propTypes={track:f.a.object.isRequired,abTest:f.a.object.isRequired,appUtil:f.a.object.isRequired,badgeTracks:f.a.array,badgeType:f.a.string};T=Object(v.b)(function(e,t){var a=t.appUtil.params,n=a.trackSlug,r=a.chapterSlug,l=e.community,i=l.badges,s=l.domains,c=Object(N.h)({trackSlug:n,chapterSlug:r},i.trackChapterBadgeMapping),o=i.badge[c];return!o||o&&"HackerBadge::MultiDomain"!==o.badge_category?{}:{badgeTracks:i.badgeToTracksMap[c].map(function(e){return{trackSlug:e,trackName:s.dict[e].name}}),badgeType:c}})(T),T=Object(E.b)(T),T=Object(C.a)(T),t.a=T},LAK5:function(e,t,a){"use strict";a.r(t);var n=a("Yz+Y"),r=a.n(n),l=a("iCc5"),i=a.n(l),s=a("V7oC"),c=a.n(s),o=a("FYw3"),u=a.n(o),m=a("mRg0"),d=a.n(m),h=a("cDcd"),p=a.n(h),g=a("17x9"),f=a.n(g),v=a("/MKj"),b=a("MGin"),k=a("eOGF"),y=a("p7rj"),E=a("L+7j");a("7VDX");function C(e){var t=e.tutorial,a=e.assetPath;return p.a.createElement("div",{className:"col-md-6"},p.a.createElement(b.Link,{to:"/domains/tutorials/"+t.slug,className:"tutorial-tile"},p.a.createElement("img",{src:a("dashboard/"+t.slug+".svg"),alt:"Track Image",className:"tutorial-img"}),p.a.createElement("span",{className:"tutorial-name bold"},t.name)))}Object(k.J)("dashboard/.*.svg");var N=function(e){function t(){return i()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return d()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.track,a=e.chapters,n=e.appUtil.assetPath;return p.a.createElement("div",{className:"b4 tutorials-list-page"},p.a.createElement("div",{className:"container"},p.a.createElement(E.a,{track:t}),p.a.createElement("div",{className:"tutorials-list row"},a.map(function(e){return p.a.createElement(C,{key:e.slug,tutorial:e,assetPath:n})}))))}}]),t}(h.PureComponent);N.propTypes={chapters:f.a.arrayOf(f.a.object),track:f.a.object,appUtil:f.a.object},N=Object(v.b)(function(e){var t=e.community.domains.dict.tutorials;return{chapters:t.chapters,track:{id:t.id,slug:t.slug,name:t.name}}})(N),N=Object(y.a)(N),t.default=N},O4p5:function(e,t,a){},Oexu:function(e,t,a){},QTGY:function(e,t,a){},W6q9:function(e,t,a){"use strict";var n=a("m1cH"),r=a.n(n),l=a("Yz+Y"),i=a.n(l),s=a("iCc5"),c=a.n(s),o=a("V7oC"),u=a.n(o),m=a("FYw3"),d=a.n(m),h=a("mRg0"),p=a.n(h),g=a("QbLZ"),f=a.n(g),v=a("cDcd"),b=a.n(v),k=a("1OM/"),y=a("g+WX"),E=a("TSYQ"),C=a.n(E);a("byxf");function N(){}var S=function(e){function t(e){c()(this,t);var a=d()(this,(t.__proto__||i()(t)).call(this,e));return a.toggleShowAll=function(){a.setState({showAll:!a.state.showAll})},a.handleSearchInput=function(e){var t=e.currentTarget.value,n=a.props.searchCallback;a.setState({searchState:t},function(){n(t)})},a.checklistChange=function(e,t){var n=a.props.list,l=t.target.checked,i=f()({},e,{checked:l}),s=n.indexOf(e),c=[].concat(r()(n.slice(0,s)),[i],r()(n.slice(s+1,n.length)));a.props.onChange(c,i,l)},a.state={showAll:!e.itemSize,searchState:e.initialSearchState||""},a}return p()(t,e),u()(t,[{key:"getChecklist",value:function(){var e=this.state.searchState,t=this.props,a=t.list;if(t.isSearchable&&e){var n=e.toLowerCase();a=a.filter(function(e){return e.label.toLowerCase().includes(n)})}return a}},{key:"renderSearchBar",value:function(){var e=this.props.searchPlaceholder,t=this.state.searchState;return b.a.createElement(k.a,{className:"checklist-input width-100",type:"text",placeholder:e,onChange:this.handleSearchInput,value:t})}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.itemSize,r=t.isSearchable,l=t.list,i=this.state.showAll,s=this.getChecklist(),c=i?s:s.slice(0,Math.min(l.length,n));return b.a.createElement("div",{className:C()("ui-checklist",a)},r&&this.renderSearchBar(),b.a.createElement("ul",{className:C()("d-flex flex-column ui-checklist-list",this.props.componentClass)},c.map(function(t,a){var n=void 0!==t.key?t.key:a;return b.a.createElement("li",{className:"ui-checklist-list-item",key:n},b.a.createElement("div",{className:"ui-checklist-item-wrap d-flex msB"},b.a.createElement("div",{className:"mdR"},b.a.createElement(y.a,{onChange:e.checklistChange.bind(e,t),value:t.value,checked:!!t.checked,label:t.label}))))})),!!n&&s.length>n&&b.a.createElement("div",{className:"set-footer",onClick:this.toggleShowAll},b.a.createElement("a",{className:"filter-show-more"},i?"Less":"More")))}}]),t}(v.Component);S.defaultProps={list:[],onChange:N,searchPlaceholder:"",isSearchable:!1,itemSize:1/0,initialSearchState:"",searchCallback:N},t.a=S},bbyW:function(e,t,a){"use strict";a.r(t),a.d(t,"makeTrackChallengesProps",function(){return k}),a.d(t,"mapDispatchToProps",function(){return y}),a.d(t,"mergeProps",function(){return E});var n=a("QbLZ"),r=a.n(n),l=a("/MKj"),i=a("fvjX"),s=a("peh1"),c=a("alL8"),o=a("p7rj"),u=a("0SFc"),m=a("WkQb"),d=a("lRgy"),h=a("MHAo"),p=function(e){return e.community.profile},g=function(e,t){return t.appUtil.params},f=Object(s.createSelector)([function(e,t){return t.appUtil.location},g],function(e,t){var a=t.trackSlug,n=t.chapterSlug;return Object(u.h)(e,a,n)}),v=function(e){return e.community.challenges.challengeList},b=function(e){return e.community.domains.dict},k=function(){return Object(s.createSelector)([p,u.f,v,f,g,b],function(e,t,a,n,r,l){var i=r.trackSlug,s=r.chapterSlug,c=a.challengePages,o=a.current_track,m=c[Object(u.i)(i,n)]||{list:[],firstUnsolvedChallenge:null,total:0},d=m.list,p=m.firstUnsolvedChallenge,g=m.total,f=d.length,v=d.map(function(e){return t[Object(u.j)(e,"master")]});p&&(v=v.filter(function(e){return e.slug!==p.slug}));var b=l[o.slug],k=b.chapterDict,y=b.chapters;return{challenges:v,currentChallengesCount:f,totalChallenges:g||0,chapters:y,chapter:k[s],profile:e,filters:n,track:o,firstUnsolvedChallenge:p,listType:h.a.TRACK}})},y=function(e){return{challengeActions:Object(i.b)(m.a,e)}},E=function(e,t,a){var n=e.track,l=void 0===n?{}:n,i=e.filters,s=e.currentChallengesCount,c=e.chapter,o=void 0===c?{}:c;return r()({},e,t,a,{loadChallenges:function(){return t.challengeActions.getTrackChallengeList({trackSlug:l.slug,filters:i,offset:s,limit:Object(u.g)(o.slug)})}})},C=Object(i.d)(o.a,c.b,Object(l.b)(k(),y,E))(d.a);t.default=C},byxf:function(e,t,a){},"g+WX":function(e,t,a){"use strict";var n=a("Yz+Y"),r=a.n(n),l=a("iCc5"),i=a.n(l),s=a("V7oC"),c=a.n(s),o=a("FYw3"),u=a.n(o),m=a("mRg0"),d=a.n(m),h=a("QbLZ"),p=a.n(h),g=a("jo6Y"),f=a.n(g),v=a("cDcd"),b=a.n(v),k=a("TSYQ"),y=a.n(k);a("vjD1");var E=function(e){function t(e){i()(this,t);var a=u()(this,(t.__proto__||r()(t)).call(this,e));return a.toggleCheckbox=function(e){e.persist(),a.setState({checked:!a.state.checked},function(){a.props.onChange(e)})},a.state={checked:!!e.checked},a}return d()(t,e),c()(t,[{key:"componentWillReceiveProps",value:function(e){e.checked!==this.props.checked&&this.setState({checked:e.checked})}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.indeterminate,n=e.label,r=f()(e,["className","indeterminate","label"]),l=this.state.checked;delete r.checked;var i=b.a.createElement("div",{className:"checkbox-wrap"},b.a.createElement("input",p()({type:"checkbox",className:"checkbox-input",checked:l},r,{onChange:this.toggleCheckbox})),b.a.createElement("span",{className:"custom-holder"}));return b.a.createElement("div",{className:y()("ui-checkbox",{indeterminate:!!a},t)},n?b.a.createElement("label",{className:"label-wrap"},i,b.a.createElement("div",{className:"label"},n)):i)}}]),t}(v.Component);E.defaultProps={indeterminate:!1,onChange:function(){}},t.a=E},l3J6:function(e,t,a){},lRgy:function(e,t,a){"use strict";var n=a("/f1G"),r=a.n(n),l=a("Yz+Y"),i=a.n(l),s=a("iCc5"),c=a.n(s),o=a("V7oC"),u=a.n(o),m=a("FYw3"),d=a.n(m),h=a("mRg0"),p=a.n(h),g=a("cDcd"),f=a.n(g),v=a("17x9"),b=a.n(v),k=a("TSYQ"),y=a.n(k),E=a("t8Fj"),C=a.n(E),N=a("xNbf"),S=a("n9NW"),T=a("PAiI"),w=a("gDS+"),j=a.n(w),O=a("YEIV"),_=a.n(O),F=a("QbLZ"),P=a.n(F),x=a("GQeE"),R=a.n(x),L=a("eOGF"),A=a("W6q9"),B=a("alL8"),M=a("p7rj"),D=a("OJx6"),Y=a.n(D);a("v9Tw");function I(e){return R()(e).reduce(function(t,a){return t[a]=e[a].reduce(function(e,t){return e[t]=!0,e},{}),t},{})}var U=function(e){function t(){var e,a,n,r;c()(this,t);for(var l=arguments.length,s=Array(l),o=0;o<l;o++)s[o]=arguments[o];return a=n=d()(this,(e=t.__proto__||i()(t)).call.apply(e,[this].concat(s))),n.onFilter=function(e,t,a){var r=n.state.filters,l=n.props,i=l.onChange,s=l.appUtil,c=s.location,o=s.router,u=P()({},r,_()({},e,t.filter(function(e){return e.checked}).map(function(e){return e.value})));if(n.setState({filters:u,filtersMap:I(u)}),Y.a.track("Click","ChallengeListFilter",{attribute1:a.value,attribute2:a.checked,attribute3:e,attribute4:j()(u[e]),attribute5:j()(u)}),i)i(u);else{var m=Object(L.s)(c);m.filters=u,o.push(Object(L.b)(c.pathname,m))}},r=a,d()(n,r)}return p()(t,e),u()(t,[{key:"getDifficultyOptions",value:function(){var e=this.state.filtersMap;return["Easy","Medium","Hard"].map(function(t){var a=t.toLowerCase();return{label:t,value:a,checked:(e.difficulty||{})[a]}})}},{key:"getStatusOptions",value:function(){var e=this.state.filtersMap;return["Solved","Unsolved"].map(function(t){var a=t.toLowerCase();return{label:t,value:a,checked:(e.status||{})[a]}})}},{key:"getSubdomains",value:function(){var e=this.props.subdomains,t=void 0===e?[]:e,a=this.state.filtersMap;return t.map(function(e){return{label:e.name,value:e.slug,checked:!!(a.subdomains||{})[e.slug]}})}},{key:"render",value:function(){var e=this.props,t=e.isTutorial,a=e.abTest.isBadgeVariant(),n=this.getDifficultyOptions(),r=this.getStatusOptions(),l=this.getSubdomains(),i=f.a.createElement("div",{className:"filter-group"},f.a.createElement("div",{className:"group-label"},"Status"),f.a.createElement("div",{className:"filters"},f.a.createElement(A.a,{list:r,onChange:this.onFilter.bind(this,"status")})));return f.a.createElement("section",{className:"challenge-list-filter"},a&&i,!t&&f.a.createElement("div",{className:"filter-group"},f.a.createElement("div",{className:"group-label"},"Difficulty"),f.a.createElement("div",{className:"filters"},f.a.createElement(A.a,{list:n,onChange:this.onFilter.bind(this,"difficulty")}))),!a&&i,!t&&l.length>0&&f.a.createElement("div",{className:"filter-group"},f.a.createElement("div",{className:"group-label"},"Subdomains"),f.a.createElement("div",{className:"filters"},f.a.createElement(A.a,{list:l,onChange:this.onFilter.bind(this,"subdomains")}))))}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.filters,a=void 0===t?{}:t;return{filters:a,filtersMap:I(a)}}}]),t}(g.Component);U.propTypes={subdomains:b.a.arrayOf(b.a.object),isTutorial:b.a.bool,appUtil:b.a.object,onChange:b.a.func,filters:b.a.object};U=Object(B.b)(U);var H=U=Object(M.a)(U),q=a("OEX3"),V=a("ve2B"),K=(a("QTGY"),function(e){function t(e){c()(this,t);var a=d()(this,(t.__proto__||i()(t)).call(this,e));Q.call(a);var n=Object(L.s)(e.appUtil.location).filters;return a.state={filters:n},a}return p()(t,e),u()(t,[{key:"renderFabPopup",value:function(){var e=this.props,t=e.subdomains,a=e.isTutorial,n=this.state,r=n.filters,l=void 0===r?{}:r,i=n.applyingFilter;return f.a.createElement("div",{className:"challenge-fab-popup theme-m"},f.a.createElement("header",{className:"challenge-fab-popup-header"},f.a.createElement(q.a,{className:"close",onClick:this.closeFabFilter},f.a.createElement("i",{className:"ui-icon-cross"})),f.a.createElement("label",{className:"header-label"},"Filters"),f.a.createElement(q.a,{className:"clear-btn",onClick:this.clearFilters},"Clear")),f.a.createElement(H,{subdomains:t,isTutorial:a,filters:l,onChange:this.onFilterChange}),f.a.createElement(q.b,{className:"apply-btn",loading:i,onClick:this.applyFilter},"Apply"))}},{key:"render",value:function(){var e=this.state,t=e.fabFilterOpen,a=e.filters;return f.a.createElement(V.a,{handleOpen:this.openFabFilter,handleClose:this.closeFabFilter,icon:"ui-icon-filter",type:"full-screen",open:t,active:!!a},this.renderFabPopup())}}]),t}(g.PureComponent));K.propTypes={subdomains:b.a.arrayOf(b.a.object).isRequired,isTutorial:b.a.bool.isRequired,appUtil:b.a.object.isRequired};var Q=function(){var e=this;this.openFabFilter=function(){e.setState({fabFilterOpen:!0})},this.closeFabFilter=function(){e.setState({fabFilterOpen:!1,applyingFilter:!1})},this.onFilterChange=function(t){e.setState({filters:t})},this.applyFilter=function(){var t=e.props.appUtil,a=t.location,n=t.router,r=e.state.filters,l=Object(L.s)(a);l.filters=r,Y.a.track("Click","ChallengeListFilterApply",{attribute1:j()(r)}),e.setState({applyingFilter:!0}),n.push(Object(L.b)(a.pathname,l))},this.clearFilters=function(){e.setState({filters:{}})}},z=Object(M.a)(K),W=a("upHb"),G=a.n(W),X=a("0SFc"),Z=a("m1cH"),J=a.n(Z),$=a("OnOE"),ee=a.n($),te=a("MGin"),ae=a("sm6v"),ne=a("4TY7"),re=a("uVuI"),le=a("MHAo"),ie=(a("7zrl"),function(e){function t(){var e,a,n,r;c()(this,t);for(var l=arguments.length,s=Array(l),o=0;o<l;o++)s[o]=arguments[o];return a=n=d()(this,(e=t.__proto__||i()(t)).call.apply(e,[this].concat(s))),n.onTimerEnd=function(){var e=n.props,t=e.challenge;e.challengeActions.updateChallenge({challengeSlug:t.slug,clientOnly:!0,changes:{can_be_viewed:!0,has_started:!0,active:!0}})},r=a,d()(n,r)}return p()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.showFullChallenge,a=e.challengeActions,n=e.challenge,r=n.slug,l=n.contest_slug;t&&!n.body_html&&a.getChallengeDetail({challengeSlug:r,contestSlug:l})}},{key:"generateAnalyticsStub",value:function(){var e=this.props,t=e.challenge,a=e.currentPlaylist,n=e.listType===le.a.PLAYLIST;return{"data-attr1":t.slug,"data-attr2":a.slug,"data-attr3":t.kind,"data-attr4":t.solved,"data-attr5":t.attempted,"data-attr7":t.factor,"data-attr-10":t.difficulty,"data-attr11":n}}},{key:"isHiddenTutorialChallenge",value:function(){var e=this.props,t=e.trackSlug,a=e.challenge;return"tutorials"===t&&!a.can_be_viewed}},{key:"showDifficulty",value:function(){var e=this.props,t=e.challenge,a=e.contest;return!a||"acm"!==a.kind&&!a.hide_difficulty&&!a.hide_leaderboard&&-1===["mcq","article"].indexOf(t.kind)}},{key:"renderBookmarksIcon",value:function(){var e=this.props.challenge;return f.a.createElement("span",{key:"bookmark-cta",className:"bookmark-cta"},f.a.createElement(re.a,{challenge:e,className:"js-bookmark"}))}},{key:"renderDetailItem",value:function(e,t,a){return f.a.createElement("span",{key:e,className:y.a.apply(void 0,J()(t).concat(["detail-item"]))},a)}},{key:"renderCardDetails",value:function(){var e=this.props.challenge,t=e.difficulty_name,a=e.max_score,n=e.total_count,r=e.solved_count,l=[];return this.showDifficulty()&&l.push(this.renderDetailItem("difficulty",["difficulty",t.toLowerCase()],""+Object(L.c)(t))),l.push(this.renderDetailItem("max-score",["max-score"],"Max Score: "+a)),l.push(this.renderDetailItem("success-ratio",["success-ratio"],"Success Rate: "+(n>0?(r/n*100).toFixed(2)+"%":"0.0%"))),f.a.createElement("div",{className:"card-details pmT"},l)}},{key:"renderChallengeName",value:function(){var e=this.props.challenge,t=e.preferred_challenge_name,a=e.name;return t&&t.trim()?t:a}},{key:"renderChallengeTitle",value:function(){return f.a.createElement("div",{className:"challenge-name-details "},f.a.createElement("div",{className:y()("pull-left inline-block")},f.a.createElement("h4",{className:"challengecard-title"},this.renderChallengeName(),this.renderCardDetails())))}},{key:"renderActionButtons",value:function(){var e=this.props,t=e.challenge,a=e.showFullChallenge,n=e.listType,r=e.primary,l=n===le.a.PLAYLIST,i="";if(i=r?"ui-btn-primary":"ui-btn-line-primary",t.can_be_viewed||l){var s=t.attempted||t.solved;s&&!a&&(i="mcq"===t.kind?"btn disabled":"ui-btn-line"),t.solved&&(i="ui-btn-line-primary");var c={className:"primary-cta "+i,icon:"",iconAlignment:"right"},o="Solve Challenge";return t.solved?(o="Solved",c.icon="ui-icon-check-circle",c.iconAlignment="left"):s&&(o="Try Again"),o=f.a.createElement(q.c,P()({key:"solve-button-cta"},c),o),f.a.createElement("div",{className:"challenge-submit-btn"},o)}}},{key:"renderCountdownTimer",value:function(){var e=this.props.challenge;return f.a.createElement(q.c,{role:"link",className:"ui-btn-line",disabled:!0},f.a.createElement("span",{className:"timer-width-v2"},"Unlocks in"),f.a.createElement("span",{className:"timer-width-v2"},f.a.createElement(ae.a,{finishTimeMs:1e3*e.epoch_starttime,onTimerEnd:this.onTimerEnd})))}},{key:"renderCtas",value:function(){var e=this.props.showBookmarks,t=this.isHiddenTutorialChallenge();return f.a.createElement(g.Fragment,null,!t&&e&&this.renderBookmarksIcon(),f.a.createElement("div",{className:y()("cta-container")},f.a.createElement("div",{className:"ctas"},!t&&this.renderActionButtons(),t&&this.renderCountdownTimer())))}},{key:"renderPreviewBody",value:function(){var e=this.props.challenge,t=e.preview,a=e.body_html;return t?f.a.createElement("div",{className:"preview-content"},t):a?f.a.createElement("div",{className:"preview-content",dangerouslySetInnerHTML:{__html:a}}):f.a.createElement("div",{className:"preview-content"},f.a.createElement(ne.a,{height:"100px",width:"100%"}))}},{key:"renderChallengePreview",value:function(){return f.a.createElement("div",{className:"preview-box"},this.renderPreviewBody(),this.renderCtas())}},{key:"renderBody",value:function(){var e=this.props,t=e.challenge,a=e.showFullChallenge;return this.isHiddenTutorialChallenge()?f.a.createElement("div",{className:"content--list_body challenge-locked"},f.a.createElement("header",{className:"content--list_header-v2"},f.a.createElement("div",{className:"challenge-name-details "},f.a.createElement("h4",{className:"challengecard-title"},f.a.createElement("a",null,this.renderChallengeName()),f.a.createElement("div",{className:"challenge-unavailable-text"},f.a.createElement("i",{className:"ui-icon-lock"})," The challenge is not available yet."))),this.renderCtas())):f.a.createElement("div",{className:"content--list_body"},f.a.createElement("header",{className:"content--list_header-v2"},this.renderChallengeTitle(),!a&&this.renderCtas()),a&&this.renderChallengePreview(),!t.can_be_viewed&&t.has_started&&f.a.createElement("p",null,t.requirements_description||""))}},{key:"render",value:function(){var e=this.props,t=e.appUtil.location.pathname,a=e.challenge,n=e.isCTCIChallenge,r=e.index,l=Object(X.k)(t,a),i=this.generateAnalyticsStub();return f.a.createElement(te.Link,P()({to:l,className:"js-track-click challenge-list-item","data-analytics":"ChallengeListChallengeName","data-js-track":"Challenge-Title"},i),f.a.createElement("div",{className:y()("single-item challenges-list-view-v2",{"first-challenge":0===r,cursor:!this.isHiddenTutorialChallenge()})},f.a.createElement("div",{id:"contest-challenges-problem",className:y()({"individual-challenge-card-v2":!0,"content--list-v2 track_content":!n})},this.renderBody()),f.a.createElement(ee.a,{effect:"solid"})))}}]),t}(f.a.Component));ie.propTypes={challenge:b.a.object.isRequired,isCTCIChallenge:b.a.bool,showFullChallenge:b.a.bool,listType:b.a.string,currentPlaylist:b.a.object},ie.defaultProps={isCTCIChallenge:!1,listType:le.a.TRACK,currentPlaylist:{}};var se=ie=Object(M.a)(ie),ce=a("LDJX"),oe=a("oLDs"),ue=a("yerp"),me=(a("O4p5"),function(e){function t(){c()(this,t);var e=d()(this,(t.__proto__||i()(t)).call(this));return e.reloadChallengeList=function(){window.HR.softlyReloadPage()},e.state={showDetailsModal:!1,loadingChallengeList:!1},e}return p()(t,e),u()(t,[{key:"renderChallengeList",value:function(){var e=this.props,t=e.challenges,a=e.showBookmarks,n=e.track,r=e.chapter,l=e.currentPage,i=e.filters,s=e.challengeActions,c=e.appUtil,o=e.listType,u=e.currentPlaylist,m=this.state.loadingChallengeList,d=n.slug;if(!t||t.length<1)return f.a.createElement("div",{className:"no-challenge-list"},f.a.createElement("p",{className:"no-challenge-content mlA plT text-center"},Object(X.o)(i,o)));if("cracking-the-coding-interview"===r.slug){var h={},p=[];t.forEach(function(e){if(e.section_association){var t=e.section_association.section.id;h[t]||(p.push(t),h[t]=[]),h[t].push(e)}});var v=parseInt(c.location.query.autoopen||-1,10);return f.a.createElement(g.Fragment,null,f.a.createElement("div",{className:"section-wise challenges-list-view mdB"},p.map(function(e){var t=h[e][0].section_association;return f.a.createElement("div",{key:e,className:"full-section"},f.a.createElement("div",{className:"section-head"},f.a.createElement("span",null,t.section.name),"challenge"===t.entity_type&&f.a.createElement("span",{className:"pull-right"},f.a.createElement("span",{className:"mmR"},t.section.entity_size),f.a.createElement("span",null,1===t.section.entity_size?"Challenge":"Challenges"))),f.a.createElement("div",{className:"section-group mdB"},"video_group"===t.entity_type&&h[e].map(function(e){return f.a.createElement("div",{key:e.slug,className:"video-section-2 pmL pmR"},e.videos.map(function(e,t){return f.a.createElement("div",{key:e.youtube_id,className:"video-item pmL pmR psT psB"},f.a.createElement(oe.a,{autoOpen:t+1===v,title:e.title,duration:e.duration,youtubeId:e.youtube_id,contestSlug:"master"}),f.a.createElement("div",{className:"video-title-text pmT"},e.title))}))}),"challenge"===t.entity_type&&h[e].map(function(t,n){return f.a.createElement("div",{key:t.slug},f.a.createElement(se,{challenge:t,showBookmarks:a,trackSlug:d,isCTCIChallenge:!0,currentPage:l,filters:i,challengeActions:s,listType:o,currentPlaylist:u}),n!==h[e].length-1&&f.a.createElement("hr",{className:"section-divide-line"}))})))}),m&&f.a.createElement("div",{className:"text-center"},f.a.createElement(N.a,{className:"challenge-list-loader",diameter:60}))))}return t.map(function(e,t){return f.a.createElement(se,P()({key:e.slug},{challenge:e,showBookmarks:a,trackSlug:d,currentPage:l,filters:i,challengeActions:s,index:t,listType:o,currentPlaylist:u}))})}},{key:"renderChapterIntorductoryText",value:function(){var e=this.props.chapter.slug,t="linkedin-placements"===e,a="10-days-of-javascript"===e,n="";return"cracking-the-coding-interview"===e?n=f.a.createElement("span",null,"Ace your next interview by solving these code challenges, which cover important concepts for any coding interview. Each challenge includes a video tutorial to help you learn how to solve it."):t?n=f.a.createElement("span",null,"Practice by solving these code challenges, which are similar to the coding questions in the actual LinkedIn Placements test. Note that the actual test will also contain multiple choice questions on topics like math, probability and aptitude."):a||(n=f.a.createElement("span",null,f.a.createElement("i",{className:"icon-clock txt-alt-grey"}),f.a.createElement("span",{className:"aside"},"We will unlock a new challenge daily at 9am."))),n?f.a.createElement("div",{className:"confirmation plB"},n):null}},{key:"renderTutorialSignupView",value:function(){var e=this.props.chapter;return f.a.createElement(ce.a,{currentChapter:e,afterSignup:this.reloadChallengeList})}},{key:"renderChallengeListView",value:function(){var e=this.props,t=e.track,a=e.chapter,n=t.slug,r="cracking-the-coding-interview"===a.slug;return f.a.createElement(g.Fragment,null,"tutorials"===n&&this.renderChapterIntorductoryText(),f.a.createElement("div",{className:y()("challenges-list",{"section-wise":r})},this.renderChallengeList()))}},{key:"renderMetaTags",value:function(){var e=this.props,t=e.chapter,a=e.track,n=e.listType,r=e.currentPlaylist.name,l=void 0===r?"":r;switch(n){case le.a.BOOKMARK:return f.a.createElement(G.a,null,f.a.createElement("title",null,"Your Saved Challenges | HackerRank"));case le.a.PLAYLIST:var i=l+" Prepare for you upcoming programming interview with HackerRank's\n        Ultimate Interview Preparation Kit",s=l+" | The HackerRank Interview Preparation Kit | HackerRank";return f.a.createElement(G.a,null,f.a.createElement("title",null,s),f.a.createElement("meta",{id:"meta-og-title",property:"og:title",content:"Solve "+s}),f.a.createElement("meta",{id:"meta-og-description",property:"og:description",content:i}));default:return f.a.createElement(G.a,null,f.a.createElement("title",null,"tutorial"===a.slug?"Solve "+t.name+" Questions | "+a.name+" | HackerRank":"Solve "+a.name+" | HackerRank"),f.a.createElement("meta",{id:"meta-og-title",property:"og:title",content:"Solve "+a.name+" Code Challenges"}),f.a.createElement("meta",{id:"meta-og-description",property:"og:description",content:t.tagline||a.descriptions}))}}},{key:"render",value:function(){var e=this.props,t=e.chapter,a=e.track,n=e.listType,r=t.tutorial_signed_up;return f.a.createElement(g.Fragment,null,this.renderMetaTags(),"tutorials"!==a.slug||r?this.renderChallengeListView():this.renderTutorialSignupView(),n===le.a.PLAYLIST&&f.a.createElement(T.a,null,f.a.createElement(ue.a,{featureId:3,align:"left",className:"feature-feedback-bottom-right-fixed playlist-feedback",popoverClassName:"popover-bottom-right-fixed",coordinate:{right:"83px",bottom:"15px"},theme:"theme-m"})))}}]),t}(f.a.Component));me.propTypes={chapter:b.a.object,track:b.a.object,filters:b.a.object,showBookmarks:b.a.bool,challenges:b.a.array.isRequired,challengeActions:b.a.object.isRequired,listType:b.a.string.isRequired,contest:b.a.object,currentPlaylist:b.a.object},me.defaultProps={chapter:{},track:{},contest:{slug:"master"},currentPlaylist:{}};var de=me=Object(M.a)(me),he=a("L+7j");a("B7ER");a.d(t,"a",function(){return ge});var pe=function(e){function t(){c()(this,t);var e=d()(this,(t.__proto__||i()(t)).call(this));return e.loadChallengeList=function(){var t=e.props.loadChallenges,a=e.state.loadingChallenges;t&&!a&&(e.setState({loadingChallenges:!0}),t().always(function(){e.setState({loadingChallenges:!1})}))},e.state={},e}return p()(t,e),u()(t,[{key:"showFilters",value:function(){var e=this.props,t=e.chapter;return"tutorials"!==e.track.slug||t.tutorial_signed_up}},{key:"renderFilters",value:function(){var e=this,t=this.props,a=t.chapters,n=t.track,r=t.filters;if(this.showFilters()){var l="tutorials"===n.slug;return f.a.createElement(g.Fragment,null,f.a.createElement(T.a,null,f.a.createElement("section",{className:"filter-section col-md-3"},f.a.createElement(C.a,{top:20,bottomBoundary:"#new-challenge-list"},f.a.createElement("div",{ref:function(t){e.filterWrap=t},className:"filter-wrap"},f.a.createElement(H,{subdomains:a,isTutorial:l,filters:r}))))),f.a.createElement(T.b,null,f.a.createElement(z,{subdomains:a,isTutorial:l})))}}},{key:"renderList",value:function(){var e=this.props,t=e.currentChallengesCount,a=e.chapter,n=e.track,r=e.challenges,l=e.challengeActions,i=e.totalChallenges,s=e.abTest,c=e.firstUnsolvedChallenge,o=e.listType,u=e.filters,m=e.contest,d=e.loadChallenges,h=e.currentPlaylist,p=this.state.loadingChallenges,g=!!d&&t<i&&!p&&this.showFilters(),v=1===i&&!!c;return f.a.createElement("section",{className:y()("list-container",this.showFilters()?"col-md-9":"col-md-12")},s.isBadgeVariant()&&c&&this.renderRecommendedChallenge(),!v&&f.a.createElement(S.a,{scrollContainer:"body",threshold:1e3,loadMore:this.loadChallengeList,enabled:g},f.a.createElement(de,{chapter:a,track:n,challenges:r,challengeActions:l,showBookmarks:!0,totalChallenges:i,listType:o,filters:u,contest:m,currentPlaylist:h})),p&&f.a.createElement("div",{className:"text-center"},f.a.createElement(N.a,{className:"challenge-list-loader"})))}},{key:"renderRecommendedChallenge",value:function(){var e=this.props,t=e.firstUnsolvedChallenge,a=e.track,n=e.chapter,r=e.challengeActions,l=e.listType,i=e.currentPlaylist,s=t.preview;return f.a.createElement("div",{className:"recommended-challenge pjB"},f.a.createElement(se,{challenge:t,showFullChallenge:!!s,showBookmarks:!0,trackSlug:a.slug,chapterSlug:n.slug,challengeActions:r,listType:l,primary:!0,currentPlaylist:i}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.track,n=t.listType,r=n===le.a.TRACK,l=n===le.a.BOOKMARK;return f.a.createElement("div",{id:"new-challenge-list",className:y()("b4 new-challenge-list",{"bookmark-list":l})},f.a.createElement("div",{className:"container"},r&&f.a.createElement(he.a,{track:a}),f.a.createElement("div",{className:"row content-container",ref:function(t){e.container=t}},this.renderList(),this.renderFilters())))}}]),t}(g.Component);pe.propTypes={challenges:b.a.arrayOf(b.a.object).isRequired,currentChallengesCount:b.a.number,totalChallenges:b.a.number.isRequired,chapters:b.a.arrayOf(b.a.object),profile:b.a.object.isRequired,filters:b.a.object,chapter:b.a.object,contest:b.a.object,track:b.a.object,abTest:b.a.object.isRequired,firstUnsolvedChallenge:b.a.object,loadChallenges:b.a.func,listType:b.a.oneOf(r()(le.a)),currentPlaylist:b.a.object},pe.defaultProps={chapter:{},track:{},contest:{slug:"master"},currentChallengesCount:0,listType:le.a.TRACK,currentPlaylist:{}};var ge=pe},n2qa:function(e,t,a){},v9Tw:function(e,t,a){},ve2B:function(e,t,a){"use strict";var n=a("Yz+Y"),r=a.n(n),l=a("iCc5"),i=a.n(l),s=a("V7oC"),c=a.n(s),o=a("FYw3"),u=a.n(o),m=a("mRg0"),d=a.n(m),h=a("cDcd"),p=a.n(h),g=a("TSYQ"),f=a.n(g),v=a("3N0A"),b=a("OEX3"),k=a("Q9J+"),y=(a("H4Rz"),function(e){function t(){return i()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return d()(t,e),c()(t,[{key:"componentDidUpdate",value:function(){this.shouldHideScrollBar()?k.a.hideScrollBars():k.a.showScrollBars()}},{key:"componentWillUnmount",value:function(){k.a.showScrollBars()}},{key:"shouldShowOverlay",value:function(){var e=this.props,t=e.open,a=e.overlay;return t&&a}},{key:"shouldHideScrollBar",value:function(){var e=this.props,t=e.open,a=e.type,n=e.popupTarget;return(this.shouldShowOverlay()||t&&"full-screen"===a)&&!n}},{key:"renderPopup",value:function(){var e=this.props,t=e.children,a=e.type,n=e.handleClose,r=e.className,l=e.popupTarget,i=this.shouldShowOverlay();return p.a.createElement(v.a,{target:l},p.a.createElement("div",{className:f()("fab-popup",r)},i&&p.a.createElement("div",{className:"fab-popup-overlay",onClick:n}),p.a.createElement("div",{className:f()("fab-popup-content","fab-popup-"+a)},t)))}},{key:"renderPopupHandle",value:function(){var e=this.props,t=e.icon,a=e.handleOpen,n=e.active;return p.a.createElement(b.b,{className:f()("fab-popup-handle",n?"active":"default"),onClick:a},p.a.createElement("i",{className:f()(t,"fab-popup-icon")}))}},{key:"render",value:function(){return this.props.open?this.renderPopup():this.renderPopupHandle()}}]),t}(h.PureComponent));y.defaultProps={type:"menu",overlay:!0,active:!1},t.a=y},vjD1:function(e,t,a){},xHnZ:function(e,t,a){"use strict";var n=a("ZaSc"),r=a("oKxo"),l=a("O3Rp"),i={incrementSeenCount:function(e,t){return function(){return Object(n.g)({url:Object(l.f)("seenFeedback",{apiPrefix:""+t,id:""+e}),loadingMessage:!1})}},disable:function(e){return{type:r.b.FEATURE_FEEDBACK.DISABLE,data:{featureId:e}}}};t.a=i},yerp:function(e,t,a){"use strict";var n=a("Yz+Y"),r=a.n(n),l=a("iCc5"),i=a.n(l),s=a("V7oC"),c=a.n(s),o=a("FYw3"),u=a.n(o),m=a("mRg0"),d=a.n(m),h=a("cDcd"),p=a.n(h),g=a("17x9"),f=a.n(g),v=a("EA6I"),b=a("/MKj"),k=a("fvjX"),y=a("TSYQ"),E=a.n(y),C=a("ZaSc"),N=a("z2kT"),S=a("xHnZ"),T=a("O3Rp"),w=(a("n2qa"),function(e){function t(e){i()(this,t);var a=u()(this,(t.__proto__||r()(t)).call(this,e));return a.toggleFeedback=function(e){a.setState({feedbackOpen:!a.state.feedbackOpen,target:e.currentTarget})},a.onClose=function(){a.setState({feedbackOpen:!1})},a.onSeen=function(e){return Object(C.g)({url:Object(T.f)("seenFeedback",{apiPrefix:""+a.props.apiPrefix,id:""+e}),loadingMessage:!1})},a.onSubmit=function(e){a.submitTimeout=setTimeout(function(){a.setState({feedbackOpen:!1}),a.props.featureFeedbackActions.disable(e)},3e3)},a.renderFeatureFeedback=function(){var e=a.props,t=e.featureId,n=e.apiPrefix,r=e.title,l=e.description,i=e.feature,s=e.popoverClassName,c=e.align,o=e.coordinate,u=e.theme,m=a.state.target;if(i){var d=r||i.heading||"Love our new upgrade?",h=l||i.description||"Let us know what you feel about it.";return p.a.createElement(v.a,{className:s,target:m,align:c,open:!0,coordinate:o,onClose:a.onClose,showTip:!0},p.a.createElement(N.a,{featureId:t,title:d,desc:h,theme:u,onSeen:a.onSeen,onClose:a.onClose,onSubmit:a.onSubmit,isStandalone:!0,postUrl:Object(T.f)("updateFeedback",{apiPrefix:n,id:t})}))}},a.state={feedbackOpen:!1,target:void 0},a}return d()(t,e),c()(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.submitTimeout)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className;return p.a.createElement(h.Fragment,null,!!this.renderFeatureFeedback()&&p.a.createElement("span",{"data-balloon":"Share your feedback with us","data-balloon-pos":"left",className:E()("feature-feedback cursor-pointer",a),onClick:this.toggleFeedback},t||p.a.createElement("i",{className:"ui-icon-thumbs-up-light"})),this.state.feedbackOpen&&this.renderFeatureFeedback())}}]),t}(p.a.Component));w.propTypes={featureId:f.a.number.isRequired,title:f.a.string,description:f.a.string,className:f.a.string,popoverClassName:f.a.string,align:f.a.string,coordinate:f.a.object,theme:f.a.string},t.a=Object(b.b)(function(e,t){var a=t.featureId,n="hackerrank"===e.metadata.productNamespace?"rest":"x/api/v1";return{feature:e.featureFeedback.featureLists[a],apiPrefix:n}},function(e){return{featureFeedbackActions:Object(k.b)(S.a,e)}})(w)},z2kT:function(e,t,a){"use strict";var n=a("Yz+Y"),r=a.n(n),l=a("iCc5"),i=a.n(l),s=a("V7oC"),c=a.n(s),o=a("FYw3"),u=a.n(o),m=a("mRg0"),d=a.n(m),h=a("cDcd"),p=a.n(h),g=a("17x9"),f=a.n(g),v=a("2VWb"),b=a("TSYQ"),k=a.n(b),y=a("p7rj"),E=a("ZaSc"),C=a("eOGF");a("Oexu");Object(C.J)(["feedback/feedback.*.svg"]);var N=[{text:"Awesome, tell us more!",rating:1,icon:"like",title:"Like it"},{text:"Tell us more",rating:2,icon:"cantsay",title:"Maybe"},{text:"Tell us what went wrong",rating:3,icon:"no",title:"No"}],S=function(e){var t=e.selected,a=(e.clickHandler,e.title),n=e.icon,r=e.assetPath;return p.a.createElement("li",{className:k()("rating",{selected:t},n),onClick:function(){e.clickHandler(e.idxVal)}},p.a.createElement("div",{className:"feedback-img"},p.a.createElement("span",{className:"overlay"}),p.a.createElement("img",{src:r("feedback/feedback-"+n+".svg"),className:"feedback-icon"})),p.a.createElement("div",{className:"feedback-title"},a))},T=function(e){function t(e){i()(this,t);var a=u()(this,(t.__proto__||r()(t)).call(this,e));return a.updateSelection=function(e){a.setState({selectedRating:e},function(){a.submitForm()})},a.updateComment=function(e){a.setState({comment:e.target.value})},a.submitForm=function(e){e&&a.setState({submitting:!0});var t=a.state,n=t.selectedRating,r=t.comment,l=a.props,i=l.postUrl,s=l.onSubmit,c=l.featureId,o=l.appUtil.location.pathname;Object(E.g)({url:i,data:{rating:n+1,description:r,path:o},loadingMessage:!1,success:function(){e&&(a.setState({submitted:!0}),s&&s(c))},error:function(){a.setState({submitting:!1})}})},a.renderFeedbackContainer=function(){var e=a.props,t=e.className,n=e.theme,r=a.state.submitted;return p.a.createElement("div",{className:k()("feedback-modal",t,n)},r?a.renderThanks():a.renderFeedBack())},a.state={selectedRating:"",comment:"",submitted:!1,submitting:!1},a}return d()(t,e),c()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.featureId,a=e.onSeen;a&&a(t)}},{key:"renderFeedBack",value:function(){var e=this,t=this.props,a=t.appUtil.assetPath,n=t.title,r=t.name,l=t.desc,i=t.onClose,s=t.theme,c=this.state,o=c.selectedRating,u=c.comment,m=(c.submitted,c.submitting),d="theme-m"===s?"ui-btn ui-btn-primary":k()("btn btn-primary btn-flat",{disabled:m}),h="theme-m"===s?"ui-icon-cross":"icon-cancel-small";return p.a.createElement("div",null,p.a.createElement("div",{className:"cancel-icon",onClick:i},p.a.createElement("i",{className:h})),p.a.createElement("div",{className:"banner-img"},p.a.createElement("img",{src:a("feedback/feedback-banner-"+r+".svg"),className:"feedback-banner"})),p.a.createElement("h1",{className:"feedback-main-title mdT mdB"},n),l&&p.a.createElement("div",{className:"msT msB feedback-description-light"},l),p.a.createElement("div",{className:"ratings"},p.a.createElement("ul",null,N.map(function(t,n){return p.a.createElement(S,{onClick:e.updateSelection,title:t.title,className:N[o],icon:t.icon,key:n,idxVal:n,clickHandler:e.updateSelection,assetPath:a,selected:t.rating===o+1})}))),p.a.createElement("div",{className:"selected-rating"},N[o]&&N[o].text),"number"==typeof o&&p.a.createElement("div",{className:"submit-form"},p.a.createElement("div",{className:"input-area"},p.a.createElement("textarea",{className:"txt-area",placeholder:"Write a comment (optional)",onChange:this.updateComment,value:u})),p.a.createElement("button",{className:d,onClick:this.submitForm.bind(null,!0)},m?"Submitting..":"Submit")))}},{key:"renderThanks",value:function(){return p.a.createElement("div",{className:"feedback-thanks"},p.a.createElement("div",{className:"thanks-icon"},p.a.createElement("i",{className:"icon-thumbs-up"})),p.a.createElement("div",{className:"thanks-title"},"Thanks for your feedback!"))}},{key:"render",value:function(){var e=this.props,t=e.onClose,a=e.isStandalone;return p.a.createElement("div",null,a?this.renderFeedbackContainer():p.a.createElement(v.a,{open:!0,onClose:t,modalClass:"feedback-modal-wrapper"},this.renderFeedbackContainer()))}}]),t}(p.a.Component);T.defaultProps={title:"Love our new upgrade?",name:"default"},T.propTypes={onClose:f.a.func,featureId:f.a.number.isRequired,postUrl:f.a.string.isRequired,theme:f.a.string},t.a=Object(y.a)(T)}}]);
//# sourceMappingURL=https://staging.hackerrank.net/assets/sourcemaps/hackerrank_r_challenge_list_v2-f4427ca0dcd5f9157ef2.js.map