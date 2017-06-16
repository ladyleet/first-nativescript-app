"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var UtilityModule = require("utils/utils");
var SocialShare = require("nativescript-social-share");
var JeopardyComponent = (function () {
    function JeopardyComponent(route) {
        this.route = route;
    }
    JeopardyComponent.prototype.ngOnInit = function () {
        // const id = +this.route.snapshot.params["id"];
    };
    JeopardyComponent.prototype.openPage = function () {
        UtilityModule.openUrl("https://twitter.com/ladyleet");
    };
    JeopardyComponent.prototype.socialShare = function (text) {
        SocialShare.shareText(text);
    };
    return JeopardyComponent;
}());
JeopardyComponent = __decorate([
    core_1.Component({
        selector: "ns-jeopardy",
        moduleId: module.id,
        templateUrl: "./jeopardy.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], JeopardyComponent);
exports.JeopardyComponent = JeopardyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVvcGFyZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiamVvcGFyZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCwyQ0FBOEM7QUFDOUMsdURBQXlEO0FBT3pELElBQWEsaUJBQWlCO0lBRTFCLDJCQUNZLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzdCLENBQUM7SUFFTCxvQ0FBUSxHQUFSO1FBQ0ksZ0RBQWdEO0lBRXBELENBQUM7SUFDRCxvQ0FBUSxHQUFSO1FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO0lBQ3pELENBQUM7SUFDRCx1Q0FBVyxHQUFYLFVBQVksSUFBWTtRQUNwQixXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtLQUMzQyxDQUFDO3FDQUlxQix1QkFBYztHQUh4QixpQkFBaUIsQ0FnQjdCO0FBaEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IFV0aWxpdHlNb2R1bGUgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tICduYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtamVvcGFyZHlcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vamVvcGFyZHkuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSmVvcGFyZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuXG4gICAgfVxuICAgIG9wZW5QYWdlKCkge1xuICAgICAgICBVdGlsaXR5TW9kdWxlLm9wZW5VcmwoXCJodHRwczovL3R3aXR0ZXIuY29tL2xhZHlsZWV0XCIpXG4gICAgfVxuICAgIHNvY2lhbFNoYXJlKHRleHQ6IHN0cmluZykge1xuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQodGV4dClcbiAgICB9XG59XG4iXX0=