webpackJsonp([9],{248:function(a,s,e){var t,o,i={};e(249),t=e(251),o=e(252),a.exports=t||{},a.exports.__esModule&&(a.exports=a.exports.default);var d="function"==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports;o&&(d.template=o),d.computed||(d.computed={}),Object.keys(i).forEach(function(a){var s=i[a];d.computed[a]=function(){return s}})},249:function(a,s,e){var t=e(250);"string"==typeof t&&(t=[[a.id,t,""]]);e(22)(t,{});t.locals&&(a.exports=t.locals)},250:function(a,s,e){s=a.exports=e(3)(),s.push([a.id,".pay-money[_v-49a849c5]{margin:.4rem 0;border:1px solid #e1e1e1;border-width:1px 0;background:#fff}.pay-money span[_v-49a849c5]{color:#f15353}.pay-money .all-amount[_v-49a849c5]{font-size:1.2rem}.pay-moneys span[_v-49a849c5]{font-size:.8rem}.pay-moneys span b[_v-49a849c5]{color:#f15353;font-size:1.2rem;font-weight:400}",""])},251:function(a,s,e){(function(a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=e(31);s.default={vuex:{actions:{updateAppHeader:t.updateAppHeader}},route:{data:function a(){var s=this;this.updateAppHeader({type:2,content:"订单详情"});var a={order_sn:this.$route.params.id};this.$http.post("/Order/Info.json",a).then(function(a){a=a.json(),1===a.status?s.$set("detail",a.data):alert(a.msg)})}},ready:function(){a(".order-hd").on("click",function(){a(this).toggleClass("on")})},data:function(){return{detail:""}}}}).call(s,e(24))},252:function(a,s){a.exports=' <link rel=stylesheet href=/public/css/order.css _v-49a849c5=""> <div class=container _v-49a849c5=""> <div class=order-list _v-49a849c5=""> <div class=item _v-49a849c5="">订单号<span _v-49a849c5="">{{detail.order_sn}}</span></div> <div class=item _v-49a849c5="">下单日期<span _v-49a849c5="">{{detail.add_date}}</span></div> <div class=item _v-49a849c5="">订单状态<span _v-49a849c5="">{{detail.order_name}}</span></div> </div> <div class="order-list pay-money" _v-49a849c5=""> <div class=item _v-49a849c5="">商品总金额<span class=all-amount _v-49a849c5="">{{detail.goods_amount}}</span></div> <div class=item _v-49a849c5="">+运费<span _v-49a849c5="">{{detail.shipping_fee}}</span></div> <div class=item _v-49a849c5="">-折扣金额<span _v-49a849c5="">{{detail.discount}}</span></div> <div class=item _v-49a849c5="">-优惠券<span _v-49a849c5="">{{detail.bonus}}</span></div> </div> <div class="order-list pay-moneys" _v-49a849c5=""> <div class=item _v-49a849c5=""><span _v-49a849c5="">支付金额: <b _v-49a849c5="">{{detail.order_amount}}</b></span></div> </div> <dl class=order-item _v-49a849c5=""> <dt class=order-hd _v-49a849c5=""> <span _v-49a849c5="">查看商品详情</span> <i class="font icon-arrow-bottom" _v-49a849c5=""></i> </dt> <dd _v-49a849c5=""> <ul class=goods-list _v-49a849c5=""> <li v-for="item in detail.goods_list" _v-49a849c5=""> <a class=goods-img v-link="{ name: \'goodsDetail\', params: {id: item.goods_id}}" _v-49a849c5=""><img :src=item.goods_thumb alt="" _v-49a849c5=""></a> <div class=goods-detail _v-49a849c5=""> <p _v-49a849c5=""><span class=fl _v-49a849c5="">{{item.goods_name}}</span><span _v-49a849c5="">￥{{item.goods_price}}</span></p> <p _v-49a849c5=""><del _v-49a849c5="">￥{{item.market_price}}</del></p> <p _v-49a849c5="">x{{item.goods_number}}</p> </div> </li> </ul> </dd> </dl> </div> '}});