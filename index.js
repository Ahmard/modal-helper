module.exports = (function () {
    function ModalHelperEvent(_$modal) {
        this.on = (eventName, listener) => _$modal.on(eventName, listener);
        this.off = (eventName) => _$modal.off(eventName);
        this.once = (eventName, listener) => _$modal.one(eventName, listener);
        this.one = (eventName, listener) => this.once(eventName, listener);

        /**
         * This event will fire when modal is showing
         *
         * @param listener
         * @param fireOnce
         */
        this.onShow = function (listener, fireOnce = false) {
            if (fireOnce) this.once('show.bs.modal', listener);
            this.on('show.bs.modal', listener);
        };

        /**
         * This event will fire when modal is shown
         *
         * @param listener
         * @param fireOnce
         */
        this.onShown = function (listener, fireOnce = false) {
            if (fireOnce) this.once('shown.bs.modal', listener);
            this.on('shown.bs.modal', listener);
        };

        /**
         * This event will fire when modal is hiding
         *
         * @param listener
         * @param fireOnce
         */
        this.onHide = function (listener, fireOnce = false) {
            if (fireOnce) this.once('hide.bs.modal', listener);
            this.on('hide.bs.modal', listener);
        };

        /**
         * This event will fire when modal is hidden
         *
         * @param listener
         * @param fireOnce
         */
        this.onHidden = function (listener, fireOnce = false) {
            if (fireOnce) this.once('hidden.bs.modal', listener);
            this.on('hidden.bs.modal', listener);
        };

        /**
         * This event will fire when modal is hide prevented
         *
         * @param listener
         * @param fireOnce
         */
        this.onHidePrevented = function (listener, fireOnce = false) {
            if (fireOnce) this.once('hidePrevented.bs.modal', listener);
            this.on('hidePrevented.bs.modal', listener);
        };

        this.offShow = () => this.off('show.bs.modal');
        this.offShown = () => this.off('shown.bs.modal');
        this.offHide = () => this.off('hide.bs.modal');
        this.offHidden = () => this.off('hidden.bs.modal');
        this.offHidePrevented = () => this.off('hidePrevented.bs.modal');
    }

    function ModalHelper(_$modal) {
        const _event = new ModalHelperEvent(_$modal);
        let $headerElement, $footerElement, $bodyElement, $dialogElement;
        let options = {}, areOptionsApplied = false;

        const prepareModal = function () {
            if (!areOptionsApplied) {
                _$modal.attr(options);
                areOptionsApplied = true;
            }
        };

        this.getEvent = () => _event;
        this.handleUpdate = () => _$modal.modal('handleUpdate');

        this.getHeaderElement = function () {
            if (!$headerElement) {
                return $headerElement = _$modal.find('.modal-header');
            }

            return $headerElement;
        };

        this.getBodyElement = function () {
            if (!$bodyElement) {
                return $bodyElement = _$modal.find('.modal-body');
            }

            return $bodyElement;
        };

        this.getFooterElement = function () {
            if (!$footerElement) {
                return $footerElement = _$modal.find('.modal-footer');
            }

            return $footerElement;
        };

        this.getDialogElement = function () {
            if (!$dialogElement) {
                return $dialogElement = _$modal.find('.modal-dialog');
            }

            return $dialogElement;
        };

        this.setBody = function (html) {
            this.getBodyElement().html(html);
            return this;
        };

        this.setHeader = function (html) {
            this.getHeaderElement().html(html);
            return this;
        };

        this.setTitle = function (html) {
            this.getHeaderElement()
                .find('.modal-title')
                .html(html);

            return this;
        };

        this.setFooter = function (html) {
            this.getFooterElement().html(html);
            return this;
        };

        this.setScrollable = function (scrollable = false) {
            if (scrollable) this.getDialogElement().addClass('modal-dialog-scrollable');
            return this;
        };

        this.setVerticallyCentered = function () {
            this.getDialogElement().addClass('modal-dialog-centered');
            return this;
        };

        this.setSize = function (size) {
            switch (true) {
                case 'small' === size.toLowerCase():
                    size = 'sm';
                    break;
                case 'large' === size.toLowerCase():
                    size = 'lg';
                    break;
                case 'extra-large' === size.toLowerCase() || 'extralarge' === size.toLowerCase():
                    size = 'xl';
                    break;
            }

            this.getDialogElement().addClass('modal-' + size);
            return this;
        };

        this.setFullScreen = function (size) {
            switch (true) {
                case 'small' === size.toLowerCase():
                    size = 'sm';
                    break;
                case 'medium' === size.toLowerCase():
                    size = 'md';
                    break;
                case 'large' === size.toLowerCase():
                    size = 'lg';
                    break;
                case 'extra-large' === size.toLowerCase() || 'extralarge' === size.toLowerCase():
                    size = 'xl';
                    break;
                case 'extra-extra-large' === size.toLowerCase() || 'extraextralarge' === size.toLowerCase():
                    size = 'xxl';
                    break;
            }

            this.getDialogElement().addClass('modal-fullscreen-' + size);
            return this;
        };

        this.setOption = function (name, value = null) {
            areOptionsApplied = false;

            if (!value && 'object' === typeof name) {
                Object.keys(name).forEach((key) => {
                    options[key] = name[key];
                });
            }

            return this;
        };

        this.show = function () {
            prepareModal();
            _$modal.modal('show');
            return this;
        };

        this.hide = function () {
            _$modal.modal('hide');
            return this;
        };
    }

    ModalHelper.create = (modal) => new ModalHelper(modal);

    return ModalHelper;
})();