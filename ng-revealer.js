conyers.ng.directive('revealer', ['$log', function ($log) {

    var active = false,
    activeClsName = 'active';

    function Revealer (btn, hiddenText) {
        this.btn = btn;
        this.hiddenText = hiddenText;

        this.activateState();
    }

    Revealer.prototype = {

        show: function () {
            this.hiddenText.addClass(activeClsName);
            this.btn.addClass(activeClsName);
        },

        hide: function () {
            this.hiddenText.removeClass(activeClsName);
            this.btn.removeClass(activeClsName);
        },

        activateState: function () {
            var _this = this;

            this.btn.on('click', function (e) {
                e.preventDefault();
                if (active === false) {
                    _this.show();
                    _this.replaceActiveHtml();
                } else {
                    _this.hide();
                    _this.removeActiveHtml();
                }
                active = !active;
            });
        },

        replaceActiveHtml: function() {
            this.btn.html('<i class="fa fa-minus"></i> Read Less');
        },

        removeActiveHtml: function() {
            this.btn.html('<i class="fa fa-plus"></i> Read More');
        }

    }

    return {
        restrict: 'A',
        link: function (scope, element) {
            $log.info('[readMore] init');

            var hidden = angular.element('.inactive', element),
            btn = angular.element('.btn-readMore');

            new Revealer(btn, hidden);
        }
    }

}]);
