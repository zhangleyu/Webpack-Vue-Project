webpackJsonp([2],{188:function(i,d,t){var a,e,o={};t(189),a=t(191),e=t(192),i.exports=a||{},i.exports.__esModule&&(i.exports=i.exports.default);var r="function"==typeof i.exports?i.exports.options||(i.exports.options={}):i.exports;e&&(r.template=e),r.computed||(r.computed={}),Object.keys(o).forEach(function(i){var d=o[i];r.computed[i]=function(){return d}})},189:function(i,d,t){var a=t(190);"string"==typeof a&&(a=[[i.id,a,""]]);t(22)(a,{});a.locals&&(i.exports=a.locals)},190:function(i,d,t){d=i.exports=t(3)(),d.push([i.id,".brand_wrap[_v-d76c9542]{width:100%;overflow:hidden;padding:0 .8rem 1rem;background:#fff}.brand_wrap li[_v-d76c9542]{width:100%;overflow:hidden;border-top:1px solid #e9edf1}.brand_wrap li[_v-d76c9542]:nth-child(0){border-top:0}.brand_wrap li h2[_v-d76c9542]{font-size:.9rem;color:#000;margin:.8rem 0 1.2rem}.brand-wrap-img[_v-d76c9542]{display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex}.brand-wrap-img>a[_v-d76c9542]{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-flex:1;display:block}.brand-wrap-img img[_v-d76c9542]{width:95.8%;max-width:192px}.brand_wrap li p[_v-d76c9542]{padding:1rem 0;font-size:.8rem;color:#a6a6a6;text-align:right}.brand-video video[_v-d76c9542]{width:100%;display:block}.brand-video p[_v-d76c9542]{line-height:2;padding:0 .8em;background:#2d2d2d;color:#fff;text-align:right}.brand-video-list dt[_v-d76c9542]{padding:.8rem;color:#222}.brand-video-list dd[_v-d76c9542]{padding-bottom:1em;overflow-x:auto;-webkit-overflow-scrolling:touch}.brand-video-list dd ul[_v-d76c9542]{padding:0 .8em;display:table;white-space:nowrap}.brand-video-list dd li[_v-d76c9542]{width:10em;display:inline-block;margin:0 2px}.brand_wrap ul li[_v-d76c9542]:first-child{border-color:#000}",""])},191:function(i,d,t){"use strict";function a(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(d,"__esModule",{value:!0});var e=t(151),o=a(e);d.default={ready:function(){var i=this;this.$http.post("/Brand/brandVideoList.json").then(function(d){d=d.json(),1==d.status&&(i.videoList=d.data,i.video=d.data[0])}),this.findBrandList()},data:function(){return{video:{},videoList:"",loading:!1,loadTry:0,loadingText:"加载中...",page:1,brandList:[]}},methods:{switchVideo:function(i){this.video=this.videoList[i]},findBrandList:function(){var i=this;this.loading=!0;var d={page:this.page};this.$http.post("/Brand/brand_list.json",d).then(function(d){if(d=d.json(),1==d.status){var t=!0,a=!1,e=void 0;try{for(var r,n=(0,o.default)(d.data);!(t=(r=n.next()).done);t=!0){var l=r.value;i.brandList.push(l)}}catch(i){a=!0,e=i}finally{try{!t&&n.return&&n.return()}finally{if(a)throw e}}i.$nextTick(function(){i.loading=!1})}0==d.status&&(i.loadingText="没有更多了",i.loading=!0)},function(){i.loadTry++,i.loading=!1,i.loadTry>=3&&(i.loading=!0)})},loadMore:function(){this.page+=1,this.findBrandList()}}}},192:function(i,d){i.exports=' <div _v-d76c9542=""> <div class=brand-video _v-d76c9542=""> <video controls="" poster={{video.file_url}} :src=video.video_url _v-d76c9542=""></video> </div> <dl class=brand-video-list _v-d76c9542=""> <dt _v-d76c9542="">媒体快讯 LATEST NEWS</dt> <dd _v-d76c9542=""> <ul _v-d76c9542=""> <li v-for="item in videoList" @click=switchVideo($index) _v-d76c9542=""><img :src=item.file_url alt="" _v-d76c9542=""></li> </ul> </dd> </dl> <ul class=brand_wrap v-infinite-scroll=loadMore() infinite-scroll-disabled=loading _v-d76c9542=""> <li v-for="item in brandList" _v-d76c9542=""> <h2 _v-d76c9542=""><a v-link="{ name: \'brandDetail\', params: {id: item.id} }" _v-d76c9542="">{{item.short_title}}</a></h2> <div class=brand-wrap-img _v-d76c9542=""> <a v-link="{ name: \'brandDetail\', params: {id: item.id} }" _v-d76c9542=""><img :src=item.thumb_one alt="" _v-d76c9542=""></a> <a v-link="{ name: \'brandDetail\', params: {id: item.id} }" _v-d76c9542=""><img :src=item.thumb_two alt="" _v-d76c9542=""></a> <a v-link="{ name: \'brandDetail\', params: {id: item.id} }" _v-d76c9542=""><img :src=item.thumb_three alt="" _v-d76c9542=""></a> </div> <p _v-d76c9542="">{{item.create_date}}</p> </li> </ul> <div class=load-more _v-d76c9542="">{{loadingText}}</div> </div> '}});