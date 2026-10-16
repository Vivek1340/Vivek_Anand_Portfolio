import { useMemo } from "react";

// Deterministic PRNG so the graph is identical on every render.
const mulberry32 = (seed) => () => {
  let t = (seed += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const W = 1600;
const H = 900;

const buildGraph = () => {
  const rand = mulberry32(42);
  const nodes = [];
  for (let gx = 0; gx <= W + 60; gx += 70) {
    for (let gy = -10; gy <= H + 40; gy += 66) {
      const density = Math.min(1, Math.max(0, (gx - 200) / 900));
      if (rand() < 0.12 + 0.7 * density) {
        nodes.push([gx + (rand() - 0.5) * 44, gy + (rand() - 0.5) * 40]);
      }
    }
  }
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const edges = [];
  const adj = new Map();
  nodes.forEach((n, i) => {
    nodes
      .map((m, j) => [dist(n, m), j])
      .filter(([, j]) => j > i)
      .sort((a, b) => a[0] - b[0])
      .slice(0, 3)
      .forEach(([d, j]) => {
        if (d < 105) {
          edges.push([i, j, 0.05 + rand() * 0.12]);
          adj.set(i, [...(adj.get(i) || []), j]);
          adj.set(j, [...(adj.get(j) || []), i]);
        }
      });
  });
  const nearest = (x, y) =>
    nodes.reduce((best, n, i) => (dist(n, [x, y]) < dist(nodes[best], [x, y]) ? i : best), 0);
  const route = (from, to) => {
    const path = [from];
    while (path[path.length - 1] !== to && path.length < 40) {
      const cur = path[path.length - 1];
      const next = (adj.get(cur) || [])
        .filter((k) => !path.includes(k) && nodes[k][0] > nodes[cur][0] - 5)
        .sort((a, b) => dist(nodes[a], nodes[to]) - dist(nodes[b], nodes[to]))[0];
      if (next === undefined) break;
      path.push(next);
    }
    return path[path.length - 1] === to ? path : null;
  };
  const sink = nearest(1380, 330);
  const paths = [
    { from: nearest(760, 150), color: "#2DD4BF", delay: "0s" },
    { from: nearest(980, 720), color: "#F59E0B", delay: "1.6s" },
    { from: nearest(820, 520), color: "#7DD3FC", delay: "3s" },
  ]
    .map((p) => ({ ...p, nodes: route(p.from, sink) }))
    .filter((p) => p.nodes);
  return { nodes, edges, paths, sink };
};

const NetworkGraph = ({ className = "" }) => {
  const { nodes, edges, paths, sink } = useMemo(buildGraph, []);
  const d = (ids) => ids.map((k, i) => `${i ? "L" : "M"}${nodes[k][0].toFixed(1)} ${nodes[k][1].toFixed(1)}`).join(" ");

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ng-fade" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="0.6" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="ng-mask">
          <rect width={W} height={H} fill="url(#ng-fade)" />
        </mask>
        <filter id="ng-blur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <g mask="url(#ng-mask)">
        <g stroke="#7DD3FC" strokeWidth="0.8">
          {edges.map(([i, j, op]) => (
            <line
              key={`${i}-${j}`}
              x1={nodes[i][0]}
              y1={nodes[i][1]}
              x2={nodes[j][0]}
              y2={nodes[j][1]}
              strokeOpacity={op}
            />
          ))}
        </g>
        <g fill="#94A3B8">
          {nodes.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={1.6} fillOpacity={0.35} />
          ))}
        </g>
        {paths.map((p) => (
          <g key={p.color}>
            <path d={d(p.nodes)} fill="none" stroke={p.color} strokeWidth="3" strokeOpacity="0.2" filter="url(#ng-blur)" />
            <path d={d(p.nodes)} fill="none" stroke={p.color} strokeWidth="1.2" strokeOpacity="0.7" strokeLinejoin="round" />
            {p.nodes.slice(0, -1).map((k) => (
              <circle key={k} cx={nodes[k][0]} cy={nodes[k][1]} r={2.4} fill={p.color} fillOpacity="0.8" />
            ))}
            <circle
              r="3.5"
              fill={p.color}
              className="packet"
              style={{ offsetPath: `path("${d(p.nodes)}")`, animationDelay: p.delay }}
            />
          </g>
        ))}
        <circle cx={nodes[sink][0]} cy={nodes[sink][1]} r="3.6" fill="#E2E8F0" />
        <circle cx={nodes[sink][0]} cy={nodes[sink][1]} r="10" fill="none" stroke="#2DD4BF" strokeOpacity="0.55" />
        <circle cx={nodes[sink][0]} cy={nodes[sink][1]} r="18" fill="none" stroke="#2DD4BF" strokeOpacity="0.18" />
      </g>
    </svg>
  );
};

export default NetworkGraph;
