import anime from 'animejs';
import React, { useEffect, useRef } from 'react';

interface Props {
  svgPaths: string[];
}

interface Coordinate {
  x: number;
  y: number;
}

interface BezierCurve {
  point: Coordinate;
  curve: { first: Coordinate; second: Coordinate };
}

const getCoordinatesFromPath = (path: SVGPathElement): BezierCurve[] => {
  const points = path
    .getAttribute('d')
    ?.match(/-?\d+(\.\d+)?/g)
    ?.map(parseFloat);

  if (!points) {
    return [];
  }

  const coordinates: BezierCurve[] = [];

  for (let i = 2; i < points.length; i += 6) {
    const coordinate: BezierCurve = {
      point: { x: points[i + 4], y: points[i + 5] },
      curve: {
        first: { x: points[i], y: points[i + 1] },
        second: { x: points[i + 2], y: points[i + 3] },
      },
    };
    coordinates.push(coordinate);
  }

  return coordinates;
};

const AnimatedWaves = (props: Props) => {
  const { svgPaths } = props;

  const pathRefs = useRef<SVGPathElement[]>([]);

  const generateUndulation = (bezierCurves: BezierCurve[]): string => {
    const undulations: string[] = [];
    const bezierCurvesLength = bezierCurves.length;

    bezierCurves.forEach((bezierCurve, index) => {
      const { point, curve } = bezierCurve;
      let newX = (point.x + Math.random() * 2 - 1).toFixed(2);
      let newY = (point.y + Math.random() * 2 - 1).toFixed(2);

      // Keep the last point the same as orignal to close the circle
      if (index >= bezierCurves.length - 1) {
        newX = point.x.toFixed(2);
        newY = point.y.toFixed(2);
      }

      undulations.push(`C ${curve.first.x} ${curve.first.y} ${curve.second.x} ${curve.second.y} ${newX} ${newY}`);
    });
    return `M ${bezierCurves[bezierCurvesLength - 1].point.x} ${
      bezierCurves[bezierCurvesLength - 1].point.y
    } ${undulations.join(' ')}`;
  };

  useEffect(() => {
    pathRefs.current = pathRefs.current.slice(0, svgPaths.length);

    if (pathRefs.current.length > 0) {
      pathRefs.current.forEach((path) => {
        const points = getCoordinatesFromPath(path);

        anime({
          targets: path,
          duration: 3000,
          easing: 'linear',
          d: [
            { value: generateUndulation(points) },
            { value: generateUndulation(points) },
            { value: generateUndulation(points) },
            { value: generateUndulation(points) },
          ],
          loop: true,
          direction: 'alternate',
        });
      });
    }
  }, [svgPaths]);

  return (
    <svg width='100%' height='100%' viewBox='0 -30 50 50' xmlns='http://www.w3.org/2000/svg'>
      {svgPaths.map((d, index) => (
        <path
          stroke='white'
          strokeWidth='0.1px'
          fill='none'
          key={index}
          d={d}
          ref={(el) => {
            if (el !== null) {
              pathRefs.current[index] = el;
            }
          }}
        />
      ))}
    </svg>
  );
};

export default AnimatedWaves;
