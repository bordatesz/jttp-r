function toggleModContent(type) {
    var module = AJS.$("#" + type + "Module");
    var icon  = AJS.$(".mod-header .aui-icon", module);
    
    AJS.$(".mod-content", module).toggle(0, function() {
        module.toggleClass("collapsed");
        
        if(module.hasClass("collapsed")) {
            icon.removeClass("aui-iconfont-expanded").addClass("aui-iconfont-collapsed");
        } else {
            icon.removeClass("aui-iconfont-collapsed").addClass("aui-iconfont-expanded");
        }
        
    });
}

function changeFilterType(type) {
    var searchWrap = AJS.$(".search-wrap");
    var formType = AJS.$("input[name=formType]");
    
    formType.attr("value", type);
    
    if(type === "basic") {
        searchWrap.removeClass("filter").addClass("basic");
    } else {
        searchWrap.removeClass("basic").addClass("filter");
    }
}