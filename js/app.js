angular
.module("grumblr", ["ui.router"])
.config(["$stateProvider", RouterFunction])
.controller("GrumbleIndexController", [GrumbleIndexControllerFunction])
.controller("GrumbleShowController", ["$stateParams", GrumbleShowControllerFunction])

function RouterFunction($stateProvider){
  // console.log("working")
  $stateProvider
  .state("grumbleIndex", {
    url:"/:grumbles",
    controller: "GrumbleIndexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/index.html"
  })
  .state("grumbleShow", {
    url:"/grumbles/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "GrumbleShowController",
    controllerAs: "vm"
  })
}

function GrumbleIndexControllerFunction(){
  // console.log("in controller")
  this.grumbles = grumbles;
}

function GrumbleShowControllerFunction($stateParams){
  console.log($stateParams)
  this.grumble = grumbles[$stateParams.id]
}
