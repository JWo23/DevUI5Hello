sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "Master";
	
	Opa5.createPageObjects({
		onTheViewMasterPage: {

			actions: {},

			assertions: {

				iShouldSeeTheCarousel: function () {
					return this.waitFor({
						id: "funId001",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " -> Carousel is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " Nie ma karuseli!"
					});

										
				}
			}
		}
	});

});
