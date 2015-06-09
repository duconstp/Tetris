
angular.module('angularApp.factories')
    .factory('gameConstants', ['TIC_PER_SEC', function gameConstantsFactory(TIC_PER_SEC) {
        "use strict";
        var config = {};
        config.reset = function reset(){
            this.columnCount = 6;
            this.displayedRowCount = 10;
            this.hiddenRowCount = 4;//MIN 1 !
            this.pixelPerBox = 50;
            this.swapPerTic = 12 *60/TIC_PER_SEC;
            this.fallSpeedPerTic = 7*60/TIC_PER_SEC;
            this.disapearSpeedPerTic = 2*60/TIC_PER_SEC;
            this.groundSpeedPerTic = 0.07*60/TIC_PER_SEC;
            this.groundUpSpeedPerTic = 3*60/TIC_PER_SEC;
            this.groundAccelerationPerTic = 0.02 / TIC_PER_SEC / 60;
            this.fallPeriod = 500*60/TIC_PER_SEC;
            this.lostThreshold = ((this.displayedRowCount + this.hiddenRowCount) * this.pixelPerBox);
            this.startRows = this.displayedRowCount - 4;
        };

        config.load = function load(mode){
            this.reset();
            if (mode === "sandbox") {
                this.groundSpeedPerTic = 0;
                this.fallPeriod = 0;
                this.startRows = this.displayedRowCount + this.hiddenRowCount;
                this.groundAccelerationPerTic = 0;
            }
            else if (mode === "fixed") {
                this.groundUpSpeedPerTic = 0;
                this.groundSpeedPerTic = 0;
                this.fallPeriod = 0;
                this.groundAccelerationPerTic = 0;
            }
            else if (mode === "raining") {
                this.groundSpeedPerTic = 0;
                this.fallPeriod = 300*60/TIC_PER_SEC;
                this.groundAccelerationPerTic = 0;
            }
            else if (mode === "large") {
                this.columnCount = 10;
            }
        };

        return config;
    }]);
