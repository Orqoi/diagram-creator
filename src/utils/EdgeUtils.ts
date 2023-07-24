import { Position } from "reactflow";

function findNearestCoordinate(coordinates, point) {
  return coordinates.reduce((nearest, current) => {
    const nearestDistance = Math.abs(nearest.x - point.x) + Math.abs(nearest.y - point.y);
    const currentDistance = Math.abs(current.x - point.x) + Math.abs(current.y - point.y);
    return currentDistance < nearestDistance ? current : nearest;
  });
}

// this helper function returns the intersection point
// of the line between the center of the intersectionNode and the target node
function getRectangleIntersection(intersectionNode, targetNode) {
  // https://math.stackexchange.com/questions/1724792/an-algorithm-for-finding-the-intersection-point-between-a-center-of-vision-and-a
  const {
    width: intersectionNodeWidth,
    height: intersectionNodeHeight,
    positionAbsolute: intersectionNodePosition,
  } = intersectionNode;
  const {
    width: targetNodeWidth,
    height: targetNodeHeight,
    positionAbsolute: targetNodePosition,
  } = targetNode;
  const targetPosition = targetNode.positionAbsolute;

  const w = intersectionNodeWidth / 2;
  const h = intersectionNodeHeight / 2;

  const x2 = intersectionNodePosition.x + w;
  const y2 = intersectionNodePosition.y + h;
  const x1 = targetPosition.x + targetNodeWidth / 2;
  const y1 = targetPosition.y + targetNodeHeight / 2;

  const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h);
  const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h);
  const a = 1 / (Math.abs(xx1) + Math.abs(yy1));
  const xx3 = a * xx1;
  const yy3 = a * yy1;
  const x = w * (xx3 + yy3) + x2;
  const y = h * (-xx3 + yy3) + y2;

  return { x, y };
}

function getEllipseIntersection(intersectionNode, targetNode) {
  // https://math.stackexchange.com/questions/1724792/an-algorithm-for-finding-the-intersection-point-between-a-center-of-vision-and-a
  const {
    width: intersectionNodeWidth,
    height: intersectionNodeHeight,
    positionAbsolute: intersectionNodePosition,
  } = intersectionNode;
  const {
    width: targetNodeWidth,
    height: targetNodeHeight,
    positionAbsolute: targetNodePosition,
  } = targetNode;
  const targetPosition = targetNode.positionAbsolute;

  const w = intersectionNodeWidth / 2;
  const h = intersectionNodeHeight / 2;

  const x2 = intersectionNodePosition.x + w;
  const y2 = intersectionNodePosition.y + h;
  const x1 = targetPosition.x + targetNodeWidth / 2;
  const y1 = targetPosition.y + targetNodeHeight / 2;

  const dx = x2 - x1;
  const dy = y2 - y1;

  const a = w;
  const b = h;

  // Solve the quadratic equation to find the intersection points
  const A = dx ** 2 / a ** 2 + dy ** 2 / b ** 2;
  const B = (2 * dx * (x1 - x2)) / a ** 2 + (2 * dy * (y1 - y2)) / b ** 2;
  const C = (x1 - x2) ** 2 / a ** 2 + (y1 - y2) ** 2 / b ** 2 - 1;

  const discriminant = B ** 2 - 4 * A * C;

  if (discriminant >= 0) {
    // Calculate the two values of t
    const t1 = (-B + Math.sqrt(discriminant)) / (2 * A);
    const t2 = (-B - Math.sqrt(discriminant)) / (2 * A);

    // Calculate the intersection points
    const intersection1 = { x: x1 + t1 * dx, y: y1 + t1 * dy };
    const intersection2 = { x: x1 + t2 * dx, y: y1 + t2 * dy };

    // Find the nearest intersection point from P3
    const coordinatesArray = [intersection1, intersection2];
    const nearestCoordinate = findNearestCoordinate(coordinatesArray, {
      x: x1,
      y: y1,
    });

    return nearestCoordinate;
  } else {
    // No real intersection points (line does not intersect the ellipse)
    return null;
  }
}

function getDiamondIntersection(intersectionNode, targetNode) {
  const {
    width: intersectionNodeWidth,
    height: intersectionNodeHeight,
    positionAbsolute: intersectionNodePosition,
  } = intersectionNode;
  const {
    width: targetNodeWidth,
    height: targetNodeHeight,
    positionAbsolute: targetNodePosition,
  } = targetNode;

  const w = intersectionNodeWidth / 2;
  const h = intersectionNodeHeight / 2;

  const x2 = intersectionNodePosition.x + w;
  const y2 = intersectionNodePosition.y + h;
  const x1 = targetNodePosition.x + targetNodeWidth / 2;
  const y1 = targetNodePosition.y + targetNodeHeight / 2;

  const dx = x2 - x1;
  const dy = y2 - y1;

  // TODO: Fix sizing

  const a = w - 2;
  const b = h - 3;

  const xMin = intersectionNodePosition.x
  const xMax = xMin + intersectionNodeWidth
  const yMin = intersectionNodePosition.y
  const yMax = yMin + intersectionNodeHeight

  // Define the parameters of the line
  const m = (dx !== 0) ? dy / dx : 1; // Avoid division by zero
  const c = y2 - m * x2;

  // Calculate the intersection points between the line and the diamond
  const intersectionPoints : any = [];

  // Calculate x +ve, y +ve
  if (dx !== 0) {
    let s1 = ((a * b) + (a * y2) - (a * c) + (b * x2)) / (a * m + b);
  let t1 = m * s1 + c;
  const allowance = 0.0000001
  if (Math.abs((s1 - x2) / a) + Math.abs((t1 - y2) / b) <= 1 + allowance) {
    intersectionPoints.push({ x: s1, y: t1 });
  }

  // Calculate x +ve, y -ve
  let s2 = ((a * b) - (a * y2) + (a * c) + (b * x2)) / (-a * m + b);
  let t2 = m * s2 + c;
  if (Math.abs((s2 - x2) / a) + Math.abs((t2 - y2) / b) <= 1 + allowance) {
    intersectionPoints.push({ x: s2, y: t2 });
  }

  // Calculate x -ve, y +ve
  let s3 = ((a * b) + (a * y2) - (a * c) - (b * x2)) / (a * m - b);
  let t3 = m * s3 + c;
  if (Math.abs((s3 - x2) / a) + Math.abs((t3 - y2) / b) <= 1 + allowance) {
    intersectionPoints.push({ x: s3, y: t3 });
  }

  // Calculate x -ve, y -ve
  let s4 = ((a * b) - (a * y2) + (a * c) - (b * x2)) / (-a * m - b);
  let t4 = m * s4 + c;
  if (Math.abs((s4 - x2) / a) + Math.abs((t4 - y2) / b) <= 1 + allowance) {
    intersectionPoints.push({ x: s4, y: t4 });
  }
  } else {
    intersectionPoints.push({x: x2, y: yMin })
    intersectionPoints.push({x: x2, y: yMax })
  }

  return findNearestCoordinate(intersectionPoints, {x: x1, y: y1});
}

enum DiamondShapes {
  "regularRelation",
  "weakRelation"
}

enum RectangleShapes {
  "weak",
  "regular",
  "aggregate"
}

enum EllipseShapes {
  "regularAttribute",
  "primaryAttribute",
  "multiValuedAttribute",
  "derivedAttribute",
  "compositeAttribute"
}

function getHierarchyIntersection(intersectionNode, targetNode) {
  const {
    width: intersectionNodeWidth,
    height: intersectionNodeHeight,
    positionAbsolute: intersectionNodePosition,
  } = intersectionNode;
  return { x: intersectionNodePosition.x + (intersectionNodeWidth / 2), y: intersectionNodePosition.y}

}

function getNodeIntersection(source, target) {
  const type = source.type
  if (type in DiamondShapes) {
    return getDiamondIntersection(source, target)
  } else if (type in EllipseShapes) {
    return getEllipseIntersection(source, target)
  } else if (type in RectangleShapes) {
    return getRectangleIntersection(source, target)
  } else if (type === 'hierarchy') {
    return getHierarchyIntersection(source, target)
  } else {
    throw new Error("Unrecognised Node Type")
  }
}

// returns the parameters (sx, sy, tx, ty, sourcePos, targetPos) you need to create an edge
export function getEdgeParams(source, target) {
  const sourceIntersectionPoint = getNodeIntersection(source, target);
  const targetIntersectionPoint = getNodeIntersection(target, source);

  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y
  };
}
