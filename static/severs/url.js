var RURL = {
    getAdvList: "api/cms/core/getAdvList.do",/*获取广告列表*/
    getCatList: "api/article/sales/data_cat_list.do",/*获取文章分类列表*/
    getArticleList: "api/article/sales/article_list.do",/*获取文章列表*/
    getRecomentList: "api/article/sales/recoment_list.do",/*获取知识推荐列表*/
    getArticleDetail: "api/article/sales/detailapi.do",/*获取文章详情*/
    share: "api/article/sales/share.do",/*分享文章*/
    commentList:"api/article/sales/comment_list.do",/*评论列表*/
    addEvaluate:"api/article/sales/comment.do", /*添加评论*/
    createQuestion: "api/article/ask/createQuestion.do",/*提出问题，并创建订单*/
    getPaymentList: "api/cms/payment/getPaymentList.do",/*获取支付方式*/

    //http://192.168.0.109:8080/article-web/validcode.do?vtype=memberlogin

    validcode:"validcode.do?vtype=memberlogin",
    is_dietitian:"api/article/ask/is_dietitian.do",
    qlist:"api/article/ask/qlist.do",
    qlist_no_complete:"api/article/ask/qlist_no_complete.do",
    question_detail:"api/article/ask/question_detail.do",
    getAsk:"api/article/ask/getAsk.do",
    myQuestionDoc:"api/article/ask/my_question_doc.do",
    anwser:"api/article/ask/anwser.do",
    ask_type_list:"api/article/ask/ask_type_list.do",
    logistics:"http://v.juhe.cn/exp/index",

    getGoodsDetail: "api/shop/goods/getGoodsMessageById.do",/*获取商品详情*/
    addProduct: "api/shop/cart/add-product.do",/*将一个商品添加至购物车(有规格)*/
    addGoods: "api/shop/cart/add-goods.do",/*将一个商品添加至购物车（无规格）*/
    getCartList: "api/shop/cart/cart_list.do",/*获取购物车商品列表*/
    update_num: 'api/shop/cart/update-num.do',/*更新购物车中商品的数量*/
    deleteCarts: 'api/shop/cart/deleteCarts.do',/*购物车删除商品*/
    check_product: 'api/shop/cart/check-product.do',/*选择商品进行下单*/
    check_all: 'api/shop/cart/check-all.do',/*选择全部商品下单*/

    cart_check: "api/shop/cart/cart_check.do",/*获取当前购物车确认商品（确认订单）*/
    getAddrList: 'api/shop/member-address/list.do',/*获取会员地址*/
    addAddr: 'api/shop/member-address/add.do',/*添加一个会员地址*/
    editAddr: 'api/shop/member-address/edit.do',/*修改会员地址*/
    delAddr: 'api/shop/member-address/delete.do',/*删除会员的一个收货地址*/
    setDefaultAddr: 'api/shop/member-address/set-def-address.do',/*设置当前地址为默认*/

    getOrderList: "api/shop/order/member_order_list.do",/*我的订单列表*/
    cancelOrder: "api/shop/order/cancel.do",/*取消订单*/
    rogConfirm: "api/shop/order/rog-confirm.do",/*确认收货*/

    courierCompany:"https://www.kuaidi100.com/autonumber/autoComNum",//根据快递单号查询快递公司
    logistics:"https://www.kuaidi100.com/query",//获取获物流信息这里以后需要更改

    productList:"api/shop/goods/getCatList.do",/*获取商品分类*/
    getTagList:"api/shop/goods/getTagList.do",/*标签列表*/
    getGoodsListByTag:"api/shop/goods/getGoodsListByTag.do", /*根据标签和分类查找标签商品列表*/
    search:"api/shop/goods/search.do",/*商品搜索*/
    addOrder:"api/shop/order/create.do",/*创建订单*/

    uploadPic:"api/base/upload-image/upload-image.do",/*上传图片*/
    goodsEvaluate:"api/shop/commentApi/add.do"  /*商品评价*/
}
