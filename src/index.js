
export const LEFT = 'left';
export const RIGHT = 'right';
export const TOP = 'top';
export const BOTTOM = 'bottom';

let getBiggerDistance = function(distA, distB, constA, constB) {
    return distA >= distB ? [distA, constA, distB, constB] : [distB, constB, distA, constA];
}

export var getPosition = function(elemPosition, viewportHeight, viewportWidth){

    let distTop = elemPosition.top;
    let distBottom = viewportHeight - elemPosition.bottom;
    let distLeft = elemPosition.left;
    let distRight = viewportWidth - elemPosition.right;

    let [distanceTopBottom, POS_TOP_BOTTOM] = getBiggerDistance(distTop, distBottom, TOP, BOTTOM);
    let [distanceLeftRight, POS_LEFT_RIGHT] = getBiggerDistance(distLeft, distRight, LEFT, RIGHT);

    let [ , primary, , secondary] = getBiggerDistance(distanceTopBottom, distanceLeftRight, POS_TOP_BOTTOM, POS_LEFT_RIGHT);

    return {primary, secondary};
};
