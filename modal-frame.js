function appendModalStructure(modalId, toElement)
{
    if (typeof modalId === "undefined" || modalId === null) {
        modalId = 'modalFrame';
    }

    if (typeof toElement === "undefined" || toElement === null) {
        toElement = document.body;
    } else {
        toElement = $(toElement).first();
    }

    if ( $('#' + modalId).length == 0 ) {
        h =  '<div class="modal" id="'+ modalId +'">';
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

        $(h).appendTo(toElement);
    }
}

appendModalStructure();

var _modal_show = $.fn.modal.Constructor.prototype.show;
$.fn.modal.Constructor.prototype.show = function() {

    // console.log('%o',  this.$element);
    relatedTarget = arguments[0];
    if ( dataFrameSrc = $(relatedTarget).attr('data-frame-src') ) {
        hframe = '<iframe style="border:0" width="100%" height="350" src="' + dataFrameSrc + '"></iframe>';
        this.$element.find('.modal-body').html( hframe );
    }

    if ( dataModalTitle = $(relatedTarget).attr('data-modal-title') ) {
        this.$element.find('.modal-title').html( dataModalTitle );
    }

    _modal_show.apply(this, arguments);
};