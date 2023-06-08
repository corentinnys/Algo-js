const a = {x: 1, y: 1};
const b = {x: 3, y: 1};
const distanceBetweenPoints = (a = {}, b = {}) => {
    let distance = 0;
    let x1 = a.x,
        x2 = b.x,
        y1 = a.y,
        y2 = b.y;
    distance = Math.sqrt((x2 - x1) * 2 + (y2 - y1) * 2);
    return distance;
};
console.log(distanceBetweenPoints(a, b));