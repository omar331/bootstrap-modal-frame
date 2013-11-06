if ( $('#modalFrame').length == 0 ) {
    h =  '<div class="modal" id="modalFrame">';
    h += '  <div class="modal-dialog">';
    h += '    <div class="modal-content">';
    h += '      <div class="modal-header">';
    h += '         <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
    h += '         <h4 class="modal-title"></h4>';
    h += '      </div>';
    h += '      <div class="modal-body"></div>';
    h += '    </div>';
    h += '  </div>';
    h += '</div>';

    $(h).appendTo(document.body);
}

var _modal_show = $.fn.modal.Constructor.prototype.show;
$.fn.modal.Constructor.prototype.show = function() {
//    console.log('%o',  this.$element);
    relatedTarget = arguments[0];
    if ( dataFrameSrc = $(relatedTarget).attr('data-frame-src') ) {
        hframe = '<iframe style="border:0" width="100%" src="' + dataFrameSrc + '"></iframe>';
        this.$element.find('.modal-body').html( hframe );
    }

    if ( dataModalTitle = $(relatedTarget).attr('data-modal-title') ) {
        this.$element.find('.modal-title').html( dataModalTitle );
    }

    _modal_show.apply(this, arguments);
};
