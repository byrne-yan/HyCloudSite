FlowRouter.route('/',{
    action: function(params, queryParams) {
        BlazeLayout.render("layout", { top: 'header', main: 'sharebj'} );
    },
    name: 'home'
});

FlowRouter.route('/downloads/latest?platform',{
    triggersEnter:[function(context, redirect) {
        redirect(getDownloadUrl());
    }],
    action:function(params, queryParams){

    },
    name:'downloads'
});
//FlowRouter.route('/blog/:postId', {
//    triggersEnter: [trackRouteEntry],
//    action: function(params, queryParams) {
//        console.log("Params:", params);
//        console.log("Query Params:", queryParams);
//        //BlazeLayout.render("mainLayout", {area: "blog"});
//    }，
//
//    triggersExit: [trackRouteClose]，
//
//});



FlowRouter.notFound = {
    action: function(a) {
        console.log('Not Found',a);
    }
};