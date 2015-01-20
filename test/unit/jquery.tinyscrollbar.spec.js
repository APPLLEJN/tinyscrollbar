jasmine.getFixtures().fixturesPath = "test/fixtures";

describe("When jquery.tinyscrollbar is called ", function ()
{
    var $container  = null
    ,   $container1 = null
    ,   $container2 = null
    ;

    beforeEach(function()
    {
        loadFixtures("containers.html");

        $container  = $(".container");
        $container1 = $("#container1");
        $container2 = $("#container2");
    });

    it("should be chainable.", function()
    {
        $container1.tinyscrollbar().addClass("test");

        expect($container1).toHaveClass("test");
    });

    it("should create a seperate instance for each element in the HTMLCollection.", function()
    {
        $containers.tinyscrollbar();

        expect($("#container").data("plugin_tinyscrollbar")).toBeTruthy();
        expect($("#container2").data("plugin_tinyscrollbar")).toBeTruthy();
    });

    describe("without any options and there is content", function()
    {
        it("should have a style attr present on the scrollbar div.", function()
        {
            $container1.tinyscrollbar()

            expect($container1.find("scrollbar")).toHaveAttr('style');
        });
    });

    describe("with { thumbSize : 21 } and there is content", function()
    {
        it("should not have set thumb height to more then 21px.", function()
        {
            $container1.tinyscrollbar()

            expect($container1.find("scrollbar")).toHaveAttr('style');
        });
    });

    describe("with { trackSize : 50 } and there is content", function()
    {
        it("should not have set track height to more then 50px.", function()
        {
            $container1.tinyscrollbar()

            expect($container1.find("scrollbar")).toHaveAttr('style');
        });
    });

    describe("without any options and there is no content", function()
    {
        it("should have a disable class.", function()
        {
            $container1.tinyscrollbar()

            expect($container1).toHaveClass("disable");
        });

        it("should not become active after a call to the update() method.", function()
        {
            $container1.tinyscrollbar()

            expect($container1).toHaveClass("disable");
        });
    });

});