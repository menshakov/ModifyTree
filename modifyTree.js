/**
 * @param options
 * @constructor
 */
"use strict";

function ModifyTree(options){
    if(options.container == null){return;}

    this._container = options.container;
    this._itemClass = options.itemClass || 'item';
    this._blockTag = options.blockTag || 'div';
    this._blockClass = options.blockClass || '';

    this._create();
}

ModifyTree.prototype._create = function() {
    var contentNode = document.createElement('div');
    var tmpBlockNode = this._createBlock(this._blockTag, this._blockClass);

    for (var i = 0; i < this._container.childElementCount; i++){

        var currentElement = this._container.children[i];

        if (!this._hasItemClass(currentElement)) {
            this._addCloneElementToNode(currentElement, contentNode);
            continue;
        }

        this._addCloneElementToNode(currentElement, tmpBlockNode);

        if(this._lastStraightElement(currentElement)){
            contentNode.appendChild(tmpBlockNode);
            tmpBlockNode = this._createBlock(this._blockTag, this._blockClass);
        }
    }

    this._container.innerHTML = contentNode.innerHTML;
};

ModifyTree.prototype._hasItemClass = function(el) {
    return el.classList.contains(this._itemClass);
};

ModifyTree.prototype._addCloneElementToNode = function(el, node) {
    node.appendChild(el.cloneNode(true));
};

ModifyTree.prototype._lastStraightElement = function(el) {
    return (el == this._container.lastElementChild || !this._hasItemClass(el.nextElementSibling));
};

ModifyTree.prototype._createBlock = function(tag, className) {
    var block = document.createElement(tag);
    block.setAttribute('class', className);

    return block;
};
